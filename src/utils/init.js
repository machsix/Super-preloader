import _ from "lodash";
import compareVersions from "compare-versions";
import {updateRule} from "utils/json-rule";
import logger from "utils/logger";

const prefsFactory = {
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
  excludes: "",
  custom_siteinfo: "[]",
  lazyImgSrc: "zoomfile|file|original|load-src|_src|imgsrc|real_src|src2|data-lazyload-src|data-ks-lazyload|data-lazyload|data-src|data-original|data-thumb|data-imageurl|data-defer-src|data-placeholder",
  ChineseUI: false,
  dblclick_pause: false,
  factoryCheck: true,
  disappearDelay: -1, //暂停翻页状态栏disappearDelay ms后消失, -1为不消失
  numOfRule: 4308
};

const SITEINFO_DFactory = {
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
    sandbox: false // Iframe sandbox 选项
  }
};

const versionFactory = "1.0.0";

/**
 * Merge a new object to the old one
 * @param {object} oldProp old property
 * @param {object} newProp new property
 * @returns {boolean} whether the object is different
 */
function mergeProperty(oldProp, newProp) {
  const diffKeys = _.difference(Object.keys(oldProp), Object.keys(newProp));
  let hasDifferency = diffKeys.length > 0;
  if (hasDifferency) {
    diffKeys.forEach((key) => {
      if (key in oldProp) {
        delete oldProp[key];
      } else {
        oldProp[key] = newProp[key];
      }
    });
  }
  for (const k of Object.keys(oldProp)) {
    hasDifferency = hasDifferency || mergeProperty(oldProp[k], newProp[k]);
  }
  return hasDifferency;
}

export async function resetSettings(scriptInfo) {
  await Promise.all([GM.setValue("prefs", prefsFactory), GM.setValue("SITEINFO_D", SITEINFO_DFactory), GM.setValue("version", scriptInfo.version), updateRule(true)]);
}

export async function loadSettings(scriptInfo) {
  let [prefs, SITEINFO_D, version] = await Promise.all([GM.getValue("prefs", prefsFactory), GM.getValue("SITEINFO_D", SITEINFO_DFactory), GM.getValue("version", versionFactory)]);
  const postLoading = [];

  if (compareVersions(version, scriptInfo.rewriteStorage) === -1) {
    // old version uses string to store this data
    if (_.isString(prefs)) prefs = JSON.parse(prefs);
    if (_.isString(SITEINFO_D)) SITEINFO_D = JSON.parse(SITEINFO_D);
  }

  // check the consistency of settings and merge prefs
  if (compareVersions(version, scriptInfo.version) !== 0 || prefs.factoryCheck === undefined) {
    logger.info(`[UpdateCheck] version is updated ${version} => ${scriptInfo.version}`);
    const hasDifferent = assignDifferentProperty(prefs, prefsFactory);
    if (hasDifferent) {
      logger.info("[UpdateCheck] prefs is updated", prefs);
    }
    prefs.factoryCheck = false;


  preSPinit.push(GM.setValue("prefs", prefs));
  if (compareVersions(myOldVersion, scriptInfo.rewriteStorage) === -1) {
    preSPinit.push(GM.setValue("SITEINFO_D", SITEINFO_D));
    preSPinit.push(GM.setValue("autoMatch", autoMatch));
    forceJsonUpdate = true;
    logger.info("[UpdateCheck] Storage is rewritten");
  }
}
}
    postLoading.push(GM.setValue("version", scriptInfo.version));
    postLoading.push(GM.setValue("prefs", prefs));
