//todo: add document

interface IPrefs {
  floatWindow: boolean;
  customCSS: string;
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
/** 'css;<css selector>' | '<xpath>' | a function that select elements. */

type ISelectorFunction = string | ((doc: Document, win?: Window, cplink?: string) => Array<HTMLElement>);

interface IRule {
  name: string;
  url: string | RegExp;
  enable?: boolean;
  useiframe?: boolean;
  exampleUrl?: string;
  nextLink?: string | Function | IHrefIncObject | Array<string | Function | IHrefIncObject>;
  preLink?: IRule['nextLink'];
  pageElement?: ISelectorFunction;
  documentFilter?: (doc: Document, nextLink?: string) => void; //todo
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
    startFilter?: (doc: Document, win?: Window) => void;
    documentFilter?: ((doc: Document, nextLink?: string) => void) | 'startFilter';
    scriptFilter?: string;
    filter?: (pageElements: HTMLElement[]) => void;
    stylish?: string;
    replaceE?: ISelectorFunction;
    pageElement?: ISelectorFunction;
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

interface IRuntimeRule {
  Rurl?: string;
  nextLink?: IRule['nextLink'];
  viewcontent?: boolean;
  enable?: boolean;
  useiframe?: boolean;
  a_pageElement?: ISelectorFunction;
  a_manualA?: boolean;
  a_enable?: boolean;
  a_useiframe?: boolean;
  a_mutationObserver?: any;
  a_newIframe?: boolean;
  a_iloaded?: boolean;
  a_itimeout?: number;
  a_remain?: number;
  a_maxpage?: number;
  a_separator?: boolean;
  a_sepdivDom?: (doc: Document, sep: HTMLElement) => HTMLElement;
  a_separatorReal?: boolean;
  a_replaceE?: ISelectorFunction;
  a_HT_insert?: [string, number];
  a_relatedObj?: any;
  a_ipages?: [boolean, number];
  filter?: (pageElements: HTMLElement[]) => void;
  a_documentFilter?: (doc: Document, nextLink?: string) => void;
  a_scriptFilter?: string;
  a_stylish?: string;
  lazyImgSrc?: string;
  a_headers?: {[key: string]: string};
  a_reload?: boolean;
  a_sandbox?: boolean;
  a_excludeElement?: any;
  hasRule?: boolean;
  a_force?: boolean;
}

interface GM_API {
  setValue(name: string, value: any): void;
  getValue(name: string, defaultValue?: any): any;
  registerMenuCommand(name: string, listener: Function, accessKey?: string): number;
  xmlhttpRequest<CONTEXT_TYPE>(details: GM_Types.XHRDetails<CONTEXT_TYPE>): void;
}

declare var GM: GMA_PI;

declare namespace GM_Types {
  type ValueChangeListener = (name: string, oldValue: any, newValue: any, remote: boolean) => any;

  interface OpenTabOptions {
    active?: boolean;
    insert?: boolean;
    setParent?: boolean;
  }

  interface XHRDetails<CONTEXT_TYPE> {
    method?: 'GET' | 'HEAD' | 'POST' | 'PUT';
    url?: string;
    headers?: {readonly [key: string]: string};
    data?: string;
    binary?: boolean;
    timeout?: number;
    context?: CONTEXT_TYPE;
    responseType?: 'arraybuffer' | 'blob' | 'json';
    overrideMimeType?: string;
    anonymous?: boolean;
    fetch?: boolean;
    username?: string;
    password?: string;

    onload?: Listener<XHRResponse<CONTEXT_TYPE>>;
    onloadstart?: Listener<XHRResponse<CONTEXT_TYPE>>;
    onprogress?: Listener<XHRProgress<CONTEXT_TYPE>>;
    onreadystatechange?: Listener<XHRResponse<CONTEXT_TYPE>>;
    ontimeout?: Listener<XHRProgress<CONTEXT_TYPE>>;
    onabort?: Listener<XHRProgress<CONTEXT_TYPE>>;
    onerror?: Listener<XHRProgress<CONTEXT_TYPE>>;
  }

  interface XHRResponse extends XMLHttpRequest {
    finalUrl: string;
    context?: any;
  }

  interface AbortHandle<RETURN_TYPE> {
    abort(): RETURN_TYPE;
  }

  interface DownloadError {
    error: 'not_enabled' | 'not_whitelisted' | 'not_permitted' | 'not_supported' | 'not_succeeded';
    details?: string;
  }

  interface DownloadDetails {
    url: string;
    name: string;
    headers?: {readonly [key: string]: string};
    saveAs?: boolean;
    timeout?: number;
    onerror?: Listener<DownloadError>;
    ontimeout?: Listener<object>;
    onload?: Listener<object>;
    onprogress?: Listener<XHRProgress<void>>;
  }

  interface NotificationThis extends NotificationDetails {
    id: string;
  }

  type NotificationOnClick = (this: NotificationThis) => any;
  type NotificationOnDone = (this: NotificationThis, clicked: boolean) => any;

  interface NotificationDetails {
    text?: string;
    title?: string;
    image?: string;
    highlight?: boolean;
    timeout?: number;
    onclick?: NotificationOnClick;
    ondone?: NotificationOnDone;
  }
}

interface ResponseObject extends GM_Types.XHRResponse {
  data: [string, FormData, Blob];
  body: [string, FormData, Blob];
  statusCode: number;
  statusMessage: string;
  method: string;
  url: string;
  requestUrl: string;
  retryCount: number;
  executorName?: any;
}

interface RequestObject {
  method?: string;
  retry?: number;
  headers?: [null, undefined, string, object];
  stream?: boolean;
  cache?: boolean;
  dnsCache?: boolean;
  encoding?: [null, string];
  prefixUrl?: [null, undefined, string];
  timeout?: number;
  searchParams?: [string, object];
  body?: any;
  data?: any;
  binary?: boolean;
  user?: [string, null];
  password?: [string, null];
  context?: any;
  html?: boolean; // set to true to overrideMimeType = `text/html`;
  noHeader?: boolean;
  cookie?: [string, null];
  withCredentials?: boolean; // VM for cross domain cookie https://github.com/violentmonkey/violentmonkey/issues/761
}

interface IFrameLoadedEvent extends Event {
  currentTarget: HTMLIFrameElement & EventTarget;
}
