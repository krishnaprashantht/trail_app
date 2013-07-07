// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or vendor/assets/javascripts of plugins, if any, can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// the compiled file.
//
// WARNING: THE FIRST BLANK LINE MARKS THE END OF WHAT'S TO BE PROCESSED, ANY BLANK LINE SHOULD
// GO AFTER THE REQUIRES BELOW.
//
//= require jquery
//= require jquery_ujs
//= require_tree .

function pagePopup(url) {
		
	newwindow=window.open(url,'name','height=310,width=250');

	
}

function settingsPopup(){
	//var d = getElementById("myModal");
	//var a = 10000;

	
}



function closePopup() {

	document.getElementById("wrapper").style.zIndex="1";

	window.close();
  
}

function loadXMLDoc(){

	alert("Inside loadXMLDoc");
	
	var xmlhttp;
	
	
	if (window.XMLHttpRequest)
  	{// code for IE7+, Firefox, Chrome, Opera, Safari
  		xmlhttp=new XMLHttpRequest();
  	}
  	
  	else
  	{// code for IE6, IE5
  		xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
  	}
	
	xmlhttp.onreadystatechange=function()
  	{
  		if (xmlhttp.readyState==4 && xmlhttp.status==200)
    	{
    		document.getElementById("content_layout").innerHTML=xmlhttp.responseText;
    	}
  	}
	
	xmlhttp.open("GET","show_business_news.html.erb",true);
	xmlhttp.send();

}


function displayTimestamp(){
    var wrap = document.getElementById("page");
	var timestamp = new Date();
	//var timestamp = new Date();
	document.getElementById('time_text').innerHTML = timestamp;
    validateAddUser();
    if(flag==1)
    {
        alert('after submission');
        wrap.style.zIndex = 1350+1;
    }
    else
    {
        alert('before submission');
        wrap.style.zIndex = 1349;
    }
}


/************** Code for Odometer *****************/

