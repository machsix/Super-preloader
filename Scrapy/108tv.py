# -*- coding: utf-8 -*-
"""
Created on Wed Jun 13 00:55:16 2018

"""

import urllib
from lxml import etree
import lxml.html
import re,os,time,random
import threading
from collections import OrderedDict
import requests

header = {
"User-Agent": "Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/59.0.3071.115 Safari/537.36"
, "Connection": "keep-alive"
}
rootpage = 'http://www.meituwang.net/thread-24779-1-1.html'
req = requests.get(rootpage, headers=header)
htmldata = req.content.decode('gb18030')
htmlpath = lxml.html.fromstring(htmldata)

nodes = htmlpath.xpath('//a[contains(text(),"[108TV酱]")]')
nodes = htmlpath.xpath('//a[class="gj_safe_a"]')

with open('108tv.txt','w',encoding='UTF-8') as f:
    for i in nodes:
        print(i.text)
        plink = i.get('href')
    
        if 'meituwang' in plink:
            req2 = requests.get(plink, headers=header)
            htmldata2 = req2.content.decode('gb18030')
            htmlpath2 = lxml.html.fromstring(htmldata2)
      
            n = htmlpath2.xpath('//a[contains(text(),"百度网盘")]')
            if not n:
                print(plink)
                continue
            baidu_link = n[0].attrib['href']
            password = re.findall('(\w{4})\s*$',n[0].tail)[0]
            
            f.write('%s\n'%(i.text,))
            f.write('%s\n'%(baidu_link),)
            f.write('%s\n'%(password),)
            f.write('\n')