interface IPrefs {
  floatWindow: boolean;
  FW_position: number;
  FW_offset: [number, number];
  FW_RAS: boolean;
  pauseA: boolean;
  Pbutton: [number, number, number];
  mouseA: boolean;
  Atimeout: number;
  stop_ipage: boolean;

  Aplus: true;
  sepP: boolean;
  sepT: boolean;
  s_method: number;
  s_ease: number;
  s_FPS: number;
  s_duration: number;
  DisableI: boolean;
  arrowKeyPage: boolean;
  sepStartN: number;

  forceTargetWindow: boolean;
  debug: boolean;
  enableHistory: boolean;
  autoGetPreLink: boolean;
  excludes: string;
  custom_siteinfo: string;
  lazyImgSrc: string;
  ChineseUI: boolean;
  dblclick_pause: boolean;
  factoryCheck: boolean;
  disappearDelay: number;
  numOfRule: number;
  disableBuiltinRules: boolean;
  disableBuiltinSubscriptionRules: boolean;
}

interface ISITEINFO_D {
  enable: boolean;
  useiframe: boolean;
  viewcontent: boolean;
  autopager: IAutoPagerSettings;
}

interface IAutoPagerSettings {
  enable: boolean;
  force_enable: boolean;
  manualA: boolean;
  useiframe: boolean;
  iloaded: boolean;
  itimeout: number;
  newIframe: boolean;
  remain: number;
  maxpage: number;
  ipages: [boolean, number];
  separator: boolean;
  separatorReal: boolean;
  reload: boolean;
  sandbox: boolean;
  relatedObj: boolean;
}

interface IAutoMatchSettings {
  keyMatch: boolean;
  cases: boolean;
  digitalCheck: boolean;
  pfwordl: any;
  sfwordl: any;
  useiframe: boolean;
  viewcontent: boolean;
  FA: any;
}

interface ISettings {
  prefs: IPrefs;
  SITEINFO_D: ISITEINFO_D;
  autoMatch: IAutoMatchSettings;
  version: string;
}
