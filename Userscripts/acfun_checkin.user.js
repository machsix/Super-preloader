// ==UserScript==
// @name Acfun_checkin
// @name:zh-CN   Acfun自动领蕉
// @namespace https://github.com/machsix/acfun_checkin
// @description  automatically checkin for acfun
// @description:zh-cn  acfun自动领蕉脚本
// @author       Mach6
// @version      1.0
// @license      GNU GPL v3
// @include      http*://www.acfun.cn/*
// @grant 		unsafeWindow
// @run-at 		document-end
// ==/UserScript==
(function() {
        var acfun_main = /^https?:\/\/www.acfun.cn\/?$/;
    var acfun_member = /^https?:\/\/www.acfun.cn\/member(?:\/#.*)?/;
    var islogin = function (doc){
        return JSON.parse(localStorage.user).name != "游客";
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
})();