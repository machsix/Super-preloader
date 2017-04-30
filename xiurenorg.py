#!/usr/bin/env python
import  urllib2
from lxml import etree
import re,os,time,random
from BeautifulSoup import BeautifulSoup as bs

def loadPage(pagesitem):
    req = urllib2.Request(pagesitem, headers=header)
    html = urllib2.urlopen(req)
    htmldata = html.read()
    htmlpath = etree.HTML(htmldata)
    girlpages_name = htmlpath.xpath('//div[@class="content"]/a/@title')
    girlpages = htmlpath.xpath('//div[@class="content"]/a/@href')
    with open('test.txt','a+') as f:
        for i in girlpages_name:
            f.write(i.encode("utf-8")+'\n')
    for i in range(len(girlpages)):
        w = savePictures(girlpages[i],girlpages_name[i])
  #      if w == 1:
  #        time.sleep(3+random.randint(0,99))

def savePictures(downpage,girlpages_name):
    girlpages_name = girlpages_name.replace(" ","")
    if os.path.isdir(girlpages_name):
       print girlpages_name.encode("utf-8")+" exists\n"
       return 0
    else:
       os.mkdir(girlpages_name)
    header = {
            "User-Agent": "Mozilla/5.0 (Windows NT 10.0; WOW64; rv:53.0) Gecko/20100101 Firefox/53.0"
            , "Connection": "keep-alive"
            , "Referer": "image / webp, image / *, * / *;q = 0.8"
            ,"Accept":"image/webp,image/*,*/*;q=0.8"
            }
    headers_down = {
             "User-Agent": "Mozilla/5.0 (Windows NT 10.0; WOW64; rv:53.0) Gecko/20100101 Firefox/53.0"
            , "Connection": "keep-alive"
            , "Referer": downpage
            }
    req = urllib2.Request(downpage, headers=header)
    html = urllib2.urlopen(req)
    htmldata = html.read()
    htmlpath = etree.HTML(htmldata)

    soup = bs(htmldata)
    span = soup.findAll('span', {'class':'photoThum'})
    for sp in span:
	    link = sp.find('a')['href']
	    name = link.split('/')[-1]
	    req = urllib2.Request(link, headers=headers_down)
	    urlhtml = urllib2.urlopen(req)
	    respHtml = urlhtml.read()
            binfile = open('%s/%s' % (girlpages_name,name) , "wb")
	    binfile.write(respHtml);
	    binfile.close();
    print girlpages_name+" saved"
    return 1


header = {
        "User-Agent": "Mozilla/5.0 (Windows NT 10.0; WOW64; rv:53.0) Gecko/20100101 Firefox/53.0"
        , "Connection": "keep-alive"
        }
rootpage = "http://www.xiuren.org/category/TuiGirl.html"
req = urllib2.Request(rootpage, headers=header)
html = urllib2.urlopen(req)
htmldata = html.read()
htmlpath = etree.HTML(htmldata)
soup = bs(htmldata)
span = soup.findAll('span', {'class':'info'})[0]
numpage = int(span.text.split('/')[1])
for i in range(numpage):
    if i == 0:
        pagesitem=rootpage
    else:
        pagesitem=rootpage[0:-5]+"-"+str(i+1)+".html"
    print "Page: "+str(i)
    print pagesitem
    loadPage(pagesitem)
