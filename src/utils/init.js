//@ts-check
///<reference path="../index.d.ts"/>
import {SCRIPT_INFO as scriptInfo, NOTIFICATION as upgradeNotification} from '../meta';
import {setLang, template, userLang} from '../locale/locale';
import JSONE from '../utils/stringify';
import _ from 'lodash';
// @ts-ignore
import compareVersions from 'compare-versions';
import jsonRuleLoader from './json-rule';
import logger from './logger';

// ---------------------- Settings stored in GM storaged, changed by control pannel ---------------
/**@type {ISettings} */
const factorySettings = {
  prefs: {
    floatWindow: true, // 显示悬浮窗
    FW_position: 2, // 1:出现在左上角;2:出现在右上角;3：出现在右下角;4：出现在左下角;
    FW_offset: [20, 38], // 偏离版边的垂直和水平方向的数值..(单位:像素)
    FW_RAS: true, // 点击悬浮窗上的保存按钮..立即刷新页面;
    pauseA: true, // 快速停止自动翻页(当前模式为翻页模式的时候生效.);
    Pbutton: [2, 0, 0], // 需要按住的键.....0: 不按住任何键;1: shift鍵;2: ctrl鍵; 3: alt鍵;(同时按3个键.就填 1 2 3)(一个都不按.就填 0 0 0)
    mouseA: true, // 按住鼠标左键..否则.双击;
    Atimeout: 200, // 按住左键时..延时.多少生效..(单位:ms);
    stop_ipage: true, // 如果在连续翻页过程中暂停.重新启用后.不在继续..连续翻页..

    Aplus: true, // 自动翻页模式的时候..提前预读好一页..就是翻完第1页,立马预读第2页,翻完第2页,立马预读第3页..(大幅加快翻页快感-_-!!)(建议开启)..
    sepP: true, // 翻页模式下.分隔符.在使用上滚一页或下滚一页的时候是否保持相对位置..
    sepT: true, // 翻页模式下.分隔符.在使用上滚一页或下滚一页的时候使用动画过渡..
    s_method: 3, // 动画方式 0-10 一种11种动画效果..自己试试吧
    s_ease: 2, // 淡入淡出效果 0：淡入 1：淡出 2：淡入淡出
    s_FPS: 60, // 帧速.(单位:帧/秒)
    s_duration: 333, // 动画持续时长.(单位:ms);
    DisableI: true, // 只在顶层窗口加载JS..提升性能..如果开启了这项,那么DIExclude数组有效,里面的网页即使不在顶层窗口也会加载....
    arrowKeyPage: false, // 允许使用 左右方向键 翻页..
    sepStartN: 2, // 翻页导航上的,从几开始计数.(貌似有人在意这个,所以弄个开关出来,反正简单.-_-!!)

    // 新增或修改的
    forceTargetWindow: true, // 下一页的链接设置成在新标签页打开
    debug: true,
    enableHistory: false, // 把下一页链接添加到历史记录
    autoGetPreLink: false, // 一开始不自动查找上一页链接，改为调用时再查找
    excludes: '',
    custom_siteinfo: '[]',
    lazyImgSrc: 'zoomfile|file|original|load-src|_src|imgsrc|real_src|src2|data-lazyload-src|data-ks-lazyload|data-lazyload|data-src|data-original|data-thumb|data-imageurl|data-defer-src|data-placeholder',
    ChineseUI: false,
    dblclick_pause: false,
    factoryCheck: true,
    disappearDelay: -1, //暂停翻页状态栏disappearDelay ms后消失, -1为不消失
    numOfRule: 4308,
    disableBuiltinRules: false, //禁用内建打包在代码里的规则
    disableBuiltinSubscriptionRules: false //禁用内建订阅远程的规则
  },
  SITEINFO_D: {
    enable: true, // 启用
    useiframe: false, // (预读)是否使用iframe..
    viewcontent: false, // 查看预读的内容,显示在页面的最下方.
    autopager: {
      enable: true, // 启用自动翻页...
      force_enable: false, // 默认启用强制拼接
      manualA: false, // 手动翻页.
      useiframe: false, // (翻页)是否使用iframe..
      iloaded: false, // 是否在iframe完全load后操作..否则在DOM完成后操作
      itimeout: 0, // 延时多少ms后,在操作..
      newIframe: false,
      remain: 1, // 剩余页面的高度..是显示高度的 remain 倍开始翻页..
      maxpage: 99, // 最多翻多少页..
      ipages: [false, 2], // 立即翻页,第一项是控制是否在js加载的时候立即翻第二项(必须小于maxpage)的页数,比如[true,3].就是说JS加载后.立即翻3页.
      separator: true, // 显示翻页导航..(推荐显示.)
      separatorReal: true, // 显示真实的页数
      reload: false, // 强制重载iframe
      sandbox: false, // Iframe sandbox 选项
      relatedObj: true
    }
  },
  autoMatch: {
    keyMatch: true, // 是否启用关键字匹配
    cases: false, // 关键字区分大小写....
    digitalCheck: true, // 对数字连接进行检测,从中找出下一页的链接
    pfwordl: {
      // 关键字前面的字符限定.
      previous: {
        // 上一页关键字前面的字符,例如 "上一页" 要匹配 "[上一页" ,那么prefix要的设置要不小于1,并且character要包含字符 "["
        enable: true,
        maxPrefix: 3,
        character: [' ', '　', '[', '［', '<', '＜', '?', '?', '<<', '『', '「', '【', '(', '←']
      },
      next: {
        // 下一页关键字前面的字符
        enable: true,
        maxPrefix: 2,
        character: [' ', '　', '[', '［', '『', '「', '【', '(']
      }
    },
    sfwordl: {
      // 关键字后面的字符限定.
      previous: {
        // 上一页关键字后面的字符
        enable: true,
        maxSubfix: 2,
        character: [' ', '　', ']', '］', '』', '」', '】', ')']
      },
      next: {
        // 下一页关键字后面的字符
        enable: true,
        maxSubfix: 3,
        character: [' ', '　', ']', '］', '>', '﹥', '?', '?', '>>', '』', '」', '】', ')', '→']
      }
    },
    useiframe: false, // (预读)是否使用iframe..
    viewcontent: false, // 查看预读的内容,显示在页面的最下方.
    FA: {
      // 强制拼接 选项 功能设置.
      enable: false, // 默认启用 强制拼接
      manualA: false, // 手动翻页.
      useiframe: false, // (翻页)是否使用iframe..
      iloaded: false, // (只在opera有效)如果使用iframe翻页..是否在iframe完全load后操作..否则在DOM完成后操作
      itimeout: 0, // 当使用iframe翻页时在完成后继续等待多少ms后,在操作..
      remain: 1, // 剩余页面的高度..是显示高度的 remain 倍开始翻页..
      maxpage: 99, // 最多翻多少页..
      ipages: [false, 2], // 立即翻页,第一项是控制是否在js加载的时候立即翻第二项(必须小于maxpage)的页数,比如[true,3].就是说JS加载后.立即翻3页.
      separator: true // 显示翻页导航..(推荐显示.)..
    }
  },
  version: '1.0.0' // set a small value for first-time installation
};

