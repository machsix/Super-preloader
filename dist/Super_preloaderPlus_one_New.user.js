/* eslint-disable linebreak-style */
/* eslint-disable no-unused-vars */
/* eslint-disable no-empty */
// ==UserScript==
// @name         Super_preloaderPlus_one_New
// @name:zh-CN   Super_preloaderPlus_one_改
// @name:zh-TW   Super_preloaderPlus_one_改
// @namespace    https://github.com/machsix
// @description  Preload and Autopager
// @description:zh-cn  预读+翻页..全加速你的浏览体验
// @description:zh-TW  预读+翻页..全加速你的浏览体验
// @author       Mach6
// @contributers YFdyh000, suchunchen
// @thanksto     ywzhaiqi, NLF
// @version      6.6.66
// @license      GPL-3.0-or-later
// @homepageURL  https://github.com/machsix/Super-preloader
// @supportURL   https://greasyfork.org/en/scripts/33522-super-preloaderplus-one-new/feedback
// @contributionURL https://ko-fi.com/machsix
// @icon         data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADMAAAAvCAYAAABOtfLKAAAL9UlEQVR42s1ZC1CU1xXee/9/dwGFFRU1SQURfCSaCCoaX6Py9gmDqBSN4zuKWvEFPqpGDGrjtLFJGzXO1FgfqNUYp2lim9hWGzH1hcT3pDHK2FidGtvqaIIi/b71/viz/wLL6tjuzJnz73/vf+455zv33HPvtSUm9hMgqUgjf1qUnBwvbeoXHBwcqGlaBynFSCHEa6C3pJT9MjPThY/yhM1khP1p8okTx2jHjx8QQUGBkVB6EmgvDLgCugeqVLSxd+8edhjti1xNGfOoYdCgFG3gwGSdPCUl3iLocfnQoQO0zZvXS6fT8aymyYVQ+JxS/D5Q4fM2GLYFvAJ8W2zsSzp0oB7QJ0F/pF9yNbkWZMaMyZLt2kUHhIU1DYyKigxs2zbanpTU315ZWSkqKx8IhgOfyZcsyddycibK1NREnwxJSOhrnz17moyN7eSAkkNAnysjboK267o2zOl0PtenT08d4ZZA40BbCwsXy/v3bwjKgW721q1bBTZrFhYE3QKyszMl5FqQgSHZbsghYBMG+gP4h+C/Af8V+BrQYgySA29m2O32PqA2LldIWHj4D5zvvPNTSQO3bt0gJ0x4RcIBFkN2794s4CQX5UDmvxhOeN4NmX2pIL+fPHmsBmfZdF1PRXs5kDqBPktAP2fIge+iXkq/TdA3YsWK14QFmWPHDgoITlIx+wB0hwLVc6UHse0qqASC94CvgGdHQ4mY0NBGTRYsmC2JIL1Kw/bt2y1cLlcY+q1THv8GY00LDm4YfOvW30Va2qAqww8d+pR6JKPPXY8xHyh97qjne9T3yJE/CwsyZ84ct9nteqry2Mfo2BPeTwASQ6go3s3A83K0b8Dz72iIMuh704Dfgv5KT4LSGjZs8FxFxU3RpEnjUH6nlDgNoxOBghw2LE33DMkvvvjcjAydNRO6jAYNgX4J0KUn3v2eeqJfyokTxTYLMsojSUasLl6cpxlzxMyHDBmgt2jRPIAhBmPb0mAInwqi1w8rgyqVnFN4vwJ8LagCVIr+3RhKSC4WQ8iLixUySo8DBz6Sanwy29Kl+ZLv2c5+xcX7rchcvHjWQOY+s0jnzp2QRarHPogJQRswIEmfMmW8LChYKA1DMzPTZOPGoY3hrVgMMhVy3gddN6H2FecalTLNKQsvLa1C5r4pm7kNJ+/SJUbH+yK2o1/yqVNHHyFj/kGJFOWRbd27d3XAez6nXSiIJPJDuXPne24DIyMjgiAvRk3aSoToMoshdSNT1K1bF+iRwHZ3euZ/6qeQSeFYVZGDwTri5StoLMTzHxnXZmT8X08GMkwpfzaNAZ9bVnbOCIlakDnsKzLU80/Um3OKdtjw57KKZ5UxwK3I+MUvXDhJtPMoE3zeuXMlDInHRKYzkdnqoW8F7XAjxFQJy3IRCj+uYc74xUtKDgkiopCZd/JkcZ3IoI/Pc4YVBPXG8z9oh01ZdrJ582Yh8Ej/+swZJgMkAi0jY4jX9vPnSzyQOeEHMp0NPXQiExfX2Txn4ps1axpC/UE0xgaviZNYwBohm6X4igzqI23OnOkaaqwIruwjR2bIJ4FMSYknMp1qy2ZJISHBjaB/qRmZUqZVWJroCzJZWcNkRsZQ1lADIfgjh8MRNWPGq5p3ZGS+Qibv7NnjTxqZJFQcjX1EJt5SYxUULJJt2kQFos9kxiroSmBgYNSqVcsEPcfJavCZM6do8F53GJQH3m3WrBzNaEeImg3RDU40iYxZDzMyXbtakcFz/ZChIczl7KdW9dvq20tEBtWzHhPzIsPAYeIMR53rCxda/ud7Tuq+fXsxO1Uz5Kkhk5MzSQYGBkQZgkwr+230/63ah2ynAj7wzRgrhousJzInTliQsVdHJrY2ZGw+IbN69esS7Wlou+GliuY39+pBt1mKFBVtFHUhAyRqRaZRI1f9kWH2wjsH9zPo86XJkGsQOgqUgO+T6BATT1TvE0z/yeMbNAhqOnx4umZF5rP6IhNaFzJFRMZzyzx4cKq2d2+R5KSGwEPGnMEOMdxcI5l5RER4ELYCTVq1Cg8yv8/KyuA81HxAhsaYkbHXgozwigzzOT3hbaEsKzsrUAG3VkXkJcyl6IUL51hCprCQm0Q5lnsY8PHMhEZ7Tfz48TqRsVdHJsQ/ZAxOj7799huSoYJvcgMCnC1ZCXgqdv3611xn5quqOe/q1a9sFgP8QEZKH5DR9dqQsRqEAxAN/ZhyOUktimE1r1YBoCIWdSPzl3oh43I9QgZUf2RMCnARpNFeFTtz5piNiChk5p4+fVTUjcx+n5HBFjrZb2TqUOSJIHPsWI3I6I+LjL+GKGSOiv8RMsG1IeMXv3jxNJHJU8jkX758zgdkDtaKTFycD8igxqkJGb8NwkIrqRictYGOQn0ma+tPOnx4v6DHHxpjQYbGeCIT+lSQIV+zZpVkobl+/RrvhpjJigz1+P9ABoumwELcF4MvB++zcuUyNWeslJ4+CNX1vwUVgscTTMhYEkCtyPBPSMiTR+bSpbPV5gxPZ8wGUD6OpgSQ46lnsMNhfwn9MkHu00/vyHT2Cxn74yLDhRV7nRjev5AbtVhSUj99/vxZcty40RJ1XVu0/wje/sTj0JBXGr/s3ftlbuRqRMblqhuZrT16xHECu3eMEOaXQVBepxxW21SK/3meBjR4P9OK4Yfx/qZ0KAedgqK/5toEx2YHBAREshYEQY943s3oPXt21+uLzE6c1gRHRLR0UhEexZ4/f1SYz3ypUG7uVMkBMJjXSb1hwy+4ZoyAvI/BM/kdqmcnnocb3gT9kwbg3SBcUbTIz8+V7PeoCr8jxo4dpWF3ase3ATiNaYj+O4zjWRhTKzL3FNyfwAMfqp3hetAKLHxzQNk8xUfV3LFBgwbP4BA9aPr0yVWH7DTciHGc6Aue4nMzRo6C1AVeiP+3QN+pHWd3Khod3doJeS0wbzrS40QG7XM4LuhdhhaI+hjhyFsAFppWZPCyCRR8kVCr3eR/QHeNLbIHldOjoLMYYB8vozD4JAh/GXuX5gwnIrhu3ZsClfWzUDgOc4aTe6OSV8bEwHM60AR+Dzm8pjinxi6vYTd7l3qpPqeYMABCEwsy8EpTXMHZMSEjMXAnKNAVxvXm4TQm2nAM+CpoEScliCf8R6iUx6XQLcqiJ4HgSMR8q2vXvhQIYZ5tbVLHqRWg06AS9jd9SzlllIu+76txFkHOFIYodEiFTr2gUxyN4Hzq1au7jpoyzIIMLAzjBRA2WZLhcuPG14LeJZl/ubk5Gk74nYQXkziK6wcGdXsXcg6YMhIVv8D3CpEKD09fAx1E25tQeAJQ7QNHRlEu7lOdc+fOkJ5jK33ExYulYuXKpciGozREQpg3ZMKys4dXbbCMLMJsBtJxlOTmIPf9DC5HteXLF1UNOHPmVIm1IoShCuXGq0n6jcc13hW+R/s49mP/WbOmSUPR1asLJA4YcZucxHFAHNfNmZZB/avSNIn7KW/InEQohD4U+r3Ys2eLSE8frOMO3r3xat++reP559s6X3ihnYPnXhSkLlOFYQy5GUkcFDqBWgd1vFTJBZBJIzo6MsBbfyOB8Aab8llgdujQ3tGuXRv3uJ06dbTzJnrYsKHa2rU/k8ZZgspmJWZkLjPbgPKZ+0FvwYPvgm8B3w6+G312gYPc2W2TiumfqIk8njGNWI4NCgp6Jjy8ZaChJNpnKWPmGEawnf1gXCy/4/eUQ3mUq+Qze+1StJtOoT6cj9QP9PrDsWUu55oZGW/0QGWQcnUJ+53i9xj/NWSbb1VG+kBdtfdjKlbGFKj/S6DcB6rfzRqyZQXH8Ri3XPV94FVfhUwBBljLQbmOsPTAoFmgdFavLPrA+z0iLQl8IBc+5dF5oDeIGGR9Ri+ZUusdlcIrFb9jSu1l7M/VnN9TDuSNo1yMMZBriGncvqBEvE+hXkq/ybyVo97UH7KW2fibNGmsEYPm+PXkwvjv+SsrOyNYECITubAwtuapCQZYqBa4mzRA8U/xfgFrKvbDPHVxbpSWHhIWodZ5Re61D455tR073hM2ZAmhyhEB8salL3zw4BQxatQIaR4I6T4EiKWCCsmxZwoxt48ePYLlkCHHbw79mWnFfwGWB6omxVHfzgAAAABJRU5ErkJggg==
// @require      https://greasyfork.org/scripts/373124-gm4-polyfill-mach6-legacy/code/gm4-polyfill-mach6-legacy.js?version=635792
// @grant        GM.getValue
// @grant        GM_getValue
// @grant        GM.setValue
// @grant        GM_setValue
// @grant        GM.notification
// @grant        GM_notification
// @grant        GM.xmlHttpRequest
// @grant        GM_xmlhttpRequest
// @grant        GM.info
// @grant        GM_info
// @grant        GM_registerMenuCommand
// @connect      wedata.net
// @connect      github.io
// @include      http*
// @exclude      http*://mail.google.com/*
// @exclude      http*://maps.google*
// @exclude      http*://www.google.com/reader*
// @exclude      http*://www.google.com/calendar*
// @exclude      https://docs.google.com/*
// @exclude      http*://app.yinxiang.com/*
// @exclude      http*://www.dropbox.com/*
// @exclude      http*://www.toodledo.com/*
// @exclude      http://cloud.feedly.com/*
// @exclude      http://weibo.com/*
// @exclude      http://w.qq.com/*
// @exclude      http://web2.qq.com/*
// @exclude      http://openapi.qzone.qq.com/*
// @exclude      http://*cloud.vip.xunlei.com/*
// @exclude      http*://www.wumii.com/*
// @exclude      http://pan.baidu.com/*
// @exclude      http://yun.baidu.com/*
// @exclude      http://www.cnbeta.com/*
// @exclude      http://www.youku.com/
// @exclude      http://v.youku.com/*
// @exclude      http://www.iqiyi.com/*
// @exclude      http://www.duokan.com/reader/*
// @exclude      https://www.kohls.com/*
// @exclude      http://list.jd.com/*
// @exclude      http*://eclick.baidu.com/*
// @exclude      http*://googleads.g.doubleclick.net/*
// @exclude      http*://pos.baidu.com/*
// @exclude      http*://tpc.googlesyndication.com/*
// @exclude      http*://ad.doubleclick.net/*
// @exclude      http*://ad.agrantsem.com/*

