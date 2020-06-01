//todo: add document

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
  FA: {
    enable: boolean;
    manualA: boolean;
    useiframe: boolean;
    iloaded: boolean;
    itimeout: number;
    remain: number;
    maxpage: number;
    ipages: [boolean, number];
    separator: boolean;
  };
}

interface ISettings {
  prefs: IPrefs;
  SITEINFO_D: ISITEINFO_D;
  autoMatch: IAutoMatchSettings;
  version: string;
}

interface IHrefIncObject {
  min?: number;
  max?: number;
  mFails?: string | (string | RegExp)[];
  startAfter?: string | RegExp;
  inc: number;
  isLast?: Function;
}

interface IRule {
  name: string;
  url: string | RegExp;
  enable?: boolean;
  useiframe?: boolean;
  exampleUrl?: string;
  nextLink?: string | Function | IHrefIncObject | Array<string | Function | IHrefIncObject>;
  preLink?: IRule['nextLink'];
  pageElement?: string | (() => HTMLElement[]);
  documentFilter?: (doc: Document) => void; //todo
  viewcontent?: boolean;
  separatorReal?: boolean;
  insertBefore?: string; //todo
  filter?: (pageElements: HTMLElement[]) => void;
  stylish?: string;
  autopager?: {
    enable?: boolean;
    useiframe?: boolean;
    iloaded?: boolean;
    itimeout?: number;
    newIframe?: boolean;
    reload?: boolean;
    force_enable?: boolean;
    headers?: {[key: string]: string};
    remain?: number;
    maxpage?: number;
    ipages?: [boolean, number];
    separator?: boolean;
    sepdivDom?: (doc: Document, sep: HTMLElement) => HTMLElement;
    startFilter?: (doc: Document, win?: Window) => void; //todo
    documentFilter?: ((doc: Document) => void) | 'startFilter'; //todo
    scriptFilter?: string;
    filter?: (pageElements: HTMLElement[]) => void;
    stylish?: string;
    replaceE?: Function | string; //todo
    pageElement?: string | ((doc: Document) => void); //todo
    relatedObj?: any; //todo
    separatorReal?: boolean; //todo
    manualA?: boolean; //todo
    lazyImgSrc?: string; //todo
    HT_insert?: [string, number]; //todo
    excludeElement?: any; //todo
    preLink?: IRule['preLink']; //todo
    mutationObserver?: any; //todo
    sandbox?: boolean;
  };
}
