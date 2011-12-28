// JavaScript Document

//stuff for walkout video

//declare the object
//var so2 = new SWFObject("walkout/manager3.swf", "manager3", "450", "280", "9.0.0", "#ffffff");

//playIntro
function playIntro() {
	if (swfobject.hasFlashPlayerVersion("6.0.0")) {
		  var fn = function() {
			var att = { data:"manager-np.swf", width:"450", height:"285" };
			var par = { flashvars:"foo=bar", wmode:"transparent" };
			var id = "introVideo";
			var myObject = swfobject.createSWF(att, par, id);

		  };
	   	  $('#closeVideo').fadeIn(800, function () { swfobject.addDomLoadEvent(fn); });

    }
	//var doThis = document.getElementById('closeVideo').style.display="block";
}

function loadThis() {
	playIntro();
}

function closeIntro() {
		//swfobject.removeSWF("introVideo");
        //var doThis = document.getElementById('introVideo').style.display="none";
		$('#closeVideo').fadeOut(1000, function () { swfobject.removeSWF("introVideo"); });
		//var doThis = document.getElementById('closeVideo').style.display="none";
		//var swf = document.getElementById(swfID);
		//var showWrapper = document.getElementById('introVideowrapper').style.display="none";
		//alert('testing');
		//var showWelcome = document.getElementById('welcome').style.display="block";
		
}
