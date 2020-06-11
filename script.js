$(document).ready(function() {
    var container = $(".container");
    var currentDay = $("#currentDay");
    var currentTime = $("#currentTime");

    currentDay.text(moment().format('dddd, MMMM Do YYYY'));
    currentTime.text(moment().format('h:mm a'));

    var hourArray = ["8:00 am","9:00 am","10:00 am","11:00 am","12:00 pm","1:00 pm","2:00 pm","3:00 pm","4:00 pm","5:00 pm","6:00 pm","7:00 pm"]; 
    var hourArray2 = [12,13,14,15,16,17,18,19,20,21,22,23]; 
    var hourArray3 = [8,9,10,11,12,13,14,15,16,17,18,19]; 
    
    var todos = ["","","","","test","","","","","",""];

    var hourBlock;
    var hour; 
    var description;
    var textarea;
    var saveBtn;

    function renderTodos() {        
        for (var i = 0; i < hourArray.length; i++) {
            hourBlock = $("<div>");
                $(hourBlock).attr("class","row");
                $(container).append(hourBlock);

            hour = $("<div>");
                $(hour).text(hourArray[i]);
                $(hour).attr("class","hour col-2");
                $(hourBlock).append(hour);

            description = $("<div>");
                $(description).text("");
                $(description).attr("class","description col-8");
                $(description).attr("id","description");
                $(hourBlock).append(description);

            textarea = $("<textarea>");
                $(textarea).text(todos[i]);
                $(textarea).attr("class","textarea col-12");
                $(textarea).attr("type","text");
                $(description).append(textarea);

            saveBtn = $("<button>");
                $(saveBtn).text("Save");  
                $(saveBtn).attr("class","saveBtn col-2");
                $(hourBlock).append(saveBtn);   

            saveImage = $("<img>");
                $(saveImage).attr("src","./saveicon.png");
                $(saveImage).css({height:"50px",width:"60px", paddingLeft:"15px"});
                $(saveBtn).append(saveImage);   
            
            $(".saveBtn").on("click", function() {
                todos.splice(i, 1, textarea[i]);

                bellImage = $("<img>");
                $(bellImage).attr("src","./bell.jpg");
                $(bellImage).css({height:"50px",width:"50px", paddingLeft:"15px"});
                $(hour).append(bellImage);   
            });   
        };        
    }

    function checkTime () {
        for (var j = 0; j < hourArray2.length; j++) {
           
            var currentHour = Number(moment().startOf('day').fromNow().slice(0,2).trim());

        /*    console.log(currentHour);        */
            console.log(hourArray2[j]);

    /*        if (currentHour < hourArray2[j]) { 
                console.log("future");               
                 $("#description").attr("id","future description");
             } else if (currentHour == hourArray2[j]) {
                 console.log("present");
                 $("#description").attr("id","present description");
             } else if (currentHour > hourArray2[j]) {
                 $("#description").attr("id","past description");  
                 console.log("past");                   */
                 
                 if (currentHour < hourArray2[j]) { 
                    console.log("future");               
                     $(".description").css({
                        backgroundColor: "#77dd77",
                        color: "white"
                          });
                 } else if (currentHour == hourArray2[j]) {
                     console.log("present");
                     $(".description").css({
                        backgroundColor: "#ff6961",
                        color: "white"
                     });
                 } else if (currentHour > hourArray2[j]) {
                    console.log("past");    
                    $(".description").css({
                        backgroundColor: "#d3d3d3",
                        color: "white"
                });
            }   
        }
    }

    function storeTodos() {
        // Stringify and set "todos" key in localStorage to todos array
        localStorage.setItem("todos", JSON.stringify(todos));
    }

    function init() {
        // Get stored todos from localStorage
        // Parsing the JSON string to an object
        var storedTodos = JSON.parse(localStorage.getItem("todos"));
    
        // If todos were retrieved from localStorage, update the todos array to it
        if (storedTodos !== null) {
        todos = storedTodos;
        }
    
        // Render todos to the DOM
        renderTodos();
    }

    init();
    checkTime();
    storeTodos();
});