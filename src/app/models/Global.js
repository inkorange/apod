let Global = {
    isMobile: !(!/Mobi/.test(navigator.userAgent) && (navigator.maxTouchPoints === 0 || !navigator.maxTouchPoints)),
    isIE: (navigator.userAgent.indexOf("MSIE") >= 0 || navigator.userAgent.indexOf("rv:11.0") >= 0 || navigator.userAgent.indexOf(" Edge") >= 0),
    isFF: (navigator.userAgent.indexOf("Firefox/") >= 0),
    isMobileSafari: (navigator.userAgent.match(/iPad/i) || navigator.userAgent.match(/iPhone/i)),
    isPortrait: () => { return (window.innerHeight > window.innerWidth*.75); },
    getTitleFromRoutes: (path, routes) => {
        let title = "Mid-Atlantic Strategic Solutions, Delivering Effective Results.";
        routes.map(r => {
            if(r.path === path) {
                title =  r.title;
            }
        });
        return title;
    }
};

module.exports = Global;