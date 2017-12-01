# -*- coding: utf-8 -*-
#download http://www.modelx.org/category/graphis-collection-2002-2016/
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
    pages  = htmlpath.xpath('//div[@class="wp-pagenavi"]/a/@href')
    pagenumberstr = [re.findall('(?<=page/)\d+',i) for i in pages]
    pagenumber = [int(i[0]) for i in pagenumberstr if i]
    linkhead = catpage
    numpage = max(pagenumber)

    fid=1
    if not os.path.isdir(catname):
        os.mkdir(catname)
    for i in range(numpage+1):
        if i == 0:
            onepage = linkhead
        else:
            onepage = linkhead+'page/'+str(i)+'/'
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
    link  = htmlpath.xpath('//ul[@id="infinite-articles"]/li/a/@href')
    linkname = htmlpath.xpath('//ul[@id="infinite-articles"]/li/div[@class="article-comm"]/span/span/text()')
    linkname = [i[4:].replace(' ','_') for i in linkname]

    #girlpages_name  = htmlpath.xpath('//div[@class="biank1"]/a/text()')
    for i,albumpage in enumerate(link):
        albumname = linkname[i]
        status = loadAlbumPage(albumpage,albumname,header,catname,fid)
        if (status == 0 and i == len(link)-1):
            return 0
        elif (status == 1):
            time.sleep(1+random.randint(0,5))
        else:
            time.sleep(0.5)
    return 1


def loadAlbumPage(albumpage,albumname,header,catname,f):
    req = urllib.request.Request(albumpage, headers=header)
    html = urllib.request.urlopen(req)
    htmldata = html.read()
    htmlpath = etree.HTML(htmldata)

    folder = os.path.join(catname,albumname)
    if os.path.isdir(folder):
       print (folder," exists\n")
       return 0
    else:
       os.mkdir(folder)


    piclink =[htmlpath.xpath('//div[contains(@class,"post")]/div[@class="media-single-content"]/img/@src')[0],]
    other = htmlpath.xpath('//div[contains(@class,"post")]/div[@class="entry"]/div[@id="gallery-2"]/dl/dt/a/@href')
    piclink = list(set(piclink+other))
    piclink.sort()


    count = 0
    for i in range(len(piclink)):
        headers_down = {
                "User-Agent": "Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/59.0.3071.115 Safari/537.36"
                , "Connection": "keep-alive"
                , "Referer": albumpage
                }
        try:
       #     print (link[i])
            req = urllib.request.Request(piclink[i],headers=headers_down)
            urlhtml = urllib.request.urlopen(req)
            respHtml = urlhtml.read()
            filename = os.path.join(catname,albumname,str(count)+'.jpg')
            binfile = open(filename , "wb")
            binfile.write(respHtml);
            binfile.close();
            count += 1
        except Exception :
            print(piclink[i]+" error")
            pass

    print (albumname +" saved with error %d"%(count,))
    return 1



#class MyThread(threading.Thread):
#    def __init__(self, catpage,name,header):
#        threading.Thread.__init__(self)
#        self.catpage = catpage
#        self.name = name
#        self.header = header
#
#    def run(self):
#        loadCategory(self.catpage,self.name,self.header)

if ( __name__ == '__main__' ):
    header = {
    "User-Agent": "Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/59.0.3071.115 Safari/537.36"
    , "Connection": "keep-alive"
    }
    catpage = ['http://www.modelx.org/category/graphis-collection-2002-2016/',]
    catname = ['Graphis',]

    loadCategory(catpage[0],catname[0],header)