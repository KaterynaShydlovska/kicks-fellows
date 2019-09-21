(function(){
var recognised_user = 0;
if (bt_cookie("asos")  ) {
	var a = bt_cookie("asos").split('&');
	var info = {};
	
	if(bt_cookie("geocountry") === "FR" ){
		for(i =0; i< a.length; i++){
			info = a[i].split("=");
			if(info[0] === "customerid" && info[1] >-1){
				recognised_user = 1;
			}
		}
	}
}
var signal_set_date = new Date();
signal_set_date.setTime(signal_set_date.getTime() + (30 * 24 * 60 * 60 * 1000));
document.cookie = "bt_recUser=" + recognised_user + ";domain=" + Signal.Util.getRootDomain() + ";expires=" + signal_set_date + "; path=/;";
})();



if (bt_parameter("gclid") != "") {
    var date = new Date();
    date.setTime(date.getTime() + (30 * 24 * 60 * 60 * 1000));
    document.cookie = "bt_gclid=" + bt_parameter("gclid") + ";domain=" + Signal.Util.getRootDomain() + ";expires=" + date + "; path=/;";
}

if (bt_parameter("affid") != "") {
    var date = new Date();
    date.setTime(date.getTime() + (30 * 24 * 60 * 60 * 1000));
    document.cookie = "bt_affid=" + bt_parameter("affid") + ";domain=" + Signal.Util.getRootDomain() + ";expires=" + date + "; path=/;";
}

if (bt_parameter("_cclid") != "") {
    var date = new Date();
    date.setTime(date.getTime() + (30 * 24 * 60 * 60 * 1000));
    document.cookie = "bt_cclid=" + bt_parameter("_cclid") + ";domain=" + Signal.Util.getRootDomain() + ";expires=" + date + "; path=/;";
}

if (bt_parameter("pubref") != "") {
    var date = new Date();
    date.setTime(date.getTime() + (30 * 24 * 60 * 60 * 1000));
    document.cookie = "bt_pubref=" + bt_parameter("pubref") + ";domain=" + Signal.Util.getRootDomain() + ";expires=" + date + "; path=/;";
}

if (bt_parameter("pubref") != "") {
    var date = new Date();
    date.setTime(date.getTime() + (30 * 24 * 60 * 60 * 1000));
    document.cookie = "asosPubref=" + bt_parameter("pubref") + ";domain=" + Signal.Util.getRootDomain() + ";expires=" + date + "; path=/;";
}

if(bt_parameter("ranMID")){
    var first_rand_date = bt_cookie('bt_ranFirstDate')
    var ranMID_cookie   = bt_cookie('bt_ranMID');
    if( !ranMID_cookie || bt_parameter("ranMID").indexOf(ranMID_cookie) < 0 || !first_rand_date || first_rand_date.length === 0 || first_rand_date === "" ) {

        var date = new Date();
        date.setTime(date.getTime() + (30 * 24 * 60 * 60 * 1000));
        var date_landed = new Date();
        var formatted_date = date_landed.toISOString().replace(/-/g,'').replace("T","_").replace(/.{8}$/,'').replace(':', '');  
        document.cookie = "bt_ranFirstDate=" + formatted_date + ";domain=" + Signal.Util.getRootDomain() + ";expires=" + date + "; path=/;";
    }
}

if (bt_parameter("ranSiteID") != "") {
    var date = new Date();
    date.setTime(date.getTime() + (30 * 24 * 60 * 60 * 1000));
    document.cookie = "bt_ranSiteID=" + bt_parameter("ranSiteID") + ";domain=" + Signal.Util.getRootDomain() + ";expires=" + date + "; path=/;";
}

if (bt_parameter("ranMID") != "") {
    var date = new Date();
    date.setTime(date.getTime() + (30 * 24 * 60 * 60 * 1000));
    document.cookie = "bt_ranMID=" + bt_parameter("ranMID") + ";domain=" + Signal.Util.getRootDomain() + ";expires=" + date + "; path=/;";
}


if (bt_parameter("transaction_id") != "") {
    var expires;
    var date = new Date();
    date.setTime(date.getTime() + (30 * 24 * 60 * 60 * 1000));
    document.cookie = "asosConnectTransId=" + bt_parameter('transaction_id') + "; path=/;domain=" + Signal.Util.getRootDomain() + "; expires=" + date + ";";
} else if (location.href.indexOf("transaction_id=") > -1) {
    var expires;
    var date = new Date();
    date.setTime(date.getTime() + (30 * 24 * 60 * 60 * 1000));
    var a = (location.href.indexOf("transaction_id=") > -1 ? location.href.split("transaction_id=")[1].split("&")[0] : "");
    document.cookie = "asosConnectTransId=" + a + ";path=/;domain=" + Signal.Util.getRootDomain() + ";expires=" + date + ";";
}

if (bt_parameter("MID") != "") {
    var bt_today = new Date();
    bt_today.setMonth(bt_today.getMonth() + 1);
    document.cookie = "asosLinkshareMID=" + bt_parameter("MID") + "; domain=" + location.hostname.replace(/[a-z]+./, ".") + "; path=/; expires=" + bt_today.toGMTString() + ";";
}

if(bt_parameter("awc")) {
    var date = new Date();
    date.setTime(date.getTime() + (30*24*60*60*1000));
    var expires = "; expires=" + date.toGMTString();
    document.cookie = "signal.awc=" + bt_parameter("awc") + "; domain=" + Signal.Util.getRootDomain() + ";expires=" + date + "; path=/;";
}

if(bt_parameter("fbadid")){
    var date = new Date();
    date.setTime(date.getTime() + (30*24*60*60*1000));
    var expires = "; expires=" + date.toGMTString();
    var rootDom = Signal.Util.getRootDomain();
    document.cookie = "bt_fbAdId=" + bt_parameter("fbadid") + "; domain=" + rootDom + ";expires=" + date + "; path=/;";
    document.cookie = "bt_fbClickTime=" + Math.round((new Date()).getTime() / 1000) + "; domain=" + rootDom + ";expires=" + date + "; path=/;";
}