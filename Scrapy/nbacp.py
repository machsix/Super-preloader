# -*- coding: utf-8 -*-
"""
Created on Thu Nov 30 23:36:36 2017

"""

#!/usr/bin/env python
import urllib
import urllib.request
from lxml import etree
import re,os,time
import json

aria2c_token = "xxx"
download_server = "https://aaa.bbb.com"
aria2c_port = "6800"

header = {
    "User-Agent": "Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/62.0.3202.94 Safari/537.36"
    , "Connection": "keep-alive"
    }
download_dir = '/mnt/blockstorage/Downloads/nbacp/'

pre = 'http://nbacp.com/free/detail?vid='
link = 'http://nbacp.com/free?search=%E5%85%94%E5%85%94%E7%9A%84%E5%B0%8F%E5%B0%8F%E5%B0%8F%E5%8F%B7%E5%8F%B7'
req = urllib.request.Request(link, headers=header)
html = urllib.request.urlopen(req)
htmldata = html.read()
htmlpath = etree.HTML(htmldata)
pages  = htmlpath.xpath('//div[@class="video"]/@data-vid')
pages = [pre+i for i in pages]

name = htmlpath.xpath('//div[@class="video"]/div[@class="title"]/text()')
name = [re.sub("[丨「T。」\s？]+", "",i) for i in name]
name = [i[2:] for i in name]

for i in range(0,len(pages),1):
    print(i)
    ipage = pages[i]
    ireq = urllib.request.Request(ipage, headers=header)
    ihtml = urllib.request.urlopen(ireq)
    ihtmldata = ihtml.read()
    ihtmlpath = etree.HTML(ihtmldata)
    j = 0
    download = 1
    fname = name[i]+'.mp4'
    while os.path.isfile(os.path.join(download_dir,fname)):
    #    if os.path.isfile(os.path.join(download_dir,fname+'.aria2')):
    #        print(fname)
    #        download = 1
    #        break
    #    else:
        j = j+1
        fname = name[i]+'_%d.mp4'%(j,)
    #    download = 0
    #    break 

    if download == 1:
        videolink = ihtmlpath.xpath('//video[@id="playerv"]/@src')
        if len(videolink) != 0:
            videolink = videolink[0]
            print("File: %s "%(fname))
            if 'nbacp' in videolink:
                jsonreq = json.dumps({'jsonrpc':'2.0', 'id':'qwer',
                          'method':'aria2.addUri',
                          'params':['token:'+aria2c_token,[videolink],
                                    {'dir':download_dir,
                                     'out':'nbacp_'+fname,
                                     'user-agent':header['User-Agent'],
                                     'referer':ipage}]}).encode("utf-8")
            else:
                jsonreq = json.dumps({'jsonrpc':'2.0', 'id':'qwer',
                                      'method':'aria2.addUri',
                                      'params':['token:'+aria2c_token,[videolink],
                                                {'dir':download_dir,
                                                 'out':fname,
                                                 'user-agent':header['User-Agent']}]}).encode("utf-8")
            try:
                c = urllib.request.urlopen(download_server+':'+aria2c_port+'/jsonrpc', jsonreq)
                print('下载：%s'%(fname,))
                print(c.read())
            except Exception:
                print('Fail Download') 
                print("Link : "+videolink)
            time.sleep(0.5)
        else:
            images = ihtmlpath.xpath('//figure/div/a/@href')
            if len(images) != 0:
                albumname = os.path.join(download_dir,fname[:-4])
                jj = 1
                while os.path.isdir(albumname):
                    albumname = albumname+'_%d'%(jj,)
                    jj = jj+1
                os.mkdir(albumname)
                count = 0
                for ii in range(len(images)):
                    try:
                   #     print (link[i])
                        req = urllib.request.Request(images[ii],headers=header)
                        urlhtml = urllib.request.urlopen(req)
                        respHtml = urlhtml.read()
                        filename = os.path.join(albumname,str(count)+'.jpg')
                        binfile = open(filename , "wb")
                        binfile.write(respHtml);
                        binfile.close();
                        count += 1
                    except Exception :
                        print(images[ii]+" error")
                        pass
                print('下载图片:%s'%(fname[:-4],))
