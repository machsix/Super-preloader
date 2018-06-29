// ==UserScript==
// @name           漫畫閱讀器
// @version        2.0.1
// @namespace      486FF937-D190-42D3-B107-6ED190443E1C
// @description    自動連續載入接續下一頁
// @include        /https?:\/\/www\.dm5\.com\/m\d+/
// @include        /https?:\/\/e[x-]hentai\.org\/s\/\w+\/\w+/
// @match          http://*.manhuagui.com/comic/*/*.html*
// @match          http://v.comicbus.com/online/*.html?ch=*
// @match          http://www.cartoonmad.com/comic/*.html
// @match          http://www.comicnad.com/comic/*.html
// @run-at         document-end
// @grant          GM_xmlhttpRequest
// ==/UserScript==


Element.prototype.offset = function(){
	let rect = this.getBoundingClientRect();
	
	return {
		top: Math.round(pageYOffset + rect.top),
		bottom: Math.round(pageYOffset + rect.top + rect.height)
	}
}

Element.prototype.goTo = function(n){
	viewport.scrollTop = this.offset().top + (n||0);
}

function log(s){
	if(isLog){
		console.log(s.toString().replace('\n', '\n '));
	}
}

function getEl(s, d){
	return (d || document).querySelector(s);
}

function img_loaded(){
	this.removeAttribute('style');
	
	if(this.naturalWidth > this.naturalHeight){  //橫圖
		if(this.naturalWidth > max_h_width){
			this.style.width = max_h_width + 'px';
		}else if(this.naturalWidth < min_h_width){
			this.style.width = min_h_width + 'px';
		}
	}else{  //直圖 or 正方形
		if(this.naturalHeight < min_v_height){
			this.style.height = min_v_height + 'px';
		}else if(this.naturalHeight > max_v_height){
			this.style.height = max_v_height + 'px';
		}
	}
	
	this.onclick = click_RWD;
}

function click_RWD(){
	if(!this.originalHeight){
		this.originalHeight = this.height;
	}
	
	if(this.height==this.originalHeight){
		this.setAttribute('style', 'height: ' + (innerHeight-20) + 'px;');
		this.goTo(-10);
	}else{
		this.setAttribute('style', 'height: ' + this.originalHeight + 'px;');
	}
}

function Img(n){
	let pic = new Image();
	pic.style.border = '3px dashed #FF0000';
	pic.style.maxWidth = max_h_width + 'px';
	pic.style.maxHeight = max_v_height + 'px';
	pic.onload = img_loaded;
	
	(function(){
		if(picUrls[n-1]){
			pic.src = picUrls[n-1];
		}else{
			setTimeout(arguments.callee, 100);
		}
	})();
	
	return pic;
}

function bookmark(n){
	let d = document.createElement('div');
	d.setAttribute('style', 'height: 22px; background: #E6E6E6; margin: 30px 0px; font: bold 18px Arial; color: black;');
	d.innerHTML = '第 ' + n + ' 頁';
	
	return d;
}

function preload(count){
	let index = pics.length;
	let end = index + (count||preCount);
	if(end > picCount) end = picCount;
	
	while(index<end){
		log('preload page: ' + (index+1));
		pics[index] = Img(index+1);
		index++;
	}
}

function showPics(count){
	let end = pageNum + (count||preCount) - 1;
	if(end > picCount) end = picCount;
	
	while(pageNum<=end){
		log('show pic: ' + pageNum);
		picArea.appendChild(pics[pageNum-1]);
		picArea.appendChild(bookmark(pageNum));
		pageNum++;
	}
}