// const settingsKeys = ["prefs", "SITEINFO_D", "autoMatch", "version"];
/** @type {string[]} */
const settingsKeys = Object.keys(factorySettings);

/** @type {ISettings} */
//@ts-ignore Partial<ISettings> is temp.
const settings = {};

/**
 * Merge a new object to the old one
 * @param {object} oldProp old property
 * @param {object} newProp new property
 * @returns {boolean} whether the object is different
 */
function mergeProperty(oldProp, newProp) {
  let hasDifferency = false;
  const newKeys = _.difference(Object.keys(newProp), Object.keys(oldProp));
  newKeys.forEach((key) => {
    oldProp[key] = newProp[key];
    hasDifferency = true;
  });
  const oldKeys = _.difference(Object.keys(oldProp), Object.keys(newProp));
  oldKeys.forEach((key) => {
    delete oldProp[key];
    hasDifferency = true;
  });

  for (const k of Object.keys(oldProp)) {
    if (!Array.isArray(oldProp[k]) && typeof oldProp[k] === 'object') {
      hasDifferency = hasDifferency || mergeProperty(oldProp[k], newProp[k]);
    }
  }
  return hasDifferency;
}

export async function resetSettings() {
  logger.info('settings are reset');
  await Promise.all(settingsKeys.map((key) => GM.setValue(key, factorySettings[key])));
}

export async function saveSettings(values) {
  await Promise.all(
    Object.keys(values)
      .filter((x) => settingsKeys.includes(x))
      .map((key) => GM.setValue(key, values[key]))
  );
}

