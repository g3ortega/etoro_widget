function etoro_getAJAX(url, type, callback) {

    var xmlhttp;
    var callbackFunction = callback;

    if (window.XDomainRequest) {
        xmlhttp = new XDomainRequest();

        xmlhttp.onprogress = function () {};
        xmlhttp.ontimeout = function () {};
        xmlhttp.onerror = function (err) {};
        xmlhttp.onload = function () {

            if (type == 'xml') {

                callbackFunction($.parseXML(xmlhttp.responseText));

            } else if (type == 'json') {
                callbackFunction($.parseJSON(xmlhttp.responseText));

            } else {
                callbackFunction(xmlhttp.responseText);
            }


        };


    } else if (window.XMLHttpRequest) {
        xmlhttp = new XMLHttpRequest();
    } else {
        xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
    }

    xmlhttp.onreadystatechange = function () {

        if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
            if (type == 'xml') {
                callbackFunction($.parseXML(xmlhttp.responseText));
            } else if (type == 'json') {
                callbackFunction($.parseJSON(xmlhttp.responseText));
            } else {
                callbackFunction(xmlhttp.responseText);
            }
        }

    }

    xmlhttp.open("GET", url, true);

    setTimeout(function () {
        xmlhttp.send();
    }, 0);

}


function etoroItemSettings(name, textStart, textEnd, textFull, url) {
    var obj = {};
    obj.name = name;
    obj.textStart = textStart;
    obj.textEnd = textEnd;
    obj.textFull = textFull;
    obj.url = url;
    return obj;
}

var stocksArray;
var currenciesArray;
var indicesArray;
var commoditiesArray;


var brandArray = [
    etoroItemSettings('eToro', null, null, 'Discover Social Trading', 'https://www.etoro.com/'),
    etoroItemSettings('Openbook', null, null, 'Discover Social Trading', 'https://www.etoro.com/'),
    etoroItemSettings('Social Trading', null, null, 'Discover Social Trading', 'https://www.etoro.com/Social-Trading.aspx'),
    etoroItemSettings('WebTrader', null, null, 'Discover Social Trading', 'https://www.etoro.com/'),
    etoroItemSettings('CopyTrader', null, null, 'Discover Social Trading', 'https://www.etoro.com/'),
    etoroItemSettings('Follow', null, null, 'Discover Social Trading', 'https://www.etoro.com/'),
    etoroItemSettings('Copy', null, null, 'Discover Social Trading', 'https://www.etoro.com/'),
    etoroItemSettings('Investment Network', null, null, 'Discover Social Trading', 'https://www.etoro.com/'),
    etoroItemSettings('Social Investing', null, null, 'Discover Social Trading', 'https://www.etoro.com/'),
    etoroItemSettings('Online Trading', null, null, 'Discover Social Trading', 'https://www.etoro.com/'),
    etoroItemSettings('Mobile Trading', null, null, 'Discover Social Trading', 'https://www.etoro.com/'),
    etoroItemSettings('Social Alerts', null, null, 'Discover Social Trading', 'https://www.etoro.com/'),
    etoroItemSettings('Mobile Trader', null, null, 'Discover Social Trading', 'https://www.etoro.com/'),
    etoroItemSettings('Learn trading', null, null, 'Learn how to trade', 'https://www.etoro.com/lessons/education-center.aspx'),
    etoroItemSettings('Webinar', null, null, 'Learn how to trade', 'https://www.etoro.com/lessons/education-center.aspx')
]

var partnersArray = [
    etoroItemSettings('CPA', null, null, 'Join The Best Financial Affiliate Program', 'https://etoropartners.com'),
    etoroItemSettings('Affiliates', null, null, 'Join The Best Financial Affiliate Program', 'https://etoropartners.com'),
    etoroItemSettings('Affiliate program', null, null, 'Join The Best Financial Affiliate Program', 'https://etoropartners.com'),
    etoroItemSettings('Affiliation', null, null, 'Join The Best Financial Affiliate Program', 'https://etoropartners.com'),
    etoroItemSettings('Internet Marketing', null, null, 'Join The Best Financial Affiliate Program', 'https://etoropartners.com')
]