function dm5(){
	pageNum = parseInt(getEl('#chapterpager>.current').textContent, 10);
	picCount = unsafeWindow.DM5_IMAGE_COUNT;
	picArea = getEl('#showimage');
	picUrls = new Array(pageNum-1);
	pics = new Array(pageNum-1);
	
	let getPicUrls_error = 0;
	(function getPicUrls(){
		let xhr = new XMLHttpRequest();
		xhr.timeout = 10000;
		
		xhr.open('GET', 'chapterfun.ashx?' +
			'cid=' + unsafeWindow.DM5_CID +
			'&page=' + (picUrls.length+1) +
			'&_cid=' + unsafeWindow.DM5_CID +
			'&_mid=' + unsafeWindow.DM5_MID +
			'&_dt=' + unsafeWindow.DM5_VIEWSIGN_DT +
			'&_sign=' + unsafeWindow.DM5_VIEWSIGN
		);
		
		xhr.onload = function(){
			picUrls = picUrls.concat(eval(xhr.responseText));
			log('getPicUrls onload: ' + picUrls.slice(-1));
			if(picUrls.length<picCount){
			// 間隔3秒一次請求，可以一次拿到最大數量20張，小於3秒一次2張，大於3秒最多還是一次20張
				setTimeout(function(){
					getPicUrls();
				},(picUrls.length<8) ? 0 : 3000);
			}
		};
		
		xhr.onerror = function(){
			if(++getPicUrls_error<3){
				setTimeout(function(){
					getPicUrls();
				}, 1000);
			}else{
				alert('getPicUrls error');
			}
		};
		
		xhr.send();
	})();
	
	getEl('.rightToolBar').remove();
}

function manhuaren(){
	pageNum = parseInt(getEl('#chapterpager>.current').textContent, 10);
	picCount = unsafeWindow.DM5_IMAGE_COUNT;
	picArea = getEl('#showimage');
	picUrls = new Array(pageNum-1);
	pics = new Array(pageNum-1);
	
	GM_xmlhttpRequest({
		'method': 'GET',
		'url': 'https://www.manhuaren.com' + location.pathname,
		'timeout': 10000,
		'onload': function(res){
			let doc = new DOMParser().parseFromString(res.responseText, 'text/html');
			
			eval(doc.scripts[0].innerHTML);
			picUrls = newImgs;
		},
		'onerror': function(res){
			alert('getPicUrls error');
		}
	});
	
	getEl('.rightToolBar').remove();
}

function eh(){
	pageNum = parseInt(getEl('.sn span:nth-of-type(1)').textContent, 10);
	picCount = parseInt(getEl('.sn span:nth-of-type(2)').textContent, 10);
	picArea = getEl('#i3');
	picUrls = new Array(pageNum-1);
	pics = new Array(pageNum-1);
	preCount = 2;
	overRange = 1000;
	
	getEl('#i1').removeAttribute('style');
	picUrls.push(getEl('#img').src);
	
	let getPicUrls_error = 0;
	(function getPicUrls(url){
		if(picUrls.length-pics.length<preCount){
			let xhr = new XMLHttpRequest();
			xhr.timeout = 10000;
			
			xhr.onload = function(){
				let doc = new DOMParser().parseFromString(xhr.responseText, 'text/html');
				picUrls.push(getEl('#img', doc).src);
				log('getPicUrls onload: ' + picUrls.length);
				
				if(picUrls.length<picCount){
					setTimeout(function(){
						getPicUrls(getEl('#i3 > a', doc).href);
					}, 0);
				}
			};
			
			xhr.onerror = function(){
				if(++getPicUrls_error<3){
					setTimeout(function(){
						getPicUrls(url);
					}, 1000);
				}else{
					alert('getPicUrls error');
				}
			};
			
			xhr.open('GET', url);
			xhr.send();
		}else{
			log('getPicUrls wait...');
			setTimeout(function(){
				getPicUrls(url);
			}, 500);
		}
	})(getEl('#i3 > a').href);
}

