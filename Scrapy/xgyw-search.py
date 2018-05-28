#!/usr/bin/env python3
# -*- coding: utf-8-*-
import urllib
from lxml import etree
import lxml.html
import re,os,time,random
import threading
from collections import OrderedDict
import requests

        
def loadCategory(catpage,catname,header,update=0):
    req = requests.get(catpage, headers=header)
    htmldata = req.content.decode('gb18030')
    htmlpath = lxml.html.fromstring(htmldata)

    # htmlpath = etree.HTML(htmldata,parser=etree.HTMLParser(encoding='utf-8'))
    # htmlpath = etree.HTML(htmldata,parser=etree.HTMLParser(encoding='gb2312'))
    pages  = htmlpath.xpath('//div[@class="page"]/a/@href')
    #word = htmlpath.xpath('//div[@class="page"]/a/text()')
    if not pages:
        pattern = '(/'+catname+'/(?:page_\d+\.html)?)"'
        pages=re.findall(pattern.encode(),htmldata,re.IGNORECASE)
        pages = [i.decode() for i in pages]
        pages =  list(OrderedDict.fromkeys(pages))
        pages.append('/'+catname+'/')
        
    if len(pages) != 1:
        pagenumberstr = [re.findall('(?<=page_)\d+',i) for i in pages]
        pagenumber = [int(i[0]) for i in pagenumberstr if i]
        numpage = max(pagenumber)
        lastpagelink = pages[pagenumberstr.index([str(numpage)])]
        linktemp  = urllib.parse.urljoin(catpage,lastpagelink)
        linktemp = re.findall('https?.*\/page_',linktemp)[0]
    else:
        numpage = 1
        linktemp = catpage+'/page_'
    if not os.path.isdir(catname):
        os.mkdir(catname)
    
    #clean_album_name = re.compile(catname, re.IGNORECASE)
    fid = open(os.path.join(catname,'Log.txt'),'w',1)
    #fid = 1
    for i in range(1,numpage+1):
        if i == 1:
            onepage = catpage
        else:
            onepage = linktemp + str(i)+'.html'
        print(onepage)
        status = loadOnePage(onepage,header,catname,fid,update)
        if (update == 1 and status == "fupdate"):
            print('Finish updating '+catname)
            fid.write('Finish updating '+catname)
            break
        elif ( i == numpage):
            print('Finish downloading '+catname)
            break
    fid.close()
    return

def loadOnePage(onepage,header,catname,fid,update):
    req = requests.get(onepage, headers=header)
    htmldata = req.content.decode('gb18030')
    htmlpath = lxml.html.fromstring(htmldata)


    link  = htmlpath.xpath('//div[@class="biank1"]/a/@href')
    link = [urllib.parse.urljoin(onepage,i) for i in link]
    
    #girlpages_name  = htmlpath.xpath('//div[@class="biank1"]/a/text()')
    for i,albumpage in enumerate(link):
        status = loadAlbumPage(albumpage,header,catname,fid)
        if (update == 1 ):
            if (status == 'exist'):
                status = "fupdate"
                break
            elif (status == 'done'):
                time.sleep(1+random.randint(0,2))
        else:
            if (status == 'done'):
                time.sleep(1+random.randint(0,2))
    return status


def loadAlbumPage(albumpage,header,catname,fid,force=False):
    try:
        req = requests.get(albumpage, headers=header)
        htmldata = req.content.decode('gb18030')
    except:
        time.sleep(2)
        try:
            req = requests.get(albumpage, headers=header)
            htmldata = req.content.decode('gb18030',errors='ignore')
        except:
            print("Album Page: "+albumpage+" error")
            fid.write("Album Page: "+albumpage+" error")
            return 'error'
    
    # machine without etree compiled with codecs    
    try:
        htmlpath = lxml.html.fromstring(htmldata)
    except:
        print('%s fail'%(albumpage,))
        fid.write('%s fail'%(albumpage,))
        return 'error'

    albumname0 = htmlpath.xpath('/html/head/title/text()')[0]
    if not albumname0:
        print('Not correct words obtained for %s '%(albumpage,))
        fid.write('Not correct words obtained for %s '%(albumpage,))
        htmlpath = etree.HTML(htmldata)
        albumname0 = htmlpath.xpath('/html/head/title/text()')[0]
        if not albumname0:
            print('%s fail'%(albumpage,))
            fid.write('%s fail'%(albumpage,))
            return 'error'
        
    albumname = os.path.join(catname,albumname0)

    if not force:
        if os.path.isdir(albumname):
            print ('%s exists\n'%(albumname,))
            fid.write('%s exists\n'%(albumname,))
            return 'exist'
        else:
            os.mkdir(albumname)
            print("%s: "%(albumname0,), end="", flush=True)
            fid.write("%s: "%(albumname0,))
    else:
        if not os.path.isdir(albumname):
            os.mkdir(albumname)
        print("%s: "%(albumname0,), end="", flush=True)
        fid.write("%s: "%(albumname0,))
            
    pic_pages= htmlpath.xpath('(//div[@class="page"])[1]/a/@href')
    pic_pages = [urllib.parse.urljoin(albumpage,i) for i in pic_pages]
    pic_pages = list(OrderedDict.fromkeys(pic_pages))
    #totalpage = len(pic_pages)
    
    part = int(len(pic_pages)/10)
    if part == 0:
        part =1

    count=0
    for i,downpage in enumerate(pic_pages):
        count = savePictures(downpage,albumname,count,fid)
        if  (i+1)%part == 0:
            print(' %d'%((i+1)/part,), end="")
            fid.write(' %d'%((i+1)/part,))
    print (" ")
    fid.write('\n')
    
    return 'done'

