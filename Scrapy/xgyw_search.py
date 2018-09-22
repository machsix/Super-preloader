#!/usr/bin/env python3
# -*- coding: utf-8-*-
import urllib
from lxml import etree
import lxml.html
import re, os, time, random
import threading
from collections import OrderedDict
import requests

from weak_ciphers import TLSAdapter

session = requests.Session()
session.mount('https://', TLSAdapter())


def MyGet(*args, **kwargs):
    kwargs['timeout'] = 5
    try:
        r = session.get(*args, **kwargs)
    except (requests.exceptions.Timeout,
            requests.exceptions.ConnectionError) as err:
        try:
            time.sleep(60)
            r = session.get(*args, **kwargs)
        except (requests.exceptions.Timeout,
                requests.exceptions.ConnectionError) as err:
            print('Connection Error')
            raise requests.exceptions.ConnectionError
        else:
            return r
    else:
        return r


def LoadCategory(catpage,
                 root_dir,
                 catname,
                 header=None,
                 update=False,
                 filtlist=None):
    """ Download a specific category

    Arguments:
        catpage: link to category page
        basedir: File will be downloaded to basedir/catname/albumname/*.jpg
    """
    req = MyGet(catpage, headers=header)
    htmldata = req.content.decode('gb18030')
    htmlpath = lxml.html.fromstring(htmldata)

    # ============== Fetch Category Information ================
    # htmlpath = etree.HTML(htmldata,parser=etree.HTMLParser(encoding='utf-8'))
    # htmlpath = etree.HTML(htmldata,parser=etree.HTMLParser(encoding='gb2312'))
    pages = htmlpath.xpath('//div[@class="page"]/a/@href')
    # word = htmlpath.xpath('//div[@class="page"]/a/text()')
    if not pages:
        pattern = '(/' + catname + '/(?:page_\d+\.html)?)"'
        pages = re.findall(pattern.encode(), htmldata, re.IGNORECASE)
        pages = [i.decode() for i in pages]
        pages = list(OrderedDict.fromkeys(pages))
        pages.append('/' + catname + '/')

    if len(pages) != 1:
        pagenumberstr = [re.findall('(?<=page_)\d+', i) for i in pages]
        pagenumber = [int(i[0]) for i in pagenumberstr if i]
        numpage = max(pagenumber)
        lastpagelink = pages[pagenumberstr.index([str(numpage)])]
        linktemp = urllib.parse.urljoin(catpage, lastpagelink)
        linktemp = re.findall('https?.*\/page_', linktemp)[0]
    else:
        numpage = 1
        linktemp = catpage + '/page_'

    # ============== Create directory ===========================
    basedir = os.path.join(root_dir, 'Category')
    if not os.path.isdir(basedir):
        os.mkdir(basedir)
    work_dir = os.path.join(basedir, catname)
    if not os.path.isdir(work_dir):
        os.mkdir(work_dir)

    # =============== Log file =================================
    fid = open(os.path.join(work_dir, 'Log.txt'), 'w', 1)

    # =============== Loop between single page =================
    for i in range(1, numpage + 1):
        if i == 1:
            onepage = catpage
        else:
            onepage = linktemp + str(i) + '.html'
        print(onepage)
        status = LoadOnePage(onepage, work_dir, catname, fid, header, update,
                             filtlist)
        if (update and status[0] == "update"):
            print('Finish updating ' + catname)
            fid.write('Finish updating \n' + catname)
            break
        elif (i == numpage):
            print('Finish downloading ' + catname)
            fid.write('Finish downloading \n' + catname)
    fid.close()
    return


def LoadOnePage(onepage,
                work_dir,
                catname,
                fid,
                header=None,
                update=False,
                filtlist=None):
    """Download all albums for given page

    """
    req = MyGet(onepage, headers=header)
    htmldata = req.content.decode('gb18030')
    htmlpath = lxml.html.fromstring(htmldata)

    link = htmlpath.xpath('//div[@class="biank1"]/a/@href')
    link = [urllib.parse.urljoin(onepage, i) for i in link]

    for i, albumpage in enumerate(link):
        status = LoadAlbumPage(albumpage, work_dir, catname, fid, header,
                               False, filtlist)
        if (status[0] == 'exist' and update):
            status = ("update", onepage)
            break
        if (status[0] == 'filter'):
            status = HandleFilter(status, work_dir, fid, header)

        time.sleep(1 + random.randint(0, 2))
        if (status[0] == 'error'):
            print('retry %s' % (albumpage, ))
            fid.write('retry %s\n' % (albumpage, ))
            status = LoadAlbumPage(albumpage, work_dir, catname, fid, header,
                                   True, filtlist)

    return (status[0], onepage)