function manhuagui(){
	pageNum = unsafeWindow.pVars.page;
	picCount = unsafeWindow.cInfo.len;
	picArea = getEl('table.pr').parentElement;
	picUrls = new Array(pageNum-1);
	pics = new Array(pageNum-1);
	
	picArea.setAttribute('align', 'center');
	getEl('#servList').remove();
	getEl('.support').remove();
	getEl('#share').remove();
	getEl('.backToTop').remove();
	
	let getPicUrl = unsafeWindow.eval(unsafeWindow.eval(document.scripts[5].innerHTML.slice(26)).slice(0,-11)).getPicUrl;
	
	for(let i=0; i<picCount; i++){
		picUrls[i] = getPicUrl(i).replace('.webp?', '?');
	}
	
	// function showChapters(){
		// $(".result-none").replaceWith(LZString.decompressFromBase64($("#__VIEWSTATE").val()));
		// $("#__VIEWSTATE").remove();
	// }

	// function chgCountry(){
		// document.cookie = "country=HX;domain=.manhuagui.com;path=/;expires=" + (new Date(2100, 0)).toUTCString() + ";";
	// }
}

function comicvip(){
	pageNum = unsafeWindow.p;
	picCount = unsafeWindow.ps;
	picArea = getEl('#TheImg').parentElement;
	picUrls = new Array(pageNum-1);
	pics = new Array(pageNum-1);
	
	let su = unsafeWindow.su;
	let ti = unsafeWindow.ti;
	let nn = unsafeWindow.nn;
	let mm = unsafeWindow.mm;
	let imgurl = document.scripts[13].innerHTML.match(/ge\('TheImg'\)\.src *?= *?(.+?;)/)[1];
	
	for(let i of document.scripts[13].innerHTML.match(/var +?\w+? *?= *?lc\(/g)){
		eval(i.slice(0, -3) + 'unsafeWindow.' + i.match(/var +?(\w+?) *?= *?lc\(/)[1]);
	}
	
	for(var i=0; i<picCount; i++){
		let p = i + 1;
		picUrls[i] = eval(imgurl);
	}
	
	getEl('#TheImg').remove();
	getEl('#div_li1').remove();
}

function cartoonmad(){
	let s = getEl('select');
	pageNum = parseInt(s.value.match(/\d+/)[0], 10);
	picCount = s.options.length - 1;
	picArea = getEl('tbody > tr:nth-of-type(5) > td');
	picUrls = new Array(pageNum-1);
	pics = new Array(pageNum-1);
	
	let imgData = getEl('tbody > tr:nth-of-type(5) img').src.match(/(.+\/)\d{3}(\.\w+)/);
	for(let i=0; i<picCount; i++){
		picUrls[i] = imgData[1] + ('000'+(i+1)).slice(-3) + imgData[2];
	}
	
	getEl('tbody > tr:nth-of-type(4)').remove();
}

document.documentElement.style.overflowY = 'scroll';

var isLog = false;
var viewport = (document.compatMode == 'BackCompat') ? document.body : document.documentElement;

var min_h_width = 1000;
var max_h_width = innerWidth-20;
var min_v_height = 1000;
var max_v_height = 1200;

var preCount = 5;
var overRange = innerHeight*3;

var pageNum;
var picCount;
var picArea;
var picUrls;
var pics;

switch(location.hostname){
	case 'www.dm5.com':
		manhuaren();
		break;
		
	case 'exhentai.org':
	case 'e-hentai.org':
		eh();
		break;
		
	case 'v.comicbus.com':
		comicvip();
		break;
		
	case 'www.manhuagui.com':
	case 'tw.manhuagui.com':
		manhuagui();
		break;
		
	case 'www.cartoonmad.com':
	case 'www.comicnad.com':
		cartoonmad();
		break;
}

picArea.innerHTML = '';

preload();
showPics();
preload();

(function(){
	log('onscroll');
	
	if(picArea.scrollHeight > 1000){
		log('onscroll start');
		
		onscroll = function(){
			if(picArea.offset().bottom-viewport.scrollTop < overRange){
				log('scrollTop: ' + viewport.scrollTop + '\npicArea.bottom: ' + picArea.offset().bottom);
				
				showPics();
				preload();
				
				if(pageNum>picCount){
					log('onscroll stop, pageNum: ' + pageNum);
					onscroll = undefined;
				}
			}
		};
	}else if(pageNum<=picCount){
		setTimeout(arguments.callee, 500);
	}
})();




