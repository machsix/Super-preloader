import logger from "utils/logger";
export default function emoji(unifiedValue) {
  if (String.fromCodePoint) {
    var emoji = parseInt(unifiedValue, 16);
    return String.fromCodePoint(emoji);
  } else {
    logger.error("Shame on your browser!");
    return "";
  }
}
