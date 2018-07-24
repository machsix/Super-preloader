#!/usr/bin/env python3
# -*- coding: utf-8-*-
from xgyw_search import *

if (__name__ == '__main__'):
    header = {
        "User-Agent":
        "Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/59.0.3071.115 Safari/537.36",
        "Connection":
        "keep-alive"
    }
    #  os.chdir('/mnt/HD/HD_a2/Image')
    catpage = [
        'https://www.jpxgyw.com/Xiuren/', 'https://www.jpxgyw.com/MyGirl/',
        'https://www.jpxgyw.com/YouWu/', 'https://www.jpxgyw.com/IMiss/',
        'https://www.jpxgyw.com/MiiTao/', 'https://www.jpxgyw.com/Uxing/',
        'https://www.jpxgyw.com/FeiLin/', 'https://www.jpxgyw.com/MiStar/',
        'https://www.jpxgyw.com/Tukmo/', 'https://www.jpxgyw.com/WingS/',
        'https://www.jpxgyw.com/LeYuan/', 'https://www.jpxgyw.com/Taste/',
        'https://www.jpxgyw.com/MFStar/', 'https://www.jpxgyw.com/Huayan/',
        'https://www.jpxgyw.com/DKGirl/', 'https://www.jpxgyw.com/Candy/',
        'https://www.jpxgyw.com/YouMi/', 'https://www.jpxgyw.com/MintYe/',
        'https://www.jpxgyw.com/Micat/', 'https://www.jpxgyw.com/Mtmeng/',
        'https://www.jpxgyw.com/HuaYang/', 'https://www.jpxgyw.com/XingYan/',
        'https://www.jpxgyw.com/Xgyw/', 'https://www.jpxgyw.com/Tuigirl/',
        'https://www.jpxgyw.com/Ugirls/', 'https://www.jpxgyw.com/Tgod/',
        'https://www.jpxgyw.com/TouTiao/', 'https://www.jpxgyw.com/Girlt/',
        'https://www.jpxgyw.com/Aiyouwu/', 'https://www.jpxgyw.com/LEGBABY/',
        'https://www.jpxgyw.com/Rosimeimei/',
        'https://www.jpxgyw.com/MissLeg/', 'https://www.jpxgyw.com/BoLoli/',
        'https://www.jpxgyw.com/Slady/'
    ]
    name = [
        'Xiuren', 'MyGirl', 'YouWu', 'IMiss', 'MiiTao', 'Uxing', 'FeiLin',
        'MiStar', 'Tukmo', 'WingS', 'LeYuan', 'Taste', 'MFStar', 'Huayan',
        'DKGirl', 'Candy', 'YouMi', 'MintYe', 'Micat', 'Mtmeng', 'HuaYang',
        'XingYan', 'Xgyw', 'Tuigirl', 'Ugirls', 'Tgod', 'TouTiao', 'Girlt',
        'Aiyouwu', 'LEGBABY', 'Rosimeimei', 'MissLeg', 'BoLoli', 'Slady'
    ]

    #name = [re.findall('\w\/(.*)\/',i)[0] for i in catpage]

    root_dir = '/mnt/HD/HD_a2/Image'
    mythread = [0] * len(catpage)
    girl_name = [
        '尤妮丝', '土肥圆', '黄乐然', '筱慧', '乔依琳', '菲菲', '刘钰儿',  '夏雪爱', '阿乖', '诗盈',
        '金baby', '蜜蕊', '纳砂', '许文婷', '绮里嘉', '颜颜', '灵鑫','曾冰', '廿十', '金梓馨'
    ]    
    for i in range(len(catpage)):
        if os.path.isdir(os.path.join(os.getcwd(), name[i])):
            #           if name[i] == 'Aiyouwu':
            #              update = 0
            #           else:
            update = 1
            loadCategory(catpage[i], name[i], header, update, girl_name)
