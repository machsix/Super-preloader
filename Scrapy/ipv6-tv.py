#!/usr/bin/env python3
# -*- coding: utf-8-*-
import urllib
from lxml import etree
import lxml.html
import re,os,time,random
import threading
from collections import OrderedDict
import requests

header = {"User-Agent": "Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/66.0.3359.181"
        , "Connection": "keep-alive"
        , "Accept-Language":"en-US,en;q=0.9,zh-CN;q=0.8,zh;q=0.7"
        , "Accept-Encoding":"gzip, deflate"
        , "Accept":"*/*"
        }
page="http://www.daoiqi.com/iptv6.html#tab1"
req = requests.get(page, headers=header)

htmldata = req.content.decode('utf-8')
htmlpath = lxml.html.fromstring(htmldata)

ChannelTitle = htmlpath.xpath('//h3[@class="iptvChannelTitle"]')
ChannelTitle = [i.xpath('span/text()')[0] for i in ChannelTitle if i.xpath('span/text()')]

link = htmlpath.xpath('//ul[@class="iptvAddressList"]/a[@rel="nofollow"]')

link = [urllib.parse.urljoin(downpage,i) for i in link]