var generalCatArray;


var animateIcons;
var thisElement;
var mouseHover = false;
var linkCounter = 0;
var e_ieFixWidth = 0;

if (typeof (etoro_bannerId) == 'undefined' || etoro_bannerId == '') {
    etoro_bannerId = 0;
}

function start_w() {

    etoro_keywords = etoro_keywords.split(",");
    etoro_category = etoro_category.split(",");


    $(etoro_container).addClass("etoroLinks");

    for (i = 0; i < etoro_category.length; i++) {

        if (etoro_category[i].length > 0) {
            for (j = 0; j < generalCatArray.length; j++) {
                if (etoro_category[i] == generalCatArray[j].name) {
                    wrapCatLinks(generalCatArray[j].items)
                }
            }
        }
    }

    for (i = 0; i < etoro_keywords.length; i++) {

        if (etoro_keywords[i].length > 0) {
            for (j = 0; j < generalCatArray.length; j++) {
                for (n = 0; n < generalCatArray[j].items.length; n++) {
                    if (generalCatArray[j].items[n].name.toLowerCase() == etoro_keywords[i].toLowerCase()) {
                        wrapItem(generalCatArray[j].items[n]);
                    }

                }
            }
        }
    }


    $("<div class='emptyDiv'></div>").appendTo('body');

    $(".etoroLinks .etoroItem").each(function () {
        var _this = $(this);
        var itemWidth = $(_this).wrap('<div class="InfiniteWidth" style="width:500px"></div>').find(".toolTip").css({
            'position': 'relative',
            'display': 'inline-block'
        }).outerWidth() + e_ieFixWidth;

        $(_this).unwrap('.InfiniteWidth').find(".toolTip").css({
            'display': 'none',
            'position': 'absolute'
        }).width(itemWidth);
        $(_this).find(".toolTip .conteiner .arrow-bottom").css({
            'left': (itemWidth / 2 - 5)
        });
        var left = -($(_this).find('.toolTip').width() / 2) + $(_this).width() / 2;
        $(_this).find('.toolTip').css({
            'left': left
        });


    });


    $(".etoroLinks .etoroItem").mouseenter(function () {
        mouseHover = true;
        thisElement = $(this);
        $(this).find('.toolTip').stop().fadeIn(200);
        animateIcons = setTimeout('showEtoroIcon(thisElement)', 2000);
    }).mouseleave(function () {
        mouseHover = false;
        clearTimeout(animateIcons);
        $('.etoroLinks .etoroItem .iconEtoro').fadeTo(0, 0);
        $(this).find('.toolTip').fadeOut(30);
    });




}


function getInsideText(itemInArray) {
    var text;

    if (itemInArray.textFull != null) {
        text = itemInArray.textFull;
    } else {
        text = itemInArray.textStart + itemInArray.name + itemInArray.textEnd;
    }
    return text;
}

function wrapCatLinks(catArray) {
    for (k = 0; k < catArray.length; k++) {
        wrapItem(catArray[k]);

    }
}

function wrapItem(itemInArray) {

    $(etoro_container).each(function () {

        var newHtml = replaceInsideText(this, itemInArray.name, "<span class='replaceable'>" + itemInArray.name + "</span>");
        $(this).html(newHtml);


        $("span.replaceable").each(function (index) {

            if ($(this).parents("a").length < 1 && linkCounter < etoro_limit) {

                linkCounter++;
				var url = "https://www.etoro.com/partners/aw.aspx?B=" + etoro_bannerId + "&A=" + etoro_affiliateId + "&task=Click&SubAffiliateID=" + etoro_subAffiliateId + "&TargetUrl=" + itemInArray.url + "?dl=" + etoro_dl_id;
                if (etoro_affiliateId == 'blog'){
					url = itemInArray.url + "?dl=" + etoro_dl_id;
				}
				$(this).replaceWith("<a class='etoroItem' href='"+url+"'>" + itemInArray.name + "<span class='toolTip " + itemInArray.name.toLowerCase() + "'><span class='conteiner'><span class='image'><span class='iconStocks'></span><span class='iconEtoro'></span></span><span class='right'><span class='text'>" + getInsideText(itemInArray) + "</span><span class='arrow-right'></span></span><span class='arrow-bottom'></span></span></span></a>")
            } else {

                $(this).replaceWith(itemInArray.name)
            }
        });




    });

}


