$(document).ready(function(){

    var container = $(".container");
    var currentDay = $("#currentDay");
    var currentTime = $("#currentTime");

    currentDay.text(moment().format('MMMM Do YYYY'));
    currentTime.text(moment().format('h:mm a'));

    var hourArray = ["8AM","9AM","10AM","11AM","12PM","1PM","2PM","3PM","4PM","5PM","6PM","7PM"]; 

    var todos = [];

    function timeBlock() {
        
        for (var i = 0; i < hourArray.length; i++) {
            var hourBlock = document.createElement("div");
            $(hourBlock).attr("class","row");
            $(".container").append(hourBlock);

            var hour = document.createElement("div");
            $(hour).text(hourArray[i]);
            $(hour).attr("class","hour col-1");
            $(hourBlock).append(hour);

            var description = document.createElement("div");
            $(description).text("");
            $(description).attr("class","description col-10");
            $(hourBlock).append(description);

            var saveBtn = document.createElement("div");
            $(saveBtn).text("Save");
            $(saveBtn).attr("class","saveBtn col-1");
            $(hourBlock).append(saveBtn);        
        };
//    $(saveBtn).mouseenter() {
        "class","saveBtn i:hover"
//        };
//    $(saveBtn).click("class","saveBtn click");    
        
    }

    timeBlock();
});