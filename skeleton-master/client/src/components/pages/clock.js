var interval = setInterval(clock,60000);

function clock(){
    var hrs = new Date.getHours();
    var mins = new Date.getMinutes();
    var tag = "AM";

    if (hrs>12){
        hrs-=12;
        var tag = "PM"
    }
    hrs = hrs<10?"0"+hrs : hrs;
    mins = mins<10?"0"+mins:mins;

    hours.innerHTML = hrs;
    minutes.innerHTML = mins;
    mytag.innerHTML = tag;
}
