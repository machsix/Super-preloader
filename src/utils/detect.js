export const IS_FIREFOX = navigator.userAgent.toLowerCase().includes("firefox");

const INFO = GM.info || GM_info;

export const SCRIPT_MANAGER = {
  name: INFO.scriptHandler,
  version: INFO.version
};