function showEtoroIcon(thisElement) {
    if (mouseHover) {
        $(thisElement).find('.iconEtoro').fadeTo(300, 1);
        setTimeout('hideEtoroIcon(thisElement)', 2000);
    }
}

function hideEtoroIcon(thisElement) {
    if (mouseHover) {
        $(thisElement).find('.iconEtoro').fadeTo(300, 0);
        setTimeout('showEtoroIcon(thisElement)', 2000);
    }
}

$.fn.replaceText = function (search, replace, text_only) {
    return this.each(function () {
        var node = this.firstChild,
            val,
            new_val,
            remove = [];
        if (node) {
            do {

                if (node.nodeType === 3) {

                    val = node.nodeValue;
                    new_val = val.replace(search, replace);

                    if (new_val !== val) {

                        if (!text_only && /</.test(new_val)) {

                            $(node).before(new_val);
                            remove.push(node);
                        } else {

                            node.nodeValue = new_val;
                        }
                    }
                }
            } while (node = node.nextSibling);
        }
        remove.length && $(remove).remove();

    });
};

jQuery.fn.removeHighlight = function () {
    return this.find("span.highlight").each(function () {
        with(this.parentNode) {
            replaceChild(this.firstChild, this);
        }
    }).end();
};

function replaceInsideText(div, replace_this, with_this) {
    r = ("\\b" + replace_this + "\\b").toString();
    searchRegex = new RegExp(r, 'gi');

    /*
    var testsrt= "asdasdasd " + replace_this +" asdasdasd";
    console.log(testsrt.replace(searchRegex, with_this));
    */

    $(div, div + " *").replaceText(searchRegex, with_this);
    $(div).find("*").replaceText(searchRegex, with_this);

}

var searchInput = $("#keyword"),
    searchTerm, searchRegex;
//addToolTip();
//$("form").submit(function(){highLight();});
$("#remove-highlight").bind("click", function () {
    $("#container").removeHighlight();
});

$(document).ready(function () {

    if ($('html').hasClass('ie')) {
        e_ieFixWidth = 1;
    }

    etoro_getAJAX('https://pages.etoro.com/proxy.php?url=https://pages.etoro.com/widgets/etoro-links-wrapper/inc/get_markets_list.php', 'json', function (data) {
        stocksArray = data[0];
        currenciesArray = data[1];
        commoditiesArray = data[2];
        indicesArray = data[3];
		
        currenciesArray.push(etoroItemSettings('Currencies', null, null, 'Start Trading Currencies', 'https://www.etoro.com/markets/currencies/'), etoroItemSettings('Currency', null, null, 'Start Trading Currencies', 'https://www.etoro.com/markets/currencies/'))
        
		commoditiesArray.push(etoroItemSettings('Commodities', null, null, 'Trade Commodities', 'https://www.etoro.com/markets/commodities/'),
        etoroItemSettings('Commodity', null, null, 'Trade Commodities', 'https://www.etoro.com/markets/commodities/'))

        indicesArray.push(etoroItemSettings('Indices', null, null, 'Start Trading', 'https://www.etoro.com/markets/indices/'));


        generalCatArray = [{
            'name': 'stocks',
            'items': stocksArray
        }, {
            'name': 'currencies',
            'items': currenciesArray
        }, {
            'name': 'commodities',
            'items': commoditiesArray
        }, {
            'name': 'indices',
            'items': indicesArray
        }, {
            'name': 'brand',
            'items': brandArray
        }, {
            'name': 'partners',
            'items': partnersArray
        }]

        start_w();
    });




});