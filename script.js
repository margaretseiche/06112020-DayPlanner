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
            var hour = document.createElement("p");
            $(hour).text(hourArray[i]);
            console.log(hour);
            $(hour).attr("class","hour");
            $(".container").append(hour);

        //    <div class="row">
        //    <div class="col-8">
        //    <div class="col-4">
            
        };
        

    }

    timeBlock();
});