def LoadAlbumPage(albumpage,
                  work_dir,
                  catname,
                  fid,
                  header,
                  force=False,
                  filtlist=None):
    try:
        req = MyGet(albumpage, headers=header)
        htmldata = req.content.decode('gb18030')
    except:
        time.sleep(2)
        try:
            req = MyGet(albumpage, headers=header)
            htmldata = req.content.decode('gb18030', errors='ignore')
        except:
            print("Album Page: " + albumpage + " error")
            fid.write("Album Page: " + albumpage + " error\n")
            return ('error', albumpage, None, None)

    # machine without etree compiled with codecs
    try:
        htmlpath = lxml.html.fromstring(htmldata)
    except:
        print('%s fail' % (albumpage, ))
        fid.write('%s fail\n' % (albumpage, ))
        return ('error', albumpage, None, None)

    albumname = htmlpath.xpath('/html/head/title/text()')[0]
    if not albumname:
        print('No correct words obtained for %s ' % (albumpage, ))
        fid.write('No correct words obtained for %s \n' % (albumpage, ))
        htmlpath = etree.HTML(htmldata)
        albumname = htmlpath.xpath('/html/head/title/text()')[0]
        if not albumname:
            print('%s fail' % (albumpage, ))
            fid.write('%s fail' % (albumpage, ))
            return ('error', albumpage, None, None)

    if filtlist:
        for i in filtlist:
            if i in albumname:
                print('%s filter\n' % (albumname, ))
                return ('filter', albumpage, albumname, i)

    filtlist2 = ['simm', '国模', '375P']
    for i in filtlist2:
        if i in albumname:
            print('%s filter2\n' % (i, ))
            return ('done', albumpage, None, None)
    filtlist3 = ['siwameitui', 'Rosimeimei']
    for i in filtlist3:
        if i in albumpage:
            print('%s filter3\n' % (i, ))
            return ('done', albumpage, None, None)

    albumpath = os.path.join(work_dir, albumname)

    if not force:
        if os.path.isdir(albumpath):
            print('%s exists\n' % (albumpath, ))
            fid.write('%s exists\n' % (albumpath, ))
            return ('exist', albumpage, albumname, albumpath)
        else:
            os.mkdir(albumpath)
            print("%s: " % (albumname, ), end="", flush=True)
            fid.write("%s: " % (albumname, ))
    else:
        if not os.path.isdir(albumpath):
            os.mkdir(albumpath)
        print("%s: " % (albumname, ), end="", flush=True)
        fid.write("%s: " % (albumname, ))

    pic_pages = htmlpath.xpath('(//div[@class="page"])[1]/a/@href')
    pic_pages = [urllib.parse.urljoin(albumpage, i) for i in pic_pages]
    pic_pages = list(OrderedDict.fromkeys(pic_pages))
    # totalpage = len(pic_pages)

    part = int(len(pic_pages) / 10)
    if part == 0:
        part = 1

    count = 0
    for i, downpage in enumerate(pic_pages):
        count = savePictures(downpage, albumpath, count, fid)
        time.sleep(1 + (random.random()) * 2)
        if (i + 1) % part == 0:
            print(' %d' % ((i + 1) / part, ), end="")
            fid.write(' %d' % ((i + 1) / part, ))
    print(" ")
    fid.write('\n')

    return ('done', albumpage, albumname, albumpath)


class MyThread2(threading.Thread):
    def __init__(self,
                 keyword,
                 albumpage,
                 work_dir,
                 fid,
                 update=True,
                 filtlist=None):
        threading.Thread.__init__(self)
        self.keyword = keyword
        self.albumpage = albumpage
        self.work_dir = work_dir
        self.fid = fid
        self.update = update
        self.header = {
            "User-Agent":
            "Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/66.0.3359.181",
            "Connection":
            "keep-alive",
            "Accept-Language":
            "en-US,en;q=0.9,zh-CN;q=0.8,zh;q=0.7",
            "Accept-Encoding":
            "gzip, deflate",
            "Cookie":
            "__cfduid=dcd0a88f7c23d722a2efd367ab67846be1527481957; bdshare_firstime=1527482436711; ASPSESSIONIDSAQSQABC=PHNPGDJBOIDNFCENODMALDHO",
            "Accept":
            "*/*"
        }
        self.filtlist = filtlist

    def run(self):
        status = LoadAlbumPage(self.albumpage, self.work_dir, self.keyword,
                               self.fid, self.header, not self.update,
                               self.filtlist)

        if (status[0] == 'exist' and self.update):
            status = "update"
            self.fid.write('Finish update\n')
            return

        if (status[0] == 'filter'):
            status = HandleFilter(status, self.work_dir, self.fid, self.header)

        time.sleep(1 + random.randint(0, 2))
        if (status[0] == 'error'):
            print('retry %s' % (self.albumpage, ))
            self.fid.write('retry %s\n' % (self.albumpage, ))
            status = LoadAlbumPage(self.albumpage, self.work_dir, self.keyword,
                                   self.fid, self.header, True, self.filtlist)