class MyThread2(threading.Thread):
    def __init__(self, albumpage,keyword,fid,force=False):
        threading.Thread.__init__(self)
        self.albumpage = albumpage
        self.keyword = keyword
        self.fid = fid
        self.force=force
        self.header = {
        "User-Agent": "Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/66.0.3359.181"
        , "Connection": "keep-alive"
        , "Accept-Language":"en-US,en;q=0.9,zh-CN;q=0.8,zh;q=0.7"
        , "Accept-Encoding":"gzip, deflate"
        , "Cookie": "__cfduid=dcd0a88f7c23d722a2efd367ab67846be1527481957; bdshare_firstime=1527482436711; ASPSESSIONIDSAQSQABC=PHNPGDJBOIDNFCENODMALDHO"
        , "Accept":"*/*"
        }
    def run(self):
        status = loadAlbumPage(self.albumpage,self.header,self.keyword,self.fid,self.force)
        

def savePictures(downpage,albumname,count,fid):
    header = {"User-Agent": "Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/66.0.3359.181"
            , "Connection": "keep-alive"
            , "Accept-Language":"en-US,en;q=0.9,zh-CN;q=0.8,zh;q=0.7"
            , "Accept-Encoding":"gzip, deflate"
            , "Referer": downpage
            , "Accept":"*/*"
            }
    try:
        req = requests.get(downpage, headers=header)
        htmldata = req.content.decode('gb18030')
    except:
        time.sleep(2)
        try:
            req = requests.get(downpage, headers=header)
            htmldata = req.content.decode('gb18030',errors='ignore')
        except:
            print("Page link: "+downpage+" error")
            fid.write("Page link: "+downpage+" error")
            return count
        
    # machine without etree compiled with codecs    
    htmlpath = lxml.html.fromstring(htmldata)
    link = htmlpath.xpath('//div[@class="img"]/p/img/@src')
    link = [urllib.parse.urljoin(downpage,i) for i in link]
    if len(link) == 0: 
        print("No image found at: "+downpage)
        fid.write("No image found at: "+downpage)
        return count
   
    for i in range(len(link)):
        sucess = False
        headers_down = {"User-Agent": "Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/66.0.3359.181"
                , "Connection": "keep-alive"
                , "Referer": downpage
                }
        try:
       #     print (link[i])
            req = requests.get(link[i], headers=headers_down)
            respHtml = req.content
            sucess = True
        except Exception :
            time.sleep(2)
            try:
           #     print (link[i])
                req = requests.get(link[i], headers=headers_down)
                respHtml = req.content
                sucess = True
            except Exception :
                sucess = False
                print("Pic link: "+link[i]+" error")
                fid.write("Pic lin: "+link[i]+" error")
                pass
        if sucess:
            filename = os.path.join(albumname,str(count)+'.jpg')
            binfile = open(filename , "wb")
            binfile.write(respHtml)
            binfile.close()
            count += 1
    return count

def Imgsearch(keyword,nthread=5,update=1):
    #keyword = "刘钰儿"
    #
    url = 'http://www.xgyw.cc/plus/search/index.asp'
    payload = {'button': '搜索'.encode(encoding='gb2312'), 'keyword': keyword.encode(encoding='gb2312')}
    req = requests.post(url, data=payload)
    htmlpath = lxml.html.fromstring(req.content.decode('gb18030'))
    linklist=htmlpath.xpath('//div[@class="title1"]/a/@href')
    links = [urllib.parse.urljoin('http://www.xgyw.cc',i) for i in linklist]
    
    fid = open(keyword+'.txt','w')
    if not os.path.isdir(keyword):
        os.mkdir(keyword)
        
    
    l = len(links)

#    links = [re.sub('_\d+?(?=\.html)','',i) for i in links]
    
    
    
    # serial
    if nthread == 1:
        for albumpage in links:
            header = {
        "User-Agent": "Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/66.0.3359.181"
        , "Connection": "keep-alive"
        , "Accept-Language":"en-US,en;q=0.9,zh-CN;q=0.8,zh;q=0.7"
        , "Accept-Encoding":"gzip, deflate"
        , "Cookie": "__cfduid=dcd0a88f7c23d722a2efd367ab67846be1527481957; bdshare_firstime=1527482436711; ASPSESSIONIDSAQSQABC=PHNPGDJBOIDNFCENODMALDHO"
        , "Accept":"*/*"
        }
            status = loadAlbumPage(albumpage,header,keyword,fid)
            if (update == 1 ):
                if (status == 'exist'):
                    status = "fupdate"
                    break
                elif (status == 'done'):
                    time.sleep(random.random()*2)
            else:
                if (status == 'done'):
                    time.sleep(random.random()*2)
    else:
        mythreads = [MyThread2(i,keyword,fid,force=False) for i in links]
        w = 0
        i = 0
        while i+w < l:
            for i in range(nthread):
                if i+w >= l:
                    break
                mythreads[i+w].start()
            for i in range(nthread):
                if i+w >= l:
                    break
                mythreads[i+w].join()    
            time.sleep(random.random()*2)
            w = w+nthread
        status = 'done'
        
    return status
    

class MyThread(threading.Thread):
    def __init__(self, catpage,name,header,update):
        threading.Thread.__init__(self)
        self.catpage = catpage
        self.name = name
        self.header = header
        self.update = update

    def run(self):
        loadCategory(self.catpage,self.name,self.header,self.update)

if ( __name__ == '__main__' ):
    Imgsearch('尤妮丝',1)
    Imgsearch('土肥圆',1)
    Imgsearch('刘钰儿',1)

    