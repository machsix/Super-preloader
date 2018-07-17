// ==UserScript==
// @name		 bbsAutoSign
// @name:zh-CN   论坛签到工具
// @namespace    bbssign
// @version      1.3.2
// @description  用于各种论坛自动签到
// @include      http*://*/plugin.php?id=*sign*
// @include      http*://www.acfun.cn/*
// @include      http*://bbs.kafan.cn/*
// @include      http*://bbs.wstx.com/*
// @include      http*://bbs.gfan.com/*
// @include      http*://www.horou.com/*
// @include      http*://www.92jh.cn/*
// @include      http*://bbs.ntrqq.net/*
// @include      http*://www.gn00.com/*
// @include      http*://www.52pojie.cn/*
// @include      http*://zhidao.baidu.com/question/*
// @note         论坛签到工具,整合自卡饭Coolkids论坛自动签到和jasonshaw网页自动化系列点击,做了一点微小的修改
// @grant 		GM_xmlhttpRequest
// @grant 		unsafeWindow
// @run-at 		document-end
// @copyright 	2013+, Coolkid
// @copyright 	2014+, jasonshaw
// @copyright 	2016+, wycaca
// ==/UserScript==

if (isURL("bbs.kafan.cn")) {
    //卡饭论坛
    var imgs = document.getElementById("pper_a").getElementsByTagName("IMG");
    if (imgs[0].src.indexOf("wb.png") == -1) {
        var a = document.getElementById("pper_a");
        a.click();
        return;
    }
}

if (isURL("zhidao.baidu.com/question")) {
    //百度知道
	var qdbutton = document.getElementsByClassName('grid-l go-sign-in')[0];
	var flagText = qdbutton.innerHTML;
	if(flagText.indexOf("已签到") == -1){
		document.getElementsByClassName('grid-l go-sign-in')[0].click();
	}
	document.getElementById('sign-in-btn').click();
	return;
}

if (isURL("www.acfun.cn")) {
    //acfun 
    //author: https://github.com/machsix/personal-scripts
    var acfun_main = /^https?:\/\/www.acfun.cn\/?$/;
    var acfun_member = /^https?:\/\/www.acfun.cn\/member(?:\/#.*)?/;
    var islogin = function (doc){
        return doc.querySelector('.user-message-count').className.indexOf('hidden') == -1;
    };
    if (acfun_main.test(window.location.href)){
        console.log("成功进入acfun世界");
        window.addEventListener('load', function(){
            if (!islogin(document)){
                console.log('脑波没对接');
            } else {
                var i = document.createElement('iframe');
                i.name = 'autologin-iframe';
                i.width = '100%';
                i.height = '0';
                i.frameBorder = "0";
                i.style.cssText = '\
                    margin:0!important;\
                    padding:0!important;\
                    visibility:hidden!important;\
                ';
                i.src = 'http://www.acfun.cn/member/';
                document.body.appendChild(i);
            }
        }, false);
    } else if (acfun_member.test(window.location.href)) {
        console.log('进入acfun会员');
        setTimeout(function(){
            var ischecked = function (doc){
                return doc.evaluate('//*[@id="btn-sign-user"]/text()', 
                doc, null, XPathResult.FIRST_ORDERED_NODE_TYPE,
                null).singleNodeValue.data == "已签到";
            };
            if (!ischecked(document)){
                document.getElementById("btn-sign-user").click();
                console.log('Acfun 签到完成');
            }else {
                console.log('Acfun 已签到');
            }
        },3000);
    }
    return;
}


if (isURL("www.horou.com")) { 
	//河洛
	var imgs = document.getElementById("fx_checkin_b");
    if (imgs.alt.indexOf("已") == -1) {
        imgs.click();
        return;
    }
}

if (isURL("cn.club.vmall.com/plugin.php?id=dsu_paulsign:sign") || isURL("cn.club.vmall.com/dsu_paulsign-sign")) {
    //华为
	document.getElementsByClassName('sign-btn btn_rs')[0].click();
	return;
} else if(location.href.indexOf("plugin.php?id=dsu_paulsign:sign") != -1){
	qd2();
	return;
}

if (isURL("http://bbs.gfan.com/")) { //机锋
    qd();
    if (window.find("签到领奖!")) {
        window.location.href = "http://bbs.gfan.com/plugin.php?id=dsu_paulsign:sign";
        return;
    }
}

if (isURL("http://bbs.ntrqq.net/")) { //NTRQQ
    qd();
    if (window.find("签到领奖!")) {
        window.location.href = "http://bbs.ntrqq.net/plugin.php?id=dsu_paulsign:sign";
        return;
    }
}

//卡饭 云中水 提供
if(isURL("music.163.com")){
        //网易云音乐
        var p = {
                elements: ['.u-btn2-2']
        }
        qd3();
		return;
}

if(isURL("www.xiami.com")){
        //虾米音乐
        var p = {
            elements: ['.icon.tosign']
        }
        qd3();
		return;
}

if(isURL("www.52pojie.cn")){
        //吾爱破解
        if(window.location.href.match("item=done"))
        window.location.href='/';
        var p = {
            elements: ['.qq_bind']
        }
        qd3();
		return;
}

if(isURL("gmgard.com") || isURL("hggard.com")){
        //绅士之庭
        var p = {
            elements: ['.signdiv .btn-danger']
        }
        qd3();
		return;
}

if(isURL("www.dxdbbb.com")){
        //萌子岛
        var p = {
            elements: ['.do_sign']
        }
        qd3();
		return;
}
//

if (isURL("www.lightnovel.cn/home.php?mod=task")) {
    //轻国
    if (window.find("每日任务") && window.find("啪啪啪")) {
        window.location.href = "http://www.lightnovel.cn/home.php?mod=task&do=apply&id=98";
        return;
    }
}else {
    //其他论坛
    qd();
	qd2();
}


function isURL(x){
    return window.location.href.indexOf(x) != -1;
}

function qd() {
    if (window.find("今天签到了吗") && window.find("写下今天最想说的话")) {
        var kxImg = document.getElementById("ch_s");
        var todaySayTextArea = document.getElementById("todaysay");
        if (kxImg == null) {
            return;
        }
        kxImg.setAttribute('checked', true);
        todaySayTextArea.value = "全自动签到,就是爽~";
        var button = document.getElementById("qiandao");
        button.submit();
        return;
    }
}

function qd2() {
	document.getElementById("kx").click();
	var todaySayTextArea = document.getElementById("todaysay");
    if (todaySayTextArea != null) {
		todaySayTextArea.value = "全自动签到,就是爽~";
    }
	unsafeWindow.showWindow('qwindow', 'qiandao', 'post', '0');
	return;
}

function qd3() {
    var elements = p.elements,
    i = 0;
    setTimeout(function() {
        try {
            if (elements instanceof Array) var els = p.elements;
            else { //function
                var els = p.elements();
            }
            while (els[i]) {
                var obj = (p.elements instanceof Array) ? document.querySelector(els[i]) : els[i];
                if (obj == null) return;
                if (obj.tagName == "A" && obj.href.indexOf("javascript") < 0 && obj.onclick == "undefined") GM_openInTab(obj.href);
                else obj.click();
                i++;
            }
        } catch(e) {
            alert(e);
        }
    },
    400);
    setTimeout(function() {
        if (autoClose) window.close();
    },
    delay + 100);
		return;
}

