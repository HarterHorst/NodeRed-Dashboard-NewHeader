<script id="clockScript1" type="text/javascript">

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
    divClock[0].style.margin = '15px';
   
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
    var t = document.createTextNode("Production"); // <== add title here
    divText.append(t)
    divText[0].style.margin = '40px auto';
    divText[0].style.size = '40';
    
    // add button
    var divButton = $('<div />');
    var button = document.createElement("BUTTON");
    var b = document.createTextNode("Home Screen")
    button.height=40;
    button.width=40;
    button.appendChild(b);
    button.addEventListener("click", doIT.bind(null,home));
    divButton.append(button);
    
    //
    // Add Button picture button
    //
    
    //var divPicButton =$('<div />'); //old statement from forum.
    var divPicButton = document.createElement ("div");
    var btn_Home = document.createElement("BUTTON");
    btn_Home.setAttribute("class", "btnHome_class");
    
    var pic = new Image();
    pic.src = "/Home1.png"; // <== add path and filename of picture here
    pic.height=40;
    pic.width=40;
    btn_Home.appendChild(pic);
    pic.addEventListener("click", doThis.bind(null,home));
    divPicButton.append(btn_Home);
        
    //add to toolbar when it's available
    var addToToolbarTimer;
     
    function addToToolbar() {
    
        var toolbar = $('.md-toolbar-tools');
        if(!toolbar.length) return;
    
        // toolbar.append(divButton);
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