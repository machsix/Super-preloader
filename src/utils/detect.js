import {detect} from "detect-browser";

export const BROWSER = detect();

const INFO = GM.info || GM_info;
export const SCRIPT_MANAGER = {
  name: INFO.scriptHandler,
  version: INFO.version
};