export async function loadSettings() {
  const values = await Promise.all(settingsKeys.map((key) => GM.getValue(key, factorySettings[key])));
  settingsKeys.forEach((x, i) => {
    settings[settingsKeys[i]] = values[i];
  });

  const myOldVersion = settings.version;
  const isRewrote = compareVersions(settings.version, scriptInfo.rewriteStorage) === -1;
  if (isRewrote) {
    // old version uses string to store this data
    if (_.isString(settings.prefs)) settings.prefs = JSON.parse(settings.prefs);
    if (_.isString(settings.SITEINFO_D)) settings.SITEINFO_D = JSON.parse(settings.SITEINFO_D);
  }

  const verDiff = compareVersions(settings.version, scriptInfo.version);
  const isInstalled = compareVersions(settings.version, factorySettings.version) === 0;

  // check the consistency of settings and merge prefs
  /** @type {Array<Promise>} */
  const postLoading = []; // async function to run after loading settings
  if (verDiff !== 0 || settings.prefs.factoryCheck !== false) {
    if (settings.prefs.disableBuiltinSubscriptionRules !== true) {
      postLoading.push(jsonRuleLoader.loadRule(true));
    }

    logger.info(`[UpdateCheck] version is updated ${settings.version} => ${scriptInfo.version}`);
    settings.version = scriptInfo.version;
    settings.autoMatch.useiframe = settings.SITEINFO_D.useiframe || false;
    postLoading.push(GM.setValue('version', settings.version));

    const hasDifferency = mergeProperty(settings, factorySettings);
    settings.prefs.factoryCheck = false;
    if (hasDifferency) {
      logger.info('[UpdateCheck] settings are updated');
      Object.keys(settings).forEach((key) => {
        if (key !== 'version') {
          postLoading.push(GM.setValue(key, settings[key]));
        }
      });
    }
  } else {
    if (settings.prefs.disableBuiltinSubscriptionRules) {
      postLoading.push(Promise.resolve([])); //insert an empty jsonRule
    } else {
      postLoading.push(jsonRuleLoader.loadRule());
    }
  }

  // set global variables based on prefs
  if (typeof settings.prefs.debug !== 'undefined') {
    logger.setLevel(settings.prefs.debug ? 'debug' : 'info');
  }
  if (settings.prefs.ChineseUI) {
    setLang('zh_CN');
  }

  // send notification
  if (verDiff < 0) {
    if (upgradeNotification.show(settings.version, scriptInfo.version) || isInstalled) {
      const opts = {
        text: '',
        title: upgradeNotification.title,
        image: upgradeNotification.image,
        onload: upgradeNotification.onload
      };
      opts.text = template.upgradeNotification({
        oldversion: myOldVersion,
        newversion: settings.version
      });
      if (Object.keys(upgradeNotification).includes('extratext')) {
        if (Object.keys(upgradeNotification.extratext).includes(userLang)) {
          opts.text += upgradeNotification.extratext[userLang];
        } else {
          opts.text += upgradeNotification.extratext.en_US;
        }
      }
      //@ts-ignore
      //todo: patch the type
      GM.notification(opts);
    }
  }

  const [jsonRule] = await Promise.all(postLoading);

  /** @type {string[]} */
  const blackList = [].concat(settings.prefs.excludes.split(/[\n\r]+/).map((line) => line.trim()));

  return {jsonRule, blackList, ...settings};
}

// ---------------------- Settings stored in localStorage, changed by floatWindow ---------------
let domainSettings = [];
let localSettingIndex = -1;

export function getLocalStorage(key = 'spfwset', fallback = null) {
  const valStr = localStorage.getItem(key);
  try {
    return JSONE.parse(valStr) || fallback;
  } catch (err) {
    // compatability with old version
    const val = JSONE.parse(decodeURIComponent(valStr)) || fallback;
    setLocalStorage(val, key);
    return val;
  }
}

export function setLocalStorage(val, key = 'spfwset') {
  localStorage.setItem(key, JSONE.stringify(val));
}

/**
 * Append local pageSetting to the rules, note we may have more than one pageSetting
 * because localStorage stores rule for a domain but not a URL
 * @param {object} pageSetting Local pageSetting for a website
 * @returns {object} modified pageSetting
 */
export function loadLocalSetting(pageSetting) {
  domainSettings = getLocalStorage('spfwset') || [];

  if (!domainSettings) return pageSetting;
  for (let i = 0; i < domainSettings.length; i++) {
    const localSetting = domainSettings[i];
    if (localSetting.Rurl === pageSetting.Rurl) {
      for (const [key, value] of Object.entries(localSetting)) {
        pageSetting[key] = value;
      }
      localSettingIndex = i;
      logger.debug('Load local settings ', localSetting);
      return pageSetting;
    }
  }
  localSettingIndex = -1;
  return pageSetting;
}

export function saveLocalSetting(localSetting) {
  if (domainSettings.length === 0 || localSettingIndex === -1) {
    // no local setting or no suitable local setting
    domainSettings.push(localSetting);
    localSettingIndex += 1;
  } else {
    domainSettings[localSettingIndex] = localSetting;
  }
  setLocalStorage(domainSettings);
  return domainSettings;
}