def savePictures(downpage, albumpath, count, fid):
    header = {
        "User-Agent":
        "Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/66.0.3359.181",
        "Connection":
        "keep-alive",
        "Accept-Language":
        "en-US,en;q=0.9,zh-CN;q=0.8,zh;q=0.7",
        "Accept-Encoding":
        "gzip, deflate",
        "Referer":
        downpage,
        "Accept":
        "*/*"
    }
    try:
        req = MyGet(downpage, headers=header)
        htmldata = req.content.decode('gb18030')
    except:
        time.sleep(2)
        try:
            req = MyGet(downpage, headers=header)
            htmldata = req.content.decode('gb18030', errors='ignore')
        except:
            print("Page link: " + downpage + " error")
            fid.write("Page link: " + downpage + " error")
            return count

    # machine without etree compiled with codecs
    htmlpath = lxml.html.fromstring(htmldata)
    link = htmlpath.xpath('//div[@class="img"]/p/img/@src')
    link = [urllib.parse.urljoin(downpage, i) for i in link]
    if len(link) == 0:
        print("No image found at: " + downpage)
        fid.write("No image found at: " + downpage)
        return count

    for i in range(len(link)):
        sucess = False
        headers_down = {
            "User-Agent":
            "Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/66.0.3359.181",
            "Connection":
            "keep-alive",
            "Referer":
            downpage
        }
        try:
            #     print (link[i])
            req = MyGet(link[i], headers=headers_down)
            respHtml = req.content
            sucess = True
        except Exception:
            time.sleep(2)
            try:
                #     print (link[i])
                req = MyGet(link[i], headers=headers_down)
                respHtml = req.content
                sucess = True
            except Exception:
                sucess = False
                print("Pic link: " + link[i] + " error")
                fid.write("Pic lin: " + link[i] + " error")
                pass
        if sucess:
            filename = os.path.join(albumpath, str(count) + '.jpg')
            binfile = open(filename, "wb")
            binfile.write(respHtml)
            binfile.close()
            count += 1
    return count


def HandleFilter(status, work_dir, fid, header=None):
    """ Handle filtered album

    Arguments:
        status: output from loadAlbumPage ('filter',albumpage, albumname, filtered_keyword)
    """
    albumpage = status[1]
    girl_name = status[3]
    albumname = status[2]

    girl_dir = os.path.join(root_dir, 'GirlName')
    possible_path = os.path.join(root_dir, 'GirlName', girl_name, albumname)
    catname = albumpage.split('/')[3]
    possible_path2 = os.path.join(root_dir, 'Category', catname, albumname)
    current_path = os.path.join(work_dir, albumname)

    if not os.path.isdir(current_path):
        if (not os.path.isdir(possible_path)):
            if (not os.path.isdir(possible_path2)):
                if (not os.path.isdir(os.path.join(girl_dir, girl_name))):
                    os.mkdir(os.path.join(girl_dir, girl_name))
                status = LoadAlbumPage(albumpage, girl_dir, girl_name, fid,
                                       header, True, None)
                os.symlink(possible_path, current_path)
                status = ('done', albumpage, albumname, possible_path)
            else:
                os.symlink(possible_path2, current_path)
                status = ('done', albumpage, albumname, possible_path2)
        else:
            os.symlink(possible_path, current_path)
            status = ('done', albumpage, albumname, possible_path)
    else:
        status = ('done', albumpage, albumname, os.path.realpath(current_path))

    return status


