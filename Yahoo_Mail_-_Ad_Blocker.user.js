// ==UserScript==
// @name        Yahoo Mail - Ad Blocker
// @namespace   ymail_ads
// @description YMail Ads Remover. Hides all the Ad panels (Top, Left, Right) in the NEW Yahoo Mail and expands them to use the full screen, to make your Yahoo Mail completely equivalent to the Paid version for free!
// @include     *://mail.yahoo.com/*
// @version     1.3
// @author      Volkan K.
// @license     Apache License, Version 2.0; http://www.apache.org/licenses/LICENSE-2.0
// @grant       GM_addStyle
// @grant       unsafeWindow
// @require 	https://cdnjs.cloudflare.com/ajax/libs/jquery/2.1.4/jquery.min.js
// ==/UserScript==

this.$ = this.jQuery = jQuery.noConflict(true);

if ( typeof unsafeWindow.NeoConfig.noDarla !== 'undefined' ) { unsafeWindow.NeoConfig.noDarla=1; }
if ( typeof unsafeWindow.NeoConfig.hasAds !== 'undefined' ) { unsafeWindow.NeoConfig.hasAds=0; }
$( document ).ready(function() {
  //alert('test'); // for debugging.
  $(".rightRailAdContainer, .mb, .left_mb, .ad-filler, .layoutfixer .c3").remove();
  if ( typeof unsafeWindow.NeoConfig.noDarla !== 'undefined' ) { unsafeWindow.NeoConfig.noDarla=1; }
  if ( typeof unsafeWindow.NeoConfig.hasAds !== 'undefined' ) { unsafeWindow.NeoConfig.hasAds=0; }
});

//, #spritzAd
GM_addStyle("\
#mbAds, #tgtTL1, #theAd, #sb_rel_tgtTL1, #masSearchAd, .sky-ad, #mbRecAds, .adchoices, .adlink, .mb-list-ad, .mb-rec-ad, #slot_TL1, #slot_mbrec, #slot_MB, #mobilizer, #yucs-disclaimer { display:none !important; width:0px !important; position: absolute !important; left: -999px !important; top: -999px !important; padding: 0px !important; z-index: -999 !important; } \
#shellcontent {right: 0px !important;} \
#main {max-width:none !important;} \
#shellnavigation {bottom: inherit !important; } \
");

// for the old, 'Basic' Yahoo Mail. 
var oldYahooMailAds = $(".with-ads");
if(oldYahooMailAds.length>0)
{
	GM_addStyle("\
	.mb > .tbl{ display:none !important; width:0px !important; position: absolute !important; left: -999px !important; top: -999px !important; padding: 0px !important; z-index: -999 !important; } \
	");

	oldYahooMailAds.removeClass("with-ads");
}