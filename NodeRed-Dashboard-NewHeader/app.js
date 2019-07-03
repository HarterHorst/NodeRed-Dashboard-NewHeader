<script id="clockScript1" type="text/javascript">

var language = new Object();
language.payload = 'change'

var home = new Object();
home.payload = 'Home'; // This is the payload that goes out
    
var theScope = scope;
var clockInterval;
    
$(function () {
    if (clockInterval) return;
    
    //add clock
    var divClock = $('<div />');
    var p = $('<p />');
    divClock.append(p);
    divClock[0].style.margin = '5px';
   
    function addZero(i) {
        if (i < 10) {
            i = "0" + i
        }
        return i;
    }

    function formatDate(date) {
        var monthNames = ["Januar", "Februar", "März", "April", "Mai", "Juni", "Juli", "August", "September", "Oktober", "November", "Dezember"];
        var day = date.getDate();
        var monthIndex = date.getMonth();
        var year = date.getFullYear();
        var hour = addZero(date.getHours());
        var minute = addZero(date.getMinutes());
        var second = addZero(date.getSeconds());
        return day + '. ' + monthNames[monthIndex] + ' ' + year + " " + hour +':' + minute + ':' + second;
    }
 
    function displayTime() {
        p.text( formatDate( new Date() ) );
    }
    
    clockInterval = setInterval(displayTime, 1000);
    
    // add Text
    var divText = $('<div />');
    var t = document.createTextNode("Production"); // hier den Title eingeben
    divText.append(t)
    divText[0].style.margin = '40px auto';
    divText[0].style.size = '40';
    
    // add button
    var divButton = $('<div />');
    var button = document.createElement("BUTTON");
    var b = document.createTextNode("Home Screen")
    button.height=45;
    button.appendChild(b);
    button.addEventListener("click", doIT.bind(null,home));
    divButton.append(button);
    
    // Add Button picture button

    var divPicButton =$('<div />');
    var taster = document.createElement("BUTTON");
    var pic = new Image();
    pic.src = "/homebutton.jpg";
    pic.height=45;
    pic.left=50;
    taster.appendChild(pic);
    pic.addEventListener("click", doThis.bind(null,language));
    divPicButton.append(taster);
        
    //add to toolbar when it's available
    var addToToolbarTimer;

    function test() {
        var test = "test";
        alert (test);
    }
 
    function addToToolbar() {
    
        var toolbar = $('.md-toolbar-tools');
        if(!toolbar.length) return;
    
        toolbar.append(divButton);
        toolbar.append(divText);
        toolbar.append(divClock);
        toolbar.append(divPicButton)
        clearInterval(addToToolbarTimer);
    }
    
    addToToolbarTimer = setInterval(addToToolbar, 100);
    
    function doIT(m){
        theScope.send( m )
    }

    function doThis(m){
        theScope.send( m )
    }

});
    
</script>