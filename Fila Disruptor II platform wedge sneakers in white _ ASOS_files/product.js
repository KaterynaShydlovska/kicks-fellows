var CommonAnalytics=function(jquery,eventHandlers){this.$=jquery,this.eventHandlers=eventHandlers,this.$(window).on(Object.keys(this.eventHandlers).join(" "),this.safeHandler.bind(this))};CommonAnalytics.prototype.safeHandler=function(event,data){var matchingEvent=this.getMatchingEventName(event.type,event.namespace);void 0!==matchingEvent&&(matchingEvent=matchingEvent.split("."),event.type=matchingEvent[0],event.namespace=matchingEvent.slice(1,matchingEvent.length).join("."));try{visitor?this.callEventHandler(event,data,event.namespace):this.deferHandling(event,data,event.namespace)}catch(e){this.logError(event.namespace,e)}},CommonAnalytics.prototype.deferHandling=function(event,data,namespace){var counter=0,loopCheck=setInterval(function(){visitor?(this.callEventHandler(event,data,namespace),clearInterval(loopCheck)):counter>=5?(clearInterval(loopCheck),this.logError(namespace,e,"Visitor API not loaded: ")):counter++},500)},CommonAnalytics.prototype.getMatchingEventName=function(testEventType,testNamespace){var testNamespaceParts=testNamespace.split("."),eventNames=Object.keys(this.eventHandlers).filter(function(eventName){var namespaceParts=eventName.split(".");if(namespaceParts.splice(0,1)[0]!==testEventType||namespaceParts.length!==testNamespaceParts.length)return!1;for(var i=testNamespaceParts.length-1;i>=0;i--)if(-1===namespaceParts.indexOf(testNamespaceParts[i]))return!1;return!0});return eventNames&&eventNames.length>0?eventNames[0]:void 0},CommonAnalytics.prototype.logError=function(namespace,e,customMessage){window.newrelic&&window.newrelic.noticeError(new Error(customMessage||"Analytics error on: "+namespace+" | "+e))},CommonAnalytics.prototype.callEventHandler=function(event,data,namespace){void 0!==this.eventHandlers[event.type+"."+namespace]&&this.eventHandlers[event.type+"."+namespace].apply(window,[event,data])},CommonAnalytics.prototype.setLinkTrackVars=function(props){var propString="";return this.$.each(props,function(index,value){propString+=value+","}),s.apl(s.linkTrackVars,propString.slice(0,-1),",",1)},CommonAnalytics.prototype.setLinkTrackEvents=function(events){var eventString="";return this.$.each(events,function(index,value){eventString+=value+","}),s.apl(s.linkTrackEvents,eventString.slice(0,-1),",",1)},CommonAnalytics.prototype.getErrorString=function(errors){var errorString="";return this.$.each(errors,function(index,error){errorString+=error.field+"|"+error.error+";"}),errorString.slice(0,-1)},require(["jquery"],function($){function getChannel(data){var searchTerm=data.SearchTerm,cid=data.CID;if(cid)return cid;if("null"!==searchTerm)return"search";if(hasCTARef()){var ctaRef=getCTARef();return/bag/i.test(ctaRef)?"basket page":/saved items/i.test(ctaRef)?"saved items":"unknown CTARef: "+ctaRef}return"product page"}function hasCTARef(){return/(\?|&)ctaref=/i.test(window.location.search)}function getCTARef(){return parseQueryString().ctaref}function parseQueryString(){var urlParams=window.location.search.toLowerCase(),params={};return urlParams=urlParams.substr(1).split("&"),urlParams.forEach(function(p){var paramAndValue=p.split("=");params[paramAndValue[0]]=decodeURIComponent(paramAndValue[1]||"")}),params}function getPerformanceMetricsString(){if(window.performance.getEntriesByType){for(var allMeasures=window.performance.getEntriesByType("measure"),measureKeys=Object.keys(performanceNameMap),performanceMetricsArray=[],i=0;i<allMeasures.length;i++)measureKeys.indexOf(allMeasures[i].name)>-1&&performanceMetricsArray.push(performanceNameMap[allMeasures[i].name]+";"+Math.floor(allMeasures[i].duration));return performanceMetricsArray.join("|")}}var viewportDimensions=function(){var height=window.innerHeight||"",width=window.innerWidth||"";return"number"==typeof width&&"number"==typeof height?width+":"+height:""},isMixMatchPage=function(){return-1!==document.location.href.indexOf("/grp/")},removeSpaceAroundPipe=function(str){return str},eventHandlers={"tracking.productPage.pageInteraction":function(){s=s_gi(s.account);var overrides={},context=arguments[1].context.toLowerCase(),customLinkName=context,customContext=context,shouldFireEventLess=!0,shouldFireEventMore=!0;switch(overrides.linkTrackVars=commons.setLinkTrackVars(["prop15"]),overrides.linkTrackEvents=commons.setLinkTrackEvents(["event18","event95","event103"]),arguments[1].productIID&&(s.products=";"+arguments[1].productIID),s.events="event18",context){case"asseenonmebutton":customContext="as seen on me button",customLinkName="as seen on me button",s.events="event18";break;case"socialshare":customContext="social share intent",customLinkName="social share",arguments[1].socialPlatform&&(customContext+="|"+arguments[1].socialPlatform.toLowerCase(),customLinkName="social share"),s.events="event18";break;case"launchsizeguide":customContext="launch size guide",customLinkName="size guide click",s.events="event18,event103";break;case"freedeliveryandreturns":customContext="free delivery and returns",customLinkName="free delivery and returns click",s.events="event18,event95";break;case"showmore":customContext="show more",customLinkName="show more click",s.events="event18",void 0===window.trackingEventMore?window.trackingEventMore=1:shouldFireEventMore=!1;break;case"showless":customContext="show less",customLinkName="show less click",s.events="event18",void 0===window.trackingEventLess?window.trackingEventLess=1:shouldFireEventLess=!1;break;default:s.events="event18"}s.prop15=customContext,shouldFireEventLess&&shouldFireEventMore&&s.tl(!0,"o",customLinkName,overrides)},"tracking.productPage.saveForLater":function(){s=s_gi(s.account);var overrides={},context=arguments[1].context.toLowerCase(),saveForLaterType=arguments[1].saveForLaterType.toLowerCase(),customLinkName=context;switch(overrides.linkTrackVars=commons.setLinkTrackVars(["eVar13","prop38","eVar66","eVar67","prop75","eVar91","eVar92"]),overrides.linkTrackEvents=commons.setLinkTrackEvents(["event10","event148"]),s.eVar13=arguments[1].saveForLaterType,s.products=";"+(arguments[1].variantIID||arguments[1].productIID),arguments[1].errorId&&(s.prop38=arguments[1].errorID+"|"+arguments[1].errorCode),context){case"saveforlatererror":customLinkName="save for later error",s.events="event10,event148";break;default:customLinkName="save for later click",s.events="event10"}"main"===saveForLaterType?s.eVar13=isMixMatchPage()?"mix & match":"product page":"buythelook"===saveForLaterType?s.eVar13="buy the look":"recentlyviewed"===saveForLaterType?s.eVar13="recently viewed":"youmightLike"===saveForLaterType&&(s.eVar13="you might also like");var mrch=s.Util.getQueryParam("mrch");""!==mrch?s.eVar66=s.eVar67=mrch:void 0!==window.mvtMerchandising&&(s.eVar66=s.eVar67=window.mvtMerchandising),arguments[1].SellingFast&&(s.eVar13="selling fast",s.eVar92="selling fast"),s.tl(!0,"o",customLinkName,overrides)},"tracking.productPage.addToBag":function(){s=s_gi(s.account);var overrides={},context=arguments[1].context.toLowerCase(),customLinkName="add to bag",productList="",commonLinkTrackVars=["eVar13","prop38","eVar66","eVar67","prop75","eVar91","eVar92"];for(var i in arguments[1].products)productList+=";"+arguments[1].products[i].variantIID+",";productList=productList.slice(0,-1);var addToBagType;if(addToBagType=void 0!==arguments[1].addToBagType&&"main"===arguments[1].addToBagType?isMixMatchPage()?"mix & match":"product page":void 0!==arguments[1].addToBagType&&"buyTheLook"===arguments[1].addToBagType?"buyTheLook":arguments[1].addToBagType,void 0!==arguments[1].faSizeRegion&&"product page"===addToBagType){commonLinkTrackVars=commonLinkTrackVars.concat(["prop36","eVar50","eVar51","eVar150"]);var faState,faSize;faState=void 0!==arguments[1].faSignedInStatus?arguments[1].faSignedInStatus:"no signed in status set",faState+="|"+(void 0!==arguments[1].faState?arguments[1].faState:"no state set"),faState+="|"+(void 0!==arguments[1].faUserProfile?arguments[1].faUserProfile:"no user profile set"),faState+="|"+(void 0!==arguments[1].faBodyCategory?arguments[1].faBodyCategory:"no body category set"),faSize=void 0!==arguments[1].faSizeRegion?arguments[1].faSizeRegion:"no size region set",faSize+="|"+(void 0!==arguments[1].faRecommendedSize?arguments[1].faRecommendedSize:"no recommended size set"),s.prop36=faState.toLowerCase(),s.eVar150=faState.toLowerCase(),s.eVar50=faSize.toLowerCase(),s.eVar51=faSize.toLowerCase()}overrides.linkTrackVars=commons.setLinkTrackVars(commonLinkTrackVars),overrides.linkTrackEvents=commons.setLinkTrackEvents(["event149","event150","event151","scOpen","scAdd"]),s.eVar13=addToBagType,s.products=productList,"addtobagerror"===context&&(customLinkName="add to bag error",s.prop38=arguments[1].errorId+"|"+arguments[1].errorCode);var event150="event150="+arguments[1].productsAdded,event151=",event151="+arguments[1].totalValue;s.events=event150+event151+",scAdd,scOpen","addtobagerror"===context&&(s.events="event149");var mrch=s.Util.getQueryParam("mrch");""!==mrch?s.eVar66=s.eVar67=mrch:void 0!==window.mvtMerchandising&&(s.eVar66=s.eVar67=window.mvtMerchandising);var sellingFast=!1;arguments[1].products[0]&&(sellingFast=arguments[1].products[0].sellingFast),sellingFast&&(s.eVar92="selling fast",s.eVar13="selling fast"),s.tl(!0,"o",customLinkName,overrides)},"tracking.productPage.carouselAction":function(e){s=s_gi(s.account);var overrides={},context=arguments[1].context.toLowerCase(),customLinkName="chevron click",shouldFireEvent=!0;switch(overrides.linkTrackVars=commons.setLinkTrackVars(["prop15"]),overrides.linkTrackEvents=commons.setLinkTrackEvents(["event18"]),s.products=";"+arguments[1].productIID,s.prop15="chevron click",arguments[1].carouselType){case"recentlyviewed":customLinkName="recently viewed chevron click",s.events="event18";break;default:s.events="event18"}"chevronclick"===arguments[1].context&&"productgallery"===arguments[1].carouselType&&(void 0===window.trackingChangeThumbnail?window.trackingChangeThumbnail=1:shouldFireEvent=!1,customLinkName="product chevron click",s.prop15=customLinkName),"clearall"===context&&(customLinkName="recently viewed clear all",s.prop15="recently viewed|clear all"),s.events="event18",shouldFireEvent&&s.tl(!0,"o",customLinkName,overrides)},"tracking.productPage.modalAction":function(){s=s_gi(s.account);var overrides={};arguments[1].context.toLowerCase();overrides.linkTrackVars=commons.setLinkTrackVars(["prop15"]),overrides.linkTrackEvents=commons.setLinkTrackEvents(["event18"]),s.prop15="mix and match|open modal",s.products=";"+arguments[1].productIID,s.events="event18",s.tl(!0,"o","mix and match modal click",overrides)},"tracking.productPage.fitAnalyticsImpression":function(){s=s_gi(s.account);var overrides={},context=arguments[1].context.toLowerCase();overrides.linkTrackVars=commons.setLinkTrackVars(["prop36,eVar50","eVar9"]),s.eVar9=arguments[1].mvtTestName,overrides.linkTrackEvents=commons.setLinkTrackEvents(["event50"]);var faState,faSize;faState=void 0!==arguments[1].faSignedInStatus?arguments[1].faSignedInStatus:"no signed in status set",faState+="|"+(void 0!==arguments[1].faState?arguments[1].faState:"no state set"),faState+="|"+(void 0!==arguments[1].faUserProfile?arguments[1].faUserProfile:"no user profile set"),faState+="|"+(void 0!==arguments[1].faBodyCategory?arguments[1].faBodyCategory:"no body category set"),faSize=void 0!==arguments[1].faSizeRegion?arguments[1].faSizeRegion:"no size region set",faSize+="|"+(void 0!==arguments[1].faRecommendedSize?arguments[1].faRecommendedSize:"no recommended size set"),s.prop36=faState.toLowerCase(),s.eVar50=faSize.toLowerCase(),s.events="event50",s.tl(!0,"o",context,overrides)},"tracking.productPage.fitAnalyticsInteraction":function(){s=s_gi(s.account);var overrides={},context=arguments[1].context.toLowerCase();overrides.linkTrackVars=commons.setLinkTrackVars(["prop36,prop70,eVar50","eVar9"]),"launch widget"===context?(overrides.linkTrackEvents=commons.setLinkTrackEvents(["event51"]),s.events="event51"):"close widget"===context&&(s.prop70=void 0!==arguments[1].viewedScreens?arguments[1].viewedScreens:"no viewed screens set",overrides.linkTrackEvents=commons.setLinkTrackEvents(["event124"]),s.events="event124");var faState,faSize;faState=void 0!==arguments[1].faSignedInStatus?arguments[1].faSignedInStatus:"no signed in status set",faState+="|"+(void 0!==arguments[1].faState?arguments[1].faState:"no state set"),faState+="|"+(void 0!==arguments[1].faUserProfile?arguments[1].faUserProfile:"no user profile set"),faState+="|"+(void 0!==arguments[1].faBodyCategory?arguments[1].faBodyCategory:"no body category set"),faSize=void 0!==arguments[1].faSizeRegion?arguments[1].faSizeRegion:"no size region set",faSize+="|"+(void 0!==arguments[1].faRecommendedSize?arguments[1].faRecommendedSize:"no recommended size set"),s.prop36=faState.toLowerCase(),s.eVar50=faSize.toLowerCase(),s.tl(!0,"o",context,overrides)},"tracking.mvtTesting.postPageLoad":function(){s=s_gi(s.account);var overrides={},testName=arguments[1].testName.toLowerCase();overrides.linkTrackVars=commons.setLinkTrackVars(["eVar9"]),overrides.linkTrackEvents=commons.setLinkTrackEvents(["event104"]),s.eVar9=testName,s.events="event104",s.tl(!0,"o","mvt testing post page load event",overrides)},"tracking.productPage.endOfOosAnimation":function(){s=s_gi(s.account);var overrides={},storeID=window.asos.webContext.getStoreId().toLowerCase();overrides.linkTrackVars=commons.setLinkTrackVars(["eVar58","eVar13"]),overrides.linkTrackEvents=commons.setLinkTrackEvents(["event124"]),s.pageName=removeSpaceAroundPipe(arguments[1].Platform+" "+storeID+"|"+arguments[1].PageType+"|"+arguments[1].PageName),s.channel=getChannel(arguments[1]),s.server=arguments[1].Platform+" "+storeID,s.events="event124",s.products=";"+arguments[1].ProductIID;var carousel;carousel=arguments[1].carousels.length>0?"carousel impression|"+arguments[1].carousels.join(", "):"carousel not available",s.eVar13="product page",s.prop8="product page",s.eVar58=carousel,s.tl(!0,"o","leave PDP page",overrides)},"tracking.productPage.pageLoad":function(){s.eVar45=arguments[1].AppVersion||"";var storeID=window.asos.webContext.getStoreId().toLowerCase();s.pageName=removeSpaceAroundPipe(arguments[1].Platform+" "+storeID+"|"+arguments[1].PageType+"|"+arguments[1].PageName),s.channel=getChannel(arguments[1]),s.server=arguments[1].Platform+" "+storeID,s.campaign=s.getCampaignID(),s.products=";"+(arguments[1].MixMatchIID?arguments[1].MixMatchIID:arguments[1].ProductIID);var availibleProducts="";if(arguments[1].MixMatchIID){for(var i in arguments[1].AvailibleProducts)availibleProducts+=";"+arguments[1].AvailibleProducts[i]+",";availibleProducts=availibleProducts.slice(0,-1),s.products=availibleProducts}s.eVar1=s.getVisitNum();var totalSize=arguments[1].PreviusCatagoryPageSize*arguments[1].PreviusCatagoryPageNumber,gridSize=arguments[1].PreviusCatagoryGridSize,prvPage=parseInt(arguments[1].PreviusCatagoryPageNumber),catPageSize=arguments[1].PreviusCatagoryPageSize,totalStyles=arguments[1].PreviusCatagoryTotalstyles;if(null!==arguments[1].PreviusCatagoryPageNumber&&null!==arguments[1].PreviusCatagoryPageSize&&null!==arguments[1].PreviusCatagoryTotalstyles&&(s.eVar4=gridSize+"|"+prvPage+"|"+catPageSize+"|"+totalSize+"|"+totalStyles),void 0!==arguments[1].AvailbleSku&&void 0!==arguments[1].TotalSku&&void 0!==arguments[1].AvailibleSizes&&void 0!==arguments[1].TotalSizes&&void 0!==arguments[1].TotalColours){var totalSku=arguments[1].TotalSku,availableSku=arguments[1].AvailbleSku,totalSizes=arguments[1].TotalSizes,stockStatus=totalSku+"|"+availableSku+"|";stockStatus+=0===totalSku?"0":(availableSku/totalSku*100).toFixed(2)+"%|",stockStatus+="null|null|null|null|null|null",s.eVar26=totalSizes,s.eVar36=s.eVar31=stockStatus}var productFeature=!1!==arguments[1].MixMatchIID&&"mix&match"===arguments[1].PageType?"mix & match":"product page";if(s.eVar19=viewportDimensions(),s.eVar13=productFeature,s.eVar34=productFeature,s.eVar17=s.getNewRepeat(365),s.eVar112=arguments[1].selectedCountry.toLowerCase(),s.eVar113=arguments[1].selectedCurrency.toLowerCase(),""!==s.Util.getQueryParam("SearchQuery")&&(s.eVar25=s.Util.getQueryParam("SearchQuery")),s.linkTrackEvents="prodView,event1,event128,event43,event44,event45,event15","performance"in window){var navApi=window.performance.timing;s.eVar29=navApi.responseStart-navApi.navigationStart,s.eVar30=navApi.domContentLoadedEventEnd-navApi.navigationStart,s.events="event128="+s.eVar30,s.eVar136=getPerformanceMetricsString()}else window.performance={now:function(){return 0}};s.eVar70=s.getBagItems(),s.prop5=s.getCustomTimeDate(),s.prop8="product page",s.prop10=s.getPreviousValue(s.pageName,"gpv_p10","").toLowerCase(),s.prop11=encodeURI(window.location.href.replace(/%20/gi,"+")),s.prop46=s.Util.cookieRead("_s_pl"),s.events+=",prodView,event1",arguments[1].IsInStock&&arguments[1].TotalSku===arguments[1].AvailbleSku?s.events+=",event43":arguments[1].IsInStock&&arguments[1].TotalSku!==arguments[1].AvailbleSku?s.events+=",event44":arguments[1].IsInStock||(s.events+=",event45"),Array.isArray(arguments[1].VariantStockStatus)&&(s.list1=arguments[1].VariantStockStatus.map(function(variant){var stockStatus="out of stock"===variant.stockStatus?"0":"1";return"variantstockstatus:"+variant.variantId+"_"+stockStatus}).join(",")),!1!==arguments[1].MixMatchIID&&"mix&match"===arguments[1].PageType&&(s.events+=",event15"),""!==s.getQueryParamValue("recs",!0)&&(s.prop75=s.eVar91="recs|"+s.getQueryParamValue("recs",!0));var cta=s.getQueryParamValue("CTAref",!0);cta&&(s.prop6=cta.toLowerCase()),arguments[1].SellingFast&&(s.eVar92="selling fast",s.eVar13="selling fast"),s.setContentHierarchy("product page",arguments[1].BreadCrumb),setTimeout(function(){s_code=s.t(),s_code&&document.write(s_code)},0);var dataToProxy=[{key:"AppVersion",name:"version"},{key:"StoreID",name:"storeId"},{key:"Platform",name:"platform"},{key:"keyStoreDataVersion",name:"keyStoreDataVersion"},{key:"selectedCountry",name:"browseCountry"},{key:"selectedCurrency",name:"browseCurrency"},{key:"selectedLanguage",name:"browseLanguage"},{key:"selectedSizeSchema",name:"browseSizeSchema"},{key:"sitechromeTemplateVersion",name:"sitechromeTemplateVersion"}];!function(listOfDataToProxy,dataSource){"object"==typeof window.NREUM&&"function"==typeof window.NREUM.setCustomAttribute&&listOfDataToProxy.forEach(function(data){window.NREUM.setCustomAttribute(data.name,dataSource[data.key])})}(dataToProxy,arguments[1])}},performanceNameMap={"pdp:start":"srt","pdp:hero_image_displayed":"her","pdp:title_displayed":"ttl","pdp:gallery_image_0_displayed":"gi0","pdp:gallery_image_1_displayed":"gi1","pdp:gallery_image_2_displayed":"gi2","pdp:gallery_image_3_displayed":"gi3","pdp:gallery_image_4_displayed":"gi4","pdp:stock_api_returned":"spa","pdp:price_displayed":"prc","pdp:size_selector_interactive":"sze","pdp:add_to_bag_interactive":"atb","pdp:save_for_later_interactive":"sfl"},commons=new CommonAnalytics($,eventHandlers)}),require(["jquery"],function($){var eventHandlers={"tracking.mediaPlayer.mediaAction":function(){s=s_gi(s.account);var overrides={},context=arguments[1].context.toLowerCase();overrides.linkTrackVars=commons.setLinkTrackVars(["prop15"]),overrides.linkTrackEvents=commons.setLinkTrackEvents(["event18"]),s.prop15=context,s.products=";"+arguments[1].productIID+";1",s.events="event18",s.tl(!0,"o",context,overrides)},"tracking.mediaPlayer.videoAction":function(){s=s_gi(s.account);var overrides={},context=arguments[1].context.toLowerCase(),shouldFireEvent25=!0,shouldFireEvent50=!0,shouldFireEvent75=!0,shouldFireEvent100=!0;overrides.linkTrackVars=commons.setLinkTrackVars(["prop15"]),overrides.linkTrackEvents=commons.setLinkTrackEvents(["event18"]),s.prop15="video progress "+arguments[1].videoEvent,s.products=";"+arguments[1].productIID+";1",s.events="event18",void 0===window.trackingEvent25&&"25"===arguments[1].videoEvent.toString()?window.trackingEvent25=1:shouldFireEvent25=!1,void 0===window.trackingEvent50&&"50"===arguments[1].videoEvent.toString()?window.trackingEvent50=1:shouldFireEvent50=!1,void 0===window.trackingEvent75&&"75"===arguments[1].videoEvent.toString()?window.trackingEvent75=1:shouldFireEvent75=!1,void 0===window.trackingEvent100&&"100"===arguments[1].videoEvent.toString()?window.trackingEvent100=1:shouldFireEvent100=!1,"25"===arguments[1].videoEvent.toString()?shouldFireEvent25&&s.tl(!0,"o",context,overrides):"50"===arguments[1].videoEvent.toString()?shouldFireEvent50&&s.tl(!0,"o",context,overrides):"75"===arguments[1].videoEvent.toString()?shouldFireEvent75&&s.tl(!0,"o",context,overrides):"100"===arguments[1].videoEvent.toString()?shouldFireEvent100&&s.tl(!0,"o",context,overrides):s.tl(!0,"o",context,overrides)}},commons=new CommonAnalytics($,eventHandlers)}),require(["jquery"],function($){var eventHandlers={"tracking.appbanner.showBanner":function(){s=s_gi(s.account);var overrides={};overrides.linkTrackVars=commons.setLinkTrackVars(["prop41","prop42"]),overrides.linkTrackEvents=commons.setLinkTrackEvents(["event74"]),s.events="event74",s.prop41=s.prop8,s.prop42=arguments[1],s.tl(!0,"o","Display Smart Banner",overrides)},"tracking.appbanner.installTheApp":function(){s=s_gi(s.account);var overrides={};overrides.linkTrackVars=commons.setLinkTrackVars(["prop41","prop42"]),overrides.linkTrackEvents=commons.setLinkTrackEvents(["event73"]),s.events="event73",s.prop41=s.prop8,s.prop42=arguments[1],s.tl(!0,"o","Download App via the Smart Banner",overrides)}},commons=new CommonAnalytics($,eventHandlers)});
//# sourceMappingURL=product.js.map