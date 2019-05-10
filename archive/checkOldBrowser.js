function isOldBrowser () {
    // We need support of let, Object.entries
    var ua = navigator.userAgent;
    var raw = '';
    if (ua.indexOf('Chrom') > -1) {
        // Chrome
        raw = navigator.userAgent.match(/Chrom(?:e|ium)\/([0-9]+)\./);
        return raw ? parseInt(raw[1], 10) < 49 : true;
    }
    else if (ua.indexOf('Firefox') > -1) {
        // Firefox
        raw = navigator.userAgent.match(/Firefox\/([0-9]+)\./);
        return raw ? parseInt(raw[1], 10) < 44 : true;
    }
    else{
        return true;
    }
}
