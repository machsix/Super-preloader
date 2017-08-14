#!/usr/bin/env python
import urllib
import urllib.request
from lxml import etree
import re,os,time,random
import threading

def loadCategory(catpage,catname,header):
    req = urllib.request.Request(catpage, headers=header)
    html = urllib.request.urlopen(req)
    htmldata = html.read()
    htmlpath = etree.HTML(htmldata)
    pages  = htmlpath.xpath('//div[@class="page"]/a/@href')
    word = htmlpath.xpath('//div[@class="page"]/a/text()')
    lastpage = word.index('尾页')
    lastpagelink = pages[lastpage]
    linktemp  = urllib.parse.urljoin(catpage,lastpagelink)
    numpage = int(re.findall('(?<=page_)\d+',linktemp)[0])
    linktemp = re.findall('http.*\/page_',linktemp)[0]

    if not os.path.isdir(catname):
       os.mkdir(catname)

   # fid = open(file=os.path.join(catname,'Log.txt'),mode='a')
    fid = 1
    for i in range(numpage+1):
        if i == 0:
            onepage = catpage
        else:
            onepage = linktemp + str(i)+'.html'
        print(onepage)
        status = loadOnePage(onepage,header,catname,fid)
        if (status == 0 and i == len(pages)-1):
            print('Finish updating '+catname)
            return 0
   #fid.close()

def loadOnePage(onepage,header,catname,fid):
    req = urllib.request.Request(onepage, headers=header)
    html = urllib.request.urlopen(req)
    htmldata = html.read()
    htmlpath = etree.HTML(htmldata)
    link  = htmlpath.xpath('//div[@class="biank1"]/a/@href')
    link = [urllib.parse.urljoin(onepage,i) for i in link]

    #girlpages_name  = htmlpath.xpath('//div[@class="biank1"]/a/text()')
    for i,albumpage in enumerate(link):
        status = loadAlbumPage(albumpage,header,catname,fid)
        if (status == 0 and i == len(link)-1):
            return 0
        elif (status == 1):
            time.sleep(3+random.randint(0,99))
        else:
            time.sleep(1)
    return 1


def loadAlbumPage(albumpage,header,catname,f):
    req = urllib.request.Request(albumpage, headers=header)
    html = urllib.request.urlopen(req)
    htmldata = html.read()
    htmlpath = etree.HTML(htmldata)
    albumname = htmlpath.xpath('/html/head/title/text()')[0]
    albumname = os.path.join(catname,albumname)

    if os.path.isdir(albumname):
       print (albumname," exists\n")
       return 0
    else:
       os.mkdir(albumname)

    albumpages= htmlpath.xpath('//div[@class="page"]/a/@href')
    albumpages = [urllib.parse.urljoin(albumpage,i) for i in albumpages]
    albumpages = list(set(albumpages))
    #totalpage = len(albumpages)

    count=0
    for downpage in albumpages:
        count = savePictures(downpage,albumname,count)
   # f.write(albumname)
    print (albumname +" saved")
    return 1


def savePictures(downpage,name,count):
    header = {
            "User-Agent": "Mozilla/5.0 (Windows NT 10.0; WOW64; rv:53.0) Gecko/20100101 Firefox/53.0"
            , "Connection": "keep-alive"
            , "Referer": "image / webp, image / *, * / *;q = 0.8"
            ,"Accept":"image/webp,image/*,*/*;q=0.8"
            }
    req = urllib.request.Request(downpage, headers=header)
    page = urllib.request.urlopen(req)
    htmldata = page.read()
    htmlpath = etree.HTML(htmldata)
    link = htmlpath.xpath('//div[@class="img"]/p/img/@src')
    link = [urllib.parse.urljoin(downpage,i) for i in link]

    for i in range(len(link)):
        headers_down = {
                "User-Agent": "Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/59.0.3071.115 Safari/537.36"
                , "Connection": "keep-alive"
                , "Referer": downpage
                }
        try:
       #     print (link[i])
            req = urllib.request.Request(link[i],headers=headers_down)
            urlhtml = urllib.request.urlopen(req)
            respHtml = urlhtml.read()
            filename = os.path.join(name,str(count)+'.jpg')
            binfile = open(filename , "wb")
            binfile.write(respHtml);
            binfile.close();
            count += 1
        except Exception :
            print(link[i]+" error")
            pass
    return count

class MyThread(threading.Thread):
    def __init__(self, catpage,name,header):
        threading.Thread.__init__(self)
        self.catpage = catpage
        self.name = name
        self.header = header

    def run(self):
        loadCategory(self.catpage,self.name,self.header)

if ( __name__ == '__main__' ):
    header = {
    "User-Agent": "Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/59.0.3071.115 Safari/537.36"
    , "Connection": "keep-alive"
    }

    catpage=['http://www.toutiao.de/?Xiuren/',]

    name = [re.findall('(?<=\?).*(?=\/)',i)[0] for i in catpage]

    #mythread = [0]*len(catpage)

    for i in range(len(catpage)):
        loadCategory(catpage[i],name[i],header)
