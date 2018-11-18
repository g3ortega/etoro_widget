function css_browser_selector(u) { var ua = u.toLowerCase(), is = function (t) { return ua.indexOf(t) > -1 }, g = 'gecko', w = 'webkit', s = 'safari', o = 'opera', m = 'mobile', h = document.documentElement, b = [(!(/opera|webtv/i.test(ua)) && /msie\s(\d)/.test(ua)) ? ('ie ie' + RegExp.$1) : is('firefox/2') ? g + ' ff2' : is('firefox/3.5') ? g + ' ff3 ff3_5' : is('firefox/3.6') ? g + ' ff3 ff3_6' : is('firefox/3') ? g + ' ff3' : is('gecko/') ? g : is('opera') ? o + (/version\/(\d+)/.test(ua) ? ' ' + o + RegExp.$1 : (/opera(\s|\/)(\d+)/.test(ua) ? ' ' + o + RegExp.$2 : '')) : is('konqueror') ? 'konqueror' : is('blackberry') ? m + ' blackberry' : is('android') ? m + ' android' : is('chrome') ? w + ' chrome' : is('iron') ? w + ' iron' : is('applewebkit/') ? w + ' ' + s + (/version\/(\d+)/.test(ua) ? ' ' + s + RegExp.$1 : '') : is('mozilla/') ? g : '', is('j2me') ? m + ' j2me' : is('iphone') ? m + ' iphone' : is('ipod') ? m + ' ipod' : is('ipad') ? m + ' ipad' : is('mac') ? 'mac' : is('darwin') ? 'mac' : is('webtv') ? 'webtv' : is('win') ? 'win' + (is('windows nt 6.0') ? ' vista' : '') : is('freebsd') ? 'freebsd' : (is('x11') || is('linux')) ? 'linux' : '', 'js']; c = b.join(' '); h.className += ' ' + c; return c; }; css_browser_selector(navigator.userAgent);


var etoro_container;
var etoro_affiliateId;
var etoro_bannerId;
var etoro_category;
var etoro_keywords;
var etoro_jquery = true
var etoro_limit = 100;
var alreadyInjected = false;
var etoro_dl_id  = '';


try {
    jQuery('body').html()
} catch (err) {
    etoro_jquery = false;
}

function init_etoro_w() {

    if (typeof jQuery == 'undefined' || etoro_jquery == false) {

        var script = document.createElement('script');
        script.setAttribute("type", "text/javascript");
        script.setAttribute("src", 'https://ajax.googleapis.com/ajax/libs/jquery/1.7.2/jquery.min.js');
        document.getElementsByTagName("head")[0].appendChild(script);

        script.onreadystatechange = function () {

   
            if (this.readyState == "loading") {

               setTimeout('init_etoro_w()', 500);
            }
            if (this.readyState == "complete") {

                loadscriptAndCss(); // call the onload handler
            }

        };

        script.onload = loadscriptAndCss;


    } else {
        loadscriptAndCss();
    }
}

function loadscriptAndCss() { 
 if (alreadyInjected == false){
    var cssAndScript = '<link rel="stylesheet" href="https://pages.etoro.com/widgets/etoro-links-wrapper/style.css" type="text/css" />';
    cssAndScript += '<script  type="text/javascript" src="https://cdn.jsdelivr.net/gh/g3ortega/etoro_widget@0.1.3/link-wrapper.js"></script>';
    jQuery('head').append(cssAndScript);
	alreadyInjected =true;
 }

}



function wrapEtoro(settings) {
    this.container = settings.container;
    this.affiliateId = settings.affiliateId;
    this.subAffiliateId = settings.subAffiliateId;
    this.bannerId = settings.bannerId;
    this.limit = settings.limit;
    this.category = settings.category;
    this.keywords = settings.keywords;
	this.dl_id = settings.dl_id;
    etoro_container = settings.container;
    etoro_affiliateId = settings.affiliateId;
    etoro_subAffiliateId = settings.subAffiliateId;
    etoro_bannerId = settings.bannerId;
    etoro_limit = settings.limit;
    etoro_category = settings.category;
    etoro_keywords = settings.keywords;
	etoro_dl_id = settings.dl_id;
	
}


init_etoro_w();