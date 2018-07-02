# -*- coding: utf-8 -*-
"""
Created on Thu May 10 01:05:52 2018
"""
import urllib
import urllib.request
import json
import os
import re
from datetime import datetime

lastupdate = datetime(2018, 6, 14)

os.chdir('E:\\Git\\personal-scripts\\Super_preloader')
header = {
"User-Agent": "Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/59.0.3071.115 Safari/537.36"
, "Connection": "keep-alive"
}
page = 'http://wedata.net/databases/AutoPagerize/items.json'
req = urllib.request.Request(page, headers=header)
html = urllib.request.urlopen(req)
htmldata = html.read()
data = htmldata.decode('utf-8')
dedata = json.loads(data)



mydata = []
for i in dedata:
    this_update=i['updated_at']
    year = int(this_update[:4])
    month = int(this_update[5:7])
    day = int(this_update[8:10])
    this_update = datetime(year,month,day)
    if this_update > lastupdate:
        w = i['data']
        w['name'] = i['name']
        w['created_by'] = i['created_by']
        w['resource_url'] = i['resource_url']
        w['url'] = w['url'].replace('\'','"')
        w['nextLink'] = w['nextLink'].replace('\'','"')
        w['pageElement'] = w['pageElement'].replace('\'','"')
        if 'prevLink'in w.keys():
            w['prevLink'] = w['prevLink'].replace('\'','"')
        if 'Stylish' in w.keys():
            w['stylish'] = w['Stylish'].replace('\n',' ')
            w['stylish'] = w['stylish'].replace('\r',';')    
            w['stylish'] = re.sub('{\s*;','{',w['stylish'])
            w['stylish'] = re.sub(';\s*;',';',w['stylish'])

            w.pop('Stylish',None)
            
        if 'exampleUrl' in w.keys():
            w['siteExample'] = w['exampleUrl'].replace('\n','')
            w['siteExample'] = w['siteExample'].replace('\r',';').replace('\'','"')     
            w.pop('exampleUrl',None)


        if 'insertBefore' in w.keys():
            if len(w['insertBefore']) == 0:
                w.pop('insertBefore', None)
            else:
                continue
        if 'forum - showthread.php' in w['name']:
            continue
        if 'gamer\.com\.tw' in w['url']:
            continue
        if 'phpBB, fluxBB, Board3, Huddler' in w['name']:
            continue
        if 'Generic Posts Rule' in w['name']:
            continue      
        mydata.append(w)
        
        

            
with open('wedata.json', 'w',encoding='utf-8') as f:  
    f.write("    // update at: %s\n"%(datetime.now().strftime("%B %d, %Y")),)
    for w in mydata:
        f.write("    {name: '%s',\n"%(w['name'],))
        f.write("        url: '%s',\n"%(w['url'],))
        f.write("        nextLink: '%s',\n"%(w['nextLink'],))


        if 'siteExample' in w.keys():
            f.write("        siteExample: '%s',\n"%(w['siteExample'],))   
        if 'stylish' in w.keys():    
            f.write("        autopager:{\n")
            f.write("            pageElement: '%s',\n"%(w['pageElement'],))
            f.write("            stylish: '%s',\n"%(w['stylish'],))
            f.write("        },\n")       
        else:
            f.write("        pageElement: '%s',\n"%(w['pageElement'],))
        f.write("        created_by: '%s',\n"%(w['created_by'],))
        f.write("        resource_url: '%s',\n"%(w['resource_url'],))
        f.write("    },\n")
            
            
 

#with open('myrule.json', 'r',encoding='utf-8') as f:  
 #   w = json.load(f)
