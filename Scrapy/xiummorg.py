#!/usr/bin/env python
import  urllib2
from lxml import etree
import re,os,time,random

def loadPage(pagesitem):
    req = urllib2.Request(pagesitem, headers=header)
    html = urllib2.urlopen(req)
    htmldata = html.read()
    htmlpath = etree.HTML(htmldata)
    girlpages_name = htmlpath.xpath('//div[@class="gallary_item_album album"]/div[@class="item"]/div[@class="pic_box"]/table/tr/td/a/img/@alt')
    girlpages = htmlpath.xpath('///div[@class="pic_box"]/table/tr/td/a/@href')
    with open('test.txt','a+') as f:
        for i in girlpages_name:
            f.write(i.encode("utf-8")+'\n')
    for i in range(len(girlpages)):
        try: 
            w = loadOnePage(girlpages[i],girlpages_name[i])
        except Exception:
            with open('debug.txt','w') as f:
               f.write(pagesitem+'\n')
               for i in girlpages:
                   f.write(i+'\n')
               for i in girlpages_name:
                   f.write(i.encode("utf-8")+'\n')
            print len(girlpages)
#            print [s.encode("utf-8")  for s in girlpages_name] 
            print len(girlpages_name)
        if w == 1:
           time.sleep(3+random.randint(0,99))

def loadOnePage(onepage,girlpages_name):
    if os.path.isdir(girlpages_name):
       print girlpages_name.encode("utf-8")+" exists\n"
       return 0
    else:
       os.mkdir(girlpages_name)
    req = urllib2.Request(onepage, headers=header)
    html = urllib2.urlopen(req)
    htmldata = html.read()
    htmlpath = etree.HTML(htmldata)
    albumpages= htmlpath.xpath('//div[@class="paginator"]/a/@href')
    totalpage = re.search('(\d+)(?!.*\d)',albumpages[-1])
    totalpage=int(totalpage.group())
    prefix = onepage[0:-5]
    for i in range(totalpage):
        if i == 0:
            downpage=onepage
            savePictures(downpage,1,girlpages_name)
        else:
            downpage=prefix+"-"+str(i+1)+".html"
            savePictures(downpage,0,girlpages_name) 
    print girlpages_name+" saved"
    return 1


def savePictures(downpage,first,girlpages_name):
    header = {
            "User-Agent": "Mozilla/5.0 (Windows NT 10.0; WOW64; rv:53.0) Gecko/20100101 Firefox/53.0"
            , "Connection": "keep-alive"
            , "Referer": "image / webp, image / *, * / *;q = 0.8"
            ,"Accept":"image/webp,image/*,*/*;q=0.8"
            }
    try:
        req = urllib2.Request(downpage, headers=header)
	html = urllib2.urlopen(req)
	htmldata = html.read()
	htmlpath = etree.HTML(htmldata)
	print downpage
	link = htmlpath.xpath('//div[@class="pic_box"]/table/tr/td/img/@src')
	names = htmlpath.xpath('//div[@class="pic_box"]/table/tr/td/img/@alt')
	for i in range(len(link)):
	      link[i] = "http://www.xiumm.org"+link[i]
	if first == 1:
	      cover = htmlpath.xpath('//div[@class="pic_box"]/div[@class="gallary_item_cover"]/img/@src')
	      covername = htmlpath.xpath('//div[@class="pic_box"]/div[@class="gallary_item_cover"]/img/@alt')
	      link = cover+link
	      names = covername+names
    except Exception:
        pass
		
    for i in range(len(link)):
        headers_down = {
                "User-Agent": "Mozilla/5.0 (Windows NT 10.0; WOW64; rv:53.0) Gecko/20100101 Firefox/53.0"
                , "Connection": "keep-alive"
                , "Referer": downpage
                }
        try:
	  #  print link[i]
            req = urllib2.Request(link[i], headers=headers_down)
            urlhtml = urllib2.urlopen(req)
            respHtml = urlhtml.read()
            binfile = open('%s/%s.jpg' % ( girlpages_name,names[i] ) , "wb")
            binfile.write(respHtml);
            binfile.close();
        except Exception :
            print link[i]+" error"
            pass


header = {
        "User-Agent": "Mozilla/5.0 (Windows NT 10.0; WOW64; rv:53.0) Gecko/20100101 Firefox/53.0"
        , "Connection": "keep-alive"
        }

rootpage = "http://www.xiumm.org/albums/UGirls.html"
req = urllib2.Request(rootpage, headers=header)
html = urllib2.urlopen(req)
htmldata = html.read()
htmlpath = etree.HTML(htmldata)
pages = htmlpath.xpath('//div[@class="paginator"]/a/@href')
endpage = pages[-1]

m = re.search('(\d+)(?!.*\d)',endpage)
numpage = int(m.group())

for i in range(numpage):
    if i == 0:
        pagesitem=rootpage
    else:
        pagesitem=rootpage[0:-5]+"-"+str(i+1)+".html"
    print "Page: "+str(i)
    loadPage(pagesitem)
