# -*- coding: utf-8 -*-
"""
Created on Fri Sep 14 23:24:01 2018

@author: machsix
"""
import re

def ReadRule (file ='Super_preloaderPlus_one_New.user.js' ):
    with open('Super_preloaderPlus_one_New.user.js', 'r', encoding='utf-8') as f:
        content0 = f.readlines()
    pre = []
    rule = []
    post = []
    rule_prev = True
    rule_post = False
    for line in content0:
        if rule_prev:
            pre.append(line)
            if re.match('^\s*//Start of rule$', line):
                rule_prev = False
        elif rule_post:
            post.append(line)
        else:
            if re.match('^\s*//End of rule$', line):
                rule_post = True
                post.append(line)
            else:
                rule.append(line)
    return (pre,rule,post)


def BeautifyDict(rule):
    needtochange = re.compile('^(\s*)"(\w+)"\s*:\s*.*(?://.*)?$')
    rule2 = []
    for line in rule:
        w = needtochange.findall(line)
        if w:
            if len(w[0]) == 2:
                w = w[0]
                rule2.append(w[0]+w[1]+line[len(w[0])+len(w[1])+2:])
            else:
                rule2.append(line)
        else:
            rule2.append(line)
    return rule2

def ReformatUrl(rule):
    urlre = re.compile('^(\s*)url:\s*(.*),.*$')
    urlsub = re.compile('(\'|\/|")\^?http:')
    rule2 = rule[:]
    for i, line in enumerate(rule):
        w = urlre.findall(line)
        if w:
            w = w[0]
            url = w[1]
            if urlsub.match(url):
                print(url)
                url2 = urlsub.sub(r'\1^https?:', url)
                rule2[i] = w[0] + 'url: '+ url2 +',\n'
    return rule2

def WriteJS (pre, rule, post, file ='Super_preloaderPlus_one_New.user.js'):
    with open(file, 'w', encoding='utf-8') as f:
        f.write(''.join(pre+rule+post))
        

def RuleParser(rule):
    namere = re.compile('name\s*:\s*(?:\'|")(.*)(?:\'|")')
    rule_list = []
    item = {'name':'', 'post':[], 'prev': []}
    iline = 0
    w = iter(rule)
    while iline < len(rule):
        line = next(w)
        iline = iline + 1
        if line == '        {\n':
            # get name
            line = next(w)
            iline = iline + 1
            while 'name' not in line:
                item['prev'].append(line)
                line = next(w)
                iline = iline + 1
            item['name'] = namere.findall(line)[0]
            
            # get other stuff
            line = next(w)
            iline = iline + 1
            while '        },\n' !=  line:
                item['post'].append(line)
                line = next(w)
                iline = iline + 1
            rule_list.append(item)
            print(item['name'] )
            item = {'name':'', 'post':[], 'prev': []}
            
            
            
def ExtractName(rule):
    namere = re.compile('name\s*:\s*(?:\'|")(.*)(?:\'|")')
    urlre = re.compile('^(\s*)url:\s*(.*),.*$')
    namelist = []
    for i, line in enumerate(rule):
        w = urlre.findall(line)
        if w:
            if 'name' in rule[i-1]:
                name = namere.findall(rule[i-1])[0]
                namelist.append(name)
            else:
                print(line)
    return namelist
            
    
(pre,rule,post) = ReadRule (file ='Super_preloaderPlus_one_New.user.js' )
w = ''.join(rule)
print('Number of rule: %d'%(len(re.findall('\n\s*url:',w))))

# replace http by https
rule2 = ReformatUrl(rule)
WriteJS (pre, rule2, post, file ='Super_preloaderPlus_one_New.user.js')
name = ExtractName(rule2)

urlre = re.compile('^\s*(url:\s*.*)(?://.*)*$')
namere = re.compile('^\s*name\s*:\s*(.*)')
header = '''
![icon!](https://github.com/machsix/personal-scripts/raw/master/Super_preloader/icon2.png)
# Introduction
A gm script for auto loading paginated web pages. It will join pages together based on the rules.

The script is forked from https://greasyfork.org/en/scripts/10433-super-preloaderplus-one.
Thanks for the original author [swdyh](https://github.com/swdyh) && [ywzhaiqi](https://github.com/ywzhaiqi/userscript/tree/master/scripts/Super_preloaderPlus) && NLF
swdyh is still actively improving [rules](http://wedata.net/databases/AutoPagerize/items) and developping the extension version,[AutoPagerize](https://addons.mozilla.org/en-US/firefox/addon/autopagerize/). 

This userscript exists because someone needs to maintain the rules for Chinese and English users since swdyh's rules are mainly for Japanese websites. Don't be afraid of the fact that most feedbacks are in Chinese. I would like to add rules for English users if I could. Feel free to leave feedback.

Please leave feedback at [Greasefork page](https://greasyfork.org/en/scripts/33522-super-preloaderplus-one-new)

# License
gpl-3.0

# Support sites:
'''

with open('README.md', 'w', encoding='utf-8') as f:
    f.write(header)
    for line in rule2:
        w = namere.findall(line)
        if w:
            print(w[0])
            f.write(' - '+w[0].replace('"','').replace('\'','').replace(',','')+'\n')
            

with open('Super_preloaderPlus_one_New2.user.js', 'w', encoding='utf-8') as f:
    f.write(''.join(pre+BeautifyDict(rule)+post))




for line in rule:
    if needtochange.match(line):
        print(line[:-1])