def Imgsearch(keyword,
              root_dir,
              type,
              nthread=1,
              update=True,
              force=False,
              filtlist=None):
    url = 'https://www.jpxgyw.com/plus/search/index.asp'
    payload = {
        #   'button': '搜索'.encode(encoding='gb2312'),
        'keyword': keyword.encode(encoding='gb2312')
    }
    req = MyGet(url, params=payload)
    htmlpath = lxml.html.fromstring(req.content.decode('gb18030'))
    linklist = htmlpath.xpath('//div[@class="title1"]/a/@href')
    links = [
        urllib.parse.urljoin('https://www.jpxgyw.com', i) for i in linklist
    ]
    # 检测下一页
    pages = [
        urllib.parse.urljoin('https://www.jpxgyw.com/plus/search/index.asp', i)
        for i in htmlpath.xpath('//div[@class="page"]/a/@href')
    ]
    if len(pages) > 0:
        for i, j in enumerate(pages[1:]):
            payload = {
                #   'button': '搜索'.encode(encoding='gb2312'),
                'keyword': keyword.encode(encoding='gb2312'),
                'searchtype': 'title',
                'p': i + 1
            }
            req = MyGet(url, params=payload)
            htmlpath = lxml.html.fromstring(req.content.decode('gb18030'))
            linklist = htmlpath.xpath('//div[@class="title1"]/a/@href')
            for w in linklist:
                links += [urllib.parse.urljoin('https://www.jpxgyw.com', w)]

    if type == 'girl':
        basedir = os.path.join(root_dir, 'GirlName')
    elif type == 'keyword':
        basedir = os.path.join(root_dir, 'Keyword')
    if not os.path.isdir(basedir):
        os.mkdir(basedir)

    work_dir = os.path.join(basedir, keyword)
    if not os.path.isdir(work_dir):
        os.mkdir(work_dir)
    fid = open(os.path.join(work_dir, 'Log.txt'), 'a')

    #    links = [re.sub('_\d+?(?=\.html)','',i) for i in links]

    # serial
    status = 'None'
    if nthread == 1:
        if len(links) > 100:
            jj = 450
        else:
            jj = 0
        for ilink, albumpage in enumerate(links[jj:]):
            fid.flush()
            header = {
                "User-Agent":
                "Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/66.0.3359.181",
                "Connection":
                "keep-alive",
                "Accept-Language":
                "en-US,en;q=0.9,zh-CN;q=0.8,zh;q=0.7",
                "Accept-Encoding":
                "gzip, deflate",
                "Cookie":
                "__cfduid=dcd0a88f7c23d722a2efd367ab67846be1527481957; bdshare_firstime=1527482436711; ASPSESSIONIDSAQSQABC=PHNPGDJBOIDNFCENODMALDHO",
                "Accept":
                "*/*"
            }
            print('%d: %s' % (ilink + jj, albumpage))
            status = LoadAlbumPage(albumpage, work_dir, keyword, fid, header,
                                   force, filtlist)

            if (status[0] == 'exist' and update):
                status = "update"
                fid.write('Finish update\n')
                break

            if (status[0] == 'filter'):
                status = HandleFilter(status, work_dir, fid, header)

            if (status[0] != 'exist'):
                time.sleep(1 + random.randint(0, 2))
            if (status[0] == 'error'):
                print('retry %s' % (albumpage, ))
                fid.write('retry %s\n' % (albumpage, ))
                status = LoadAlbumPage(albumpage, work_dir, keyword, fid,
                                       header, True, filtlist)
    else:
        mythreads = [
            MyThread2(
                keyword, i, work_dir, fid, update=True, filtlist=filtlist)
            for i in links
        ]
        w = 0
        i = 0
        while i + w < len(links):
            for i in range(nthread):
                if i + w >= l:
                    break
                mythreads[i + w].start()
            for i in range(nthread):
                if i + w >= l:
                    break
                mythreads[i + w].join()
            time.sleep(random.random() * 2)
            w = w + nthread
        status = 'done'

    return status


class MyThread(threading.Thread):
    def __init__(self,
                 catpage,
                 root_dir,
                 catname,
                 header,
                 update,
                 filtlist=None):
        threading.Thread.__init__(self)
        self.catpage = catpage
        self.root_dir = root_dir
        self.catname = catname
        self.header = header
        self.update = update
        self.filtlist = filtlist

    def run(self):
        LoadCategory(self.catpage, self.root_dir, self.catname, self.header,
                     self.update, self.filtlist)


if (__name__ == '__main__'):
    girl_name = [
        '尤妮丝', '土肥圆', '黄乐然', '筱慧', '乔依琳', '菲菲', '刘钰儿', '夏雪爱', '阿乖', '诗盈',
        '金baby', '蜜蕊', '纳砂', '许文婷', '绮里嘉', '颜颜', '曾水', '廿十', '金梓馨', '思淇', '妲己',
	'考拉', '卓娅祺', '孙梦瑶', '缇娜美', '芝芝', '奶昔','木木', 'lunana'
    ]
    root_dir = '/mnt/HD/HD_a2/Image'
   # root_dir = os.getcwd()
    os.chdir(root_dir)
    for name in girl_name:
        Imgsearch(name, root_dir, 'girl', nthread=1, update=True)
    keywords = [
        '空姐',
        '半裸',
        '皮衣',
    ]
 #   for keyword in keywords:
  #      Imgsearch(keyword, root_dir, 'keyword',
   #         nthread=1,update=True, filtlist=girl_name)