function dispplayOdometer() {
    parameters = parameters || {};
    var height = (undefined === parameters.height ? 40 : parameters.height);
    var digits = (undefined === parameters.digits ? 6 : parameters.digits);
    var decimals = (undefined === parameters.decimals ? 1 : parameters.decimals);
    var decimalBackColor = (undefined === parameters.decimalBackColor ? '#F0F0F0' : parameters.decimalBackColor);
    var decimalForeColor = (undefined === parameters.decimalForeColor ? '#F01010' : parameters.decimalForeColor);
    var font = (undefined === parameters.font ? 'sans-serif' : parameters.font);
    var value = (undefined === parameters.value ? 0 : parameters.value);
    var valueBackColor = (undefined === parameters.valueBackColor ? '#050505' : parameters.valueBackColor);
    var valueForeColor = (undefined === parameters.valueForeColor ? '#F8F8F8' : parameters.valueForeColor);
    var wobbleFactor = (undefined === parameters.wobbleFactor ? 0.07 : parameters.wobbleFactor);

    var doc = document;
    var initialized = false;
    
    // Cannot display negative values yet
    if (value < 0) {
        value = 0;
    }

    var digitHeight = Math.floor(height * 0.85);
    var stdFont = '600 ' + digitHeight + 'px ' + font;
    
    var digitWidth = Math.floor(height * 0.68);
    var width = digitWidth * (digits + decimals);
    var columnHeight = digitHeight * 11;
    var verticalSpace = columnHeight / 12;
    var zeroOffset = verticalSpace * 0.85;
    
    var wobble = [];

    // Resize and clear the main context
    ctx.canvas.width = width;
    ctx.canvas.height = height;

    // Create buffers
    var backgroundBuffer = createBuffer(width, height);
    var backgroundContext = backgroundBuffer.getContext('2d');
    
    var foregroundBuffer = createBuffer(width, height);
    var foregroundContext = foregroundBuffer.getContext('2d');
    
    var digitBuffer = createBuffer(digitWidth, columnHeight * 1.1);
    var digitContext = digitBuffer.getContext('2d');

    var decimalBuffer = createBuffer(digitWidth, columnHeight * 1.1);
    var decimalContext = decimalBuffer.getContext('2d');

    
    function init() {
        
        initialized = true;

        // Create the foreground
        foregroundContext.rect(0, 0, width, height);
        gradHighlight = foregroundContext.createLinearGradient(0, 0, 0, height);
        gradHighlight.addColorStop(0, 'rgba(0, 0, 0, 1)');
        gradHighlight.addColorStop(0.1, 'rgba(0, 0, 0, 0.4)');
        gradHighlight.addColorStop(0.33, 'rgba(255, 255, 255, 0.45)');
        gradHighlight.addColorStop(0.46, 'rgba(255, 255, 255, 0)');
        gradHighlight.addColorStop(0.9, 'rgba(0, 0, 0, 0.4)');
        gradHighlight.addColorStop(1, 'rgba(0, 0, 0, 1)');
        foregroundContext.fillStyle = gradHighlight;
        foregroundContext.fill();


        // Create a digit column
        // background
        digitContext.rect(0, 0, digitWidth, columnHeight * 1.1);
        digitContext.fillStyle = valueBackColor;
        digitContext.fill();
        // edges
        digitContext.strokeStyle = '#f0f0f0';
        digitContext.lineWidth = '1px'; //height * 0.1 + "px";
        digitContext.moveTo(0, 0);
        digitContext.lineTo(0, columnHeight * 1.1);
        digitContext.stroke();
        digitContext.strokeStyle = '#202020';
        digitContext.moveTo(digitWidth, 0);
        digitContext.lineTo(digitWidth, columnHeight * 1.1);
        digitContext.stroke();
        // numerals
        digitContext.textAlign = 'center';
        digitContext.textBaseline = 'middle';
        digitContext.font = stdFont;
        digitContext.fillStyle = valueForeColor;
        // put the digits 901234567890 vertically into the buffer
        for (var i=9; i<21; i++) {
            digitContext.fillText(i % 10, digitWidth * 0.5, verticalSpace * (i-9) + verticalSpace / 2);
        }
        
        // Create a decimal column
        if (decimals > 0) {
            // background
            decimalContext.rect(0, 0, digitWidth, columnHeight * 1.1);
            decimalContext.fillStyle = decimalBackColor;
            decimalContext.fill();
            // edges
            decimalContext.strokeStyle = '#f0f0f0';
            decimalContext.lineWidth = '1px'; //height * 0.1 + "px";
            decimalContext.moveTo(0, 0);
            decimalContext.lineTo(0, columnHeight * 1.1);
            decimalContext.stroke();
            decimalContext.strokeStyle = '#202020';
            decimalContext.moveTo(digitWidth, 0);
            decimalContext.lineTo(digitWidth, columnHeight * 1.1);
            decimalContext.stroke();
            // numerals
            decimalContext.textAlign = 'center';
            decimalContext.textBaseline = 'middle';
            decimalContext.font = stdFont;
            decimalContext.fillStyle = decimalForeColor;       
            // put the digits 901234567890 vertically into the buffer
            for (var i=9; i<21; i++) {
                decimalContext.fillText(i % 10, digitWidth * 0.5, verticalSpace * (i-9) + verticalSpace / 2);
            }
        }
        // wobble factors
        for (var i=0; i<(digits + decimals); i++) {
            wobble[i] = Math.random() * wobbleFactor * height - wobbleFactor * height /2;
        }
        
    }

    function drawDigits(){
        var pos = 1;
        var val;
        
        val = value;
        // do not use Math.pow() - rounding errors!
        for (var i=0; i<decimals; i++) {
            val *= 10;
        }

        var numb = Math.floor(val);
        var frac = val - numb;
        numb = String(numb);
        var prevNum = 9;

        for (var i = 0; i < decimals + digits; i++) {
            var num = +numb.substring(numb.length - i - 1, numb.length - i) || 0;
            if (prevNum != 9) {
                frac = 0;
            }
            if (i < decimals) {
                backgroundContext.drawImage(decimalBuffer, width - digitWidth * pos, -(verticalSpace * (num + frac) + zeroOffset + wobble[i]));
            } else {
                backgroundContext.drawImage(digitBuffer, width - digitWidth * pos, -(verticalSpace * (num + frac) + zeroOffset + wobble[i]));
            }
            pos++;
            prevNum = num;
        }
    }

    this.setValue = function(newVal) {
        value = newVal;
        if (value < 0) {
            value = 0;
        }
        this.repaint();
    }
    
    this.getValue = function() {
        return value;
    }

    this.repaint = function() {
        if (!initialized) {
            init();
        }
        
        // draw digits
        drawDigits();
        
        // draw the foreground
        backgroundContext.drawImage(foregroundBuffer, 0, 0);
        
        // paint back to the main context
        ctx.drawImage(backgroundBuffer, 0, 0);
        
    }
  
    this.repaint();
  

    function createBuffer(width, height) {
        var buffer = doc.createElement('canvas');
        buffer.width = width;
        buffer.height = height;
        return buffer;
    }
}

/******************* End of Odometer code ***************/


function displayBusiNews(){
    alert('inside js function before send');
    var busi = document.getElementById("busi");
    alert(busi);
    var wrap = document.getElementById("wrapper");
    alert(wrap);
    var spin = document.getElementById("spinner_page");
    alert(spin);

//    $('wrap').fadeTo('slow',0.4);
//    $('spin').show();

/*    $('busi').bind('ajax:beforeSend', function(evt, data, status, xhr){

        alert('bind');
        $('wrap').fadeTo('slow',0.4);
        $('spin').show();

    });

    $(document).ready(function(){
        alert('inside ready');
        $("busi").click(function(){
            alert('inside document ready');
            $("wrap").fadeTo("slow",0.4);
        });
    }); */
                                            
}

/******** Start for validating feedback ********/

function validateFeedback(){
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var feedback = document.getElementById("feedback").value;
    
    if(name.length<3)
    {
        alert('Name should be more than 3 characters');
        return false;
    }

    else if(email.length<1)
    {
        alert('Email field cannot be empty');
        return false;
    }

    else if(feedback.length<10)
    {
        alert('Feedback cannot be less than 10 characters');
        return false;
    }
}

function validateAddUser(){

    //var flag = 0;

    var wrap = document.getElementById("page");
    //document.getElementById("wrapper").style.zIndex="1";

    var email = document.getElementById("useremail").value;
    var password = document.getElementById("password").value;
    
    if(email.length<1)
    {
        alert('email cannot be null');
        return false;
    }

    else if(password.length<8)
    {
        alert('Password should be minimum 8 characters');
        return false;
    }

    else
    {
        var flag=1;

    }
    
    wrap.style.zIndex = 1349+1;
    
}

function giveFeedback(){
    alert('hahaha');
}

function addUserForm(){
    alert('yoyo');
}

    