// ==/UserScript==
(function() {
  const scriptInfo = {
    name: "Super_preloaderPlus_one_New",
    version: GM.info.script.version,
    updateTime: "2019/09/03",
    changelog: "Rules",
    homepageURL: "https://github.com/machsix/Super-preloader",
    downloadUrl: "https://greasyfork.org/scripts/33522-super-preloaderplus-one-new/code/Super_preloaderPlus_one_New.user.js",
    metaUrl: "https://greasyfork.org/scripts/33522-super-preloaderplus-one-new/code/Super_preloaderPlus_one_New.meta.js"
  };

  const upgradeNotification = {
    text: {
      zh_CN: "感谢首位捐助者 loveqianool o(*￣▽￣*)ブ",
      en_US: "Thanks to the first donor: loveqianool!"
    },
    title: scriptInfo.name,
    image:
      "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADMAAAAvCAYAAABOtfLKAAAL9UlEQVR42s1ZC1CU1xXee/9/dwGFFRU1SQURfCSaCCoaX6Py9gmDqBSN4zuKWvEFPqpGDGrjtLFJGzXO1FgfqNUYp2lim9hWGzH1hcT3pDHK2FidGtvqaIIi/b71/viz/wLL6tjuzJnz73/vf+455zv33HPvtSUm9hMgqUgjf1qUnBwvbeoXHBwcqGlaBynFSCHEa6C3pJT9MjPThY/yhM1khP1p8okTx2jHjx8QQUGBkVB6EmgvDLgCugeqVLSxd+8edhjti1xNGfOoYdCgFG3gwGSdPCUl3iLocfnQoQO0zZvXS6fT8aymyYVQ+JxS/D5Q4fM2GLYFvAJ8W2zsSzp0oB7QJ0F/pF9yNbkWZMaMyZLt2kUHhIU1DYyKigxs2zbanpTU315ZWSkqKx8IhgOfyZcsyddycibK1NREnwxJSOhrnz17moyN7eSAkkNAnysjboK267o2zOl0PtenT08d4ZZA40BbCwsXy/v3bwjKgW721q1bBTZrFhYE3QKyszMl5FqQgSHZbsghYBMG+gP4h+C/Af8V+BrQYgySA29m2O32PqA2LldIWHj4D5zvvPNTSQO3bt0gJ0x4RcIBFkN2794s4CQX5UDmvxhOeN4NmX2pIL+fPHmsBmfZdF1PRXs5kDqBPktAP2fIge+iXkq/TdA3YsWK14QFmWPHDgoITlIx+wB0hwLVc6UHse0qqASC94CvgGdHQ4mY0NBGTRYsmC2JIL1Kw/bt2y1cLlcY+q1THv8GY00LDm4YfOvW30Va2qAqww8d+pR6JKPPXY8xHyh97qjne9T3yJE/CwsyZ84ct9nteqry2Mfo2BPeTwASQ6go3s3A83K0b8Dz72iIMuh704Dfgv5KT4LSGjZs8FxFxU3RpEnjUH6nlDgNoxOBghw2LE33DMkvvvjcjAydNRO6jAYNgX4J0KUn3v2eeqJfyokTxTYLMsojSUasLl6cpxlzxMyHDBmgt2jRPIAhBmPb0mAInwqi1w8rgyqVnFN4vwJ8LagCVIr+3RhKSC4WQ8iLixUySo8DBz6Sanwy29Kl+ZLv2c5+xcX7rchcvHjWQOY+s0jnzp2QRarHPogJQRswIEmfMmW8LChYKA1DMzPTZOPGoY3hrVgMMhVy3gddN6H2FecalTLNKQsvLa1C5r4pm7kNJ+/SJUbH+yK2o1/yqVNHHyFj/kGJFOWRbd27d3XAez6nXSiIJPJDuXPne24DIyMjgiAvRk3aSoToMoshdSNT1K1bF+iRwHZ3euZ/6qeQSeFYVZGDwTri5StoLMTzHxnXZmT8X08GMkwpfzaNAZ9bVnbOCIlakDnsKzLU80/Um3OKdtjw57KKZ5UxwK3I+MUvXDhJtPMoE3zeuXMlDInHRKYzkdnqoW8F7XAjxFQJy3IRCj+uYc74xUtKDgkiopCZd/JkcZ3IoI/Pc4YVBPXG8z9oh01ZdrJ582Yh8Ej/+swZJgMkAi0jY4jX9vPnSzyQOeEHMp0NPXQiExfX2Txn4ps1axpC/UE0xgaviZNYwBohm6X4igzqI23OnOkaaqwIruwjR2bIJ4FMSYknMp1qy2ZJISHBjaB/qRmZUqZVWJroCzJZWcNkRsZQ1lADIfgjh8MRNWPGq5p3ZGS+Qibv7NnjTxqZJFQcjX1EJt5SYxUULJJt2kQFos9kxiroSmBgYNSqVcsEPcfJavCZM6do8F53GJQH3m3WrBzNaEeImg3RDU40iYxZDzMyXbtakcFz/ZChIczl7KdW9dvq20tEBtWzHhPzIsPAYeIMR53rCxda/ud7Tuq+fXsxO1Uz5Kkhk5MzSQYGBkQZgkwr+230/63ah2ynAj7wzRgrhousJzInTliQsVdHJrY2ZGw+IbN69esS7Wlou+GliuY39+pBt1mKFBVtFHUhAyRqRaZRI1f9kWH2wjsH9zPo86XJkGsQOgqUgO+T6BATT1TvE0z/yeMbNAhqOnx4umZF5rP6IhNaFzJFRMZzyzx4cKq2d2+R5KSGwEPGnMEOMdxcI5l5RER4ELYCTVq1Cg8yv8/KyuA81HxAhsaYkbHXgozwigzzOT3hbaEsKzsrUAG3VkXkJcyl6IUL51hCprCQm0Q5lnsY8PHMhEZ7Tfz48TqRsVdHJsQ/ZAxOj7799huSoYJvcgMCnC1ZCXgqdv3611xn5quqOe/q1a9sFgP8QEZKH5DR9dqQsRqEAxAN/ZhyOUktimE1r1YBoCIWdSPzl3oh43I9QgZUf2RMCnARpNFeFTtz5piNiChk5p4+fVTUjcx+n5HBFjrZb2TqUOSJIHPsWI3I6I+LjL+GKGSOiv8RMsG1IeMXv3jxNJHJU8jkX758zgdkDtaKTFycD8igxqkJGb8NwkIrqRictYGOQn0ma+tPOnx4v6DHHxpjQYbGeCIT+lSQIV+zZpVkobl+/RrvhpjJigz1+P9ABoumwELcF4MvB++zcuUyNWeslJ4+CNX1vwUVgscTTMhYEkCtyPBPSMiTR+bSpbPV5gxPZ8wGUD6OpgSQ46lnsMNhfwn9MkHu00/vyHT2Cxn74yLDhRV7nRjev5AbtVhSUj99/vxZcty40RJ1XVu0/wje/sTj0JBXGr/s3ftlbuRqRMblqhuZrT16xHECu3eMEOaXQVBepxxW21SK/3meBjR4P9OK4Yfx/qZ0KAedgqK/5toEx2YHBAREshYEQY943s3oPXt21+uLzE6c1gRHRLR0UhEexZ4/f1SYz3ypUG7uVMkBMJjXSb1hwy+4ZoyAvI/BM/kdqmcnnocb3gT9kwbg3SBcUbTIz8+V7PeoCr8jxo4dpWF3ase3ATiNaYj+O4zjWRhTKzL3FNyfwAMfqp3hetAKLHxzQNk8xUfV3LFBgwbP4BA9aPr0yVWH7DTciHGc6Aue4nMzRo6C1AVeiP+3QN+pHWd3Khod3doJeS0wbzrS40QG7XM4LuhdhhaI+hjhyFsAFppWZPCyCRR8kVCr3eR/QHeNLbIHldOjoLMYYB8vozD4JAh/GXuX5gwnIrhu3ZsClfWzUDgOc4aTe6OSV8bEwHM60AR+Dzm8pjinxi6vYTd7l3qpPqeYMABCEwsy8EpTXMHZMSEjMXAnKNAVxvXm4TQm2nAM+CpoEScliCf8R6iUx6XQLcqiJ4HgSMR8q2vXvhQIYZ5tbVLHqRWg06AS9jd9SzlllIu+76txFkHOFIYodEiFTr2gUxyN4Hzq1au7jpoyzIIMLAzjBRA2WZLhcuPG14LeJZl/ubk5Gk74nYQXkziK6wcGdXsXcg6YMhIVv8D3CpEKD09fAx1E25tQeAJQ7QNHRlEu7lOdc+fOkJ5jK33ExYulYuXKpciGozREQpg3ZMKys4dXbbCMLMJsBtJxlOTmIPf9DC5HteXLF1UNOHPmVIm1IoShCuXGq0n6jcc13hW+R/s49mP/WbOmSUPR1asLJA4YcZucxHFAHNfNmZZB/avSNIn7KW/InEQohD4U+r3Ys2eLSE8frOMO3r3xat++reP559s6X3ihnYPnXhSkLlOFYQy5GUkcFDqBWgd1vFTJBZBJIzo6MsBbfyOB8Aab8llgdujQ3tGuXRv3uJ06dbTzJnrYsKHa2rU/k8ZZgspmJWZkLjPbgPKZ+0FvwYPvgm8B3w6+G312gYPc2W2TiumfqIk8njGNWI4NCgp6Jjy8ZaChJNpnKWPmGEawnf1gXCy/4/eUQ3mUq+Qze+1StJtOoT6cj9QP9PrDsWUu55oZGW/0QGWQcnUJ+53i9xj/NWSbb1VG+kBdtfdjKlbGFKj/S6DcB6rfzRqyZQXH8Ri3XPV94FVfhUwBBljLQbmOsPTAoFmgdFavLPrA+z0iLQl8IBc+5dF5oDeIGGR9Ri+ZUusdlcIrFb9jSu1l7M/VnN9TDuSNo1yMMZBriGncvqBEvE+hXkq/ybyVo97UH7KW2fibNGmsEYPm+PXkwvjv+SsrOyNYECITubAwtuapCQZYqBa4mzRA8U/xfgFrKvbDPHVxbpSWHhIWodZ5Re61D455tR073hM2ZAmhyhEB8salL3zw4BQxatQIaR4I6T4EiKWCCsmxZwoxt48ePYLlkCHHbw79mWnFfwGWB6omxVHfzgAAAABJRU5ErkJggg==",
    onload: function() {},
    show: function(oldversion) {
      return false;
    }
  };
  shim_GM_notification();

  // ----------------------------------
  // rule.js

  if (window.name === "mynovelreader-iframe") {
    return;
  }

  // Website which has script to change window name
  const ChangeIframeSites = [/^https?:\/\/www\.930mh\.com/i];

  function CheckIframe() {
    for (var i = 0; i < ChangeIframeSites.length; i++) {
      if (toRE(ChangeIframeSites[i]).test(window.location.href)) {
        try {
          return window.self !== window.top;
        } catch (e) {
          return true;
        }
      }
    }
    if (window.name === "superpreloader-iframe") {
      return true;
    } else {
      return false;
    }
  }

  // Website which uses lazyload feature [url, xpath, timeout]
  // the script does the following:
  //    1. wait for another timeout ms
  //    2. wait change of xpath

  const LazyLoadSites = [
    {
      url: /^https?:\/\/www\.flickr\.com\/photos\/[^\/]+\/favorites(?:[\/?#]|$)/i,
      // target of mutation
      target: '//div[@role="main"]/div[contains(@class,"photo-list-view")]',
      mutationParser: function(mutation, ncheck) {
        if (mutation.type == "childList") {
          if (mutation.addedNodes) {
            for (var i = 0; i < mutation.addedNodes.length; i++) {
              if (mutation.addedNodes[i].className.indexOf("photo-view") != -1) {
                ncheck = ncheck + 1;
                break;
              }
            }
            window.scroll(window.scrollX, 99999);
          }
        }
        return ncheck;
      },
      node_check_time: 2
    }
  ];

  // 如果是取出下一页使用的iframe window
  if (CheckIframe()) {
    // 搜狗,iframe里面怎么不加载js啊?
    // 去掉了原版的另一种方法，因为新版本 chrome 已经支持。旧版本 chrome iframe里面 无法访问window.parent,返回undefined
    const domloaded = function() {
      // 滚动到底部,针对,某些使用滚动事件加载图片的网站.
      var targetNode;
      var LLS;
      for (var i = 0; i < LazyLoadSites.length; i++) {
        if (toRE(LazyLoadSites[i].url).test(window.location.href)) {
          // Select the node that will be observed for mutations
          targetNode = getElementByXpath(LazyLoadSites[i].target, document, document);
          LLS = LazyLoadSites[i];
          break;
        }
      }

      if (targetNode) {
        var num_node_check = 0;
        // Callback function to execute when mutations are observed
        const callback = function(mutationsList, observer) {
          for (var i = 0; i < mutationsList.length; i++) {
            num_node_check = LLS.mutationParser(mutationsList[i], num_node_check);
            if (num_node_check == LLS.node_check_time) {
              observer.disconnect();
              window.parent.postMessage("superpreloader-iframe:DOMLoaded", "*");
            }
          }
        };
        const observer_lazyload = new MutationObserver(callback);
        // Start observing the target node for configured mutations
        observer_lazyload.observe(targetNode, {
          childList: true
        });
        window.scroll(window.scrollX, 99999);
      } else {
        window.scroll(window.scrollX, 99999);
        window.parent.postMessage("superpreloader-iframe:DOMLoaded", "*");
      }
    };
    if (window.opera) {
      document.addEventListener("DOMContentLoaded", domloaded, false);
    } else {
      domloaded();
    }

    return;
  }

  /// //////////////////设置(请注意开关的缩进关系..子开关一般在父开关为true的时候才会生效.)//////////////////////
  const debugStyle = "color:#02A9DE";
  const userLang = navigator.language || navigator.userLanguage;
  // (Default settings)
  const prefsFactory = {
    floatWindow: true, // 显示悬浮窗
    FW_position: 2, // 1:出现在左上角;2:出现在右上角;3：出现在右下角;4：出现在左下角;
    FW_offset: [20, 38], // 偏离版边的垂直和水平方向的数值..(单位:像素)
    FW_RAS: true, // 点击悬浮窗上的保存按钮..立即刷新页面;
    pauseA: true, // 快速停止自动翻页(当前模式为翻页模式的时候生效.);
    Pbutton: [2, 0, 0], // 需要按住的键.....0: 不按住任何键;1: shift鍵;2: ctrl鍵; 3: alt鍵;(同时按3个键.就填 1 2 3)(一个都不按.就填 0 0 0)
    mouseA: true, // 按住鼠标左键..否则.双击;
    Atimeout: 200, // 按住左键时..延时.多少生效..(单位:ms);
    stop_ipage: true, // 如果在连续翻页过程中暂停.重新启用后.不在继续..连续翻页..

    Aplus: true, // 自动翻页模式的时候..提前预读好一页..就是翻完第1页,立马预读第2页,翻完第2页,立马预读第3页..(大幅加快翻页快感-_-!!)(建议开启)..
    sepP: true, // 翻页模式下.分隔符.在使用上滚一页或下滚一页的时候是否保持相对位置..
    sepT: true, // 翻页模式下.分隔符.在使用上滚一页或下滚一页的时候使用动画过渡..
    s_method: 3, // 动画方式 0-10 一种11种动画效果..自己试试吧
    s_ease: 2, // 淡入淡出效果 0：淡入 1：淡出 2：淡入淡出
    s_FPS: 60, // 帧速.(单位:帧/秒)
    s_duration: 333, // 动画持续时长.(单位:ms);
    someValue: "", // 显示在翻页导航最右边的一个小句子..-_-!!..Powered by Super_preloader 隐藏了
    DisableI: true, // 只在顶层窗口加载JS..提升性能..如果开启了这项,那么DIExclude数组有效,里面的网页即使不在顶层窗口也会加载....
    arrowKeyPage: false, // 允许使用 左右方向键 翻页..
    sepStartN: 2, // 翻页导航上的,从几开始计数.(貌似有人在意这个,所以弄个开关出来,反正简单.-_-!!)

    // 新增或修改的
    forceTargetWindow: true, // 下一页的链接设置成在新标签页打开
    debug: false,
    enableHistory: false, // 把下一页链接添加到历史记录
    autoGetPreLink: false, // 一开始不自动查找上一页链接，改为调用时再查找
    excludes: "",
    custom_siteinfo: "[]",
    lazyImgSrc: "zoomfile|file|original|load-src|_src|imgsrc|real_src|src2|data-lazyload-src|data-ks-lazyload|data-lazyload|data-src|data-original|data-thumb|data-imageurl|data-defer-src|data-placeholder",
    ChineseUI: false,
    dblclick_pause: false,
    factoryCheck: true,
    disappearDelay: -1 //暂停翻页状态栏disappearDelay ms后消失, -1为不消失
  };
  var prefs = prefsFactory;

  /// ///////////////////////---------------规则-------////////////////
  // 高级规则的一些默认设置..如果你不知道是什么..请务必不要修改(删除)它.此修改会影响到所有高级规则...
  // (Default settings)
  var SITEINFO_D = {
    enable: true, // 启用
    useiframe: false, // (预读)是否使用iframe..
    viewcontent: false, // 查看预读的内容,显示在页面的最下方.
    autopager: {
      enable: true, // 启用自动翻页...
      force_enable: false, // 默认启用强制拼接
      manualA: false, // 手动翻页.
      useiframe: false, // (翻页)是否使用iframe..
      iloaded: false, // 是否在iframe完全load后操作..否则在DOM完成后操作
      itimeout: 0, // 延时多少ms后,在操作..
      newIframe: false,
      remain: 1, // 剩余页面的高度..是显示高度的 remain 倍开始翻页..
      maxpage: 99, // 最多翻多少页..
      ipages: [false, 2], // 立即翻页,第一项是控制是否在js加载的时候立即翻第二项(必须小于maxpage)的页数,比如[true,3].就是说JS加载后.立即翻3页.
      separator: true, // 显示翻页导航..(推荐显示.)
      separatorReal: true, // 显示真实的页数
      reload: false, // 强制重载iframe
      sandbox: false // Iframe sandbox 选项
    },
    numOfRule: 4308
  };

  // 在以下网站上允许在非顶层窗口上加载JS..比如猫扑之类的框架集网页.
  const DIExclude = [
    ["猫扑帖子", true, /^https?:\/\/dzh\.mop\.com\/[a-z]{3,6}\/\d{8}\/.*\.shtml$/i],
    ["铁血社区", true, /^https?:\/\/bbs\.tiexue\.net\/.*\.html$/i],
    ["铁血社区-2", true, /^https?:\/\/bbs\.qichelian\.com\/bbsqcl\.php\?fid/i],
    // 像 http://so.baiduyun.me/ 内嵌的百度、Google 框架
    ["百度网盘搜索引擎-百度", true, /^https?:\/\/www\.baidu\.com\/baidu/i],
    ["百度网盘搜索引擎-Google", true, /^https?:\/\/74\.125\.128\.147\/custom/i]
  ];

  // 页面不刷新的站点
  const HashchangeSites = [
    {
      url: /^https?:\/\/(www|encrypted)\.google(stable)?\..{2,9}\/(webhp|#|$|\?)/,
      timer: 2000,
      mutationSelector: "#main"
    },
    // 运营商可能会在 #wd= 前面添加 ?tn=07084049_pg
    {
      url: /^https?:\/\/www\.baidu\.com\/($|#wd=)/,
      timer: 1000,
      mutationSelector: "#wrapper_wrapper"
    },
    {
      url: /^https?:\/\/www\.newsmth\.net/,
      timer: 1000
    }
  ];

  /// ///////////////////////---------------Rules-------------////////////////

  //  ///////// ----- Rules for specific sites -------///////////
  //  Highest priority
  var SITEINFO = [
    {
      // 站点名字...(可选)             // 站点正则...(~~必须~~)
      name: "Google搜索",
      url: "^https?://(?:(?:www|encrypted)\\.google(?:stable)?\\..{2,9}|wen\\.lu)/(?:webhp|search|#|$|\\?)",
      // url:'wildc;http://www.google.com.hk/search*',
      exampleUrl: "http://www.google.com", // 站点实例...(可选)
      enable: true, // 启用.(总开关)(可选)
      useiframe: false, // 是否用iframe预读...(可选)
      // sandbox: "allow-forms allow-modals allow-same-origin allow-scripts";    //设置sandbox选项
      viewcontent: false,
      nextLink: 'id("pnnext") | id("navbar navcnt nav")//td[span]/following-sibling::td[1]/a | id("nn")/parent::a',
      // BaisicOptions: check(function getElement)
      // 1. auto
      //    nextLink:'auto;',
      // 2. xpath selector
      //    nextLink:'//table[@id="nav"]/descendant::a[last()][parent::td[@class="b"]]',              //下一页链接 xpath 或者 CSS选择器 或者 函数返回值(此函数必须使用第一个传入的参数作为document对象) (~~必选~~)
      // 3. css selector (prefix must be `css;`)
      //    nextLink:'css;table#nav>tbody>tr>td.b:last-child>a',
      // 4. function (function(document, window, currentURL))
      //    nextLink:function(D,W){return D.evaluate('//table[@id="nav"]/descendant::a[last()][parent::td[@class="b"]]',D,null,XPathResult.FIRST_ORDERED_NODE_TYPE,null).singleNodeValue;},
      //
      // Complex Options:
      // 5. array:
      //    Check the above types one-by-one
      // 6. object:
      //    check function hrefInc
      //
      // 新增 Array 的格式，依次查找

      // preLink:'auto;',
      preLink: '//a[@id="pnprev"]',
      // preLink:'//table[@id="nav"]/descendant::a[1][parent::td[@class="b"]]',            //上一页链接 xpath 或者 CSS选择器 或者 函数返回值 (可选)
      autopager: {
        enable: true, // 启用(自动翻页)(可选)
        useiframe: false, // 是否使用iframe翻页(可选)
        iloaded: false, // 是否在iframe完全load之后操作..否则在DOM完成后操作.
        itimeout: 0, // 延时多少ms后,在操作..
        // reload: true,      // Force reload iframe when the src is changed
        newIframe: false, // 下一页使用新的 iframe，能解决按钮无法点击的问题
        pageElement: '//div[@id="res"]|//div[@id="extrares"]', // 主体内容 xpath 或 CSS选择器 或函数返回值(~~必须~~)
        // pageElement:'css;div#ires',
        // pageElement:function(doc,win){return doc.getElementById('ires')},
        // filter:'//li[@class="g"]',                                                                        //(此项功能未完成)xpath 或 CSS选择器从匹配到的节点里面过滤掉符合的节点.
        remain: 1 / 3, // 剩余页面的高度..是显示高度的 remain 倍开始翻页(可选)
        relatedObj: ["css;div#navcnt", "bottom"], // 以这个元素当做最底的元素,计算页面总高度的计算.(可选)
        replaceE: '//div[@id="navcnt"]', // 需要替换的部分 xpath或 CSS选择器 一般是页面的本来的翻页导航(可选);
        // replaceE:'css;div#navcnt',
        ipages: [false, 2], // 立即翻页,第一项是控制是否在js加载的时候立即翻第二项(必须小于maxpage)的页数,比如[true,3].就是说JS加载后.立即翻3页.(可选)
        separator: true, // 是否显示翻页导航(可选)
        // sepdivDom: function(doc, sepdiv) {
        //   // 一个用于创建翻页条node的函数
        //   // 例子参见小木虫-帖子
        //   const td = doc.createElement("td");
        //   td.appendChild(sepdiv);
        //   const tr = doc.createElement("tr");
        //   td.setAttribute("colspan", 2);
        //   tr.appendChild(td);
        //   const tbody = doc.createElement("tbody");
        //   return tbody;
        // },
        separatorReal: true,
        maxpage: 66, // 最多翻页数量(可选)
        manualA: false, // 是否使用手动翻页.
        // HT_insert: ['//div[@id="res"]', 0], // 插入方式此项为一个数组: [节点xpath或CSS选择器,插入方式(0: 插入到给定节点之后 1：插入到给定节点之前;2：附加到给定节点的里面;)](可选);
        // HT_insert:['css;div#res',2],
        lazyImgSrc: "imgsrc",
        documentFilter: function(doc, nextLink) {
          // 作用于xhr或iframe加载的下一页
          // 可以是一个函数 接收doc, nextLink 两个参数，也可以是字符串'startFilter'
          const x = doc.evaluate('//script/text()[contains(self::text(), "setImagesSrc")]', doc, null, 9, null).singleNodeValue;
          if (x) {
            try {
              new Function("document", "window", "google", x.nodeValue)(doc, unsafeWindow, unsafeWindow.google);
            } catch (e) {}
          }
          // Fix images
          // add horizontal flexity first
          const imgPs = getAllElementsByXpath("//g-scrolling-carousel/div/div/div", doc, doc);
          if (imgPs.snapshotLength > 0) {
            for (let i = 0; i < imgPs.snapshotLength; i++) {
              const d = imgPs.snapshotItem(i);
              d.style.cssText += "display: flex;flex-wrap: nowrap;width: 600px;white-space: nowrap;overflow-x: auto;";
            }
          }

          const hiddenImgs = getAllElementsByXpath("//g-scrolling-carousel/div/div/div/div[not(@data-vis)]//g-img/img", doc, doc);
          if (hiddenImgs.snapshotLength > 0) {
            for (let i = 0; i < hiddenImgs.snapshotLength; i++) {
              const d = hiddenImgs.snapshotItem(i);
              d.setAttribute("src", d.getAttribute("data-src"));
              d.style.opacity = 1;
            }
          }

          const brs = doc.getElementById("brs");
          if (brs) {
            brs.remove();
          }
        },
        // filter: function() {
        // 在添加内容到页面后运行
        //},
        startFilter: function(doc, win) {
          // 只作用一次, 用于打开的页面
          // 函数： 接收doc, win 两个参数
          // 移除 Google 重定向
          const script = doc.createElement("script");
          script.type = "text/javascript";
          script.textContent =
            '\
                  Object.defineProperty(window, "rwt", {\
                      configurable: false,\
                      enumerable: true,\
                      get: function () {\
                          return function() {};\
                      },\
                  });\
                  ';
          doc.documentElement.appendChild(script);
          doc.documentElement.removeChild(script);

          // change id of related search
          const brs = doc.getElementById("brs");
          if (brs) {
            brs.id = "ibrs";
          }
          console.log("%cGoogle    is %s", "font-weight:bold;color:red", emoji("1F4A9"));

          const keyword = getElementByXpath("//input[@title='Search']", doc, doc);
          if (keyword) {
            console.log("%cMicrosoft is %s %csearch with Bing %s", "font-weight:bold;color:00bbee", emoji("1F60E"), "font-weight:bold;color:00bbee", encodeURI("https://www.bing.com/search?q=" + keyword.value));
          } else {
            console.log("%cMicrosoft is %s", "font-weight:bold;color:00bbee", emoji("1F60E"));
          }
        }
      }
    },
    {
      name: "百度搜索",
      url: "^https?://www\\.baidu\\.com/",
      // 由于 Super_preloader 默认去掉了 # 后面部分
      // url: "^https?://www\\.baidu\\.com/(s|baidu|#wd=)",
      enable: true,
      nextLink: '//div[@id="page"]/a[contains(text(),"下一页")][@href]',
      preLink: '//div[@id="page"]/a[contains(text(),"上一页")][@href]',
      autopager: {
        pageElement: "css;div#content_left > *",
        HT_insert: ["css;div#content_left", 2],
        replaceE: "css;#page",
        stylish: ".autopagerize_page_info, div.sp-separator {margin-bottom: 10px !important;}",
        startFilter: function(doc, win) {
          // 设置百度搜索类型为 s?wd=
          try {
            win.document.cookie = "ISSW=1";
          } catch (ex) {}
        }
      }
    },
    {
      name: "kongregate",
      url: "^https?://www\\.kongregate\\.com",
      nextLink: "(//li[@class='next_link']/a)[1]",
      autopager: {
        scriptFilter: "renderPosts",
        pageElement: "//table[@class='posts']/tbody",
        filter: function(pageElements) {
          const scripts = getAllElementsByXpath(".//script[contains(text(), 'renderPosts')]", pageElements[0], document);
          if (scripts.snapshotLength > 0) {
            for (let i = 0; i < scripts.snapshotLength; i++) {
              const s = scripts.snapshotItem(i);
              try {
                eval(s.innerText);
              } catch (e) {}
            }
          }
        }
      }
    },
    {
      name: "kongregate_list",
      url: "^https?://www\\.kongregate\\.com",
      nextLink: "(//li[@class='next_link']/a)[1]",
      pageElement: "//div[@id='featurewide']/table/tbody"
    },
    {
      name: "小木虫-帖子",
      url: "^https?://(www\\.)?muchong\\.com/t-.*$",
      nextLink: "auto;",
      pageElement: "//div[@id='maincontent']/table/tbody[@id]",
      autopager: {
        relatedObj: true,
        sepdivDom: function(doc, sepdiv) {
          const td = doc.createElement("td");
          td.appendChild(sepdiv);
          const tr = doc.createElement("tr");
          td.setAttribute("colspan", 2);
          tr.appendChild(td);
          const tbody = doc.createElement("tbody");
          tbody.appendChild(td);
          return tbody;
        }
      }
    },
    {
      name: "smzdm-comment",
      url: /^https?:\/\/\w+\.smzdm\.com(\/\w+)?\/p\/[\d\w\W]+/i,
      exampleUrl: "https://post.smzdm.com/p/559992/",
      // 还有另外一种评论
      // exampleUrl: 'https://www.smzdm.com/p/11496450/ | https://test.smzdm.com/pingce/p/70095121/',
      nextLink: '//ul[@class="pagination"]/li[@class="pagedown"]/a',
      autopager: {
        pageElement: 'id("commentTabBlockNew")/ul[@class="comment_listBox"]',
        excludeElement: '//div[@class="article-card J_trigger_ani"]',
        replaceE: '(//ul[@class="pagination"])[1]',
        startFilter: function(doc) {
          const firstDiv = doc.querySelector(".pagination");
          if (firstDiv) {
            firstDiv.parentNode.removeChild(firstDiv);
          }
        }
      }
    },
    {
      name: "和讯博客",
      url: /^https?:\/\/\w+\.blog\.hexun\.com\//i,
      exampleUrl: "http://23802543.blog.hexun.com/",
      nextLink: function(doc) {
        var url = doc.querySelector('.PageSkip_1 a[title="下一页"]').getAttribute("href");
        url = url.replace(/(\/p\d+\/).*/, "$1default.html");
        return url;
      },
      autopager: {
        pageElement: 'id("DefaultContainer1_ArticleList_Panel1")'
      }
    },
    {
      name: "m-team artist detail",
      url: "^https?://pt\\.m-team\\.cc/artist\\.php?",
      nextLink: '//b[@title="Alt+Pagedown"]/parent::a',
      autopager: {
        pageElement: '//form[@id="form2"]/table',
        relatedObj: true,
        documentFilter: "startFilter",
        startFilter: function(doc) {
          const trs = getAllElementsByXpath("//div[@class='artist']/div[@class='atl']/form/table/tbody/tr/td[@colspan='5']/parent::tr", doc, doc);
          if (trs.snapshotLength > 0) {
            for (var i = 0; i < trs.snapshotLength; i++) {
              var img = trs.snapshotItem(i).getElementsByTagName("img");
              if (img) {
                img = img[0];
                var imgSrc = img.getAttribute("src");
                const newImg = $C("img", {
                  src: imgSrc,
                  style: "display:block; width:100%; height:auto;"
                });

                const newtd = $C("td", {
                  colspan: 5,
                  style: "border-bottom:1px dashed black;"
                });

                const newtr = $C("tr", {
                  align: "center"
                });

                newtd.appendChild(newImg);
                newtr.appendChild(newtd);
                trs.snapshotItem(i).parentNode.insertBefore(newtr, trs.snapshotItem(i));
              }
            }
          }
        }
      }
    },
    {
      name: "m-team adults",
      url: "^https?://pt\\.m-team\\.cc/adult\\.php",
      nextLink: '//b[@title="Alt+Pagedown"]/parent::a',
      autopager: {
        pageElement: '//table[@class="torrents"]',
        startFilter: function(doc) {
          const tds = doc.getElementsByClassName("torrentimg");
          [].forEach.call(tds, function(td) {
            const imgSrc = td.getElementsByTagName("img");
            if (imgSrc) {
              const newImg = $C("img", {
                src: imgSrc[0].getAttribute("src"),
                style: "display:block; width:100%; height:auto;"
              });

              const newtd = $C("td", {
                colspan: 2,
                style: "border-bottom:1px solid black;"
              });

              const newtr = $C("tr", {
                align: "center"
              });

              newtd.appendChild(newImg);
              newtr.appendChild(newtd);
              td.parentNode.parentNode.insertBefore(newtr, td.parentNode);
            }
          });
        },
        documentFilter: "startFilter"
      }
    },
    {
      name: "idope.se",
      url: /^https?:\/\/idope\.se\/torrent-list\/.+/i,
      exampleUrl: "https://idope.se/torrent-list/transformer/?p=3",
      preLink: {
        startAfter: "?p=",
        inc: -1,
        min: 1
      },
      nextLink: {
        startAfter: "?p=",
        mFails: [/^https?:\/\/idope\.se\/torrent-list\/.+/i, "/?p=1"],
        inc: 1,
        isLast: function(doc, win, lhref) {
          const pageSel = doc.getElementById("next");
          if (!pageSel) {
            return true;
          }
        }
      },
      autopager: {
        pageElement: '//*[@id="div2child"]',
        useiframe: true
      }
    },
    {
      name: "天涯论坛帖子",
      url: /^https?:\/\/bbs\.tianya\.cn\/.+\.shtml/i,
      exampleUrl: "http://bbs.tianya.cn/post-feeling-2792523-1.shtml",
      nextLink: '//div[@class="atl-pages"]/descendant::a[text()="下页"][@href]',
      autopager: {
        useiframe: true,
        pageElement: '//div[@class="atl-main"]',
        lazyImgSrc: "original",
        filter: function(pages) {
          const see_only_uname = unsafeWindow.see_only_uname;
          const setOnlyUser = unsafeWindow.setOnlyUser;
          if (see_only_uname) {
            setOnlyUser(see_only_uname);
          }
        }
      }
    },
    {
      name: "Firefox中文社区 - 列表",
      url: "^https?://www\\.firefox\\.net\\.cn/thread",
      nextLink: '//div[@class="pages"]/a[contains(text(), "下一页")]',
      autopager: {
        pageElement: 'id("J_posts_list")',
        replaceE: "css;.pages",
        documentFilter: function(doc) {
          // 头像载入出错的修正
          [].forEach.call(doc.querySelectorAll("img.J_avatar"), function(img) {
            img.setAttribute("onerror", 'this.src="http://www.firefox.net.cn/res/images/face/face_small.jpg";');
          });
        }
      }
    },
    {
      name: "小米手机官方论坛",
      url: "^https?://bbs\\.xiaomi\\.cn/",
      nextLink: "//a[@class='nxt' and (text()='下一页')]",
      autopager: {
        pageElement: "id('postlist') | id('threadlist')",
        replaceE: '//div[@class="pg"][child::a[@class="nxt"]]',
        documentFilter: function(doc) {
          const firstDiv = doc.querySelector("div[id^='post_']");
          if (firstDiv) {
            firstDiv.parentNode.removeChild(firstDiv);
          }
        }
      }
    },
    {
      name: "游民星空",
      url: /^https?:\/\/www\.gamersky\.com\/\w+\/\d{6}\/.*.shtml/i,
      exampleUrl: "https://www.gamersky.com/ent/201510/671493.shtml | https://www.gamersky.com/handbook/201707/922480.shtml",
      nextLink: function(doc, win, cplink) {
        const node = getElementByXpath('//div[@class="page_css"]//a[(text()="下一页")]', doc, doc);
        if (!node) {
          return null;
        }
        // 请求协议保持一致
        const a = /^(https)?:\/\/.*$/.exec(cplink);
        if (a) {
          var b = /^https?:\/\/(.*)$/.exec(node.getAttribute("href"));
          return a[1] + "://" + b[1];
        }
        return node.getAttribute("href");
      },
      autopager: {
        relatedObj: true,
        pageElement: '//div[@class="Mid2L_con"]',
        replaceE: '//div[@class="page_css"]'
      }
      // credit : https://greasyfork.org/en/forum/discussion/42040/x
    },
    {
      name: "ali213 - 攻略",
      url: /^http:\/\/gl\.ali213\.net\/html/,
      exampleUrl: "http://gl.ali213.net/html/2011/25399_2.html",
      nextLink: "id('after_this_page')",
      autopager: {
        useiframe: true,
        pageElement: "//div[@class='glzjshow_con']",
        replaceE: "id('after_this_page')",
        startFilter: function(doc) {
          const comments = getElementByXpath('//div[@class="glzjshow_plun"]', doc, doc);
          if (comments) {
            comments.style.display = "none";
          }
        }
      }
    },
    {
      name: "多玩 - 攻略",
      url: /^https?:\/\/tv\.duowan\.com\/\d+\/\d+\.html/,
      exampleUrl: "http://tv.duowan.com/1801/380717306538.html",
      nextLink: "id('pageNum')//a[text()='下一页']",
      autopager: {
        useiframe: true,
        replaceE: "id('pageNum')",
        pageElement: "//div[@class='box-bd'][last()]",
        startFilter: function(doc) {
          const pager = doc.querySelector("#pageNum");
          if (pager) {
            getElementByXpath("//div[@class='box-bd'][last()]", doc, doc).after(pager);
          }
          //删除侧边栏
          const ad = doc.querySelector(".aside-wrap");
          if (ad) {
            ad.style.display = "none";
          }
        },
        documentFilter: function(doc) {
          const pager = doc.querySelector("#pageNum");
          if (pager) {
            pager.style.display = "none";
          }
        }
      }
    },
    {
      name: "电玩巴士 - 图文",
      url: "^https?://pc\\.tgbus\\.com/.*\\d+/$",
      exampleUrl: "http://pc.tgbus.com/tuwen_180/88983/",
      nextLink: "//div[contains(@class, 'art-page')]/a[text()='下一页']",
      autopager: {
        pageElement: "//div[@class='art-body']",
        documentFilter: function(doc) {
          // 删除导航
          const navigator = doc.querySelector(".art-pagination");
          if (navigator) {
            navigator.parentNode.removeChild(navigator);
          }
          // 隐藏分页
          doc.querySelector(".art-page").style.display = "none";
        }
      }
    },
    {
      name: "抽屉新热榜",
      url: /^https?:\/\/dig\.chouti\.com\//i,
      nextLink: '//a[@class="ct_page_edge" and (text()="下一页")]',
      autopager: {
        pageElement: '//div[@id="content-list"]',
        lazyImgSrc: "original",
        filter: function(pages) {
          const chouti = unsafeWindow.chouti;
          const NS_links_comment_top = unsafeWindow.NS_links_comment_top;
          chouti.vote();
          chouti.addCollect();
          chouti.shareweibo();
          chouti.playVido();
          NS_links_comment_top.init();
        }
      }
    },
    {
      name: "koolshare扩展页面",
      url: "^https?://koolshare\\.cn/home\\.php",
      exampleUrl: "http://koolshare.cn/home.php",
      nextLink: "//a[contains(text(),'下一页')]",
      pageElement: "id('ct')//tbody",
      autopager: {
        // 只执行一次，删除多余的表头
        documentFilter: function(doc) {
          const firstDiv = doc.querySelector(".th");
          if (firstDiv) {
            firstDiv.parentNode.removeChild(firstDiv);
          }
        }
      }
    },
    {
      name: "Jable",
      url: /^https?:\/\/jable\.tv/i,
      nextLink: function(doc, win, cplink) {
        const a = getElementByXpath("//ul[@class='pagination']/li[span[contains(@class,'active')]]/following-sibling::li[1]/a", doc, doc);
        const blockID = a.getAttribute("data-block-id");
        const parms = a
          .getAttribute("data-parameters")
          .replace(/:/g, "=")
          .replace(/;/g, "&");
        const containerID = a.getAttribute("data-container-id");
        const nextLink = cplink + "?mode=async&function=get_block&block_id=" + blockID + "&" + parms + "&_=" + Date.now();
        return nextLink;
      },
      autopager: {
        enable: false,
        useiframe: true,
        pageElement: "//ul[@class='pagination']/preceding-sibling::div/div"
      },
      exampleUrl: "http://www.youyourentiyishu.com/rentiyishuzhaopian/20180506225810.html"
    },
    {
      name: "Netflav",
      url: "^https?://netflav\\.com",
      nextLink: {
        startAfter: "?page=",
        mFails: [/^https?:\/\/(?:netflav\.com)\/.+/i, "?page=1"],
        inc: 1,
        isLast: function(doc, win, lhref) {
          const CurrentPage = Number(getElementByXpath("//div[@id='general-pagination']/div/a[@aria-current='true']", doc, doc).innerText);
          const TotalPage = Number(getElementByXpath("(//div[@id='general-pagination']/div/a[@type='nextItem']/preceding-sibling::a)[last()]", doc, doc).innerText);
          if (CurrentPage == TotalPage) {
            return true;
          }
        }
      },
      autopager: {
        useiframe: true,
        iloaded: true,
        pageElement: "(//div[@id='general-pagination']/preceding-sibling::div)[last()]/div",
        HT_insert: ["(//div[@id='general-pagination']/preceding-sibling::div)[last()]", 2]
      },
      exampleUrl: "https://netflav.com/chinese-sub?page=1"
    },
    {
      name: "悠悠美图",
      url: /^https?:\/\/www\.youyourentiyishu\.com/i,
      nextLink: function(doc, win, cplink) {
        const m = cplink.match(/\d+-(\d+)\.html/);
        if (!m) {
          return cplink.replace(".html", "-2.html");
        } else {
          const current = Number(m[1]);
          const next = current + 1;
          const url = cplink.replace(m[1] + ".html", next + ".html");
          const url2 = doc.querySelector("a.next").getAttribute("href");
          if (url != url2) {
            return undefined;
          } else {
            return url;
          }
        }
      },
      autopager: {
        enable: true,
        pageElement: '//div[@class="showimg"]/a',
        ipages: [true, 30]
      },
      exampleUrl: "http://www.youyourentiyishu.com/rentiyishuzhaopian/20180506225810.html"
    },
    {
      name: "laomaoit - 老殁软件分享",
      url: "^https?://www\\.(laomoit|mpyit)\\.com",
      exampleUrl: "https://www.laomoit.com",
      nextLink: '//div[@id="pagenavi"]//a[text()="下一页"]',
      autopager: {
        pageElement: 'id("post") | id("content")',
        replaceE: "css;#pagenavi",
        // 删除页面上不需要的元素
        documentFilter: function(doc) {
          const nodeBrowse = doc.querySelector(".browse");
          if (nodeBrowse) {
            nodeBrowse.parentNode.removeChild(nodeBrowse);
          }
          const nodeMap = doc.querySelector("#map");
          if (nodeMap) {
            nodeMap.parentNode.removeChild(nodeMap);
          }
        }
      }
    },
    {
      name: "CSDN博客",
      url: /^https?:\/\/blog\.csdn\.net/i,
      exampleUrl: "http://blog.csdn.net/wangjieest?viewmode=list",
      nextLink: function(doc, win, cplink) {
        for (var i = 0; i < doc.scripts.length; i++) {
          const scriptText = doc.scripts[i].text;
          if (typeof scriptText != "undefined" && scriptText.indexOf("currentPage") > 0) {
            const pageMatches = scriptText.match(/currentPage[ ]?=[ ]?(\d+)/);
            if (pageMatches.length != 2) {
              continue;
            }

            const baseUrlMatches = scriptText.match(/baseUrl[ ]?=[ ]?'([^']+)'/);
            if (baseUrlMatches.length != 2) {
              continue;
            }
            return baseUrlMatches[1] + "/" + (parseInt(pageMatches[1]) + 1);
          }
        }
        return null;
      },
      autopager: {
        pageElement: '//div[@id="article_list"] | // div[@class="article-list"]',
        documentFilter: function(doc) {
          // 文档底部的 marginBottom 重置
          const articleList = doc.querySelector(".article-list");
          if (articleList) {
            articleList.style.marginBottom = "0";
          }
        },
        startFilter: function(doc, win) {
          // 文档底部的 marginBottom 重置
          const articleList = doc.querySelector(".article-list");
          if (articleList) {
            articleList.style.marginBottom = "0";
          }
          // 移动分页位置
          const pageBox = document.querySelector("#pageBox");
          if (pageBox) {
            pageBox.parentNode.parentNode.appendChild(pageBox);
          }
          // 删除广告
          const adBox = document.querySelector(".box-box-large");
          if (adBox) {
            adBox.parentNode.removeChild(adBox);
          }
        }
      }
    },
    {
      name: "CSDN话题",
      url: /^https?:\/\/bbs\.csdn\.net\/topics\//i,
      exampleUrl: "http://bbs.csdn.net/topics/390244325",
      nextLink: '(//div[@class="page_nav"])[1]/a[text()="下一页"]',
      autopager: {
        pageElement: 'id("bbs_detail_wrap")',
        documentFilter: function(doc) {
          // 删除文档中的多余表头
          const titleH = doc.querySelector(".bbs_title_h");
          if (titleH) {
            titleH.parentNode.removeChild(titleH);
          }

          const titleBar = doc.querySelector(".bbs_title_bar");
          if (titleBar) {
            titleBar.parentNode.removeChild(titleBar);
          }

          const breadWrap = doc.querySelector(".bbs_bread_wrap");
          if (breadWrap) {
            breadWrap.parentNode.removeChild(breadWrap);
          }
          // 尾页的分页信息隐藏
          const pageNav = doc.querySelectorAll(".mod_fun_wrap");
          if (pageNav) {
            let index = 0;
            if (pageNav.length == 2) {
              index = 1;
            }
            pageNav[index].style.display = "none";
          }
        },
        startFilter: function(doc) {
          // 尾页的分页信息隐藏
          const pageNav = doc.querySelectorAll(".mod_fun_wrap");
          if (pageNav) {
            let index = 0;
            if (pageNav.length == 2) {
              index = 1;
            }
            pageNav[index].style.display = "none";
          }
          // 扩展的其他话题信息移除，长度太长，导致翻页信息有点问题
          const feedBox = doc.querySelector(".post_feed_box");
          if (feedBox) {
            feedBox.parentNode.removeChild(feedBox);
          }
        },
        sepdivDom: function(doc, sepdiv) {
          sepdiv.className += " bbs_detail_wrap";
          return sepdiv;
        }
      }
    },
    {
      name: "bl-novel",
      url: "^https?://bl-novel\\.in/novel",
      nextLink: "//a[@id='pb_next']",
      pageElement: "//div[@id='nr']",
      documentFilter: function(doc, nextLink) {
        var scripts = doc.getElementsByTagName("script");
        var re = /chapter\s*=\s*secret\(['"](.*)['"],\s*['"](.*)['"],\s*(\w+)\s*\)/g;
        var c;
        [].forEach.call(scripts, function(x) {
          if (x.innerText.indexOf("var chapter") >= 0) {
            var temp = re.exec(x.innerText);
            var content = temp[1];
            var salt = temp[2];
            // function secret is provided by the website
            if (temp[3].indexOf("true") >= 0) {
              // eslint-disable-next-line no-undef
              c = secret(content, salt, true);
            } else {
              // eslint-disable-next-line no-undef
              c = secret(content, salt, false);
            }
            doc.getElementById("nr1").innerHTML = c;
          }
        });
      }
    },
    {
      name: "第一版主",
      url: "^https?://www\\.diyibanzhu\\d?\\.(top|one|net|com)",
      nextLink: "auto;",
      pageElement: "//div[@id='content']"
    },
    {
      name: "第一版主",
      url: "^https?://www\\.diyibanzhu\\d?\\.(top|one|net|com)",
      pageElement: "//div[@id='content']",
      nextLink: function(doc, win, cplink) {
        var chapters = getAllElementsByXpath("//div[@class='chapterPages']/a", doc);
        var prefix = cplink.substr(0, cplink.lastIndexOf("/")) + "/";
        var i = 0;
        for (i = 0; i < chapters.snapshotLength; i++) {
          if (chapters.snapshotItem(i).className === "curr") {
            if (i + 1 < chapters.snapshotLength) {
              return prefix + chapters.snapshotItem(i + 1).getAttribute("href");
            } else {
              return getDomain(cplink) + getElementByXpath("//span[@class='next']/a").getAttribute("href");
            }
          }
        }
      }
    },
    {
      name: "起点文学-排行榜",
      url: /^https?:\/\/www\.(qidian)\.com(\/mm)?\/rank\/.*/i,
      exampleUrl: "https://www.qidian.com/rank/collect",
      nextLink: function(doc, win, cplink) {
        var res = getElementByXpath('//div[@id="page-container"]', doc);
        if (res === null) {
          return undefined;
        }

        const next = Number(res.dataset.page) + 1;

        if (next > res.dataset.pagemax) {
          return undefined;
        } else {
          if (cplink.indexOf("page=") != -1) {
            return cplink.replace(/page=\d+/, "page=" + next);
          } else if (cplink.indexOf("?") != -1) {
            return cplink + "&page=" + next;
          } else {
            return cplink + "?page=" + next;
          }
        }
      },
      autopager: {
        pageElement: '//div[@class="rank-body"]'
      }
    },
    {
      name: "优书-书单|评论",
      url: /^https?:\/\/www\.yousuu\.com\/(comments|booklist)/i,
      nextLink: function(doc, win, cplink) {
        var res = getElementByXpath('//ul[contains(@class, "pagination")]', doc);
        if (res === null) {
          return undefined;
        }
        var nextNode;
        if (res.childNodes.length == 2) {
          // 只有2个子节点，首页|下一页
          nextNode = res.childNodes[1];
        } else {
          // 其他类型 << 1 2(active) 3 ... >>
          // 找到active的后一项
          for (var i = res.childNodes.length - 1; i >= 0; i--) {
            if (res.children[i].className == "active") {
              // 如果当前页是最后第二项，就不翻页
              if (i == res.childNodes.length - 2) {
                return undefined;
              }
              nextNode = res.childNodes[i + 1];
            }
          }
        }
        var findout = /jumpurl\('(\w+)','?(\d+)'?\)/.exec(nextNode.innerHTML);
        if (findout === null || findout.length != 3) {
          return undefined;
        }

        var pageInfo = findout[1] + "=" + findout[2];

        if (cplink.indexOf(findout[1] + "=") != -1) {
          return cplink.replace(new RegExp(findout[1] + "=\\d+"), pageInfo);
        } else if (cplink.indexOf("?") != -1) {
          return cplink + "&" + pageInfo;
        } else {
          return cplink + "?" + pageInfo;
        }
      },
      autopager: {
        pageElement: '//table[contains(@class, "shudanlist")] | //ul[contains(@class, "ys-comments")] | //div[@class="ro"]'
      }
    },
    {
      name: "动漫之家漫画网",
      url: /^https?:\/\/(www|manhua)\.(dmzj|178)\.com\/\w+\/\d+\.shtml/,
      exampleUrl: "https://manhua.dmzj.com/yuanlian/36944.shtml#@page=1",
      nextLink: function(doc, win, cplink) {
        const current = Number(getElementByXpath('//*[@id="page_select"]/option[@selected][1]', doc).text.match(/(\d+)/)[1]);
        const xpath_last = '//*[@id="page_select"]/option[last()]';
        const end_num = Number(getElementByXpath(xpath_last, doc).text.match(/(\d+)/)[1]);
        const next = current + 1;
        if (next > end_num) {
          return undefined;
        } else {
          return cplink.replace(/\.shtml(?:#@page=\d+)?/, ".shtml#@page=" + next);
        }
      },
      autopager: {
        useiframe: true,
        reload: true, // do not create new iframe but reload
        ipages: [true, 20],
        pageElement: '//div[@id="center_box"]/img'
      }
    },
    {
      name: "看漫画",
      url: /^https?:\/\/www\.manhuagui\.com\/comic\/.+/i,
      // this is a set which uses hash to change page
      // we need to manually add hash
      nextLink: function(doc, win, cplink) {
        const current = Number(getElementByXpath('//*[@id="page"]', doc).innerHTML);
        const xpath_last = '//div[@id="pagination"]/a[contains(@href,"javascript") and not(@class)][last()]';
        const end_num = Number(getElementByXpath(xpath_last, doc).text);
        const next = current + 1;
        if (next > end_num) {
          return undefined;
        } else {
          return cplink.replace(/\.html(?:#p=\d+)?/, ".html#p=" + next);
        }
      },
      autopager: {
        useiframe: true,
        newIframe: false,
        reload: true, // do not create new iframe but reload
        pageElement: '//div[@class="clearfix"]',
        ipages: [true, 20]
      },
      exampleUrl: "https://www.manhuagui.com/comic/17332/372862.html"
    },
    {
      name: "SF在线漫画",
      url: "^https?://(manhua\\.sfacg\\.com/mh|www\\.acg456\\.com)/.+",
      exampleUrl: "https://manhua.sfacg.com/mh/YULINGSHI/20087/#p=2",
      preLink: {
        startAfter: "#p=",
        inc: -1,
        min: 1
      },
      nextLink: {
        startAfter: "#p=",
        mFails: [/^https?:\/\/(?:manhua\.sfacg\.com\/mh|www\.acg456\.com)\/.+/i, "#p=1"],
        inc: 1,
        isLast: function(doc, win, lhref) {
          const TotalPage = Number(doc.getElementById("TotalPage").innerText) - 1;
          const CurrentPage = Number(doc.getElementById("CurrentPage").innerText);
          if (CurrentPage == TotalPage) {
            return true;
          }
        }
      },
      autopager: {
        pageElement: '//img[@id="curPic"]',
        useiframe: true,
        reload: true,
        replaceE: 'id("Pages")'
      }
    },
    {
      name: "哦漫画",
      url: /^https?:\/\/www\.omanhua\.com\/comic\//i,
      exampleUrl: "http://www.omanhua.com/comic/2957/36463/index.html?p=2",
      nextLink: {
        startAfter: "?p=",
        mFails: [/^http:\/\/www\.omanhua\.com\/comic\/.+/i, "?p=1"],
        inc: 1,
        isLast: function(doc, win, lhref) {
          const select = doc.getElementById("pageSelect");
          if (select) {
            const s2os = select.options;
            const s2osl = s2os.length;
            if (select.selectedIndex == s2osl - 1) return true;
          }
        }
      },
      autopager: {
        useiframe: true,
        pageElement: '//img[@id="mangaFile"]'
      }
    },
    {
      name: "汗汗漫画",
      url: /^https?:\/\/\w+\.(?:vs20|3gmanhua|hhcomic|huhudm|huhumh|hhimm|hhmmoo)\.(?:com|net)\/\w+\/\d+\.html/i,
      exampleUrl: "http://www.hhmmoo.com/page315224/1.html?s=1； http://www.hhmmoo.com/page315224/4.html?s=1&d=0",
      nextLink: function(doc, win, cplink) {
        // created based on http://www.hhmmoo.com/script/view.js
        const m = cplink.match(/(.*\d+\/)(\d+)(\.html\?s=\d+)((?:\?|&)d=.*)?/);
        const url_head = m[1];
        const current = Number(m[2]);
        var dID = m[4];
        if (!dID) dID = "&d=0";
        const next = current + 1;
        const xpath = '//div[@class="cH1"]/b[1]';
        var maxpage = document.getElementById("hdPageCount");
        if (maxpage) {
          maxpage = Number(maxpage.value);
        } else {
          maxpage = document.getElementById("spPageCount");
          if (maxpage) {
            maxpage = Number(maxpage.innerText);
          } else {
            return undefined;
          }
        }
        if (next == maxpage + 1) {
          return undefined;
        } else {
          return m[1] + next + m[3] + dID;
        }
      },
      autopager: {
        useiframe: true,
        pageElement: '//div[@id="iBody"]',
        ipages: [true, 20]
      }
    },
    {
      name: "99漫画",
      url: /^https?:\/\/(cococomic|dm.99manga|99manga|99comic|www.99comic|www.hhcomic)\.(com|cc)/i,
      exampleUrl: "http://dm.99manga.com/comic/35416/316645/?p=2&s=0",
      nextLink: {
        startAfter: "?p=",
        inc: 1,
        mFails: [/^https?:\/\/(?:cococomic|dm.99manga|99manga|99comic|www.99comic|www.hhcomic)\.(?:com|cc)\/.+/i, "?p=1&s=0"],
        isLast: function(doc, win, lhref) {
          const maxpage = Number(doc.getElementById("spPageCount").innerText);
          const current = Number(doc.getElementById("spPageIndex").innerText);
          if (current == maxpage) return true;
        }
      },
      autopager: {
        useiframe: true,
        pageElement: '//*[@id="iBody"]'
      }
    },
    {
      name: "天使漫画网,TSDM漫画组",
      url: /^https?:\/\/mh\.tsdm\.net\/comic\/.+/i,
      exampleUrl: "http://mh.tsdm.net/comic/4697/68059.html",
      useiframe: true,
      preLink: {
        startAfter: "?p=",
        inc: -1,
        min: 1
      },
      nextLink: {
        startAfter: "?p=",
        mFails: [/^http:\/\/mh\.tsdm\.net\/comic\/.+\.html/i, "?p=1"],
        inc: 1,
        isLast: function(doc, win, lhref) {
          const pageSelect = doc.getElementById("qTcms_select_i");
          if (pageSelect) {
            const s2os = pageSelect.options;
            const s2osl = s2os.length;
            // alert(s2.selectedIndex);
            if (pageSelect.selectedIndex == s2osl - 1) return true;
          }
        }
      },
      autopager: {
        useiframe: true,
        remain: 1 / 2,
        pageElement: '//img[@id="qTcms_pic"]',
        ipages: [true, 20]
      }
    },
    {
      name: "930mh",
      url: /^https?:\/\/www\.930mh\.com\/manhua\/.+/i,
      exampleUrl: "http://www.930mh.com/manhua/13355/500671.html?p=2",
      preLink: {
        startAfter: "?p=",
        inc: -1,
        min: 1
      },
      nextLink: {
        startAfter: "?p=",
        mFails: [/^https?:\/\/www\.930mh\.com\/manhua\/.+\.html/i, "?p=1"],
        inc: 1,
        isLast: function(doc, win, lhref) {
          const index = doc.getElementById("images").children[1].innerText;
          const nums = index.match(/\d+/g);
          if (Number(nums[0]) >= Number(nums[1])) {
            return true;
          }
        }
      },
      autopager: {
        pageElement: '//div[@id="images"]/img',
        useiframe: true,
        ipages: [true, 20]
      }
    },
    {
      name: "sis001.com",
      url: /^https?:\/\/(\w+\.)?sis001\.com\/forum\/(forum|thread)[0-9\-]+\.html/i,
      exampleUrl: "https://www.sis001.com/forum/forum-230-1.html",
      nextLink: '//div[@class="pages_btns"]//a[@class="next"]',
      autopager: {
        pageElement: '//div[@class="mainbox"]//table[last()]',
        replaceE: '//div[@class="pages_btns"]',
        startFilter: function(doc, win) {
          const firstDiv = doc.querySelector("#ad_text");
          if (firstDiv) {
            firstDiv.parentNode.removeChild(firstDiv);
          }
        }
      }
    },
    {
      name: "xkcd",
      url: "^https?://(?:www.)?xkcd.com",
      nextLink: function(doc, win, cplink) {
        const m = cplink.match(/\d+/);
        if (!m) {
          return cplink + "/2/";
        } else {
          var url = doc.querySelector("a[rel=next]").getAttribute("href");
          url = "https://www.xkcd.com/" + url;
          return url;
        }
      },
      pageElement: 'id("middleContainer")'
    }
  ];
  //  ///////// ----- End of Rules for specific sites -------///////////

  // 统配规则..用来灭掉一些DZ.或者phpwind论坛系统..此组规则..优先级自动降为最低..
  const SITEINFO_TP = [
    {
      name: "Discuz 论坛 - 搜索",
      url: "^https?://bbs\\.[a-z]+\\.cn/search\\.php\\?mod=forum",
      preLink: '//div[@class="pages" or @class="pg"]/descendant::a[@class="prev"][@href]',
      nextLink: '//div[@class="pages" or @class="pg"]/descendant::a[@class="next" or @class="nxt"][@href]',
      autopager: {
        pageElement: '//div[@id="threadlist"]',
        replaceE: '//div[@class="pg"][child::a[@class="nxt"]]'
      }
    },
    {
      name: "Discuz 论坛 - 导读",
      url: /^https?:\/\/(?:bbs|u)\.[^\/]+\/(?:forum\.php\?mod=guide|home\.php\?mod=space)/i,
      preLink: '//div[@class="pages" or @class="pg"]/descendant::a[@class="prev"][@href]',
      nextLink: '//div[@class="pages" or @class="pg"]/descendant::a[@class="next" or @class="nxt"][@href]',
      autopager: {
        pageElement: "//div[@id='postlist'] | //form[@method='post'][@name] | //div[@id='threadlist']/div[@class='bm_c'] | //div[@class='xld xlda']",
        replaceE: '//div[@class="pg"][child::a[@class="nxt"]]'
      }
    },
    {
      name: "Discuz论坛列表",
      url: /^https?:\/\/(?:www\.[^\/]+\/|[^\/]+\/(?:bbs\/)?)(?:2b\/)?(?:(?:forum)|(?:showforum)|(?:viewforum)|(?:forumdisplay))+/i,
      preLink: '//div[@class="pages" or @class="pg"]/descendant::a[@class="prev"][@href]',
      nextLink: '//div[@class="pages" or @class="pg"]/descendant::a[@class="next" or @class="nxt"][@href] | //div[@class="p_bar"]/a[@class="p_curpage"]/following-sibling::a[@class="p_num"]',
      autopager: {
        pageElement: '//form[@method="post"][@name] | //div[@id="postlist"] | //div[@id="threadlist"]',
        replaceE: '//div[@class="pages" or @class="pg"][child::a[@class="next" or @class="nxt"][@href]]',
        lazyImgSrc: "file|pagespeed_lsc_url"
      }
    },
    {
      name: "Discuz论坛帖子",
      url: /^https?:\/\/(?:www\.[^\/]+\/|[^\/]+\/(?:bbs\/)?)(?:2b\/)?(?:(?:thread)|(?:viewthread)|(?:showtopic)|(?:viewtopic))+/i,
      preLink: '//div[@class="pages" or @class="pg"]/descendant::a[@class="prev"][@href]',
      nextLink: '//div[@class="pages" or @class="pg"]/descendant::a[@class="next" or @class="nxt"][@href] | //div[@class="p_bar"]/descendant::a[text()="??"]',
      autopager: {
        pageElement: '//div[@id="postlist"] | //form[@method="post"][@name]',
        replaceE: '//div[@class="pages" or @class="pg"][child::a[@class="next" or @class="nxt"][@href]]',
        lazyImgSrc: "zoomfile",
        stylish:
          '.mbbs_code{font-family:Monaco,Consolas,"Lucida Console","Courier New",serif;font-size:12px;line-height:1.8em;list-style-type:decimal-leading-zero;padding-left:10px;background:none repeat scroll 0 0 #f7f7f7;color:#666;border:1px solid #ccc;overflow:hidden;padding:10px 0 5px 10px}',
        filter: function(pages) {
          // 回复后插入到最后一页
          const replays = document.querySelectorAll("#postlistreply");
          if (replays.length > 1) {
            const first = replays[0];
            first.parentNode.removeChild(first);
          }

          // 在卡饭论坛如果不存在，会提示，所以默认禁用
          // var SyntaxHighlighter = unsafeWindow.SyntaxHighlighter;
          // if (SyntaxHighlighter && SyntaxHighlighter.highlight) {
          //     SyntaxHighlighter.highlight();
          // }
        },
        documentFilter: function(doc) {
          // 卡饭论坛的下一页代码区域可能无法着色，所以手动修改并添加样式
          const pres = doc.querySelectorAll('pre[class^="brush:"]');
          [].forEach.call(pres, function(pre) {
            pre.classList.add("mbbs_code");
          });
        }
      }
    },
    {
      name: "phpWind论坛列表",
      url: /^https?:\/\/(?:www\.[^\/]+\/|[^\/]+\/(?:bbs\/)?)?thread/i,
      preLink: '//div[starts-with(@class,"pages")]/b[1]/preceding-sibling::a[1][not(@class)][@href] | //div[starts-with(@class,"pages")]/ul[1]/li[b]/preceding-sibling::li/a[1][not(@class)][@href]',
      nextLink: '//div[starts-with(@class,"pages")]/b[1]/following-sibling::a[1][not(@class)] | //div[starts-with(@class,"pages")]/ul[1]/li[b]/following-sibling::li/a[1][not(@class)]',
      autopager: {
        pageElement: '//div[@class="t z"] | //div[@class="z"] | //div[@id="ajaxtable"]'
      }
    },
    {
      name: "phpWind论坛帖子",
      url: /^https?:\/\/(?:www\.[^\/]+\/|[^\/]+\/(?:bbs\/)?)?read/i,
      preLink: '//div[starts-with(@class,"pages")]/b[1]/preceding-sibling::a[1][not(@class)][@href] | //div[starts-with(@class,"pages")]/ul[1]/li[b]/preceding-sibling::li/a[1][not(@class)][@href]',
      nextLink: '//div[starts-with(@class,"pages")]/b[1]/following-sibling::a[1][not(@class)] | //div[starts-with(@class,"pages")]/ul[1]/li[b]/following-sibling::li/a[1][not(@class)]',
      autopager: {
        pageElement: '//div[@class="t5"] | //div[@class="read_t"] | //div[@id="pw_content"]'
      }
    },
    {
      name: "phpBB列表",
      url: /^https?:\/\/[^\/]+(\/[a-z,0-9]+)?\/viewforum/i,
      exampleUrl: "http://www.firefox.net.cn/forum/viewforum.php?f=4",
      nextLink: "auto;",
      autopager: {
        pageElement: '(//div[@id="page-body"]/div[@class="forumbg"]|//table[@class="forumline"]|//table[@class="tablebg"])',
        // replaceE:'//fildset[@class="display-options")]',
        remain: 1 / 3
      }
    },
    {
      name: "phpBB帖子",
      url: /^https?:\/\/[^\/]+(\/[a-z,0-9]+)?\/viewtopic/i,
      exampleUrl: "http://www.firefox.net.cn/forum/viewtopic.php?t=34339",
      nextLink: "auto;",
      autopager: {
        // pageElement:'//div[@id="page-body"]',
        pageElement: '(//div[@id="page-body"]/div[contains(@class,"post")]|//table[@class="forumline"]|//table[@class="tablebg"])'
        // replaceE:"//fildset[@class='display-options']",
      }
    },
    {
      name: "phpBB Search",
      url: /^https?:\/\/forum\.[^\/]+\/search\.php/i,
      exampleUrl: "http://forum.everedit.net/search.php?keywords=%E5%A4%A7%E7%BA%B2",
      nextLink: "auto;",
      autopager: {
        pageElement: 'id("page-body")/div[starts-with(@class, "search post")]',
        replaceE: 'id("page-body")/ul[@class="linklist"]'
      }
    }
  ];

  // 兼容 oautopager的规则放在这里,此规则组..优先级最低(比统配规则还低)..
  // 所以说尽量不要放规则在这个组里面.
  const SITEINFO_comp = [
    {
      name: "discuz论坛通用搜索",
      url: "^https?://[^/]+/f/(?:discuz|search)",
      nextLink: "auto;",
      pageElement: 'id("result-items")'
    },
    {
      name: "View forum - 通用",
      url: "^https?://.+?/viewforum\\.php\\?",
      nextLink:
        '//span[@class="gensmall"]/b/b/following-sibling::a[1] | (//table/tbody/tr/td[@class="nav"])[last()]/b[last()]/following-sibling::a[1]  | //div[@class="pagination"]/span/strong/following-sibling::a[1] | //a[text()="Next"]',
      pageElement: '//ul[contains(concat(" ",@class," ")," topics ")]|//form[table/@class="forumline"]'
    },
    {
      name: "wiki 通用",
      url: ".\\?(?:.+&)?search=",
      nextLink: '//a[@class="mw-nextlink"]',
      pageElement: '//ul[@class="mw-search-results"]'
    },
    {
      name: "通用 Forum 规则1",
      url: "^https?://.*((showthread\\.php\\?)|(forum|thread))",
      nextLink: '//a[@rel="next"]',
      pageElement: '//div[@id="posts"]|//ol[@id="posts"]/li',
      separatorReal: false
    },
    {
      name: "通用 Forum 规则2 vBulletin threads",
      url: "^https?://[^?#]+?/showthread\\.php\\?",
      nextLink: '//tr[@valign="top"]//div[@class="pagenav"]//a[contains(text(), ">")]',
      pageElement: '(//div[@class="pagenav"])[1]|//div[@id="posts"]/node()',
      separatorReal: false
    },
    {
      name: "通用 Forum 规则3 vBulletin thread_list",
      url: "^https?://.*((forumdisplay\\.php\\?)|forum)",
      nextLink: "auto;",
      pageElement: '//div[@id="posts"]/div[@align="center"] | //table[@class="tborder"][@id="threadslist"]',
      separatorReal: false
    },
    {
      name: "通用 Forum 规则4",
      url: /^https?:\/\/forums\..*\/threads/i,
      nextLink: '(//div[@class="PageNav"])[1]//a[contains(text(),' > ")]",
      pageElement: '//ol[@id="messageList"]/li',
      separatorReal: false
    },
    {
      name: "PHPWind 5.3.0 / 6.0.0 / 6.3.2 / 7.0.0 / 7.5.0 - View Thread",
      url: "^https?://.+/read\\.php\\?.*tid((=[0-9]+.*)|(-[0-9]+.*\\.html?))$",
      nextLink: "auto;",
      pageElement: '//form[@name="delatc"]',
      exampleUrl: "http://www.yydzh.com/read.php?tid=1584013"
    },
    {
      name: "Typecho",
      url: "^https?://",
      nextLink: "//ol[@class='page-navigator']/li[@class='next']/a",
      autopager: {
        pageElement: function(doc, win, _cplink) {
          const gen = getElementByXpath("//head/meta[@name='generator']", doc, doc);
          if (!gen || !gen.content.includes("Typecho") || !doc.documentElement.outerHTML.includes("Typecho")) {
            return null;
          }
          try {
            return getAllElementsByXpath("//article[@class='post'] | //div[@class='blog-post']", doc, doc);
          } catch (error) {
            return null;
          }
        },
        relatedObj: true
      }
    },
    {
      name: "WordPress",
      url: "^https?://[^/]+(/page/\\d+)?",
      nextLink: function(doc, win, _cplink) {
        const cplink = _cplink.replace(/^(.*)(#[^\/]*)?$/, "$1");
        if (cplink.slice(cplink.length - 5, cplink.length) === ".html") {
          return undefined;
        }
        if (cplink.slice(cplink.length - 4, cplink.length) === ".htm") {
          return undefined;
        }
        const a = /^(https?:\/\/.*?)(\/page\/\d+\/?)?$/.exec(cplink);
        if (a[2]) {
          const b = Number(/\/page\/(\d+)/.exec(a[2])[1]) + 1;
          return cplink.replace(/^(https?:\/\/.*?\/page\/)\d+(.*)$/, "$1" + String(b) + "$2");
        } else {
          return cplink.replace(/^(.*?)\/?$/, "$1") + "/page/2";
        }
      },
      autopager: {
        pageElement: function(doc, win, _cplink) {
          const blackList = [/^https?:\/\/bwg\.net\/?$/, /^https?:\/\/sunbox\.cc\/?$/, /^https?:\/\/anime1\.me/, /^https?:\/\/github\.com/];
          for (var i = 0; i < blackList.length; i++) {
            if (blackList[i].test(_cplink)) {
              return null;
            }
          }
          // detect if this is wordpress
          const wpText = ["wp-content", "wp-plugin", "wp-comment"];
          var isWP = false;
          for (i = 0; i < wpText.length; i++) {
            if (doc.documentElement.outerHTML.indexOf(wpText[i]) > -1) {
              isWP = true;
              break;
            }
          }
          if (!isWP) {
            return null;
          }

          // if this is the page of an article, return null
          const submitComment = ["发表评论", "提交评论", "添加留言", "提交留言", "コメントを送信", "SUBMIT COMMENT", "POST COMMENT", "Submit Comment", "Post comment", "Post Comment"];
          for (i = 0; i < submitComment.length; i++) {
            if (getElementByXpath("//input[@value='" + submitComment[i] + "']", doc, doc)) {
              return null;
            }
            if (getElementByXpath("//a[text()='" + submitComment[i] + "']", doc, doc)) {
              return null;
            }
          }

          const postXpath = ["//button[@id='submit']", "//div[@class='single-post-box']", "//div[@class='single_post']"];
          for (i = 0; i < postXpath.length; i++) {
            if (getElementByXpath(postXpath[i], doc, doc)) {
              return null;
            }
          }

          // get from latest post
          // example https://next.365cent.com/ v5.1.1
          var posts = getAllElements("//div[contains(@class,'main')]//article[starts-with(@id,'post-')]", doc, doc, win);
          if (posts.length > 0) {
            return posts;
          }
          posts = getAllElements("//article[starts-with(@id,'post-')]", doc, doc, win);
          if (posts.length > 0) {
            return posts;
          }
          posts = getAllElements("//*[contains(@class,'container')]//article|//*[contains(@class,'container')]//div[contains(@class,'article-post')]", doc, doc, win);
          if (posts.length > 0) {
            return posts;
          }
          //https://www.portablesoft.org/
          posts = getAllElements("//div[@id='main']/div[@class='post-entry']", doc, doc, win);
          if (posts.length > 0) {
            return posts;
          }
          posts = getAllElements("//*[contains(@class,'container')]//div[substring(@class,string-length(@class) -string-length('post')+1)='post']", doc, doc, win);
          return posts;
        },
        relatedObj: true
      }
    },
    {
      name: "Generic Posts Rule created by swdyh",
      exampleUrl: "http://wedata.net/items/400.json",
      url: "^https?://.+",
      pageElement:
        "(//article[not(contains(../@class,'widget'))][not(contains(@class,'columns four'))][not(ancestor::*[starts-with(@class,'sidebar')])]|//*[starts-with(@id,'post-')][not(contains(@id,'post-rating'))])[not(.//*[contains(@class,'admz')])][not(id('load-more-posts') or @id='fpost' or contains(@class,'carousel'))][parent::node()[not(self::h2)][not(@id='side')][not(contains(@class,'thumbnail'))][not(following-sibling::*[not(@id='side')][article or *[starts-with(@id,'post-')]])]/*[self::article or starts-with(@id,'post-')]/following-sibling::*[self::article or starts-with(@id,'post-')][not(contains(@id,'nav'))]]|id('content')[count(div)>1]/div[contains(@class,'post')][not(contains(div/@class,'breadcrumb'))][not(contains(div/@class,'nav'))]",
      nextLink:
        "(//*[not(contains(@class,'_inactive'))]/a[starts-with(@class,'nextpostslink') or contains(@class,'next page-numbers') or (.|..)[normalize-space(@rel)='next' or normalize-space(@class)='next' or contains(@class,'pagination-next')]][not(span/@class='link-text')]|//*[contains(@class,'nav-previous')][not(contains(@class,'pull'))]/a|(//*[contains(@class,'current')][number()>0]/following-sibling::a[1]|(//li|//span|//div)[(.//*|.)[contains(@class,'current')]][number()>0]/following-sibling::*[self::li or self::span or self::div][1]/a))[not(starts-with(@href, '#'))]",
      autopager: {
        stylish: '@-moz-document domain("wotopi.jp") { .figure-list{display:flex; flex-wrap:wrap;} }'
      }
    }
  ];

  const axios = (function() {
    /**
     * axios-like library for Greasemonkey
     * @param {string} method "GET"/"POST"
     * @param {string} url requested url
     * @param {object} conf Greasemonkey request configuration
     * @returns {promise} reponse is resolved
     */
    const axios = function(method, url, conf) {
      return new Promise(function(resolve, reject) {
        const req = {
          url: url,
          method: method,
          timeout: 60000,
          onload: function(res) {
            resolve(res);
          },
          onerror: function(err) {
            reject(err);
          },
          ontimeout: function(err) {
            reject(err);
          }
        };
        const acceptedConf = ["binary", "context", "data", "headers", "method", "overrideMimeType", "password", "timeout", "upload", "url", "usr"];
        if (conf) {
          for (var prop in conf) {
            if (acceptedConf.indexOf(prop) > -1) {
              req[prop] = conf[prop];
            }
          }
          if (conf.noCache === true) {
            req.url += "?_" + new Date().getTime();
          }
        }
        GM.xmlHttpRequest(req);
      });
    };

    axios.get = function(url, conf) {
      return axios("GET", url, conf);
    };

    axios.post = function(url, data, conf) {
      if (!conf) {
        conf = {data: data};
      } else {
        conf.data = data;
      }
      return axios("POST", url, conf);
    };
    return axios;
  })();

  //  ///////// ----- Rules obtained from online json files -------///////////
  var SITEINFO_json = [];
  const jsonRule = {
    info: {
      expire: new Date("1992-05-15"),
      updatePeriodInDay: 1 // json rules are update everyday
    },
    rule: [[], []], // length should be the same as this.provider
    /**
     * import string into data
     * @param {object} jsonRuleInfo GM saved info
     * @param {object} jsonRule GM saved rules
     * @returns {void}
     */
    importData: function(jsonRuleInfo, jsonRule) {
      const _jsonRuleInfo = JSON.parse(jsonRuleInfo);
      this.info.expire = new Date(_jsonRuleInfo.expire);
      this.info.updatePeriodInDay = _jsonRuleInfo.updatePeriodInDay;
      this.rule = JSON.parse(jsonRule);
    },
    saveData: function(withRule, updatePeriodInDay) {
      const promise = [];
      if (withRule) {
        promise.push(GM.setValue("SITEINFO_json", JSON.stringify(this.rule)));
      }
      const _updatePeriodInDay = typeof updatePeriodInDay === "undefined" ? this.info.updatePeriodInDay : updatePeriodInDay;
      const today = new Date();
      this.info.expire = new Date(today.getTime() + _updatePeriodInDay * 24 * 60 * 60 * 1000);
      promise.push(GM.setValue("jsonRuleInfo", JSON.stringify(this.info)));
      return Promise.all(promise);
    },
    exportRule: function() {
      return _.flat(this.rule);
    },
    provider: [
      {
        name: "machsix.github.io",
        url: ["https://machsix.github.io/Super-preloader/mydata.json", "https://cdn.jsdelivr.net/gh/machsix/Super-preloader/dist/mydata.json"],
        detailUrl: "https://machsix.github.io/Super-preloader/mydata_detail.json",
        ruleParser: function(responseText) {
          return JSON.parse(responseText);
        }
      },
      {
        name: "wedata.net",
        url: ["http://wedata.net/databases/AutoPagerize/items.json", "https://super-preloader.netlify.com/wedata.json"],
        detailUrl: "http://wedata.net/databases/AutoPagerize.json",
        ruleParser: function(responseText) {
          return JSON.parse(responseText)
            .filter(function(i) {
              const nameFilter = ["Generic Posts Rule", "hAtom"];
              for (var j = 0; j < nameFilter.length; j++) {
                if (nameFilter[j].indexOf(i.name) >= 0) {
                  return false;
                }
              }
              return true;
            })
            .map(function(i) {
              i.data.name = i.name;
              i.data.source = "wedata.net";
              return i.data;
            });
        }
      }
    ],
    /**
     * Download rule from provider[i]
     * @param {number} i provider[i]
     * @returns {promise} the downloaded rule
     */
    downloadRule: function(i) {
      const createRequest = function(iurl) {
        return new Promise(
          function(resolve, reject) {
            axios
              .get(this.provider[i].url[iurl], {noCache: true})
              .then(
                function(res) {
                  try {
                    const rule = this.provider[i].ruleParser(res.responseText);
                    console.warn("%c[Super-preloader] %c[UpdateRule] %s [Status] %s ", debugStyle, "", this.provider[i].name, "Success");
                    resolve(rule);
                  } catch (error) {
                    console.error("%c[Super-preloader] %c[UpdateRule] %s [Status] %s ", debugStyle, "", this.provider[i].name, "Fail to parse");
                    reject(error);
                  }
                }.bind(this)
              )
              .catch(
                function(error) {
                  if (iurl < this.provider[i].url.length) {
                    return createRequest(iurl + 1);
                  } else {
                    console.error("%c[Super-preloader] %c[UpdateRule] %s [Status] %s ", debugStyle, "", this.provider[i].name, "Fail to download");
                    reject(error);
                  }
                }.bind(this)
              );
          }.bind(this)
        );
      }.bind(this);
      return createRequest(0);
    },
    /**
     * update rule for a specific index
     * @param {number} i index of provider
     * @param {boolean} force whether to forcely update
     * @param {Object} lastUpdate override this.data.expire
     * @returns {void}
     */
    updateRule: function(i, force, lastUpdate) {
      // update rule[i] if we don't have rule for it
      const _force = typeof force !== "undefined" ? this.rule[i].length < 1 || force : this.rule[i].length < 1 || false;
      const _lastUpdate = typeof lastUpdate !== "undefined" ? lastUpdate : this.info.expire;
      return new Promise(
        function(resolve, reject) {
          axios
            .get(this.provider[i].detailUrl, {noCache: true})
            .then(
              function(res) {
                const detail = JSON.parse(res.responseText);
                const ruleLastUpdate = new Date(detail.updated_at);
                if (_force || ruleLastUpdate > _lastUpdate || this.rule[i].length === 0) {
                  // download rule for:
                  // 1. forced update
                  // 2. rule is updated
                  // 3. rule is empty
                  this.downloadRule(i)
                    .then(function(rule) {
                      resolve(rule);
                    })
                    .catch(function(error) {
                      reject(error);
                    });
                } else {
                  debug("%c[Super-preloader] %c[UpdateRule] %s [Status] %s ", debugStyle, "", this.provider[i].name, "No need to update");
                  resolve(this.rule[i]);
                }
              }.bind(this)
            )
            .catch(
              function(error) {
                console.error("%c[Super-preloader] %c[UpdateRule] %s [Status] %s ", debugStyle, "", this.provider[i].name, "Fail to fetch detail");
                reject(error);
              }.bind(this)
            );
        }.bind(this)
      );
    },
    /**
     * update all rules
     * @param {force} force force update rule
     * @return {promise/val} the resolved rules
     */
    updateAllRules: function(force) {
      const _force = this.rule.length !== this.provider.length ? true : !!force;
      const today = new Date();

      if (_force || today > this.info.expire) {
        const reflect = function(promise) {
          return promise.then(
            function(v) {
              return {v: v, status: "resolved"};
            },
            function(e) {
              return {e: e, status: "rejected"};
            }
          );
        };

        // update rule if we have mismatched rule and provider
        return Promise.all(
          this.provider.map(
            function(val, i) {
              return reflect(this.updateRule(i, _force));
            }.bind(this)
          )
        ).then(
          function(v) {
            var s = true;
            this.rule = v.map(function(val, index) {
              if (val.status === "resolved") {
                return val.v;
              } else {
                s = false;
                return [];
              }
            });

            if (s) {
              // although it returns a promise, we don't need to wait for it
              this.saveData(true);
            } else {
              this.saveData(true, -1);
            }
            return Promise.resolve(this.exportRule());
          }.bind(this)
        );
      } else {
        this.saveData(false);
        debug("%c[Super-preloader] %c[Rule] Next update at: %s", debugStyle, "", this.info.expire.toISOString());
        return Promise.resolve(this.exportRule());
      }
    }
  };

  //  ///////// ----- End of Rules obtained from online json files -------///////////

  // 分页导航的6个图标以及颜色设置:
  const sep_icons = {
    top:
      "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABYAAAAWCAYAAADEtGw7AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAWtJREFUeNrclE0rRGEUx8c1GUpRJIVIZGdhZCVr38GGhaI0ZXwCkliglChZEcvJxhdgYWOjLEUpm/EyiLzze+o8dTzdO3PljoVTv7rPc8/5d+6555xYrEhWop6boda5+6l9wjWcWpF+WIbqCJJ9hFRcDr3QAIkIhKugz5PDfkSixkphz5aiAnqgE8rgWRxGoSOPyBkswQuUwyscw4HrmFCZL8Kt/JAg7mEFPEmo4FdPwk0BUcsdzIap0TQ8qMAPuICcEjLnd+VjSjcfJNgIc/DkZGSymYGsnK9EZMrxe4MFaNGiZjC2fT5zQ3p7QDK1dR2GSljziclAvRUe8nHYVA4jjvC43NfAuk/smB2QNqcsWxKcLbAKTFnS0hWD6n27Fd6FLqiDI5iQmQ9jpiVT0sNJ6aYd7dAE3QHBbinSAX5JWWaxuLo8F35jh/bBK9Y+/r/Cl6pLcnna8NvuDGMnslpbZRpXZYT/3r4EGACZL3ZL2afNFAAAAABJRU5ErkJggg==",
    bottom:
      "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABYAAAAWCAYAAADEtGw7AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAXFJREFUeNrM1c8rBGEcx/FdtCEkLqYtpdwkKSUHUhxwITdK+Z3yM2cOLnJ39Cc44SgHScmJwlFxsIdlCScO6/2t76Onp52dXTtbnno1M8+Pz84+zzMzkcg/KA3oRTzM0A4cI4VTdIUVPIM3pPGO5aABJTkGx1BqjYmFFZxW7nnBwXmXogWX6bEGc2jEIU7+kNWDUSSwZyqndSvJ3N1g2Bm0oLtB2j+w7rQP4MpqXzRT0YRaPW/BthMedYLs60HsoE2vq9BsPwAJa8XFLUa0fUrvROo/saT1Q9adGimdlt8yj6TT6Q6d2vaida9YRbtP6EqmBZC5fHA6X+AAz1bwEc6cfk9+oaZM4NoZJL70+J2hTaZtNpet041zK8yP/Mgl+rOF1emr0UM1xnAfEPyISd0Jno6vtx+QuM6PZ22lpO7dbEV2Siv6rPeIjNs1HdYC7ixfG+YBqdTVDqPIv6iIWvO7iXGUFxAqi72PraJ9IH8EGACQcYjYRd5GHwAAAABJRU5ErkJggg==",
    pre:
      "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABYAAAAWCAYAAADEtGw7AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAASlJREFUeNpiYBjOoBiIrwJxFRAzUsvQViD+CMT/gfgTEPdRy9BPUENh+AsQ91JiaAuSS9HxZ3INb8Hi0v+UurwF6qL/ROBvQNxDrKFfkTT+A+JnQPwBKfJA/L9Ian7ic7kMEHcC8Q80F3UAcRsQv4by30INaUJT9weaWhSQDRUB4uVYvLkYiAWAOBopvEFBlArEPEA8G4ue9UAsATM4EYuCJUgKMtAMLoSKCwPxXCx6c1igClTQgmUZVPNrHMEGy3mgYCkCYiYgTkCSV4UZvA2IjYBYDIgvQbPvOyJTECid5wHxbyA2BuL3QLwRWYEsEJvg0IweFEU41IEMlgcxWJAEH0MxJeAsjMFEq6Jw+Br8BimVfMCTDEkG7EBcA8T3oWUJx4DVYwABBgCannnSzbgwIQAAAABJRU5ErkJggg==",
    next:
      "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABYAAAAWCAYAAADEtGw7AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAT1JREFUeNrc1b1KA0EYheEl/iARFFEkKl6D0UK8CrEVrCwEexFCtBIlRWIjsfEiLL0FKzs7QUWxM2piFMUkvhPOwLAs2TGuCn7wkNll5jC7+w0Jgv9avdjAObbQn1TwCu7QwhWW4xakPIOHMKzxGCaSCm6ioXHLZ0Hqpz7KrwRPIvvNvBlM2zYyNY8cMjhDHo9fCBzErnIqKNjgRSxpvIABbOLes2MKWHfuXdhXcR2avKrJ4zGhI9gLhQbq9XaZgGO1kutIOzIHpKp7NawhjYOINSeY6lFwHacw17P6NTWHd4xqnNbcS83LObtsaCPbEW+gXUW8ODswC27xoOsn3ODDmfOGss9XLuE54jGjvPqGuuG1mFDzZIfdNHynnde7DbW1r5DwTstJHP2iE55YqD36ebXZDvr+7L/sU4ABAIpVZWnoA5GkAAAAAElFTkSuQmCC",
    next_gray:
      "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABYAAAAWCAYAAADEtGw7AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAtxJREFUeNrclc9L2mEcx7/6NbVZqRVj7pIOlIUuZ1HMgv0BDcqT7JrskH13ELPBF7eTvz10HznWQBlBRIfBXIfBLmqXscvYZWPKrMNIU9Apmrr34/w6i0ovMZjw+H0+z/N8Xt+Pn/fn80hR/+WHYRhBIpFwRKPRz/F4/KnD4RB28xH0Ah4cHHyoUCjsIpFIIZPJHkml0m9Yfn2ZD78XcL1eH6rValIMCmMUtqKbD7/HbNQxaq15oxcH/lXpcmXgtnh2u/2mXC6/DqE+sSxLlUqlniE0TVPBYJAqFot6+GV9Pt+PJthms80sLS2xEonkhlgs/jgwMOBcXV3N5fP5rlCcp9bX1yWLi4uecrk8U6lUshDY3wRbLJYFGKZsNksq4N78/LwY9hOn05k5Ojqi+PzTGePxeFwZUl6vd8hkMvkPDg6sZJ2M5eXlr1wqUu2kA5JOpy2IAO+oO9fW1n5mMpk2nDjmcjkKNU25XC652Wx2pVIp65mXJ2nyjUPpqakpNZxuA8Y5T87OzsobjcYHpVKpGhsbe1CtVkXYqxQKhTdqtfqL1Wr1JpPJxxyU5Lq/vz8aCoX8TTDatYiFhF6vxx5tAJwm8OPj48m5ubmKSqUaAWwSa9eQw6JGo/luNBoNh4eHbAe0JhAINsLh8LNAIJCiudhxB+Qh2ludTifDAQLvI3AIch+Rkl8jJlrhCbOqgfoLmDepOF/BfGNra2sFFZFtvqgzMbFYjAiyp9Vqh4VC4cTJyYmQ90epIQJtHRO1bA5aRhAvdnZ2GI/H87cEz5YPgeOS2RsfHx9B7u+gOi68yQAtYX9zd3eXgZCna/s8By5ypGUUzhOISHgO9BfWXwG6chZ6IbiVc6LwnsFgGIVAepLzjk4rYW1ze3ubcbvd53fjZV2FaqGQ63fT09PDMO9i9BEoon0J9Rm/339xm3dr2f39fVLX7wFvoMVvoYWfRyIRFndD/Z/8nf0WYAA8EC1Z/ZNm4gAAAABJRU5ErkJggg==",
    pre_gray:
      "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABYAAAAWCAYAAADEtGw7AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAslJREFUeNrclTtMWmEUxz/uvTzlIUhpNMR0aGNjrNHSmHTqRJyadujQDbSGRwJUaYCmDizqUEw6ODVNGgbpYCfSpFINCQzFR9oyMXRsXFCsAXkIKNL/R7gGWxOsSdPEk5zc3O+e87vn+59zv0vIpbSJiQmyubn5LBKJpNbX11+4XC5Buxy2XYDNZiMOh2OW4ziPTCbTi8XikeHh4SsSieQTXnIxsN1uJ1ardVYgEDgPDw+V9Xqd1Go1Mcuyg7AuuVy+sra29ndgVEnGx8dnhEKhs1qtKgE/eXZ8fCzC+q3+/n6tSqVaSSQS5wM7nU5iMplmsF1XpVI5BeXt6OhIBFkGAe9SKpV/wNmzKjWbzRT6tFwuK86CUqPrkIVWPjQwMKBWKBSn4Ozv0LGxsRmRSDSFSjua0Do8TRWAS+B5+B68g/IhixCNvQPN1WjuieZsS/f1aNQ0wzBuaCqlUCQRtVr9Es1K4kVDWJNhrQjAIiqMlkqle804FnkjBoOhEzv4vrGxkW2ALRaLFrq+QoAV2nE8tLe3dzEYDE5vb2939vX1PcBkiKVSaQ1jForFYq+NRqMum83ebsYzmJq7sGu4xhkKxsDfB/AxnO860ev1oeXlZU8gEMgmk0kFqmw8o9dUKiWfn58vhMPh54h7S+OpQXNSLBYfejyeR1yzw9dbRon09PS8W11dnfL5fJl8Pk+0Wi3hk5vyCNBY4vV6f0Im9+joKJNOp818o8G70ah4aWnpIzSKYCa/dXd3B+PxuHNycjKzs7NzAms1+qFQy+VydDRz0WjUpdPp3tB8TFM0FAqFGxXPzc19plJrNJqraMoXt9tNt3Suc+Tg4ICeJfmFhQVLoVAwoKG7fr//B8cHAL6Fy9ZFDinaG/r5w77ya8y/OhEvKRhjtIup2YMTeBb3mXY53HnAmNkP+/v7NzHTTwAO4f79f/ud/RJgAOLcRNZqLojMAAAAAElFTkSuQmCC",
    text_span_style: "color:#595959!important;"
  };

  // 悬浮窗的状态颜色.
  const FWKG_color = {
    loading: "#8B00E8", // 读取中状态
    prefetcher: "#5564AF", // 预读状态
    autopager: "#038B00", // 翻页状态
    Apause: "#B7B700", // 翻页状态(暂停).
    Astop: "#A00000", // 翻页状态(停止)(翻页完成,或者被异常停止.)(无法再开启)
    dot: "#00FF05" // 读取完后,会显示一个小点,那么小点的颜色.
  };

  // 当没有找到规则的时候,进入自动搜索模式.
  // 在没有高级规则的网站上.的一些设置..
  // (Default settings)
  var autoMatch = {
    keyMatch: true, // 是否启用关键字匹配
    cases: false, // 关键字区分大小写....
    digitalCheck: true, // 对数字连接进行检测,从中找出下一页的链接
    pfwordl: {
      // 关键字前面的字符限定.
      previous: {
        // 上一页关键字前面的字符,例如 "上一页" 要匹配 "[上一页" ,那么prefix要的设置要不小于1,并且character要包含字符 "["
        enable: true,
        maxPrefix: 3,
        character: [" ", "　", "[", "［", "<", "＜", "?", "?", "<<", "『", "「", "【", "(", "←"]
      },
      next: {
        // 下一页关键字前面的字符
        enable: true,
        maxPrefix: 2,
        character: [" ", "　", "[", "［", "『", "「", "【", "("]
      }
    },
    sfwordl: {
      // 关键字后面的字符限定.
      previous: {
        // 上一页关键字后面的字符
        enable: true,
        maxSubfix: 2,
        character: [" ", "　", "]", "］", "』", "」", "】", ")"]
      },
      next: {
        // 下一页关键字后面的字符
        enable: true,
        maxSubfix: 3,
        character: [" ", "　", "]", "］", ">", "﹥", "?", "?", ">>", "』", "」", "】", ")", "→"]
      }
    },
    useiframe: SITEINFO_D.useiframe || false, // (预读)是否使用iframe..
    viewcontent: false, // 查看预读的内容,显示在页面的最下方.
    FA: {
      // 强制拼接 选项 功能设置.
      enable: false, // 默认启用 强制拼接
      manualA: false, // 手动翻页.
      useiframe: false, // (翻页)是否使用iframe..
      iloaded: false, // (只在opera有效)如果使用iframe翻页..是否在iframe完全load后操作..否则在DOM完成后操作
      itimeout: 0, // 当使用iframe翻页时在完成后继续等待多少ms后,在操作..
      remain: 1, // 剩余页面的高度..是显示高度的 remain 倍开始翻页..
      maxpage: 99, // 最多翻多少页..
      ipages: [false, 2], // 立即翻页,第一项是控制是否在js加载的时候立即翻第二项(必须小于maxpage)的页数,比如[true,3].就是说JS加载后.立即翻3页.
      separator: true // 显示翻页导航..(推荐显示.)..
    }
  };

  // 上一页关键字
  var prePageKey = [
    "上一页",
    "上一頁",
    "上1页",
    "上1頁",
    "上页",
    "上頁",
    "翻上頁",
    "翻上页",
    "上一张",
    "上一張",
    "上一幅",
    "上一章",
    "上一节",
    "上一節",
    "上一篇",
    "前一页",
    "前一頁",
    "后退",
    "後退",
    "上篇",
    "previous",
    "previous Page",
    "前へ",
    "前のページ"
  ];

  // 下一页关键字
  var nextPageKey = [
    "下一页",
    "下一頁",
    "下1页",
    "下1頁",
    "下页",
    "下页 ›",
    "下頁",
    "翻页",
    "翻頁",
    "翻下頁",
    "翻下页",
    "下一张",
    "下一張",
    "下一幅",
    "下一章",
    "下一节",
    "下一節",
    "下一篇",
    "前进",
    "下篇",
    "后页",
    "往后",
    "Next",
    "Next Page",
    "次へ",
    "次のページ",
    "次のページ »",
    "下一页 →",
    "下一頁 →",
    "下1页 →",
    "下1頁 →",
    "下页 →",
    "下頁 →",
    "翻页 →",
    "翻頁 →",
    "翻下頁 →",
    "翻下页 →",
    "下一张 →",
    "下一張 →",
    "下一幅 →",
    "下一章 →",
    "下一节 →",
    "下一節 →",
    "下一篇 →",
    "前进 →",
    "下篇 →",
    "后页 →",
    "往后 →",
    "Next →",
    "Next Page →",
    "次へ →",
    "次のページ →",
    "下一页 »",
    "下一頁 »",
    "下1页 »",
    "下1頁 »",
    "下页 »",
    "下頁 »",
    "翻页 »",
    "翻頁 »",
    "翻下頁 »",
    "翻下页 »",
    "下一张 »",
    "下一張 »",
    "下一幅 »",
    "下一章 »",
    "下一节 »",
    "下一節 »",
    "下一篇 »",
    "前进 »",
    "下篇 »",
    "后页 »",
    "往后 »",
    "Next »",
    "Next Page »",
    "次へ »",
    "次のページ »",
    "后一页",
    "後一頁",
    "下一页 ›",
    "下一頁 ›",
    "下1页 ›",
    "下1頁 ›",
    "下页 ›",
    "下頁 ›",
    "翻页 ›",
    "翻頁 ›",
    "翻下頁 ›",
    "翻下页 ›",
    "下一张 ›",
    "下一張 ›",
    "下一幅 ›",
    "下一章 ›",
    "下一节 ›",
    "下一節 ›",
    "下一篇 ›",
    "前进 ›",
    "下篇 ›",
    "后页 ›",
    "往后 ›",
    "Next ›",
    "Next >",
    "Next Page ›",
    "次へ ›",
    "次のページ ›",
    "»",
    "→",
    "Next >"
  ];
  // THX to https://greasyfork.org/en/forum/discussion/39361/x
  // 出在自动翻页信息附加显示真实相对页面信息，一般能智能识别出来。如果还有站点不能识别，可以把地址的特征字符串加到下面
  // 最好不要乱加，一些不规律的站点显示出来的数字也没有意义
  const REALPAGE_SITE_PATTERN = ["search?", "search_", "forum", "thread"];

  // ------------------------下面的不要管他-----------------
  /// ////////////////////////////////////////////////////////////////
  Promise.all([
    GM.getValue("prefs", JSON.stringify(prefsFactory)),
    GM.getValue("SITEINFO_D", JSON.stringify(SITEINFO_D)),
    GM.getValue("autoMatch", JSON.stringify(autoMatch)),
    GM.getValue("jsonRuleInfo", JSON.stringify(jsonRule.info)),
    GM.getValue("SITEINFO_json", JSON.stringify(jsonRule.rule)),
    GM.getValue("version", "1.0.00")
  ]).then(function(values) {
    // retrieve settings
    prefs = JSON.parse(values[0]);
    SITEINFO_D = JSON.parse(values[1]);
    autoMatch = JSON.parse(values[2]);

    // import jsonRule to its handler
    jsonRule.importData(values[3], values[4]);
    SITEINFO_json = jsonRule.exportRule();

    // check the consistency of script settings
    const myVersion = values[5];
    if (versionCompare(myVersion, scriptInfo.version) < 0) {
      // update rule if the script is upgraded or it is installed for the first time
      if (upgradeNotification) {
        if (upgradeNotification.show(myVersion)) {
          if (i8n() === "zh_CN") {
            const text = "脚本从 v" + myVersion + " 升级到 v" + scriptInfo.version + "。 ";
            // eslint-disable-next-line no-undef
            GM_notification(text + upgradeNotification.text.zh_CN, upgradeNotification.title, upgradeNotification.image, upgradeNotification.onload);
          } else {
            const text = "Script is upgraded from v" + myVersion + " to v" + scriptInfo.version + ". ";
            // eslint-disable-next-line no-undef
            GM_notification(text + upgradeNotification.text.en_US, upgradeNotification.title, upgradeNotification.image, upgradeNotification.onload);
          }
        }
      }
      jsonRule.info.expire = new Date("1992-05-15");
      GM.setValue("version", scriptInfo.version);
      prefs.factoryCheck = true;
    } else if (versionCompare(myVersion, scriptInfo.version) > 0) {
      // downgrade
      GM.setValue("version", scriptInfo.version);
    }
    if (prefs.factoryCheck === true || prefs.factoryCheck === undefined) {
      var hasMissing = assignMissingProperty(prefsFactory, prefs);
      if (hasMissing) {
        debug("%c[Super-preloader] %cOld prefs: %o", debugStyle, "", prefs);
      }
      prefs.factoryCheck = false;
      GM.setValue("prefs", JSON.stringify(prefs));
    }

    var xbug = prefs.debug || false;
    debug = xbug ? console.log.bind(console) : function() {};
    // 黑名单,网站正则..
    var blackList = [
      // 例子
      // 'http://*.douban.com/*',
    ];
    blackList = blackList.concat(
      prefs.excludes.split(/[\n\r]+/).map(function(line) {
        return line.trim();
      })
    );
    const setup = function() {
      const d = document;
      const on = function(node, e, f) {
        node.addEventListener(e, f, false);
      };

      const $ = function(s) {
        return d.getElementById("sp-prefs-" + s);
      };
      if ($("setup")) return;

      const styleNode = addStyle(
        '\
        #sp-prefs-setup { position:fixed;z-index:2147483647;top:30px;right:60px;padding:20px 30px;box-sizing:content-box;\
                          border-radius: 3px!important;border: 1px solid #A0A0A0!important; \
                          box-shadow: -2px 2px 5px rgba(0,0,0,0.3)!important;\
                          background: -moz-linear-gradient(top, #FCFCFC, #F2F2F7 100%)!important;\
                          background: -webkit-gradient(linear, 0 0, 0 100%, from(#FCFCFC), to(#F2F2F7))!important;\
                          font-family:"Arial","sans-serif" !important; color:transparent;max-height:80%;overflow:auto; }\
        #sp-prefs-setup * { color:black;text-align:left;line-height:normal;font-size:12px; min-height: 12px}\
        #sp-prefs-setup a { color:black;text-decoration:underline; }\
        #sp-prefs-setup div { text-align:center;font-weight:bold;font-size:15px; }\
        #sp-prefs-setup ul { margin:15px 0 15px 0;padding:0;list-style:none;background:none;border:0;}\
        #sp-prefs-setup input, #sp-prefs-setup select { border:1px solid gray;padding:2px;background:white;margin:0px; }\
        #sp-prefs-setup li { margin:0;padding:5px 0;vertical-align:middle;background:none;border:0; font-size:12px; }\
        #sp-prefs-setup button { margin:0 10px;text-align:center;white-space: nowrap; background-color:#F9F9F9!important; \
                                 border:1px solid #ccc!important;\
                                 box-shadow:inset 0 10px 5px white!important;\
                                 border-radius:3px!important;\
                                 padding:3px 3px!important;}\
        #sp-prefs-setup textarea { width:98%; height:60px; margin:3px 0; font-weight:50; }\
        #sp-prefs-setup b { font-weight: bold; font-family: "微软雅黑", sans-serif; }\
        #sp-prefs-setup button:disabled { color: graytext; }\
        '
      );

      var div = d.createElement("div");
      div.id = "sp-prefs-setup";
      d.body.appendChild(div);
      if (i8n() === "zh_CN") {
        /* Deleted options
                                   <li title="下一页的链接设置成在新标签页打开"><input type="checkbox" id="sp-prefs-forceTargetWindow" checked/> 新标签打开链接</li>\
          */
        div.innerHTML =
          "\
                           <div>Super_preloaderPlus_one_New设置</div>\
                               <ul>\
                                   <li>脚本版本: <b>" +
          scriptInfo.version +
          " </b>   更新时间: <b>" +
          scriptInfo.updateTime +
          '</b>\
                                       <a id="sp-prefs-homepageURL" target="_blank" href="' +
          scriptInfo.homepageURL +
          '"/>脚本主页</a>\
                                       <a id="sp-prefs-homepageURL-feedback" target="_blank" href="' +
          scriptInfo.homepageURL +
          "/feedback" +
          '"/> 反馈规则 </a>\
                                   </li>\
                                   <li>维护者: <b><a href="https://greasyfork.org/en/users/32861-mach6">Mach6</a></b>   更新日志: <b>' +
          scriptInfo.changelog +
          "</b></li>\
                                   <li>规则数目: <b>" +
          SITEINFO_D.numOfRule +
          "</b> 下次更新时间: <b>" +
          jsonRule.info.expire.toDateString() +
          '</b> <button id="sp-prefs-updaterule">更新规则</button></li>\
                                   <li><input type="checkbox" id="sp-prefs-debug" /> 调试模式</li>\
                                   <li><input title="强制开启中文界面" type="checkbox" id="sp-prefs-ChineseUI" /> 中文界面</li>\
                                   <li><input type="checkbox" id="sp-prefs-enableHistory" /> 添加下一页到历史记录</li>\
                                   <li><input type="checkbox" id="sp-prefs-dblclick_pause" /> 鼠标双击暂停翻页（默认为 Ctrl + 长按左键）</li>\
                                   <li><input type="checkbox" id="sp-prefs-SITEINFO_D-useiframe" /> 全局启用iframe方式\
                                   <li><input title="启用自动翻页，否则仅启用预读" type="checkbox" id="sp-prefs-SITEINFO_D-a_enable" checked/> 启用自动翻页 </li>\
                                   <li><input type="checkbox" id="sp-prefs-arrowKeyPage"/> 使用 ← → 翻页 </li>\
                                   <li><input title="强行拼接规则中没有的站点，不建议启用" type="checkbox" id="sp-prefs-SITEINFO_D-a_force_enable" /> 启用强制拼接（不建议）</li>\
                                   <li>自定义排除列表：\
                                       <div><textarea id="sp-prefs-excludes" placeholder="自定义排除列表，支持通配符。\n例如：http://*.douban.com/*"></textarea></div>\
                                   </li>\
                                   <li>自定义站点规则：\
                                       <div><textarea id="sp-prefs-custom_siteinfo" placeholder="自定义站点规则"></textarea></div>\
                                   </li>\
                               </ul>\
                           <div><button id="sp-prefs-ok" style="width:150px;">确定</button><button id="sp-prefs-cancel" style="width:150px;">取消</button></div>';
      } else {
        div.innerHTML =
          "\
                           <div>Super_preloaderPlus_one_New Settings</div>\
                               <ul>\
                                   <li>Version: <b>" +
          scriptInfo.version +
          " </b>  Update time: <b> " +
          scriptInfo.updateTime +
          '</b>\
                                       <a id="sp-prefs-homepageURL" target="_blank" href="' +
          scriptInfo.homepageURL +
          '"/>Homepage</a>\
                                       <a id="sp-prefs-homepageURL-feedback" target="_blank" href="' +
          scriptInfo.homepageURL +
          "/feedback" +
          '"/> Feedback </a>\
                                   </li>\
                                   <li>Maintainer: <b><a href="https://greasyfork.org/en/users/32861-mach6">Mach6</a></b>  Changelog: <b>' +
          scriptInfo.changelog +
          "</b></li>\
                                   <li>Number of Rules: <b>" +
          SITEINFO_D.numOfRule +
          "</b> Next update: <b>" +
          jsonRule.info.expire.toDateString() +
          '</b> <button id="sp-prefs-updaterule">Update rules</button></li>\
                                   <li><input type="checkbox" id="sp-prefs-debug" /> Debug mode</li>\
                                   <li><input type="checkbox"  tile="English/Chinese UI" id="sp-prefs-ChineseUI" /> Chinese UI</li>\
                                   <li><input type="checkbox" id="sp-prefs-enableHistory" /> Add next page to history</li>\
                                   <li><input type="checkbox" id="sp-prefs-dblclick_pause" /> Double click to stop preload (Default: Ctrl + Long Left)</li>\
                                   <li><input type="checkbox" id="sp-prefs-SITEINFO_D-useiframe" /> Enable iframe mode globally</li>\
                                   <li><input type="checkbox" title="Enable autopagger, otherwise only prefetcher is enabled" id="sp-prefs-SITEINFO_D-a_enable" checked/> Enable autopagger globally</li>\
                                   <li><input type="checkbox" id="sp-prefs-arrowKeyPage"/> Turn to the next page with  ← →</li>\
                                   <li><input type="checkbox" id="sp-prefs-SITEINFO_D-a_force_enable" /> Mandatorily join pages if not covered by the rules</li>\
                                   <li>Custom excludes:\
                                       <div><textarea id="sp-prefs-excludes" placeholder="Customized excludes, support regex\nEx: http://*.douban.com/*"></textarea></div>\
                                   </li>\
                                   <li>Custom rules:\
                                       <div><textarea id="sp-prefs-custom_siteinfo" placeholder="Custom rules"></textarea></div>\
                                   </lhttps://greasyfork.org/en/scripts/33522-super-preloaderplus-one-newi>\
                               </ul>\
                           <div><button id="sp-prefs-ok" style="width:150px;">OK</button><button id="sp-prefs-cancel" style="width:150px;">Cancel</button></div>';
      }
      div = null;

      const close = function() {
        if (styleNode) {
          styleNode.parentNode.removeChild(styleNode);
        }
        const div = $("setup");
        div.parentNode.removeChild(div);
      };

      on($("ok"), "click", function() {
        prefs.ChineseUI = !!$("ChineseUI").checked;
        // document.getElementById('sp-fw-container').innerHTML = floatWindowUI();
        prefs.custom_siteinfo = $("custom_siteinfo").value;
        prefs.debug = xbug = !!$("debug").checked;
        prefs.enableHistory = !!$("enableHistory").checked;
        prefs.dblclick_pause = !!$("dblclick_pause").checked;
        prefs.excludes = $("excludes").value;
        prefs.arrowKeyPage = !!$("arrowKeyPage").checked;

        SITEINFO_D.useiframe = !!$("SITEINFO_D-useiframe").checked;
        SITEINFO_D.autopager.enable = !!$("SITEINFO_D-a_enable").checked;
        SITEINFO_D.autopager.force_enable = !!$("SITEINFO_D-a_force_enable").checked;

        autoMatch.useiframe = SITEINFO_D.useiframe;

        Promise.all([GM.setValue("prefs", JSON.stringify(prefs)), GM.setValue("SITEINFO_D", JSON.stringify(SITEINFO_D)), GM.setValue("autoMatch", JSON.stringify(autoMatch))]).then(function(values) {
          debug = xbug ? console.log.bind(console) : function() {};
          SP.loadSetting();
          close();
          location.reload();
        });
      });

      on($("updaterule"), "click", function() {
        $("updaterule").innerHTML = "Updating...";
        jsonRule.updateAllRules(true).then(function(val) {
          SITEINFO_json = val;
          SP.loadSetting();
          close();
          location.reload();
        });
      });

      on($("cancel"), "click", close);

      $("debug").checked = xbug;
      $("ChineseUI").checked = prefs.ChineseUI;
      $("enableHistory").checked = prefs.enableHistory;
      // $('forceTargetWindow').checked = prefs.forceTargetWindow;
      $("dblclick_pause").checked = prefs.dblclick_pause;
      $("SITEINFO_D-useiframe").checked = SITEINFO_D.useiframe;
      $("SITEINFO_D-a_enable").checked = SITEINFO_D.autopager.enable;
      $("arrowKeyPage").checked = prefs.arrowKeyPage;
      // $('SITEINFO_D-a_force_enable').checked = SITEINFO_D.autopager.force_enable;
      $("excludes").value = prefs.excludes;
      $("custom_siteinfo").value = prefs.custom_siteinfo;
    };

    // main functions
    const SP = {
      spinit: function() {
        if (document.body.getAttribute("name") === "MyNovelReader") {
          return;
        }

        this.loadSetting();

        if (i8n() === "zh_CN") {
          GM.registerMenuCommand("Super_preloaderPlus_one_New 设置", setup);
        } else {
          GM.registerMenuCommand("Super_preloaderPlus_one_New Settings", setup);
        }

        // 查找是否是页面不刷新的站点
        const locationHref = location.href;
        const hashSite = _.find(HashchangeSites, function(x) {
          return toRE(x.url).test(locationHref);
        });

        // update json rule
        const p2 = jsonRule.updateAllRules();
        if (hashSite) {
          isHashchangeSite = true;
          hashchangeTimer = hashSite.timer;
          debug("%c[Super-preloader]当前是页面不刷新的站点 %o", debugStyle, "", hashSite);
          const p1 = new Promise(function(resolve, reject) {
            setTimeout(resolve, hashchangeTimer);
          });
          Promise.all([p1, p2]).then(function(values) {
            init(window, document);
          });
        } else {
          p2.then(function(values) {
            SITEINFO_json = values;
            init(window, document);
          });
        }

        // 分辨率 高度 > 宽度 的是手机
        if (window.screen.height > window.screen.width) {
          addStyle("div.sp-separator { min-width:auto !important; }");
        }
      },
      loadSetting: function() {
        const a_enable = SITEINFO_D.autopager.enable;
        if (a_enable !== undefined) {
          SITEINFO_D.autopager.enable = a_enable;
        }

        const loadDblclickPause = function(reload) {
          const dblclickPause = prefs.dblclick_pause;
          if (dblclickPause) {
            prefs.mouseA = false;
            prefs.Pbutton = [0, 0, 0];
          }

          if (reload) location.reload();
        };

        const loadCustomSiteInfo = function() {
          var infos;
          try {
            infos = new Function("", "return " + prefs.custom_siteinfo)();
          } catch (e) {
            console.error("自定义站点规则错误", prefs.custom_siteinfo);
            // alert('自定义站点规则错误');
          }

          if (_.isArray(infos)) {
            SITEINFO = infos.concat(SITEINFO);
          }
        };

        loadDblclickPause();

        loadCustomSiteInfo();
      }
    };

    debug("%c[Super-preloader] %cEntrypoint", debugStyle, "");
    SP.spinit();

    function init(window, document) {
      const startTime = new Date();

      const nullFn = function() {}; // 空函数.
      const url = document.location.href.replace(/#.*$/, ""); // url 去掉hash
      var cplink = url; // 翻上来的最近的页面的url;
      const domain = document.domain; // 取得域名.
      const domain_port = url.match(/https?:\/\/([^\/]+)/)[1]; // 端口和域名,用来验证是否跨域.

      // 新加的，以示区别
      const remove = []; // 需要移除的事件

      // 悬浮窗
      var floatWO = {
        updateColor: nullFn,
        loadedIcon: nullFn,
        CmodeIcon: nullFn
      };

      function floatWindow(SSS) {
        addStyle(
          '\
                         #sp-fw-container {\
                             z-index:999999!important;\
                             text-align:left!important;\
                         }\
                         #sp-fw-container * {\
                             font-size:13px!important;\
                             color:black!important;\
                             float:none!important;\
                         }\
                         #sp-fw-main-head{\
                             position:relative!important;\
                             top:0!important;\
                             left:0!important;\
                         }\
                         #sp-fw-span-info{\
                             position:absolute!important;\
                             right:1px!important;\
                             top:0!important;\
                             font-size:10px!important;\
                             line-height:10px!important;\
                             background:none!important;\
                             font-style:italic!important;\
                             color:#5a5a5a!important;\
                             text-shadow:white 0px 1px 1px!important;\
                         }\
                         #sp-fw-container input {\
                             vertical-align:middle!important;\
                             display:inline-block!important;\
                             outline:none!important;\
                             height: auto !important;\
                             padding: 0px !important;\
                             margin-bottom: 0px !important;\
                         }\
                         #sp-fw-container input[type="number"] {\
                             width:50px!important;\
                             text-align:left!important;\
                         }\
                         #sp-fw-container input[type="checkbox"] {\
                             border:1px solid #B4B4B4!important;\
                             padding:1px!important;\
                             margin:3px!important;\
                             width:13px!important;\
                             height:13px!important;\
                             background:none!important;\
                             cursor:pointer!important;\
                             visibility: visible !important;\
                             position: static !important;\
                         }\
                         #sp-fw-container input[type="button"] {\
                             border:1px solid #ccc!important;\
                             cursor:pointer!important;\
                             background:none!important;\
                             width:auto!important;\
                             height:auto!important;\
                         }\
                         #sp-fw-container li {\
                             list-style:none!important;\
                             margin:3px 0!important;\
                             border:none!important;\
                             float:none!important;\
                         }\
                         #sp-fw-container fieldset {\
                             border:2px groove #ccc!important;\
                             -moz-border-radius:3px!important;\
                             border-radius:3px!important;\
                             padding:4px 9px 6px 9px!important;\
                             margin:2px!important;\
                             display:block!important;\
                             width:auto!important;\
                             height:auto!important;\
                         }\
                         #sp-fw-container legend {\
                             line-height: 20px !important;\
                             margin-bottom: 0px !important;\
                         }\
                         #sp-fw-container fieldset>ul {\
                             padding:0!important;\
                             margin:0!important;\
                         }\
                         #sp-fw-container ul#sp-fw-a_useiframe-extend{\
                             padding-left:40px!important;\
                         }\
                         #sp-fw-rect {\
                             position:relative!important;\
                             top:0!important;\
                             left:0!important;\
                             float:right!important;\
                             height:10px!important;\
                             width:10px!important;\
                             padding:0!important;\
                             margin:0!important;\
                             -moz-border-radius:3px!important;\
                             border-radius:3px!important;\
                             border:1px solid white!important;\
                             -webkit-box-shadow:inset 0 5px 0 rgba(255,255,255,0.3), 0 0 3px rgba(0,0,0,0.8)!important;\
                             -moz-box-shadow:inset 0 5px 0 rgba(255,255,255,0.3), 0 0 3px rgba(0,0,0,0.8)!important;\
                             box-shadow:inset 0 5px 0 rgba(255,255,255,0.3), 0 0 3px rgba(0,0,0,0.8)!important;\
                             opacity:0.8!important;\
                         }\
                         #sp-fw-dot,\
                         #sp-fw-cur-mode {\
                             position:absolute!important;\
                             z-index:9999!important;\
                             width:5px!important;\
                             height:5px!important;\
                             padding:0!important;\
                             -moz-border-radius:3px!important;\
                             border-radius:3px!important;\
                             border:1px solid white!important;\
                             opacity:1!important;\
                             -webkit-box-shadow:inset 0 -2px 1px rgba(0,0,0,0.3),inset 0 2px 1px rgba(255,255,255,0.3), 0px 1px 2px rgba(0,0,0,0.9)!important;\
                             -moz-box-shadow:inset 0 -2px 1px rgba(0,0,0,0.3),inset 0 2px 1px rgba(255,255,255,0.3), 0px 1px 2px rgba(0,0,0,0.9)!important;\
                             box-shadow:inset 0 -2px 1px rgba(0,0,0,0.3),inset 0 2px 1px rgba(255,255,255,0.3), 0px 1px 2px rgba(0,0,0,0.9)!important;\
                         }\
                         #sp-fw-dot{\
                             right:-3px!important;\
                             top:-3px!important;\
                         }\
                         #sp-fw-cur-mode{\
                             left:-3px!important;\
                             top:-3px!important;\
                             width:6px!important;\
                             height:6px!important;\
                         }\
                         #sp-fw-content{\
                             padding:0!important;\
                             margin:5px 5px 0 0!important;\
                             -moz-border-radius:3px!important;\
                             border-radius:3px!important;\
                             border:1px solid #A0A0A0!important;\
                             -webkit-box-shadow:-2px 2px 5px rgba(0,0,0,0.3)!important;\
                             -moz-box-shadow:-2px 2px 5px rgba(0,0,0,0.3)!important;\
                             box-shadow:-2px 2px 5px rgba(0,0,0,0.3)!important;\
                         }\
                         #sp-fw-main {\
                             padding:5px!important;\
                             border:1px solid white!important;\
                             -moz-border-radius:3px!important;\
                             border-radius:3px!important;\
                             background-color:#F2F2F7!important;\
                             background: -moz-linear-gradient(top, #FCFCFC, #F2F2F7 100%)!important;\
                             background: -webkit-gradient(linear, 0 0, 0 100%, from(#FCFCFC), to(#F2F2F7))!important;\
                         }\
                         #sp-fw-foot{\
                          position:relative!important;\
                          left:0!important;\
                          right:0!important;\
                          top: 2px!important;\
                          min-height:20px!important;\
                         }\
                         #sp-fw-container .sp-fw-spanbutton{\
                             padding:2px 3px!important;\
                             border:1px solid #ccc!important;\
                             -moz-border-radius:3px!important;\
                             border-radius:3px!important;\
                             cursor:pointer!important;\
                             background-color:#F9F9F9!important;\
                             -webkit-box-shadow:inset 0 10px 5px white!important;\
                             -moz-box-shadow:inset 0 10px 5px white!important;\
                             box-shadow:inset 0 10px 5px white!important;\
                         }\
                         #sp-fw-container #sp-fw-savebutton{\
                             position:relative!important;\
                             left: 96px!important;\
                         }'
        );

        const div = document.createElement("div");
        div.id = "sp-fw-container";
        div.innerHTML = floatWindowUI();
        document.body.appendChild(div);

        function $(id) {
          return document.getElementById(id);
        }

        const rect = $("sp-fw-rect"); // 悬浮窗的小正方形,用颜色描述当前的状态.
        const spanel = $("sp-fw-content"); // 设置面板.

        const spanelc = {
          show: function() {
            spanel.style.display = "block";
          },
          hide: function() {
            spanel.style.display = "none";
          }
        };
        var rectt1, rectt2;
        // 设置面板显隐
        rect.addEventListener(
          "mouseover",
          function(e) {
            rectt1 = setTimeout(spanelc.show, 100);
          },
          false
        );
        rect.addEventListener(
          "mouseout",
          function(e) {
            clearTimeout(rectt1);
          },
          false
        );

        div.addEventListener(
          "mouseover",
          function(e) {
            clearTimeout(rectt2);
          },
          false
        );

        div.addEventListener(
          "mouseout",
          function(e) {
            if (e.relatedTarget && e.relatedTarget.disabled) return; // for firefox and chrome
            rectt2 = setTimeout(spanelc.hide, 288);
          },
          false
        );

        const dot = $("sp-fw-dot"); // 载入完成后,显示的小点
        dot.style.backgroundColor = FWKG_color.dot;

        const cur_mode = $("sp-fw-cur-mode"); // 当载入状态时,用来描述当前是翻页模式,还是预读模式.
        cur_mode.style.backgroundColor = SSS.a_enable ? FWKG_color.autopager : FWKG_color.prefetcher;

        const a_enable = $("sp-fw-a_enable"); // 启用翻页模式
        const autopager_field = $("sp-fw-autopager-field"); // 翻页设置区域

        // 预读设置
        const useiframe = $("sp-fw-useiframe");
        const viewcontent = $("sp-fw-viewcontent");

        // 翻页设置
        const a_useiframe = $("sp-fw-a_useiframe");
        const a_iloaded = $("sp-fw-a_iloaded");
        const a_itimeout = $("sp-fw-a_itimeout");
        const a_manualA = $("sp-fw-a_manualA");
        const a_remain = $("sp-fw-a_remain");
        const a_maxpage = $("sp-fw-a_maxpage");
        const a_separator = $("sp-fw-a_separator");
        const a_ipages_0 = $("sp-fw-a_ipages_0");
        const a_ipages_1 = $("sp-fw-a_ipages_1");
        const a_force = $("sp-fw-a_force");

        // newIframe 输入框的点击
        const a_newIframe = $("sp-fw-a_newIframe");
        a_newIframe.addEventListener(
          "click",
          function() {
            a_useiframe.checked = a_newIframe.checked;
          },
          false
        );

        const a_starti = $("sp-fw-a_starti"); // 开始立即翻页
        a_starti.addEventListener(
          "click",
          function() {
            if (this.disabled) return;
            var value = Number(a_ipages_1.value);
            if (isNaN(value) || value <= 0) {
              value = SSS.a_ipages[1];
              a_ipages_1.value = value;
            }
            autoPO.startipages(value);
          },
          false
        );

        // 总开关
        const enable = $("sp-fw-enable");
        $("sp-fw-setup").addEventListener("click", setup, false);

        // 保存设置按钮.
        const savebutton = $("sp-fw-savebutton");
        savebutton.addEventListener(
          "click",
          function(e) {
            const value = {
              Rurl: SSS.Rurl,
              useiframe: gl(useiframe),
              viewcontent: gl(viewcontent),
              enable: gl(enable)
            };

            function gl(obj) {
              switch (obj.type) {
                case "checkbox":
                  return obj.checked;
                case "number": {
                  const min = obj.hasAttribute("min") ? Number(obj.min) : undefined;
                  const max = obj.hasAttribute("max") ? Number(obj.max) : undefined;
                  if (min >= Number(obj.value)) return min;
                  if (max < Number(obj.value)) return max;
                  return obj.value;
                }
                default:
                  return obj.value;
              }
            }
            if (SSS.a_enable !== undefined) {
              value.a_enable = gl(a_enable);
              value.a_useiframe = gl(a_useiframe);
              value.a_newIframe = gl(a_newIframe);
              value.a_iloaded = gl(a_iloaded);
              value.a_manualA = gl(a_manualA);
              value.a_force = gl(a_force);
              const t_a_itimeout = gl(a_itimeout);
              value.a_itimeout = isNaN(t_a_itimeout) ? SSS.a_itimeout : t_a_itimeout >= 0 ? t_a_itimeout : 0;
              const t_a_remain = gl(a_remain);
              value.a_remain = isNaN(t_a_remain) ? SSS.a_remain : Number(t_a_remain);
              const t_a_maxpage = gl(a_maxpage);
              value.a_maxpage = isNaN(t_a_maxpage) ? SSS.a_maxpage : t_a_maxpage >= 1 ? t_a_maxpage : 1;
              const t_a_ipages_1 = gl(a_ipages_1);
              value.a_ipages = [gl(a_ipages_0), isNaN(t_a_ipages_1) ? SSS.a_ipages[1] : t_a_ipages_1 >= 1 ? t_a_ipages_1 : 1];
              value.a_separator = gl(a_separator);
            }
            // alert(xToString(value));
            SSS.savedValue[SSS.sedValueIndex] = value;
            // alert(xToString(SSS.savedValue));
            saveValue("spfwset", xToString(SSS.savedValue));
            if (e.shiftKey ? !prefs.FW_RAS : prefs.FW_RAS) {
              // 按住shift键,执行反向操作.
              setTimeout(function() {
                location.reload();
              }, 1);
            }
          },
          false
        );

        function ll(obj, value) {
          if (obj.type == "checkbox") {
            obj.checked = value;
          } else {
            obj.value = value;
          }
        }

        // 载入翻页设置.
        if (SSS.a_enable === undefined) {
          // 未定义翻页功能.
          a_enable.disabled = true;
          autopager_field.style.display = "none";
        } else {
          ll(a_enable, SSS.a_enable);
          ll(a_useiframe, SSS.a_useiframe);
          ll(a_newIframe, SSS.a_newIframe);
          ll(a_iloaded, SSS.a_iloaded);
          ll(a_itimeout, SSS.a_itimeout);
          ll(a_manualA, SSS.a_manualA);
          ll(a_force, SSS.a_force);
          ll(a_remain, SSS.a_remain);
          ll(a_maxpage, SSS.a_maxpage);
          ll(a_separator, SSS.a_separator);
          ll(a_ipages_0, SSS.a_ipages[0]);
          ll(a_ipages_1, SSS.a_ipages[1]);
        }

        if (!SSS.a_enable) {
          // 当前不是翻页模式,禁用立即翻页按钮.
          a_starti.disabled = true;
        }

        if (!SSS.hasRule) {
          // 如果没有高级规则,那么此项不允许操作.
          a_force.disabled = true;
        }

        // 载入预读设置.
        ll(useiframe, SSS.useiframe);
        ll(viewcontent, SSS.viewcontent);

        // 总开关
        ll(enable, SSS.enable);

        const FWKG_state = {
          loading: "读取中状态",
          prefetcher: "预读状态",
          autopager: "翻页状态",
          Apause: "翻页状态(暂停)",
          Astop: "翻页状态(停止)(翻页完成,或者被异常停止)(无法再开启)",
          dot: "读取完后"
        };

        if (i8n() !== "zh_CN") {
          FWKG_state.loading = "Loading";
          FWKG_state.prefetcher = "Prefetching";
          FWKG_state.autopager = "Autopagger (Running)";
          FWKG_state.Apause = "Autopagger (Pause)";
          FWKG_state.Astop = "Autopagger (Stop)";
          FWKG_state.dot = "Finish loading";
        }

        floatWO = {
          updateColor: function(state) {
            rect.style.backgroundColor = FWKG_color[state];
            rect.setAttribute("title", FWKG_state[state]);
          },
          loadedIcon: function(command) {
            dot.style.display = command == "show" ? "block" : "none";
          },
          CmodeIcon: function(command) {
            cur_mode.style.display = command == "show" ? "block" : "none";
          }
        };

        const vertical = parseInt(prefs.FW_offset[0], 10);
        const horiz = parseInt(prefs.FW_offset[1], 10);
        const FW_position = prefs.FW_position;

        // 非opera用fixed定位.
        div.style.position = "fixed";
        switch (FW_position) {
          case 1:
            div.style.top = vertical + "px";
            div.style.left = horiz + "px";
            break;
          case 2:
            div.style.top = vertical + "px";
            div.style.right = horiz + "px";
            break;
          case 3:
            div.style.bottom = vertical + "px";
            div.style.right = horiz + "px";
            break;
          case 4:
            div.style.bottom = vertical + "px";
            div.style.left = horiz + "px";
            break;
          default:
            break;
        }
      }

      function floatWindowUI() {
        var innerHTML = "";
        if (i8n() === "zh_CN") {
          innerHTML =
            '\
                                <div id="sp-fw-rect" style="background-color:#000;">\
                                    <div id="sp-fw-dot" style="display:none;"></div>\
                                    <div id="sp-fw-cur-mode" style="display:none;"></div>\
                                </div>\
                                <div id="sp-fw-content" style="display:none;">\
                                    <div id="sp-fw-main">\
                                        <div id="sp-fw-main-head">\
                                            <input type="checkbox" title="使用翻页模式,否则使用预读模式" id="sp-fw-a_enable" name="sp-fw-a_enable"/>使用翻页模式\
                                            <span id="sp-fw-span-info">Super_preloader</span>\
                                        </div>\
                                        <fieldset>\
                                            <legend title="预读模式的相关设置" >预读设置</legend>\
                                            <ul>\
                                                <li>\
                                                    <input type="checkbox" title="使用iframe预先载入好下一页到缓存,否则使用xhr请求下一页源码,取出所有的图片进行预读" id="sp-fw-useiframe" name="sp-fw-useiframe"/>使用iframe方式\
                                                </li>\
                                                <li>\
                                                    <input type="checkbox" title="查看预读的内容,将其显示在页面的底部,看看预读了些什么." id="sp-fw-viewcontent" name="sp-fw-viewcontent"/>查看预读的内容\
                                                </li>\
                                            </ul>\
                                        </fieldset>\
                                        <fieldset id="sp-fw-autopager-field" style="display:block;">\
                                            <legend title="自动翻页模式的相关设置">翻页设置</legend>\
                                            <ul>\
                                                <li>\
                                                    <input type="checkbox" title="使用iframe方式进行翻页,否则使用xhr方式翻页,可以解决某些网页xhr方式无法翻页的问题,如果xhr翻页正常的话,就不要勾这项吧." id="sp-fw-a_useiframe" name="sp-fw-a_useiframe"/>使用iframe方式</input>\
                                                    <input type="checkbox" title="每个下一页都用新的iframe，可以解决下一页图片或按钮点击的问题" id="sp-fw-a_newIframe" name="sp-fw-a_newIframe">新iframe</input>\
                                                    <ul id="sp-fw-a_useiframe-extend">\
                                                        <li>\
                                                            <input type="checkbox" title="等待iframe完全载入后(发生load事件),将内容取出,否则在DOM完成后,就直接取出来..(勾上后,会比较慢,但是可能会解决一些问题.)" id="sp-fw-a_iloaded" name="sp-fw-a_iloaded" />等待iframe完全载入\
                                                        </li>\
                                                        <li>\
                                                            <input type="number"  min="0" title="在可以从iframe取数据的时候,继续等待设定的ms才开始取出数据(此项为特殊网页准备,如果正常,请设置为0)" id="sp-fw-a_itimeout" name="sp-fw-a_itimeout"/>ms延时取出\
                                                        </li>\
                                                    </ul>\
                                                </li>\
                                                <li>\
                                                    <input type="checkbox" id="sp-fw-a_manualA" name="sp-fw-a_manualA" title="不会自动拼接上来,会出现一个类似翻页导航的的图形,点击翻页(在论坛的帖子内容页面,可以考虑勾选此项,从而不影响你的回帖)"/>手动模式\
                                                </li>\
                                                <li>\
                                                     剩余<input type="number" min="0" id="sp-fw-a_remain" name="sp-fw-a_remain" title="当剩余的页面的高度是浏览器可见窗口高度的几倍开始翻页"/>倍页面高度触发\
                                                </li>\
                                                <li>\
                                                     最多翻<input type="number" min="0" id="sp-fw-a_maxpage" name="sp-fw-a_maxpage" title="最多翻页数量,当达到这个翻页数量的时候,自动翻页停止." />页\
                                                </li>\
                                                <li>\
                                                    <input type="checkbox" id="sp-fw-a_separator" name="sp-fw-a_separator" title="分割页面主要内容的导航条,可以进行页面主要内容之间的快速跳转定位等."/>显示翻页导航\
                                                </li>\
                                                <li>\
                                                    <input type="checkbox" title="将下一页的body部分内容整个拼接上来.(当需翻页的网站没有高级规则时,该项强制勾选,无法取消.)" id="sp-fw-a_force" name="sp-fw-a_force"/>强制拼接\
                                                </li>\
                                                <li>\
                                                    <input type="checkbox" id="sp-fw-a_ipages_0" name="sp-fw-a_ipages_0" title="在JS加载后,立即连续翻后面设定的页数"/>启用 \
                                                    立即翻<input type="number" min="1" id="sp-fw-a_ipages_1" name="sp-fw-a_ipages_1" title="连续翻页的数量" />页\
                                                    <span  class="sp-fw-spanbutton"  title="现在立即开始连续翻页" id="sp-fw-a_starti">开始</span>\
                                                </li>\
                                            </ul>\
                                        </fieldset>\
                                        <div id="sp-fw-foot">\
                                         <input type="checkbox" id="sp-fw-enable" title="总开关,启用js,否则禁用." name="sp-fw-enable"/>启用\
                                         <span id="sp-fw-setup" class="sp-fw-spanbutton" title="打开设置窗口">设置</span>\
                                         <span id="sp-fw-savebutton" class="sp-fw-spanbutton" title="保存设置">保存</span>\
                                        </div>\
                                    </div>\
                                </div>';
        } else {
          innerHTML =
            '\
                                <div id="sp-fw-rect" style="background-color:#000;">\
                                    <div id="sp-fw-dot" style="display:none;"></div>\
                                    <div id="sp-fw-cur-mode" style="display:none;"></div>\
                                </div>\
                                <div id="sp-fw-content" style="display:none;">\
                                    <div id="sp-fw-main">\
                                        <div id="sp-fw-main-head">\
                                            <input type="checkbox" title="Enable autopagger, otherwise only prefetcher is enabled" id="sp-fw-a_enable" name="sp-fw-a_enable"/>Enable autopagger\
                                            <span id="sp-fw-span-info">Super_preloader</span>\
                                        </div>\
                                        <fieldset>\
                                            <legend title="Preloader helps accelerating loading" >Preloader Settings</legend>\
                                            <ul>\
                                                <li>\
                                                    <input type="checkbox" title="Use iframe to load next page into cache, otherwise use XHR to get the content. Do not use this if everthing is normal." id="sp-fw-useiframe" name="sp-fw-useiframe"/>Use iframe\
                                                    <input type="checkbox" title="Check preload contents." id="sp-fw-viewcontent" name="sp-fw-viewcontent"/>Show preloaded content\
                                                </li>\
                                            </ul>\
                                        </fieldset>\
                                        <fieldset id="sp-fw-autopager-field" style="display:block;">\
                                            <legend title="Autopager frees you from clicking next page">Autopager Settings</legend>\
                                            <ul>\
                                                <li>\
                                                    <input type="checkbox" title="Use iframe to load next page into cache, otherwise use XHR to get the content. Do not use this if everthing is normal" id="sp-fw-a_useiframe" name="sp-fw-a_useiframe"/>Use iframe</input>\
                                                    <input type="checkbox" title="Use a new iframe for the next page. It may solve problems with figures" id="sp-fw-a_newIframe" name="sp-fw-a_newIframe">Use new iframe</input>\
                                                    <ul id="sp-fw-a_useiframe-extend">\
                                                        <li>\
                                                            <input type="checkbox" title="Append the content untill iframe is fully loaded" id="sp-fw-a_iloaded" name="sp-fw-a_iloaded" />Wait iframe to be fully loaded\
                                                        </li>\
                                                        <li>\
                                                            <input type="number"  min="0" title="Wait for X ms untill the content is appended to the current page. (Default: 0)" id="sp-fw-a_itimeout" name="sp-fw-a_itimeout"/> ms delay\
                                                        </li>\
                                                    </ul>\
                                                </li>\
                                                <li>\
                                                    <input type="checkbox" id="sp-fw-a_manualA" name="sp-fw-a_manualA" title="The next page won\'t be appended to the current page and you need to click a button"/>Manual mode\
                                                </li>\
                                                <li>\
                                                     Trick autopager until the height is <input type="number" min="0" id="sp-fw-a_remain" name="sp-fw-a_remain" />x page height\
                                                </li>\
                                                <li>\
                                                     Turn at most <input type="number" min="0" id="sp-fw-a_maxpage" name="sp-fw-a_maxpage" /> pages\
                                                </li>\
                                                <li>\
                                                    <input type="checkbox" id="sp-fw-a_separator" name="sp-fw-a_separator" title="Show the page navigation bar"/>Navigation bar\
                                                </li>\
                                                <li>\
                                                    <input type="checkbox" title="Append the whole next page to current page (When there is not rule for the website, this is the only method)" id="sp-fw-a_force" name="sp-fw-a_force"/>Force to join page\
                                                </li>\
                                                <li>\
                                                    <input type="checkbox" id="sp-fw-a_ipages_0" name="sp-fw-a_ipages_0" title="Turn X pages instantly once the script is loaded. This is good for some gallery."/>Turn <input type="number" min="1" id="sp-fw-a_ipages_1" name="sp-fw-a_ipages_1" title="number of pages" /> pages instantly\
                                                    <span  class="sp-fw-spanbutton"  id="sp-fw-a_starti">Start</span>\
                                                </li>\
                                            </ul>\
                                        </fieldset>\
                                        <div id="sp-fw-foot">\
                                         <input type="checkbox" id="sp-fw-enable" title="Enable for thie website" name="sp-fw-enable"/>Enable\
                                         <span id="sp-fw-setup" class="sp-fw-spanbutton" title="Global Settings">Global Settings</span>\
                                         <span id="sp-fw-savebutton" class="sp-fw-spanbutton" title="Save settings">Save</span>\
                                        </div>\
                                    </div>\
                                </div>';
        }
        return innerHTML;
      }

      function sp_transition(start, end) {
        var TweenF = sp_transition.TweenF;
        if (!TweenF) {
          TweenF = Tween[TweenM[prefs.s_method]];
          TweenF = TweenF[TweenEase[prefs.s_ease]] || TweenF;
          sp_transition.TweenF = TweenF;
        }
        const frameSpeed = 1000 / prefs.s_FPS;
        var t = 0; // 次数,开始
        const b = start; // 开始
        const c = end - start; // 结束
        const d = Math.ceil(prefs.s_duration / frameSpeed); // 次数,结束

        const x = window.scrollX;

        function transition() {
          const y = Math.ceil(TweenF(t, b, c, d));
          // alert(y);
          window.scroll(x, y);
          if (t < d) {
            t++;
            setTimeout(transition, frameSpeed);
          }
        }
        transition();
      }

      function sepHandler(e) {
        e.stopPropagation();
        const div = this;
        // alert(div);
        const target = e.target;
        // alert(target);

        function getRelativeDiv(which) {
          var id = div.id;
          id = id.replace(/(sp-separator-)(.+)/, function(a, b, c) {
            return b + String(Number(c) + (which == "pre" ? -1 : 1));
          });
          // alert(id);
          return id ? document.getElementById(id) : null;
        }

        function scrollIt(a, b) {
          // a=a!==undefined? a : window.scrollY;
          if (prefs.sepT) {
            sp_transition(a, b);
          } else {
            window.scroll(window.scrollX, b);
          }
        }

        var o_scrollY, divS;

        switch (target.className) {
          case "sp-sp-gotop":
            scrollIt(window.scrollY, 0);
            break;
          case "sp-sp-gopre": {
            const prediv = getRelativeDiv("pre");
            if (!prediv) return;
            o_scrollY = window.scrollY;
            var preDS = prediv.getBoundingClientRect().top;
            if (prefs.sepP) {
              divS = div.getBoundingClientRect().top;
              preDS = o_scrollY - (divS - preDS);
            } else {
              preDS += o_scrollY - 6;
            }
            scrollIt(o_scrollY, preDS);
            break;
          }
          case "sp-sp-gonext": {
            const nextdiv = getRelativeDiv("next");
            if (!nextdiv) return;
            o_scrollY = window.scrollY;
            var nextDS = nextdiv.getBoundingClientRect().top;
            if (prefs.sepP) {
              divS = div.getBoundingClientRect().top;
              nextDS = o_scrollY + (-divS + nextDS);
            } else {
              nextDS += o_scrollY - 6;
            }
            scrollIt(o_scrollY, nextDS);
            break;
          }
          case "sp-sp-gobottom":
            scrollIt(window.scrollY, Math.max(document.documentElement.scrollHeight, document.body.scrollHeight));
            break;
          default:
            break;
        }
      }

      // autopager
      var autoPO = {
        startipages: nullFn
      };
      var hashchangeAdded = false;

      function autopager(SSS, floatWO) {
        // return;
        // 更新悬浮窗的颜色.
        floatWO.updateColor("autopager");

        // 获取插入位置节点.
        var insertPoint;
        var pageElement;
        var insertMode;
        if (SSS.a_HT_insert) {
          insertPoint = getElement(SSS.a_HT_insert[0]);
          insertMode = SSS.a_HT_insert[1];
        } else {
          pageElement = getAllElements(SSS.a_pageElement, document, document, null, cplink);
          if (pageElement.length > 0) {
            const pELast = pageElement[pageElement.length - 1];
            insertPoint = pELast.nextSibling ? pELast.nextSibling : pELast.parentNode.appendChild(document.createTextNode(" "));
          }
          insertMode = -1;
        }

        if (insertPoint) {
          debug("%c[Super-preloader] %c验证是否能找到插入位置节点:成功,%o", debugStyle, "", insertPoint);
        } else {
          console.error("%c[Super-preloader] %c验证是否能找到插入位置节点:失败 %o JS执行终止", debugStyle, "", SSS.a_HT_insert ? SSS.a_HT_insert[0] : "");
          floatWO.updateColor("Astop");
          return;
        }
        if (window.navigator.language != "en") {
          debug("%c[Super-preloader] %cLanguage: %s", debugStyle, "", window.navigator.language);
        }

        if (pageElement === undefined) {
          pageElement = getAllElements(SSS.a_pageElement);
        }
        if (pageElement.length > 0) {
          debug("%c[Super-preloader] %c验证是否能找到主要元素:成功,%o", debugStyle, "", pageElement);
        } else {
          console.error("%c[Super-preloader] %c验证是否能找到主要元素:失败,%o", debugStyle, "", SSS.a_pageElement);
          floatWO.updateColor("Astop");
          return;
        }

        if (SSS.a_stylish) {
          // 插入自定义样式
          addStyle(SSS.a_stylish, "Super_preloader-style");
        }

        var insertPointP;
        if (insertMode != 2) {
          insertPointP = insertPoint.parentNode;
        }

        var addIntoDoc;
        if (insertMode == -1 || insertMode == 1) {
          addIntoDoc = function(obj) {
            return insertPointP.insertBefore(obj, insertPoint);
          };
        } else if (insertMode == 2) {
          addIntoDoc = function(obj) {
            return insertPoint.appendChild(obj);
          };
        } else if (insertMode == 0) {
          addIntoDoc = function(obj) {
            return insertPointP.insertBefore(obj, insertPoint.nextSibling);
          };
        }

        var doc, win;

        function XHRLoaded(res) {
          const str = res.responseText;
          doc = win = createDocumentByString(str);

          if (!doc) {
            console.error("%c[Super-preloader] %c文档对象创建失败", debugStyle, "");
            removeL();
            return;
          }
          floatWO.updateColor("autopager");
          floatWO.CmodeIcon("hide");
          floatWO.loadedIcon("show");
          working = false;
          scroll();
        }

        function XHRNotLoaded(res) {
          console.error("XHR is failed to be loaded");
          console.error(res);
          removeL();
        }

        function removeL(isRemoveAddPage) {
          debug("%c[Super-preloader] %c移除各种事件监听", debugStyle, "");
          floatWO.updateColor("Astop");
          const _remove = remove;
          for (var i = 0, ii = _remove.length; i < ii; i++) {
            _remove[i]();
          }

          if (isRemoveAddPage) {
            const separator = document.querySelector(".sp-separator");
            if (separator) {
              var insertBefore = insertPoint;
              if (insertMode == 2) {
                const l = insertPoint.children.length;
                if (l > 0) {
                  insertBefore = insertPoint.children[l - 1];
                }
              }

              const range = document.createRange();
              range.setStartBefore(separator);
              range.setEndBefore(insertBefore);
              range.deleteContents();
              range.detach();

              if (insertMode == 2) {
                // 还需要额外移除？
                insertPoint.removeChild(insertBefore);
              }
            }
            const style = document.getElementById("Super_preloader-style");
            if (style) {
              style.parentNode.removeChild(style);
            }
          }
        }
        if (isHashchangeSite && !hashchangeAdded) {
          window.addEventListener("hashchange", onhashChange, false);
          hashchangeAdded = true;
          debug("%c[Super-preloader] %c成功添加 hashchange 事件", debugStyle, "");
        }

        function onhashChange(event) {
          debug("%c[Super-preloader] %c触发 Hashchang 事件", debugStyle, "");
          removeL(true);

          setTimeout(function() {
            nextlink = getElement(SSS.nextLink || "auto;");
            nextlink = getFullHref(nextlink);
            // preLink = getElement(SSS.preLink || 'auto;');
            autopager(SSS, floatWO);
          }, hashchangeTimer);
        }

        var iframe;
        var messageR;

        function iframeLoaded() {
          const iframe = this;
          // alert(this.contentDocument.body)
          const body = iframe.contentDocument.body;
          if (body && body.firstChild) {
            setTimeout(function() {
              doc = iframe.contentDocument;
              removeScripts(doc, SSS.a_scriptFilter);
              win = iframe.contentWindow || doc;
              floatWO.updateColor("autopager");
              floatWO.CmodeIcon("hide");
              floatWO.loadedIcon("show");
              working = false;

              scroll();
            }, SSS.a_itimeout);
          }
        }

        function iframeRequest(link) {
          messageR = false;
          if (SSS.a_newIframe || !iframe) {
            const i = document.createElement("iframe");
            iframe = i;
            i.name = "superpreloader-iframe";
            i.width = "100%";
            i.height = "0";
            i.frameBorder = "0";
            i.style.cssText = "\
                    margin:0!important;\
                    padding:0!important;\
                    visibility:hidden!important;\
                ";
            if (SSS.a_sandbox != false) {
              i.sandbox = SSS.a_sandbox;
            }
            i.src = link;
            if (SSS.a_iloaded) {
              i.addEventListener("load", iframeLoaded, false);
              remove.push(function() {
                i.removeEventListener("load", iframeLoaded, false);
              });
            } else {
              const messagehandler = function(e) {
                if (!messageR && e.data == "superpreloader-iframe:DOMLoaded") {
                  messageR = true;
                  iframeLoaded.call(i);
                  if (SSS.a_newIframe) {
                    window.removeEventListener("message", messagehandler, false);
                  }
                }
              };
              window.addEventListener("message", messagehandler, false);
              remove.push(function() {
                window.removeEventListener("message", messagehandler, false);
              });
            }
            document.body.appendChild(i);
          } else {
            iframe.src = link;
            iframe.contentDocument.location.replace(link);
            if (SSS.a_reload) {
              iframe.contentWindow.location.reload();
            }
          }
        }

        var working;

        function doRequest() {
          working = true;
          floatWO.updateColor("loading");
          floatWO.CmodeIcon("show");

          debug("%c[Super-preloader] %c获取下一页 %o %o", debugStyle, "", SSS.a_useiframe ? "(iframe方式)" : "(XHR方式)", nextlink);
          if (SSS.a_useiframe) {
            iframeRequest(nextlink);
          } else {
            const reqConf = {
              overrideMimeType: "text/html; charset=" + document.characterSet,
              headers: SSS.a_headers ? SSS.a_headers : {Referer: cplink}
            };
            axios
              .get(nextlink, reqConf)
              .then(function(res) {
                if (res.finalUrl === cplink) {
                  debug("%c[Super-preloader] %c最终地址相同", debugStyle, "");
                  XHRNotLoaded(res);
                } else {
                  XHRLoaded(res);
                }
              })
              .catch(function(res) {
                XHRNotLoaded(res);
              });
            debug("%c[Super-preloader] %c读取完成", debugStyle, "");
          }
        }

        var ipagesmode = SSS.a_ipages[0];
        var ipagesnumber = SSS.a_ipages[1];
        var scrollDo = nullFn;
        var afterInsertDo = nullFn;
        if (prefs.Aplus) {
          afterInsertDo = doRequest;
          doRequest();
        } else {
          scrollDo = doRequest;
          if (ipagesmode) doRequest();
        }

        var manualDiv;

        function manualAdiv() {
          if (!manualDiv) {
            addStyle(
              "\
                    #sp-sp-manualdiv{\
                        line-height:1.6!important;\
                        opacity:1!important;\
                        position:relative!important;\
                        float:none!important;\
                        top:0!important;\
                        left:0!important;\
                        z-index: 1000!important;\
                        min-width:366px!important;\
                        width:auto!important;\
                        text-align:center!important;\
                        font-size:14px!important;\
                        padding:3px 0!important;\
                        margin:5px 10px 8px;\
                        clear:both!important;\
                        border-top:1px solid #ccc!important;\
                        border-bottom:1px solid #ccc!important;\
                        -moz-border-radius:30px!important;\
                        border-radius:30px!important;\
                        background-color:#F5F5F5!important;\
                        -moz-box-shadow:inset 0 10px 16px #fff,0 2px 3px rgba(0,0,0,0.1);\
                        -webkit-box-shadow:inset 0 10px 16px #fff,0 2px 3px rgba(0,0,0,0.1);\
                        box-shadow:inset 0 10px 16px #fff,0 2px 3px rgba(0,0,0,0.1);\
                    }\
                    .sp-sp-md-span{\
                        font-weight:bold!important;\
                        margin:0 5px!important;\
                    }\
                    #sp-sp-md-number{\
                        width:50px!important;\
                        vertical-align:middle!important;\
                        display:inline-block!important;\
                        text-align:left!important;\
                    }\
                    #sp-sp-md-imgnext{\
                        padding:0!important;\
                        margin:0 0 0 5px!important;\
                        vertical-align:middle!important;\
                        display:inline-block!important;\
                    }\
                    #sp-sp-manualdiv:hover{\
                        cursor:pointer;\
                    }\
                    #sp-sp-md-someinfo{\
                        position:absolute!important;\
                        right:16px!important;\
                        bottom:1px!important;\
                        font-size:10px!important;\
                        text-shadow:white 0 1px 0!important;\
                        color:#5A5A5A!important;\
                        font-style:italic!important;\
                        z-index:-1!important;\
                        background:none!important;\
                    }\
                "
            );

            const div = $C("div", {
              id: "sp-sp-manualdiv"
            });
            manualDiv = div;
            var nextStr = "Next";
            if (i8n() === "zh_CN") {
              nextStr = "下";
            }
            const span = $C(
              "span",
              {
                class: "sp-sp-md-span"
              },
              nextStr
            );
            div.appendChild(span);

            const input = $C("input", {
              type: "number",
              value: 1,
              min: 1,
              title: "输入你想要拼接的页数(必须>=1),然后按回车.",
              id: "sp-sp-md-number"
            });

            const getInputValue = function() {
              var value = Number(input.value);
              if (isNaN(value) || value < 1) {
                value = 1;
                input.value = 1;
              }
              return value;
            };

            const spage = function() {
              if (doc) {
                const value = getInputValue();
                // alert(value);
                ipagesmode = true;
                ipagesnumber = value + paged;
                insertedIntoDoc();
              }
            };
            input.addEventListener(
              "keyup",
              function(e) {
                // alert(e.keyCode);
                if (e.keyCode == 13) {
                  // 回车
                  spage();
                }
              },
              false
            );
            div.appendChild(input);
            if (i8n() === "zh_CN") {
              div.appendChild(
                $C(
                  "span",
                  {
                    className: "sp-sp-md-span"
                  },
                  "页"
                )
              );
            } else {
              div.appendChild(
                $C(
                  "span",
                  {
                    className: "sp-sp-md-span"
                  },
                  "page"
                )
              );
            }
            div.appendChild(
              $C("img", {
                id: "sp-sp-md-imgnext",
                src: _sep_icons.next
              })
            );
            div.appendChild(
              $C(
                "span",
                {
                  id: "sp-sp-md-someinfo"
                },
                prefs.someValue
              )
            );
            document.body.appendChild(div);
            div.addEventListener(
              "click",
              function(e) {
                if (e.target.id == "sp-sp-md-number") return;
                spage();
              },
              false
            );
          }
          addIntoDoc(manualDiv);
          manualDiv.style.display = "block";
        }

        function beforeInsertIntoDoc() {
          working = true;
          if (SSS.a_manualA && !ipagesmode) {
            // 显示手动翻页触发条.
            debug("%c[Super-preloader] %c手动拼接", debugStyle, "");
            manualAdiv();
          } else {
            // 直接拼接.
            debug("%c[Super-preloader] %c直接拼接", debugStyle, "");
            insertedIntoDoc();
          }
        }

        var sepStyle;
        const goNextImg = [false];
        const sNumber = prefs.sepStartN;
        const _sep_icons = sep_icons;
        var curNumber = sNumber;

        function createSep(lastUrl, currentUrl, nextUrl) {
          const div = document.createElement("div");
          if (SSS.a_separator) {
            if (!sepStyle) {
              sepStyle = addStyle(
                "\
                        div.sp-separator{\
                            line-height:1.8!important;\
                            opacity:1!important;\
                            position:relative!important;\
                            float:none!important;\
                            top:0!important;\
                            left:0!important;\
                            min-width:366px;\
                            width:auto;\
                            text-align:center!important;\
                            font-size:14px!important;\
                            display:block!important;\
                            padding:3px 0!important;\
                            margin:5px 10px 8px;\
                            clear:both!important;\
                            border-style: solid!important;\
                            border-color: #cccccc!important;\
                            border-width: 1px;!important;\
                            -moz-border-radius:30px!important;\
                            border-radius:30px!important;\
                            background-color:#FFFFFF!important;\
                        }\
                        div.sp-separator:hover {\
                            box-shadow: 0 0 11px rgba(33,33,33,.2);\
                         }\
                        div.sp-separator img{\
                            vertical-align:middle!important;\
                            cursor:pointer!important;\
                            padding:0!important;\
                            margin:0 5px!important;\
                            border:none!important;\
                            display:inline-block!important;\
                            float:none!important;\
                            width: auto;\
                            height: auto;\
                        }\
                        div.sp-separator a.sp-sp-nextlink{\
                            margin:0 20px 0 -6px!important;\
                            display:inline!important;\
                            text-shadow:#fff 0 1px 0!important;\
                            background:none!important;\
                            color:#595959!important;\
                        }\
                        div.sp-separator span.sp-span-someinfo{\
                            position:absolute!important;\
                            right:16px!important;\
                            bottom:1px!important;\
                            font-size:10px!important;\
                            text-shadow:white 0 1px 0!important;\
                            color:#5A5A5A!important;\
                            font-style:italic!important;\
                            z-index:-1!important;\
                            background:none!important;\
                        }\
                    "
              );
            }

            div.className = "sp-separator";
            div.id = "sp-separator-" + curNumber;
            div.addEventListener("click", sepHandler, false);
            var pageStr = "";
            if (i8n() === "zh_CN") {
              pageStr = '<b>第 <span style="' + sep_icons.text_span_style + '">' + curNumber + "</span> 页</b>" + (SSS.a_separatorReal ? getRalativePageStr(lastUrl, currentUrl, nextUrl) : "");
            } else {
              pageStr = '<b>Page <span style="' + sep_icons.text_span_style + '">' + curNumber + "</span></b>" + (SSS.a_separatorReal ? getRalativePageStr(lastUrl, currentUrl, nextUrl) : "");
            }
            div.appendChild(
              $C(
                "a",
                {
                  class: "sp-sp-nextlink",
                  target: "_blank",
                  href: currentUrl,
                  title: currentUrl
                },
                pageStr
              )
            );

            div.appendChild(
              $C("img", {
                src: _sep_icons.top,
                class: "sp-sp-gotop",
                alt: "去到顶部",
                title: "去到顶部"
              })
            );

            div.appendChild(
              $C("img", {
                src: curNumber == sNumber ? _sep_icons.pre_gray : _sep_icons.pre,
                class: "sp-sp-gopre",
                title: "上滚一页"
              })
            );

            const i_next = $C("img", {
              src: _sep_icons.next_gray,
              class: "sp-sp-gonext",
              title: "下滚一页"
            });

            if (goNextImg.length == 2) {
              goNextImg.shift();
            }
            goNextImg.push(i_next);
            div.appendChild(i_next);

            div.appendChild(
              $C("img", {
                src: _sep_icons.bottom,
                class: "sp-sp-gobottom",
                alt: "去到底部",
                title: "去到底部"
              })
            );

            div.appendChild(
              $C(
                "span",
                {
                  class: "sp-span-someinfo"
                },
                prefs.someValue
              )
            );
            curNumber += 1;
          } else {
            div.style.cssText =
              "\
                    height:0!important;\
                    width:0!important;\
                    margin:0!important;\
                    padding:0!important;\
                    border:none!important;\
                    clear:both!important;\
                    display:block!important;\
                    visibility:hidden!important;\
                ";
          }
          return div;
        }

        var paged = 0;

        function insertedIntoDoc() {
          if (!doc) {
            console.error("%c[Super-preloader]%c %s", debugStyle, "", "没有找到doc");
            return;
          }

          if (SSS.a_documentFilter) {
            try {
              SSS.a_documentFilter(doc, nextlink);
              debug("%c[Super-preloader] %c执行 documentFilter 成功", debugStyle, "");
            } catch (e) {
              console.error("%c[Super-preloader] %c执行 documentFilter 错误 %o %s", debugStyle, "", e, SSS.a_documentFilter.toString());
            }
          }

          const docTitle = getElementByCSS("title", doc).textContent;

          const fragment = document.createDocumentFragment();
          const pageElements = getAllElements(SSS.a_pageElement, false, doc, win, nextlink);
          const ii = pageElements.length;
          if (ii <= 0) {
            console.error("获取下一页的主要内容失败", SSS.a_pageElement);
            removeL();
            return;
          } else {
            debug("%c[Super-preloader] %c获取下一页的主要内容成功 %o", debugStyle, "", pageElements);
          }

          // 提前查找下一页链接，后面再赋值
          const lastUrl = cplink;
          cplink = nextlink;
          var nl = getElement(SSS.nextLink, false, doc, win);
          if (nl) {
            nl = getFullHref(nl);
            if (nl == nextlink) {
              nextlink = null;
            } else {
              nextlink = nl;
            }
          } else {
            nextlink = null;
          }
          // 有部分下一页的信息是在script中（比如新加的csdn的规则），因此先查找下一页信息，再执行 removeScripts
          removeScripts(doc, SSS.a_scriptFilter);

          var i, pe_x, pe_x_nn;
          for (i = 0; i < ii; i++) {
            pe_x = pageElements[i];
            pe_x_nn = pe_x.nodeName;
            if (pe_x_nn == "BODY" || pe_x_nn == "HTML" || pe_x_nn == "SCRIPT") continue;
            fragment.appendChild(pe_x);
          }

          if (SSS.filter && typeof SSS.filter === "string") {
            // 功能未完善.
            // alert(SSS.filter);
            var nodes = [];
            try {
              nodes = getAllElements(SSS.filter, fragment);
            } catch (e) {}
            var nodes_x;
            for (i = nodes.length - 1; i >= 0; i--) {
              nodes_x = nodes[i];
              nodes_x.parentNode.removeChild(nodes_x);
            }
          }

          // lazyImgSrc
          if (SSS.lazyImgSrc) {
            handleLazyImgSrc(SSS.lazyImgSrc, fragment);
          }

          var imgs;
          if (!window.opera && SSS.a_useiframe && !SSS.a_iloaded) {
            imgs = getAllElements("css;img[src]", fragment); // 收集所有图片
          }

          // 处理下一页内容部分链接是否新标签页打开
          if (prefs.forceTargetWindow) {
            const arr = Array.prototype.slice.call(fragment.querySelectorAll('a[href]:not([href^="mailto:"]):not([href^="javascript:"]):not([href^="#"])'));
            arr.forEach(function(elem) {
              elem.setAttribute("target", "_blank");
              if (elem.getAttribute("onclick") == "atarget(this)") {
                // 卡饭论坛的控制是否在新标签页打开
                elem.removeAttribute("onclick");
              }
            });
          }

          const sepdiv = createSep(lastUrl, cplink, nextlink);
          var toInsert = sepdiv;
          var ncol = 0;
          if (SSS.a_sepdivDom !== undefined && typeof SSS.a_sepdivDom === "function") {
            toInsert = SSS.a_sepdivDom(doc, sepdiv);
          } else if (pageElements[0] && pageElements[0].tagName === "TR" && pageElements[pageElements.length - 1].tagName === "TR") {
            const insertParent = insertPoint.parentNode;
            var colNodes = getAllElements("child::tr[1]/child::*[self::td or self::th]", insertParent);
            if (colNodes.length == 0) {
              colNodes = getAllElements("child::*[self::td or self::th]", pageElements[0]);
            }
            for (i = 0, ncol = 0; i < colNodes.length; i++) {
              ncol += parseInt(colNodes[i].getAttribute("colspan"), 10) || 1;
            }
            const td = doc.createElement("td");
            td.appendChild(sepdiv);
            const tr = doc.createElement("tr");
            td.setAttribute("colspan", ncol);
            tr.appendChild(td);

            toInsert = tr;
          } else if (pageElements[0] && pageElements[0].tagName === "TBODY" && pageElements[pageElements.length - 1].tagName === "TBODY") {
            var trs = pageElements[pageElements.length - 1].getElementsByTagName("tr");
            if (trs) {
              trs = trs[trs.length - 1];
              for (i = 0, ncol = 0; i < trs.children.length; i++) {
                ncol += parseInt(trs.children[i].getAttribute("colspan"), 10) || 1;
              }
              const tbody = doc.createElement("tbody");
              const td = $C("td", {
                colspan: ncol
              });
              const tr = doc.createElement("tr");
              td.appendChild(sepdiv);
              tr.appendChild(td);
              tbody.appendChild(tr);

              toInsert = tbody;
            }
          }
          fragment.insertBefore(toInsert, fragment.firstChild);

          addIntoDoc(fragment);

          // filter
          if (SSS.filter && typeof SSS.filter === "function") {
            try {
              SSS.filter(pageElements);
              debug("%c[Super-preloader] %c执行 filter(pages) 成功", debugStyle, "");
            } catch (e) {
              console.error("%c[Super-preloader] %c执行 filter(pages) 错误 %o %e", debugStyle, "", e, SSS.filter.toString());
            }
          }

          if (imgs) {
            // 非opera,在iframeDOM取出数据时需要重载图片.
            setTimeout(function() {
              const _imgs = imgs;
              var i, ii, img;
              for (i = 0, ii = _imgs.length; i < ii; i++) {
                img = _imgs[i];
                const src = img.src;
                img.src = src;
              }
            }, 99);
          }

          if (SSS.a_replaceE) {
            const oldE = getAllElements(SSS.a_replaceE);
            const oldE_lt = oldE.length;
            // alert(oldE_lt);
            if (oldE_lt > 0) {
              const newE = getAllElements(SSS.a_replaceE, false, doc, win);
              const newE_lt = newE.length;
              // alert(newE_lt);
              if (newE_lt == oldE_lt) {
                // 替换
                var oldE_x, newE_x;
                for (i = 0; i < newE_lt; i++) {
                  oldE_x = oldE[i];
                  newE_x = newE[i];
                  newE_x = doc.importNode(newE_x, true);
                  oldE_x.parentNode.replaceChild(newE_x, oldE_x);
                }
              }
            }
          }

          paged += 1;
          if (ipagesmode && paged >= ipagesnumber) {
            ipagesmode = false;
          }
          floatWO.loadedIcon("hide");
          if (manualDiv) {
            manualDiv.style.display = "none";
          }
          if (goNextImg[0]) goNextImg[0].src = _sep_icons.next;

          const ev = document.createEvent("Event");
          ev.initEvent("Super_preloaderPageLoaded", true, false);
          document.dispatchEvent(ev);

          if (prefs.enableHistory) {
            try {
              window.history.pushState(null, docTitle, cplink);
            } catch (e) {}
          }

          if (paged >= SSS.a_maxpage) {
            debug("%c[Super-preloader] %c到达所设定的最大翻页数", debugStyle, "", SSS.a_maxpage);
            notice("<b>状态</b>:" + '到达所设定的最大翻页数:<b style="color:red">' + SSS.a_maxpage + "</b>");
            removeL();
            return;
          }
          const delayiframe = function(fn) {
            setTimeout(fn, 199);
          };
          if (nextlink) {
            // debug('找到下一页链接:', nextlink);
            doc = win = null;
            if (ipagesmode) {
              if (SSS.a_useiframe) {
                // 延时点,firefox,太急会卡-_-!
                delayiframe(doRequest);
              } else {
                doRequest();
              }
            } else {
              working = false;
              if (SSS.a_useiframe) {
                delayiframe(afterInsertDo);
              } else {
                afterInsertDo();
              }
            }
          } else {
            console.error("%c[Super-preloader] %c没有找到下一页链接%o", debugStyle, "", SSS.nextLink);
            removeL();
          }
        }

        // 返回,剩余高度是总高度的比值.
        var relatedObj_0, relatedObj_1;
        if (SSS.a_relatedObj) {
          if (_.isArray(SSS.a_relatedObj)) {
            relatedObj_0 = SSS.a_relatedObj[0];
            relatedObj_1 = SSS.a_relatedObj[1];
          } else {
            relatedObj_0 = SSS.a_pageElement;
            relatedObj_1 = "bottom";
          }
        }

        function getRemain() {
          const _cplink = cplink || undefined;
          const scrolly = window.scrollY;
          const WI = window.innerHeight;
          const obj = getLastElement(relatedObj_0, _cplink);
          const scrollH = obj && obj.nodeType == 1 ? obj.getBoundingClientRect()[relatedObj_1] + scrolly : Math.max(document.documentElement.scrollHeight, document.body.scrollHeight);
          var exElementHeight = 0;
          if (SSS.a_excludeElement != undefined) {
            exElementHeight = getLastElement(SSS.a_excludeElement, _cplink).offsetHeight;
          }

          return (scrollH - scrolly - WI - exElementHeight) / WI; // 剩余高度于页面总高度的比例.
        }

        var pause = false;
        if (prefs.pauseA) {
          const Sbutton = ["target", "shiftKey", "ctrlKey", "altKey"];
          const ltype = prefs.mouseA ? "mousedown" : "dblclick";
          const button_1 = Sbutton[prefs.Pbutton[0]];
          const button_2 = Sbutton[prefs.Pbutton[1]];
          const button_3 = Sbutton[prefs.Pbutton[2]];

          const pauseIt = function() {
            pause = !pause;
            if (prefs.stop_ipage) ipagesmode = false;
            if (pause) {
              floatWO.updateColor("Apause");
              if (i8n() === "zh_CN") {
                notice("<b>状态</b>:" + '自动翻页<span style="color:red!important;"><b> 暂停</b></span>.', prefs.disappearDelay);
              } else {
                notice("<b>Status</b>:" + 'Autopagger<span style="color:red!important;"><b> Pause</b></span>.', prefs.disappearDelay);
              }
            } else {
              floatWO.updateColor("autopager");
              floatWO.CmodeIcon("hide");
              if (i8n() === "zh_CN") {
                notice("<b>状态</b>:" + '自动翻页<span style="color:red!important;"><b> 启用</b></span>.');
              } else {
                notice("<b>Status</b>:" + 'Autopagger<span style="color:red!important;"><b> Enable</b></span>.');
              }
            }
            scroll();
          };
          var Sctimeout;

          const clearPause = function() {
            clearTimeout(Sctimeout);
            document.removeEventListener("mouseup", arguments.callee, false);
          };

          const pausehandler = function(e) {
            if (!SSS.a_manualA || ipagesmode) {
              if (e[button_1] && e[button_2] && e[button_3]) {
                if (e.type == "mousedown") {
                  document.addEventListener("mouseup", clearPause, false);
                  Sctimeout = setTimeout(pauseIt, prefs.Atimeout);
                } else {
                  pauseIt();
                }
              }
            }
          };
          document.addEventListener(ltype, pausehandler, false);
          remove.push(function() {
            document.removeEventListener(ltype, pausehandler, false);
          });
        }

        function scroll() {
          if (!pause && !working && (getRemain() <= SSS.a_remain || ipagesmode)) {
            if (doc) {
              // 有的话,就插入到文档.
              beforeInsertIntoDoc();
            } else {
              // 否则就请求文档.
              scrollDo();
            }
          } else {
            // debug('Scroll fails');
            // debug('Likely caused by firefox');
          }
        }

        var timeout;

        function timeoutfn() {
          clearTimeout(timeout);
          timeout = setTimeout(scroll, 100);
        }
        window.addEventListener("scroll", timeoutfn, false);
        remove.push(function() {
          window.removeEventListener("scroll", timeoutfn, false);
        });

        autoPO = {
          startipages: function(value) {
            if (value > 0) {
              ipagesmode = true;
              ipagesnumber = value + paged;
              notice("<b>状态</b>:" + "当前已翻页数量:<b>" + paged + "</b>," + '连续翻页到第<b style="color:red!important;">' + ipagesnumber + "</b>页.");
              if (SSS.a_manualA) insertedIntoDoc();
              scroll();
            }
          }
        };
      }

      // prefetcher
      function prefetcher(SSS, floatWO) {
        function cContainer() {
          const div = document.createElement("div");
          const div2 = div.cloneNode(false);
          const hr = document.createElement("hr");
          div.style.cssText =
            "\
                margin:3px!important;\
                padding:5px!important;\
                border-radius:8px!important;\
                -moz-border-radius:8px!important;\
                border-bottom:1px solid #E30005!important;\
                border-top:1px solid #E30005!important;\
                background-color:#F5F5F5!important;\
                float:none!important;\
            ";
          div.title = "预读的内容";
          div2.style.cssText =
            "\
                text-align:left!important;\
                color:red!important;\
                font-size:13px!important;\
                display:block!important;\
                float:none!important;\
                position:static!important;\
            ";
          hr.style.cssText = "\
                display:block!important;\
                border:1px inset #000!important;\
            ";
          div.appendChild(div2);
          div.appendChild(hr);
          document.body.appendChild(div);
          return {
            div: div,
            div2: div2
          };
        }

        floatWO.updateColor("prefetcher");

        floatWO.updateColor("loading");
        floatWO.CmodeIcon("show");

        if (SSS.useiframe) {
          const iframe = document.createElement("iframe");
          iframe.name = "superpreloader-iframe";
          iframe.src = nextlink;
          iframe.width = "100%";
          iframe.height = "0";
          iframe.frameBorder = "0";
          iframe.style.cssText = "\
                margin:0!important;\
                padding:0!important;\
            ";
          iframe.addEventListener(
            "load",
            function() {
              const body = this.contentDocument.body;
              if (body && body.firstChild) {
                floatWO.updateColor("prefetcher");
                floatWO.CmodeIcon("hide");
                floatWO.loadedIcon("show");
                this.removeEventListener("load", arguments.callee, false);

                if (SSS.lazyImgSrc) {
                  handleLazyImgSrc(SSS.lazyImgSrc, body);
                }
              }
            },
            false
          );
          if (SSS.viewcontent) {
            const container = cContainer();
            container.div2.innerHTML = "iframe全预读: " + "<br />" + "预读网址: " + "<b>" + nextlink + "</b>";
            iframe.height = "300px";
            container.div.appendChild(iframe);
          } else {
            document.body.appendChild(iframe);
          }
        } else {
          GM.xmlHttpRequest({
            method: "GET",
            url: nextlink,
            overrideMimeType: "text/html; charset=" + document.characterSet,
            onload: function(req) {
              const str = req.responseText;
              const doc = createDocumentByString(str);
              if (!doc) {
                console.error("%c[Super-preloader] %c文档对象创建失败!", debugStyle, "");
                return;
              }

              if (SSS.lazyImgSrc) {
                handleLazyImgSrc(SSS.lazyImgSrc, doc);
              }

              const images = doc.images;
              const isl = images.length;
              var img;
              const iarray = [];
              var i;
              const existSRC = {};
              var isrc;
              for (i = isl - 1; i >= 0; i--) {
                isrc = images[i].getAttribute("src");
                if (!isrc || existSRC[isrc]) {
                  continue;
                } else {
                  existSRC[isrc] = true;
                }
                img = document.createElement("img");
                img.src = isrc;
                iarray.push(img);
              }
              if (SSS.viewcontent) {
                const containter = cContainer();
                const div = containter.div;
                i = iarray.length;
                containter.div2.innerHTML = "预读取图片张数: " + "<b>" + i + "</b>" + "<br />" + "预读网址: " + "<b>" + nextlink + "</b>";
                for (i -= 1; i >= 0; i--) {
                  div.appendChild(iarray[i]);
                }
              }
              floatWO.updateColor("prefetcher");
              floatWO.loadedIcon("show");
              floatWO.CmodeIcon("hide");
            }
          });
        }
      }

      // 执行开始..///////////////////

      // 分析黑名单
      const blackList_re = new RegExp(blackList.map(wildcardToRegExpStr).join("|"));
      if (blackList_re.test(url)) {
        debug("%c[Super-preloader] %c匹配黑名单，js执行终止", debugStyle, "");
        return;
      }

      // 是否在frame上加载..
      if (prefs.DisableI && window.self != window.parent) {
        const isReturn = !_.find(DIExclude, function(x) {
          return x[1] && x[2].test(url);
        });
        if (isReturn) {
          debug("%c[Super-preloader] %curl为:%s的页面为非顶层窗口,JS执行终止", debugStyle, "", url);
          return;
        }
      }
      debug("%c[Super-preloader] %curl为:%s的页面,JS加载成功", debugStyle, "", url);

      // 第一阶段..分析高级模式..
      SITEINFO = SITEINFO.concat(SITEINFO_json, SITEINFO_TP, SITEINFO_comp);
      if (!SITEINFO_D.numOfRule || SITEINFO_D.numOfRule != SITEINFO.length) {
        SITEINFO_D.numOfRule = SITEINFO.length;
        GM.setValue("SITEINFO_D", JSON.stringify(SITEINFO_D));
      }

      // 重要的变量两枚.
      var nextlink;
      var prelink;
      //= ==============

      let SSS = {};

      const findCurSiteInfo = function() {
        const SIIAD = SITEINFO_D.autopager;
        var Rurl;
        const ii = SITEINFO.length;

        if (i8n() === "zh_CN") {
          debug("%c[Super-preloader] %c高级规则数目:%i", debugStyle, "", ii);
          debug("%c[Super-preloader] %c规则数 > %i 来自其他来源, 比如: wedata.net", debugStyle, "", ii - SITEINFO_json.length);
        } else {
          debug("%c[Super-preloader] %cNumber of advanced rules:%i", debugStyle, "", ii);
          debug("%c[Super-preloader] %cRules with ID > %i 来自其他来源, 比如: wedata.net", debugStyle, "", ii - SITEINFO_json.length);
        }

        for (var i = 0; i < ii; i++) {
          const SII = SITEINFO[i];
          Rurl = toRE(SII.url);
          if (Rurl.test(url)) {
            if (i8n() === "zh_CN") {
              debug("%c[Super-preloader] %c找到当前站点规则:%o", debugStyle, "", SII);
              debug("%c[Super-preloader] %c规则ID: %i", debugStyle, "", i + 1);
            } else {
              debug("[Super-preloader] %cFind rule for this website:%o", debugStyle, "", SII);
              debug("%c[Super-preloader] %cRule ID: %i", debugStyle, "", i + 1);
            }

            // 运行规则的 startFilter
            if (SII.autopager && SII.autopager.startFilter) {
              try {
                SII.autopager.startFilter(document, window);
                debug("%c[Super-preloader] %c执行 startFilter 成功", debugStyle, "");
              } catch (e) {
                console.error("%c[Super-preloader] %c执行 startFilter 错误 %o", debugStyle, "", e);
              }
            }

            nextlink = getElement(SII.nextLink || "auto;");
            if (!nextlink) {
              console.warn("%c[Super-preloader] %c无法找到下一页链接,继续查找其他规则,跳过规则:%o", debugStyle, "", SII);
              continue;
            }
            // 如果匹配到的下一页链接和当前页一致，继续查找下一条规则
            if (getFullHref(nextlink) == document.location.href) {
              nextlink = null;
              continue;
            }

            if (SII.preLink && SII.preLink != "auto;") {
              // 如果设定了具体的preLink
              prelink = getElement(SII.preLink);
            } else {
              if (prefs.autoGetPreLink) {
                getElement("auto;");
              }
            }

            // alert(prelink);
            SSS = {};
            SSS.Rurl = String(Rurl);
            // alert(SSS.Rurl);
            SSS.nextLink = SII.nextLink || "auto;";
            SSS.viewcontent = SII.viewcontent;
            SSS.enable = SII.enable === undefined ? SITEINFO_D.enable : SII.enable;
            SSS.useiframe = SII.useiframe === undefined ? SITEINFO_D.useiframe : SII.useiframe;
            if (SII.pageElement) {
              // 如果是Oautopager的规则..
              if (!(SII.autopager instanceof Object)) SII.autopager = {};
              SII.autopager.pageElement = SII.pageElement;
              if (SII.useiframe) SII.autopager.useiframe = SII.useiframe;
              if (SII.preLink) SII.autopager.preLink = SII.preLink;
              if (SII.insertBefore) SII.autopager.HT_insert = [SII.insertBefore, 1];
            }

            // 自动翻页设置.
            const SIIA = SII.autopager;
            if (SIIA) {
              SSS.a_pageElement = SIIA.pageElement;
              if (!SSS.a_pageElement) break;
              SSS.a_manualA = SIIA.manualA === undefined ? SIIAD.manualA : SIIA.manualA;
              SSS.a_enable = SIIA.enable === undefined ? SIIAD.enable : SIIA.enable;
              if (SIIA.useiframe === undefined) {
                if (SII.useiframe === undefined) {
                  SSS.a_useiframe = SIIAD.useiframe;
                } else {
                  SSS.a_useiframe = SII.useiframe;
                }
              } else {
                SSS.a_useiframe = SIIA.useiframe;
              }
              SSS.a_newIframe = SIIA.newIframe === undefined ? SIIAD.newIframe : SIIA.newIframe;
              SSS.a_iloaded = SIIA.iloaded === undefined ? SIIAD.iloaded : SIIA.iloaded;
              SSS.a_itimeout = SIIA.itimeout === undefined ? SIIAD.itimeout : SIIA.itimeout;
              // alert(SSS.a_itimeout);
              SSS.a_remain = SIIA.remain === undefined ? SIIAD.remain : SIIA.remain;
              SSS.a_maxpage = SIIA.maxpage === undefined ? SIIAD.maxpage : SIIA.maxpage;
              SSS.a_separator = SIIA.separator === undefined ? SIIAD.separator : SIIA.separator;
              SSS.a_sepdivDom = SIIA.sepdivDom === undefined ? undefined : SIIA.sepdivDom;
              SSS.a_separatorReal = SIIA.separatorReal === undefined ? SIIAD.separatorReal : SIIA.separatorReal;
              SSS.a_replaceE = SIIA.replaceE;
              SSS.a_HT_insert = SIIA.HT_insert;
              SSS.a_relatedObj = SIIA.relatedObj;
              SSS.a_ipages = SIIA.ipages === undefined ? SIIAD.ipages : SIIA.ipages;

              // new
              SSS.filter = SII.filter || SIIA.filter; // 新增了函数的形式，原来的功能是移除 pageElement
              SSS.a_documentFilter = SII.documentFilter || SIIA.documentFilter;
              SSS.a_scriptFilter = SIIA.scriptFilter === undefined ? "" : SIIA.scriptFilter;
              if (typeof SSS.a_documentFilter === "string") {
                if (SSS.a_documentFilter === "startFilter") {
                  SSS.a_documentFilter = function(doc, nextLink) {
                    return SII.autopager.startFilter(doc);
                  };
                }
              }
              SSS.a_stylish = SII.stylish || SIIA.stylish;
              SSS.lazyImgSrc = SIIA.lazyImgSrc;
              SSS.a_headers = SIIA.headers === undefined ? undefined : SIIA.headers; // custom header for XHRLoaded
              SSS.a_reload = SIIA.reload === undefined ? SIIAD.reload : SIIA.reload; // force reload iframe
              SSS.a_sandbox = SIIA.sandbox === undefined ? SIIAD.sandbox : SIIA.sandbox;

              // 在翻页的时候会有一些其他元素占据了页面的高度，导致翻页不精准。
              // 比如正文下面的推荐文章列表（占据超过整个页面10%就很难受）
              SSS.a_excludeElement = SIIA.excludeElement;
            }

            // 检验是否存在内容
            const pageElement = getElement(SSS.a_pageElement);
            if (!pageElement || (Array.isArray(pageElement) && pageElement.length === 0)) {
              nextlink = null;
              console.error("%c[Super-preloader] %c无法找到内容,跳过规则:%o %s", debugStyle, "", SII, "继续查找其他规则");
              continue;
            }

            SSS.hasRule = true;
            break;
          }
        }

        if (!SSS.hasRule) {
          console.warn("%c[Super-preloader] %c未找到合适的高级规则,开始自动匹配.", debugStyle, "");
          // 自动搜索.
          if (!autoMatch.keyMatch) {
            debug("%c[Super-preloader] %c自动匹配功能被禁用了.", debugStyle, "");
          } else {
            nextlink = autoGetLink();
            // alert(nextlink);
            if (nextlink) {
              // 强制模式.
              const FA = autoMatch.FA;
              SSS.Rurl = window.localStorage ? "am:" + (url.match(/^https?:\/\/[^:]*\//i) || [])[0] : "am:automatch";
              // alert(SSS.Rurl);
              SSS.enable = true;
              SSS.nextLink = "auto;";
              SSS.viewcontent = autoMatch.viewcontent;
              SSS.useiframe = autoMatch.useiframe;
              SSS.a_force = true;
              SSS.a_manualA = FA.manualA;
              // SSS.a_enable = FA.enable || false; //不能使a_enable的值==undefined...
              SSS.a_enable = FA.enable || SITEINFO_D.autopager.force_enable; // 不能使a_enable的值==undefined...
              SSS.a_useiframe = FA.useiframe;
              SSS.a_iloaded = FA.iloaded;
              SSS.a_itimeout = FA.itimeout;
              SSS.a_remain = FA.remain;
              SSS.a_maxpage = FA.maxpage;
              SSS.a_separator = FA.separator;
              SSS.a_ipages = FA.ipages;
            }
          }
        }

        // 如果规则没 lazyImgSrc，设置默认值
        if (!SSS.lazyImgSrc) {
          SSS.lazyImgSrc = prefs.lazyImgSrc;
        }

        debug("%c[Super-preloader] %c搜索高级规则和自动匹配过程总耗时:%ims", debugStyle, "", new Date() - startTime);
      };

      findCurSiteInfo();

      // 上下页都没有找到啊
      if (!nextlink && !prelink) {
        console.warn("%c[Super-preloader] %c未找到相关链接, JS执行停止. 共耗时:%ims", debugStyle, "", new Date() - startTime);
        return;
      } else {
        debug("%c[Super-preloader] %c上一页链接:%o", debugStyle, "", prelink);
        debug("%c[Super-preloader] %c下一页链接:%o", debugStyle, "", nextlink);
        nextlink = nextlink ? nextlink.href || nextlink : undefined;
        prelink = prelink ? prelink.href || prelink : undefined;
      }

      const superPreloader = {
        go: function() {
          if (nextlink) window.location.href = nextlink;
        },
        back: function() {
          if (!prelink) getElement("auto;");
          if (prelink) window.location.href = prelink;
        }
      };

      if (prefs.arrowKeyPage) {
        debug("%c[Super-preloader] %c添加键盘左右方向键翻页监听.", debugStyle, "");
        document.addEventListener(
          "keyup",
          function(e) {
            const tarNN = e.target.nodeName;
            if (tarNN != "BODY" && tarNN != "HTML") return;

            // check is a combo pressed
            if (e.ctrlKey || e.shiftKey || e.altKey || e.metaKey) {
              return;
            }

            switch (e.keyCode) {
              case 37:
                superPreloader.back();
                break;
              case 39:
                superPreloader.go();
                break;
              default:
                break;
            }
          },
          false
        );
      }

      // 监听下一页事件.
      debug("%c[Super-preloader] %c添加鼠标手势翻页监听", debugStyle, "");
      document.addEventListener(
        "superPreloader.go",
        function() {
          superPreloader.go();
        },
        false
      );

      // 监听下一页事件.
      document.addEventListener(
        "superPreloader.back",
        function() {
          superPreloader.back();
        },
        false
      );

      // 没找到下一页的链接
      if (!nextlink) {
        console.error("%c[Super-preloader] %c下一页链接不存在,JS无法继续.", debugStyle, "");
        debug("%c[Super-preloader] %c全部过程耗时:%ims", debugStyle, "", new Date() - startTime);

        return;
      }

      // 载入设置..
      const loadLocalSetting = function() {
        debug("%c[Super-preloader] %c加载设置", debugStyle, "");
        var savedValue = getValue("spfwset");
        if (savedValue) {
          try {
            savedValue = eval(savedValue);
          } catch (e) {
            saveValue("spfwset", ""); // 有问题的设置,被手动修改过?,清除掉,不然下次还是要出错.
          }
        }
        if (savedValue) {
          SSS.savedValue = savedValue;
          var i, ii;
          for (i = 0, ii = savedValue.length; i < ii; i++) {
            const savedValue_x = savedValue[i];
            if (savedValue_x.Rurl == SSS.Rurl) {
              for (var ix in savedValue_x) {
                if (savedValue_x.hasOwnProperty(ix)) {
                  SSS[ix] = savedValue_x[ix]; // 加载键值.
                }
              }
              break;
            }
          }
          // alert(i);
          SSS.sedValueIndex = i;
        } else {
          SSS.savedValue = [];
          SSS.sedValueIndex = 0;
        }
      };

      loadLocalSetting();

      if (!SSS.hasRule) {
        SSS.a_force = true;
      }

      if (SSS.a_force) {
        SSS.a_pageElement = "//body/*";
        SSS.a_HT_insert = undefined;
        SSS.a_relatedObj = undefined;
      }

      if (prefs.floatWindow) {
        debug("%c[Super-preloader] %c创建悬浮窗", debugStyle, "");
        floatWindow(SSS);
      }

      if (!SSS.enable) {
        console.warn("%c[Super-preloader] %c本规则被关闭,脚本执行停止", debugStyle, "");
        debug("%c[Super-preloader] %c全部过程耗时:%ims", debugStyle, "", new Date() - startTime);

        return;
      }
      debug("%c[Super-preloader] %c全部过程耗时:%ims", debugStyle, "", new Date() - startTime);

      // 预读或者翻页.
      if (SSS.a_enable) {
        debug("%c[Super-preloader] %c初始化,翻页模式.", debugStyle, "");
        autopager(SSS, floatWO);
      } else {
        debug("%c[Super-preloader] %c初始化,预读模式.", debugStyle, "");
        prefetcher(SSS, floatWO);
      }

      var docChecked;

      // 获取单个元素,混合
      function getElement(selector, contextNode, doc, win) {
        const _cplink = cplink;
        var ret;
        if (!selector) return ret;
        doc = doc || document;
        win = win || window;
        contextNode = contextNode || doc;
        const type = typeof selector;
        if (type == "string") {
          if (selector.search(/^css;/i) === 0) {
            ret = getElementByCSS(selector.slice(4), contextNode);
          } else if (selector.toLowerCase() == "auto;") {
            ret = autoGetLink(doc, win);
          } else {
            ret = getElementByXpath(selector, contextNode, doc);
          }
        } else if (type == "function") {
          ret = selector(doc, win, _cplink);
        } else if (selector instanceof Array) {
          for (var i = 0, l = selector.length; i < l; i++) {
            ret = getElement(selector[i], contextNode, doc, win);
            if (ret) {
              break;
            }
          }
        } else {
          ret = hrefInc(selector, doc, win, _cplink);
        }
        return ret;
      }

      function autoGetLink(doc, win) {
        if (!autoMatch.keyMatch) return;
        if (!parseKWRE.done) {
          parseKWRE();
          parseKWRE.done = true;
        }

        const startTime = new Date();
        doc = doc || document;
        win = win || window;

        if (doc == document) {
          // 当前文档,只检查一次.
          // alert(nextlink);
          if (docChecked) return nextlink;
          docChecked = true;
        }

        const _prePageKey = prePageKey;
        const _nextPageKey = nextPageKey;
        const _nPKL = nextPageKey.length;
        const _pPKL = prePageKey.length;
        const _getFullHref = getFullHref;
        const _getAllElementsByXpath = getAllElementsByXpath;
        const _Number = Number;
        const _domain_port = domain_port;
        const alllinks = doc.links;
        const alllinksl = alllinks.length;

        const curLHref = cplink;
        var _nextlink;
        var _prelink;
        if (!autoGetLink.checked) {
          // 第一次检查
          _nextlink = nextlink;
          _prelink = prelink;
        } else {
          _prelink = true;
        }

        const DCEnable = autoMatch.digitalCheck;
        const DCRE = /^\s*\D{0,1}(\d+)\D{0,1}\s*$/;

        var i, a, ahref, atext, numtext;
        var aP;
        var initSD;
        var searchD = 1;

        var preS1;
        var preS2;
        var searchedD;
        var pSNText;
        var preSS;
        var nodeType;
        var nextS1, nextS2, nSNText, nextSS;
        var aimgs, j, jj, aimg_x, xbreak, k, keytext;

        function finalCheck(a, type) {
          var ahref = a.getAttribute("href"); // 在chrome上当是非当前页面文档对象的时候直接用a.href访问,不返回href
          if (ahref == "#") {
            return null;
          }
          ahref = _getFullHref(ahref); // 从相对路径获取完全的href;

          // 3个条件:http协议链接,非跳到当前页面的链接,非跨域
          if (/^https?:/i.test(ahref) && ahref.replace(/#.*$/, "") != curLHref && ahref.match(/https?:\/\/([^\/]+)/)[1] == _domain_port) {
            if (xbug) {
              debug((type == "pre" ? "上一页" : "下一页") + "匹配到的关键字为:", atext);
            }
            return a; // 返回对象A
            // return ahref;
          }
        }

        if (xbug) {
          debug("%c[Super-preloader] %c全文档链接数量:%i", debugStyle, "", alllinksl);
        }

        for (i = 0; i < alllinksl; i++) {
          if (_nextlink && _prelink) break;
          a = alllinks[i];
          if (!a) continue; // undefined跳过
          // links集合返回的本来就是包含href的a元素..所以不用检测
          // if(!a.hasAttribute("href"))continue;
          atext = a.textContent;
          if (atext) {
            if (DCEnable) {
              numtext = atext.match(DCRE);
              if (numtext) {
                // 是不是纯数字
                // debug(numtext);
                numtext = numtext[1];
                // alert(numtext);
                aP = a;
                initSD = 0;

                if (!_nextlink) {
                  preS1 = a.previousSibling;
                  preS2 = a.previousElementSibling;

                  while (!(preS1 || preS2) && initSD < searchD) {
                    aP = aP.parentNode;
                    if (aP) {
                      preS1 = aP.previousSibling;
                      preS2 = aP.previousElementSibling;
                    }
                    initSD++;
                    // alert('initSD: '+initSD);
                  }
                  searchedD = initSD > 0;

                  if (preS1 || preS2) {
                    pSNText = preS1 ? preS1.textContent.match(DCRE) : "";
                    if (pSNText) {
                      preSS = preS1;
                    } else {
                      pSNText = preS2 ? preS2.textContent.match(DCRE) : "";
                      preSS = preS2;
                    }
                    // alert(previousS);
                    if (pSNText) {
                      pSNText = pSNText[1];
                      // debug(pSNText)
                      // alert(pSNText)
                      if (_Number(pSNText) == _Number(numtext) - 1) {
                        // alert(searchedD);
                        nodeType = preSS.nodeType;
                        // alert(nodeType);
                        if (
                          nodeType == 3 ||
                          (nodeType == 1 &&
                            (searchedD ? _getAllElementsByXpath("./descendant-or-self::a[@href]", preSS, doc).snapshotLength === 0 : !preSS.hasAttribute("href") || _getFullHref(preSS.getAttribute("href")) == curLHref))
                        ) {
                          _nextlink = finalCheck(a, "next");
                          // alert(_nextlink);
                        }
                        continue;
                      }
                    }
                  }
                }

                if (!_prelink) {
                  nextS1 = a.nextSibling;
                  nextS2 = a.nextElementSibling;

                  while (!(nextS1 || nextS2) && initSD < searchD) {
                    aP = aP.parentNode;
                    if (aP) {
                      nextS1 = a.nextSibling;
                      nextS2 = a.nextElementSibling;
                    }
                    initSD++;
                    // alert('initSD: '+initSD);
                  }
                  searchedD = initSD > 0;

                  if (nextS1 || nextS2) {
                    nSNText = nextS1 ? nextS1.textContent.match(DCRE) : "";
                    if (nSNText) {
                      nextSS = nextS1;
                    } else {
                      nSNText = nextS2 ? nextS2.textContent.match(DCRE) : "";
                      nextSS = nextS2;
                    }
                    // alert(nextS);
                    if (nSNText) {
                      nSNText = nSNText[1];
                      // alert(pSNText)
                      if (_Number(nSNText) == _Number(numtext) + 1) {
                        // alert(searchedD);
                        nodeType = nextSS.nodeType;
                        // alert(nodeType);
                        if (
                          nodeType == 3 ||
                          (nodeType == 1 &&
                            (searchedD ? _getAllElementsByXpath("./descendant-or-self::a[@href]", nextSS, doc).snapshotLength === 0 : !nextSS.hasAttribute("href") || _getFullHref(nextSS.getAttribute("href")) == curLHref))
                        ) {
                          _prelink = finalCheck(a, "pre");
                          // alert(_prelink);
                        }
                      }
                    }
                  }
                }
                continue;
              }
            }
          } else {
            atext = a.title;
          }
          if (!atext) {
            aimgs = a.getElementsByTagName("img");
            for (j = 0, jj = aimgs.length; j < jj; j++) {
              aimg_x = aimgs[j];
              atext = aimg_x.alt || aimg_x.title;
              if (atext) break;
            }
          }
          if (!atext) continue;
          if (!_nextlink) {
            xbreak = false;
            for (k = 0; k < _nPKL; k++) {
              keytext = _nextPageKey[k];
              if (!keytext.test(atext)) continue;
              _nextlink = finalCheck(a, "next");
              xbreak = true;
              break;
            }
            if (xbreak || _nextlink) continue;
          }
          if (!_prelink) {
            for (k = 0; k < _pPKL; k++) {
              keytext = _prePageKey[k];
              if (!keytext.test(atext)) continue;
              _prelink = finalCheck(a, "pre");
              break;
            }
          }
        }
        debug("%c[Super-preloader] %c搜索链接数量:%i 耗时:%ims ", debugStyle, "", i, new Date() - startTime);

        if (!autoGetLink.checked) {
          // 只在第一次检测的时候,抛出上一页链接.
          prelink = _prelink;
          autoGetLink.checked = true;
        }

        // alert(_nextlink);
        return _nextlink;
      }

      function parseKWRE() {
        function modifyPageKey(name, pageKey, pageKeyLength) {
          function strMTE(str) {
            return str
              .replace(/\\/g, "\\\\")
              .replace(/\+/g, "\\+")
              .replace(/\./g, "\\.")
              .replace(/\?/g, "\\?")
              .replace(/\{/g, "\\{")
              .replace(/\}/g, "\\}")
              .replace(/\[/g, "\\[")
              .replace(/\]/g, "\\]")
              .replace(/\^/g, "\\^")
              .replace(/\$/g, "\\$")
              .replace(/\*/g, "\\*")
              .replace(/\(/g, "\\(")
              .replace(/\)/g, "\\)")
              .replace(/\|/g, "\\|")
              .replace(/\//g, "\\/");
          }

          const pfwordl = autoMatch.pfwordl;

          const sfwordl = autoMatch.sfwordl;

          const RE_enable_a = pfwordl[name].enable;

          const RE_maxPrefix = pfwordl[name].maxPrefix;

          const RE_character_a = pfwordl[name].character;

          const RE_enable_b = sfwordl[name].enable;

          const RE_maxSubfix = sfwordl[name].maxSubfix;

          const RE_character_b = sfwordl[name].character;
          var plwords, slwords, rep;

          plwords = RE_maxPrefix > 0 ? "[" + (RE_enable_a ? strMTE(RE_character_a.join("")) : ".") + "]{0," + RE_maxPrefix + "}" : "";
          plwords = "^\\s*" + plwords;
          // alert(plwords);
          slwords = RE_maxSubfix > 0 ? "[" + (RE_enable_b ? strMTE(RE_character_b.join("")) : ".") + "]{0," + RE_maxSubfix + "}" : "";
          slwords = slwords + "\\s*$";
          // alert(slwords);
          rep = prefs.cases ? "" : "i";

          for (var i = 0; i < pageKeyLength; i++) {
            pageKey[i] = new RegExp(plwords + strMTE(pageKey[i]) + slwords, rep);
            // alert(pageKey[i]);
          }
          return pageKey;
        }

        // 转成正则.
        prePageKey = modifyPageKey("previous", prePageKey, prePageKey.length);
        nextPageKey = modifyPageKey("next", nextPageKey, nextPageKey.length);
      }
    }

    // By lastDream2013 略加修改，原版只能用于 Firefox
    function getRalativePageStr(lastUrl, currentUrl, nextUrl) {
      function getDigital(str) {
        const num = str.replace(/^p/i, "");
        return parseInt(num, 10);
      }

      const getRalativePageNumArray = function(lasturl, url) {
        if (!lasturl || !url) {
          return [0, 0];
        }

        const lasturlarray = lasturl.split(/-|\.|\&|\/|=|#|\?/);

        const urlarray = url.split(/-|\.|\&|\/|=|#|\?/);

        var url_info;

        var lasturl_info;
        // 一些 url_info 为 p1,p2,p3 之类的
        const handleInfo = function(s) {
          if (s) {
            return s.replace(/^p/, "");
          }
          return s;
        };
        while (urlarray.length !== 0) {
          url_info = handleInfo(urlarray.pop());
          lasturl_info = handleInfo(lasturlarray.pop());
          if (url_info != lasturl_info) {
            if (/[0-9]+/.test(url_info) && (url_info == "2" || /[0-9]+/.test(lasturl_info))) {
              return [parseInt(lasturl_info) || 1, parseInt(url_info)];
            }
          }
        }
        return [0, 0];
      };

      var relativeOff;

      // 论坛和搜索引擎网页显示实际页面信息
      var relativePageNumarray = [];
      if (nextUrl) {
        relativePageNumarray = getRalativePageNumArray(currentUrl, nextUrl);
      } else {
        relativePageNumarray = getRalativePageNumArray(lastUrl, currentUrl);
        relativeOff = relativePageNumarray[1] - relativePageNumarray[0]; // 用的上一页的相对信息比较的，要补充差值……
        relativePageNumarray[1] = relativePageNumarray[1] + relativeOff;
        relativePageNumarray[0] = relativePageNumarray[0] + relativeOff;
      }

      // console.log('[获取实际页数] ', '要比较的3个页数：',arguments, '，得到的差值:', relativePageNumarray);
      if (isNaN(relativePageNumarray[0]) || isNaN(relativePageNumarray[1])) {
        return "";
      }

      var realPageSiteMatch = false;
      relativeOff = relativePageNumarray[1] - relativePageNumarray[0];
      // 上一页与下一页差值为1，并最大数值不超过10000(一般论坛也不会超过这么多页……)
      if (relativeOff === 1 && relativePageNumarray[1] < 10000) {
        realPageSiteMatch = true;
      }

      // 上一页与下一页差值不为1，但上一页与下一页差值能被上一页与下一面所整除的，有规律的页面
      if (!realPageSiteMatch && relativeOff !== 1) {
        if (relativePageNumarray[1] % relativeOff === 0 && relativePageNumarray[0] % relativeOff === 0) {
          realPageSiteMatch = true;
        }
      }

      if (!realPageSiteMatch) {
        // 不满足以上条件，再根据地址特征来匹配
        var sitePattern;
        for (var i = 0, length = REALPAGE_SITE_PATTERN.length; i < length; i++) {
          sitePattern = REALPAGE_SITE_PATTERN[i];
          if (currentUrl.toLocaleLowerCase().indexOf(sitePattern) >= 0) {
            realPageSiteMatch = true;
            break;
          }
        }
      }

      var relativePageStr;
      if (realPageSiteMatch) {
        // 如果匹配就显示实际网页信息
        if (i8n() === "zh_CN") {
          if (relativePageNumarray[1] - relativePageNumarray[0] > 1) {
            // 一般是搜索引擎的第xx - xx项……
            relativePageStr = ' [ 实际：第 <span style="' + sep_icons.text_span_style + '">' + relativePageNumarray[0] + " - " + relativePageNumarray[1] + "</span> 项 ]";
          } else if (relativePageNumarray[1] - relativePageNumarray[0] === 1) {
            // 一般的翻页数，差值应该是1
            relativePageStr = ' [ 实际：第 <span style="' + sep_icons.text_span_style + '">' + relativePageNumarray[0] + "</span> 页 ]";
          } else if ((relativePageNumarray[0] === 0 && relativePageNumarray[1]) === 0) {
            // 找不到的话……
            relativePageStr = ' [ <span style="' + sep_icons.text_span_style + '">实际网页结束</span> ]';
          }
        } else {
          if (relativePageNumarray[1] - relativePageNumarray[0] > 1) {
            // 一般是搜索引擎的第xx - xx项……
            relativePageStr = ' [ Actual elements/pages: <span style="' + sep_icons.text_span_style + '">' + relativePageNumarray[0] + " - " + relativePageNumarray[1] + "</span> ]";
          } else if (relativePageNumarray[1] - relativePageNumarray[0] === 1) {
            // 一般的翻页数，差值应该是1
            relativePageStr = ' [ Actual elements/pages: <span style="' + sep_icons.text_span_style + '">' + relativePageNumarray[0] + "</span> ]";
          } else if ((relativePageNumarray[0] === 0 && relativePageNumarray[1]) === 0) {
            // 找不到的话……
            relativePageStr = ' [ <span style="' + sep_icons.text_span_style + '">Actual elements ends</span> ]';
          }
        }
      } else {
        relativePageStr = "";
      }
      return relativePageStr || "";
    }
  });

  // ----------------------------------

  var isUpdating = true;

  function checkUpdate(button) {
    if (isUpdating) {
      return;
    }

    button.innerHTML = "正在更新中...";
    button.disabled = "disabled";

    const reset = function() {
      isUpdating = false;
      button.innerHTML = "马上更新";
      button.disabled = "";
    };

    GM.xmlHttpRequest({
      method: "GET",
      url: scriptInfo.metaUrl,
      onload: function(response) {
        const txt = response.responseText;
        const curVersion = scriptInfo.version;
        var latestVersion = txt.match(/@\s*version\s*([\d\.]+)\s*/i);
        if (latestVersion) {
          latestVersion = latestVersion[1];
        } else {
          alert("解析版本号错误");
          return;
        }

        // 对比版本号
        var needUpdate;
        const latestVersions = latestVersion.split(".");
        const lVLength = latestVersions.length;
        const currentVersion = curVersion.split(".");
        const cVLength = currentVersion.length;
        var lV_x;
        var cV_x;
        for (var i = 0; i < lVLength; i++) {
          lV_x = Number(latestVersions[i]);
          cV_x = i >= cVLength ? 0 : Number(currentVersion[i]);
          if (lV_x > cV_x) {
            needUpdate = true;
            break;
          } else if (lV_x < cV_x) {
            break;
          }
        }

        if (needUpdate) {
          alert("本脚本从版本 " + scriptInfo.version + "  更新到了版本 " + latestVersion + ".\n请点击脚本主页进行安装");
          document.getElementById("sp-prefs-homepageURL").boxShadow = "0 0 2px 2px #FF5555";
        }

        reset();
      }
    });

    setTimeout(reset, 30 * 1000);
  }

  // ----------------------------------
  // main.js

  // ------------------------下面的不要管他-----------------
  /// ////////////////////////////////////////////////////////////////

  const C = console;
  var debug = function() {};
  // 变量
  var isHashchangeSite = false;

  var hashchangeTimer = 0;

  // ====================  libs  ==============================
  // 地址栏递增处理函数.
  function hrefInc(obj, doc, win, cplink) {
    var _cplink = cplink;

    function getHref(href) {
      const mFails = obj.mFails;
      if (!mFails) return href;
      var str;
      if (typeof mFails === "string") {
        str = mFails;
      } else {
        const array = [];
        for (var i = 0, ii = mFails.length; i < ii; i++) {
          const fx = mFails[i];
          if (!fx) continue;
          if (typeof fx !== "string" || fx.indexOf("re;") === 0) {
            const fxre = typeof fx === "string" ? toRE(fx.slice(3)) : fx;
            const mValue = href.match(fxre);
            if (!mValue) return href;
            array.push(mValue);
          } else {
            array.push(fx);
          }
        }
        str = array.join("");
      }
      return str;
    }
    // alert(getHref(_cplink))

    var sa = obj.startAfter;
    const saType = typeof sa;
    var index;

    if (saType == "string") {
      if (sa[0] == "#") {
        _cplink = doc.location.href;
      }
      index = _cplink.indexOf(sa);
      if (index == -1) {
        _cplink = getHref(_cplink);
        index = _cplink.indexOf(sa);
        if (index == -1) return;
        // alert(index);
      }
    } else {
      const tsa = _cplink.match(sa);
      // alert(sa);
      if (!tsa) {
        _cplink = getHref(_cplink);
        sa = (_cplink.match(sa) || [])[0];
        if (!sa) return;
        index = _cplink.indexOf(sa);
        if (index == -1) return;
      } else {
        sa = tsa[0];
        index = _cplink.indexOf(sa);
        // alert(index)
        // alert(tsa.index)
      }
    }

    index += sa.length;
    const max = obj.max === undefined ? 9999 : obj.max;
    const min = obj.min === undefined ? 1 : obj.min;
    const aStr = _cplink.slice(0, index);
    const bStr = _cplink.slice(index);
    const nbStr = bStr.replace(/^(\d+)(.*)$/, function(a, b, c) {
      b = Number(b) + obj.inc;
      if (b >= max || b < min) return a;
      return b + c;
    });
    // alert(aStr+nbStr);
    if (nbStr !== bStr) {
      var ilresult;
      try {
        ilresult = obj.isLast(doc, unsafeWindow, _cplink);
      } catch (e) {}
      if (ilresult) return;
      return aStr + nbStr;
    }
  }

  // underscore library, requires ECMAScript 5
  const _ = (function() {
    const nativeIsArray = Array.isArray;
    const _ = function(obj) {
      if (obj instanceof _) return obj;
      if (!(this instanceof _)) return new _(obj);
      this._wrapped = obj;
    };

    const toString = Object.prototype.toString;

    _.isArray =
      nativeIsArray ||
      function(obj) {
        return toString.call(obj) == "[object Array]";
      };

    _.isFunction = function(obj) {
      return !!(obj && obj.constructor && obj.call && obj.apply);
    };

    ["Arguments", "Function", "String", "Number", "Date", "RegExp"].forEach(function(name) {
      _["is" + name] = function(obj) {
        return toString.call(obj) == "[object " + name + "]";
      };
    });

    // Return the first value which passes a truth test. Aliased as `detect`.
    _.find = function(obj, iterator, context) {
      var result;
      obj.some(function(value, index, array) {
        if (iterator.call(context, value, index, array)) {
          result = value;
          return true;
        }
      });
      return result;
    };

    _.filter = function(obj, predicate) {
      return [].filter.apply(obj, [predicate]);
    };

    _.flat = function(obj) {
      return [].concat.apply([], obj);
    };

    _.has = function(obj, key) {
      return obj ? hasOwnProperty.call(obj, key) : false;
    };
    return _;
  })();

  /* jshint ignore:start */
  // 动画库
  const Tween = {
    Linear: function(t, b, c, d) {
      return (c * t) / d + b;
    },
    Quad: {
      easeIn: function(t, b, c, d) {
        return c * (t /= d) * t + b;
      },
      easeOut: function(t, b, c, d) {
        return -c * (t /= d) * (t - 2) + b;
      },
      easeInOut: function(t, b, c, d) {
        if ((t /= d / 2) < 1) return (c / 2) * t * t + b;
        return (-c / 2) * (--t * (t - 2) - 1) + b;
      }
    },
    Cubic: {
      easeIn: function(t, b, c, d) {
        return c * (t /= d) * t * t + b;
      },
      easeOut: function(t, b, c, d) {
        return c * ((t = t / d - 1) * t * t + 1) + b;
      },
      easeInOut: function(t, b, c, d) {
        if ((t /= d / 2) < 1) return (c / 2) * t * t * t + b;
        return (c / 2) * ((t -= 2) * t * t + 2) + b;
      }
    },
    Quart: {
      easeIn: function(t, b, c, d) {
        return c * (t /= d) * t * t * t + b;
      },
      easeOut: function(t, b, c, d) {
        return -c * ((t = t / d - 1) * t * t * t - 1) + b;
      },
      easeInOut: function(t, b, c, d) {
        if ((t /= d / 2) < 1) return (c / 2) * t * t * t * t + b;
        return (-c / 2) * ((t -= 2) * t * t * t - 2) + b;
      }
    },
    Quint: {
      easeIn: function(t, b, c, d) {
        return c * (t /= d) * t * t * t * t + b;
      },
      easeOut: function(t, b, c, d) {
        return c * ((t = t / d - 1) * t * t * t * t + 1) + b;
      },
      easeInOut: function(t, b, c, d) {
        if ((t /= d / 2) < 1) return (c / 2) * t * t * t * t * t + b;
        return (c / 2) * ((t -= 2) * t * t * t * t + 2) + b;
      }
    },
    Sine: {
      easeIn: function(t, b, c, d) {
        return -c * Math.cos((t / d) * (Math.PI / 2)) + c + b;
      },
      easeOut: function(t, b, c, d) {
        return c * Math.sin((t / d) * (Math.PI / 2)) + b;
      },
      easeInOut: function(t, b, c, d) {
        return (-c / 2) * (Math.cos((Math.PI * t) / d) - 1) + b;
      }
    },
    Expo: {
      easeIn: function(t, b, c, d) {
        return t == 0 ? b : c * Math.pow(2, 10 * (t / d - 1)) + b;
      },
      easeOut: function(t, b, c, d) {
        return t == d ? b + c : c * (-Math.pow(2, (-10 * t) / d) + 1) + b;
      },
      easeInOut: function(t, b, c, d) {
        if (t == 0) return b;
        if (t == d) return b + c;
        if ((t /= d / 2) < 1) return (c / 2) * Math.pow(2, 10 * (t - 1)) + b;
        return (c / 2) * (-Math.pow(2, -10 * --t) + 2) + b;
      }
    },
    Circ: {
      easeIn: function(t, b, c, d) {
        return -c * (Math.sqrt(1 - (t /= d) * t) - 1) + b;
      },
      easeOut: function(t, b, c, d) {
        return c * Math.sqrt(1 - (t = t / d - 1) * t) + b;
      },
      easeInOut: function(t, b, c, d) {
        if ((t /= d / 2) < 1) return (-c / 2) * (Math.sqrt(1 - t * t) - 1) + b;
        return (c / 2) * (Math.sqrt(1 - (t -= 2) * t) + 1) + b;
      }
    },
    Elastic: {
      easeIn: function(t, b, c, d, a, p) {
        if (t == 0) return b;
        if ((t /= d) == 1) return b + c;
        if (!p) p = d * 0.3;
        var s;
        if (!a || a < Math.abs(c)) {
          a = c;
          s = p / 4;
        } else {
          s = (p / (2 * Math.PI)) * Math.asin(c / a);
        }
        return -(a * Math.pow(2, 10 * (t -= 1)) * Math.sin(((t * d - s) * (2 * Math.PI)) / p)) + b;
      },
      easeOut: function(t, b, c, d, a, p) {
        if (t == 0) return b;
        if ((t /= d) == 1) return b + c;
        if (!p) p = d * 0.3;
        var s;
        if (!a || a < Math.abs(c)) {
          a = c;
          s = p / 4;
        } else {
          s = (p / (2 * Math.PI)) * Math.asin(c / a);
        }
        return a * Math.pow(2, -10 * t) * Math.sin(((t * d - s) * (2 * Math.PI)) / p) + c + b;
      },
      easeInOut: function(t, b, c, d, a, p) {
        if (t == 0) return b;
        if ((t /= d / 2) == 2) return b + c;
        if (!p) p = d * (0.3 * 1.5);
        var s;
        if (!a || a < Math.abs(c)) {
          a = c;
          s = p / 4;
        } else {
          s = (p / (2 * Math.PI)) * Math.asin(c / a);
        }
        if (t < 1) return -0.5 * (a * Math.pow(2, 10 * (t -= 1)) * Math.sin(((t * d - s) * (2 * Math.PI)) / p)) + b;
        return a * Math.pow(2, -10 * (t -= 1)) * Math.sin(((t * d - s) * (2 * Math.PI)) / p) * 0.5 + c + b;
      }
    },
    Back: {
      easeIn: function(t, b, c, d, s) {
        if (s == undefined) s = 1.70158;
        return c * (t /= d) * t * ((s + 1) * t - s) + b;
      },
      easeOut: function(t, b, c, d, s) {
        if (s == undefined) s = 1.70158;
        return c * ((t = t / d - 1) * t * ((s + 1) * t + s) + 1) + b;
      },
      easeInOut: function(t, b, c, d, s) {
        if (s == undefined) s = 1.70158;
        if ((t /= d / 2) < 1) return (c / 2) * (t * t * (((s *= 1.525) + 1) * t - s)) + b;
        return (c / 2) * ((t -= 2) * t * (((s *= 1.525) + 1) * t + s) + 2) + b;
      }
    },
    Bounce: {
      easeIn: function(t, b, c, d) {
        return c - Tween.Bounce.easeOut(d - t, 0, c, d) + b;
      },
      easeOut: function(t, b, c, d) {
        if ((t /= d) < 1 / 2.75) {
          return c * (7.5625 * t * t) + b;
        } else if (t < 2 / 2.75) {
          return c * (7.5625 * (t -= 1.5 / 2.75) * t + 0.75) + b;
        } else if (t < 2.5 / 2.75) {
          return c * (7.5625 * (t -= 2.25 / 2.75) * t + 0.9375) + b;
        } else {
          return c * (7.5625 * (t -= 2.625 / 2.75) * t + 0.984375) + b;
        }
      },
      easeInOut: function(t, b, c, d) {
        if (t < d / 2) return Tween.Bounce.easeIn(t * 2, 0, c, d) * 0.5 + b;
        else return Tween.Bounce.easeOut(t * 2 - d, 0, c, d) * 0.5 + c * 0.5 + b;
      }
    }
  };

  const TweenM = ["Linear", "Quad", "Cubic", "Quart", "Quint", "Sine", "Expo", "Circ", "Elastic", "Back", "Bounce"];

  const TweenEase = ["easeIn", "easeOut", "easeInOut"];
  /* jshint ignore:end */

  // ====================  functions  ==============================
  function handleLazyImgSrc(rule, doc) {
    const imgAttrs = rule.split("|");
    imgAttrs.forEach(function(attr) {
      attr = attr.trim();
      [].forEach.call(doc.querySelectorAll("img[" + attr + "]"), function(img) {
        const newSrc = img.getAttribute(attr);
        if (newSrc && newSrc != img.src) {
          img.setAttribute("src", newSrc);
          img.removeAttribute(attr);
        }
      });
    });
  }

  function removeScripts(node, scriptFilter) {
    // 移除元素的 script
    const scripts = getAllElements("css;script", node);

    var regFilter;
    if (scriptFilter) {
      regFilter = toRE(scriptFilter);
    }

    var scripts_x;
    for (var i = scripts.length - 1; i >= 0; i--) {
      scripts_x = scripts[i];
      var iremove = false;
      if (regFilter) {
        if (scripts_x.hasOwnProperty("src")) {
          if (!regFilter.test(scripts_x.src)) {
            iremove = true;
          }
        }
        if (scripts_x.text) {
          if (!regFilter.test(scripts_x.text)) {
            iremove = true;
          }
        }
        if (iremove) {
          scripts_x.parentNode.removeChild(scripts_x);
        }
      } else {
        scripts_x.parentNode.removeChild(scripts_x);
      }
    }
  }

  var noticeDiv;
  var noticeDivto;
  var noticeDivto2;

  function notice(html_txt, showTime) {
    if (!noticeDiv) {
      const div = document.createElement("div");
      noticeDiv = div;
      div.style.cssText =
        "\
            position:fixed!important;\
            z-index:2147483647!important;\
            float:none!important;\
            width:auto!important;\
            height:auto!important;\
            font-size:13px!important;\
            padding:3px 20px 2px 5px!important;\
            background-color:#7f8f9c!important;\
            border:none!important;\
            color:#000!important;\
            text-align:left!important;\
            left:0!important;\
            bottom:0!important;\
            opacity:0;\
            -moz-border-radius:0 6px 0 0!important;\
            border-radius:0 6px 0 0!important;\
            -o-transition:opacity 0.3s ease-in-out;\
            -webkit-transition:opacity 0.3s ease-in-out;\
            -moz-transition:opacity 0.3s ease-in-out;\
        ";
      document.body.appendChild(div);
    }
    clearTimeout(noticeDivto);
    clearTimeout(noticeDivto2);
    noticeDiv.innerHTML = html_txt;
    noticeDiv.style.display = "block";
    noticeDiv.style.opacity = "0.96";
    if (showTime === undefined) {
      showTime = 1666;
    }
    if (showTime > 0) {
      noticeDivto2 = setTimeout(function() {
        noticeDiv.style.opacity = "0";
      }, showTime);
      noticeDivto = setTimeout(function() {
        noticeDiv.style.display = "none";
      }, showTime + 300);
    }
  }

  // create element with attribute
  function $C(type, atArr, inner, action, listen) {
    const e = document.createElement(type);
    for (var at in atArr) {
      if (atArr.hasOwnProperty(at)) {
        e.setAttribute(at, atArr[at]);
      }
    }
    if (action && listen) {
      e.addEventListener(action, listen, false);
    }
    if (inner) {
      e.innerHTML = inner;
    }
    return e;
  }

  // set multiple attributes for a dom element
  function setAttributes(el, attrs) {
    for (var key in attrs) {
      if (Object.prototype.hasOwnProperty.call(attrs, key)) {
        el.setAttribute(key, attrs[key]);
      }
    }
  }
  // css 获取单个元素
  function getElementByCSS(css, contextNode) {
    return (contextNode || document).querySelector(css);
  }

  // css 获取所有元素
  function getAllElementsByCSS(css, contextNode) {
    return (contextNode || document).querySelectorAll(css);
  }

  // xpath 获取单个元素
  function getElementByXpath(xpath, contextNode, doc) {
    doc = doc || document;
    contextNode = contextNode || doc;
    try {
      const result = doc.evaluate(xpath, contextNode, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null);
      return result.singleNodeValue;
    } catch (err) {
      console.error("%c[Super-preloader]%c%s%o", debugStyle, "", "Invalid xpath: ", xpath);
      return undefined;
    }
  }

  // xpath 获取多个元素.
  function getAllElementsByXpath(xpath, contextNode, doc) {
    doc = doc || document;
    contextNode = contextNode || doc;
    return doc.evaluate(xpath, contextNode, null, XPathResult.ORDERED_NODE_SNAPSHOT_TYPE, null);
  }

  // 获取多个元素
  function getAllElements(selector, contextNode, doc, win, _cplink) {
    const ret = [];
    if (!selector) return ret;
    var Eles;
    doc = doc || document;
    win = win || window;
    _cplink = _cplink || undefined;
    contextNode = contextNode || doc;
    if (typeof selector === "string") {
      if (selector.search(/^css;/i) === 0) {
        Eles = getAllElementsByCSS(selector.slice(4), contextNode);
      } else {
        Eles = getAllElementsByXpath(selector, contextNode, doc);
      }
    } else {
      Eles = selector(doc, win, _cplink);
      if (!Eles) return ret;
      if (Eles.nodeType) {
        // 单个元素.
        ret[0] = Eles;
        return ret;
      }
    }

    function unique(array) {
      // 数组去重并且保持数组顺序.
      var i, ca, ca2, j;
      for (i = 0; i < array.length; i++) {
        ca = array[i];
        for (j = i + 1; j < array.length; j++) {
          ca2 = array[j];
          if (ca2 == ca) {
            array.splice(j, 1);
            j--;
          }
        }
      }
      return array;
    }

    function makeArray(x) {
      var ret = [];
      var i, ii;
      var x_x;
      if (x.pop) {
        // 普通的 array
        for (i = 0, ii = x.length; i < ii; i++) {
          x_x = x[i];
          if (x_x) {
            if (x_x.nodeType) {
              // 普通类型,直接放进去.
              ret.push(x_x);
            } else {
              ret = ret.concat(makeArray(x_x)); // 嵌套的.
            }
          }
        }
        // alert(ret)
        return unique(ret);
      } else if (x.item) {
        // nodelist or HTMLcollection
        i = x.length;
        while (i) {
          ret[--i] = x[i];
        }
        /*
                for(i=0,ii=x.length;i<ii;i++){
                    ret.push(x[i]);
                };
                */
        return ret;
      } else if (x.iterateNext) {
        // XPathResult
        i = x.snapshotLength;
        while (i) {
          ret[--i] = x.snapshotItem(i);
        }
        /*
                for(i=0,ii=x.snapshotLength;i<ii;i++){
                    ret.push(x.snapshotItem(i));
                };
                */
        return ret;
      }
    }

    return makeArray(Eles);
  }

  // 获取最后一个元素.
  function getLastElement(selector, _cplink, contextNode, doc, win) {
    const eles = getAllElements(selector, contextNode, doc, win, _cplink);
    const l = eles.length;
    if (l > 0) {
      return eles[l - 1];
    }
  }

  function saveValue(key, value) {
    localStorage.setItem(key, encodeURIComponent(value));
  }

  function getValue(key) {
    const value = localStorage.getItem(key);
    return value ? decodeURIComponent(value) : undefined;
  }

  function createDocumentByString(str) {
    // string转为DOM
    if (!str) {
      console.error("%c[Super-preloader] %c没有找到要转成DOM的字符串", debugStyle, "");
      return;
    }
    if (document.documentElement.nodeName != "HTML") {
      return new DOMParser().parseFromString(str, "application/xhtml+xml");
    }

    var doc;
    try {
      // firefox and chrome 30+，Opera 12 会报错
      doc = new DOMParser().parseFromString(str, "text/html");
    } catch (ex) {}

    if (doc) {
      return doc;
    }

    if (document.implementation.createHTMLDocument) {
      doc = document.implementation.createHTMLDocument("superPreloader");
    } else {
      try {
        doc = document.cloneNode(false);
        doc.appendChild(doc.importNode(document.documentElement, false));
        doc.documentElement.appendChild(doc.createElement("head"));
        doc.documentElement.appendChild(doc.createElement("body"));
      } catch (e) {}
    }
    if (!doc) return;
    const range = document.createRange();
    range.selectNodeContents(document.body);
    const fragment = range.createContextualFragment(str);
    doc.body.appendChild(fragment);
    const headChildNames = {
      TITLE: true,
      META: true,
      LINK: true,
      STYLE: true,
      BASE: true
    };
    var child;
    const body = doc.body;
    const bchilds = body.childNodes;
    for (var i = bchilds.length - 1; i >= 0; i--) {
      // 移除head的子元素
      child = bchilds[i];
      if (headChildNames[child.nodeName]) body.removeChild(child);
    }
    // alert(doc.documentElement.innerHTML);
    // debug(doc);
    // debug(doc.documentElement.innerHTML);
    return doc;
  }

  // 从相对路径的a.href获取完全的href值.
  function getFullHref(href) {
    if (typeof href !== "string") href = href.getAttribute("href");
    // alert(href);
    // if(href.search(/^https?:/)==0)return href;//http打头,不一定就是完整的href;
    var a = getFullHref.a;
    if (!a) {
      getFullHref.a = a = document.createElement("a");
    }
    a.href = href;
    // alert(a.href);
    return a.href;
  }

  // 任何转成字符串，存储，修改过
  function xToString(x) {
    function toStr(x) {
      switch (typeof x) {
        case "undefined":
          return Str(x);
        case "boolean":
          return Str(x);
        case "number":
          return Str(x);
        case "string":
          return (
            '"' +
            x.replace(/(?:\r\n|\n|\r|\t|\\|\")/g, function(a) {
              var ret;
              switch (
                a // 转成字面量
              ) {
                case "\r\n":
                  ret = "\\r\\n";
                  break;
                case "\n":
                  ret = "\\n";
                  break;
                case "\r":
                  ret = "\\r";
                  break;
                case "\t":
                  ret = "\\t";
                  break;
                case "\\":
                  ret = "\\\\";
                  break;
                case '"':
                  ret = '\\"';
                  break;
                default:
                  break;
              }
              return ret;
            }) +
            '"'
          );
        case "function": {
          const fnStr = Str(x);
          return fnStr.indexOf("native code") == -1 ? fnStr : "function(){}";
        }
        case "object":
          // 注,object的除了单纯{},其他的对象的属性会造成丢失..
          if (x === null) {
            return Str(x);
          }
          var rStr = "";
          var i;
          switch (x.constructor.name) {
            case "Object":
              for (i in x) {
                if (!x.hasOwnProperty(i)) {
                  // 去掉原型链上的属性.
                  continue;
                }
                rStr += toStr(i) + ":" + toStr(x[i]) + ",";
              }
              return "{" + rStr.replace(/,$/i, "") + "}";
            case "Array":
              for (i in x) {
                if (!x.hasOwnProperty(i)) {
                  // 去掉原型链上的属性.
                  continue;
                }
                rStr += toStr(x[i]) + ",";
              }
              return "[" + rStr.replace(/,$/i, "") + "]";
            case "String":
              return toStr(Str(x));
            case "RegExp":
              return Str(x);
            case "Number":
              return Str(x);
            case "Boolean":
              return Str(x);
            default:
              // alert(x.constructor);//漏了什么类型么?
              break;
          }
          break;
        default:
          break;
      }
    }
    const Str = String;
    return toStr(x);
  }

  function toRE(obj) {
    if (obj instanceof RegExp) {
      return obj;
    } else if (obj instanceof Array) {
      return new RegExp(obj[0], obj[1]);
    } else {
      if (obj.search(/^wildc;/i) === 0) {
        obj = wildcardToRegExpStr(obj.slice(6));
      }
      return new RegExp(obj);
    }
  }

  function wildcardToRegExpStr(urlstr) {
    if (urlstr.source) return urlstr.source;
    const reg = urlstr.replace(/[()\[\]{}|+.,^$?\\]/g, "\\$&").replace(/\*+/g, function(str) {
      return str === "*" ? ".*" : "[^/]*";
    });
    return "^" + reg + "$";
  }

  function getAllIndexes(arr, val) {
    var indexes = [];
    var i = -1;
    while ((i = arr.indexOf(val, i + 1)) != -1) {
      indexes.push(i);
    }
    return indexes;
  }

  function getDomain(cplink) {
    // Get [PROTOCOL]://[DOMAIN]
    var a = getAllIndexes(cplink, "/");
    if (a.length > 2) {
      return cplink.substr(0, a[2]);
    } else {
      return cplink;
    }
  }

  function assignMissingProperty(a, b) {
    var hasMissing = false;
    for (var prop in a) {
      if (!b.hasOwnProperty(prop)) {
        hasMissing = true;
        b[prop] = a[prop];
      }
    }
    return hasMissing;
  }

  function addStyle(aCss, aId, doc) {
    doc = doc || document;
    var head = doc.getElementsByTagName("head")[0];
    if (!head) {
      head = doc.documentElement;
    }
    var style = doc.createElement("style");
    if (aId) {
      style.setAttribute("id", aId);
    }
    style.setAttribute("type", "text/css");
    style.textContent = aCss;
    if (head) {
      return head.appendChild(style);
    } else {
      return null;
    }
  }

  function i8n() {
    if (userLang.indexOf("zh") !== -1 || prefs.ChineseUI) {
      return "zh_CN";
    } else {
      return "en_US";
    }
  }

  //Function to compare two version strings https://gist.github.com/TheDistantSea/8021359
  function versionCompare(v1, v2, options) {
    var lexicographical = options && options.lexicographical,
      zeroExtend = options && options.zeroExtend,
      v1parts = v1.split("."),
      v2parts = v2.split(".");

    function isValidPart(x) {
      return (lexicographical ? /^\d+[A-Za-z]*$/ : /^\d+$/).test(x);
    }

    if (!v1parts.every(isValidPart) || !v2parts.every(isValidPart)) {
      return NaN;
    }

    if (zeroExtend) {
      while (v1parts.length < v2parts.length) v1parts.push("0");
      while (v2parts.length < v1parts.length) v2parts.push("0");
    }

    if (!lexicographical) {
      v1parts = v1parts.map(Number);
      v2parts = v2parts.map(Number);
    }

    for (var i = 0; i < v1parts.length; ++i) {
      if (v2parts.length == i) {
        return 1;
      }

      if (v1parts[i] == v2parts[i]) {
        continue;
      } else if (v1parts[i] > v2parts[i]) {
        return 1;
      } else {
        return -1;
      }
    }

    if (v1parts.length != v2parts.length) {
      return -1;
    }

    return 0;
  }

  function emoji(unifiedValue) {
    if (String.fromCodePoint) {
      var emoji = parseInt(unifiedValue, 16);
      return String.fromCodePoint(emoji);
    } else {
      console.error("Shame on your browser!");
      return "";
    }
  }

  // https://gist.github.com/cking/aa1787207596261eaf69d79d983f6f49
  function shim_GM_notification() {
    if (typeof GM_notification === "function") {
      return;
    }
    window.GM_notification = function(ntcOptions) {
      checkPermission();

      function checkPermission() {
        if (Notification.permission === "granted") {
          fireNotice();
        } else if (Notification.permission === "denied") {
          alert("User has denied notifications for this page/site!");
          // eslint-disable-next-line no-useless-return
          return;
        } else {
          // eslint-disable-next-line compat/compat
          Notification.requestPermission(function(permission) {
            console.log("New permission: ", permission);
            checkPermission();
          });
        }
      }

      function fireNotice() {
        if (!ntcOptions.title) {
          console.log("Title is required for notification");
          return;
        }
        if (ntcOptions.text && !ntcOptions.body) {
          ntcOptions.body = ntcOptions.text;
        }
        var ntfctn = new Notification(ntcOptions.title, ntcOptions);

        if (ntcOptions.onclick) {
          ntfctn.onclick = ntcOptions.onclick;
        }
        if (ntcOptions.timeout) {
          setTimeout(function() {
            ntfctn.close();
          }, ntcOptions.timeout);
        }
      }
    };
  }
})();
