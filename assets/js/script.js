//moment for current day at the top using class = currentDay
var currentDay = moment();
$("#currentDay").text(currentDay.format("MMMM Do, YYYY"));

//Create time blocks
var timedTasks = ["09:00", "10:00", "11:00", "12:00", "13:00", "14:00", "15:00", "16:00", "17:00"]

//Populating times on browser
$(".time").each(function(i) {
    $(this).text(timedTasks[i])
});

//Change the color of each timeblock based on calculated past present and future using moment

//Create a hourNow variable
var hourNow = moment().hours();
//Create event handler for the task input fields
var taskInputEl = $(".task_input");

//Loop through the timedTasks array above to parse out the hour of the input field label to compare with the hourNow
for(var i=0; i<timedTasks.length; i++){
    var substringTime = parseInt(timedTasks[i].substring(0,2));
    if(substringTime == hourNow){
        //add the class based on the parsed time and hour now comparison
        taskInputEl[i].className += " present";
    } else if (substringTime < hourNow){
        taskInputEl[i].className += " past";
    } else {
        taskInputEl[i].className += " future";
    };
}

//event handler for the save button
var saveBtnEl = $(".saveBtn");
//new task array to populate tasks from input field
var newTask = [];
for (var i = 0; i < saveBtnEl.length; i++) {
    saveBtnEl[i].addEventListener("click", function(event){
        event.preventDefault();
        //clear out new tasks so it doesn't just append on another array 
        newTask = [];
        for(var j=0; j<taskInputEl.length; j++) {
            newTask.splice(j, 0, taskInputEl[j].value.trim());
            localStorage.setItem("tasks", JSON.stringify(newTask));
        };
        //Used an alert box as a confirmation to the user that the content was saved
        alert("Saved!");
        //Below is what I would like to do for my saved confirmation but it only worked the first time any saved button was clicked, but not after unless I reloaded the page
        // $(".saved").text("Saved!").fadeOut(500);
    });
};


//take things out of local storage and populate on page load
//refresh --> tasks are still there
$(window).on('load', function(){
    
    var newTaskReload = JSON.parse(localStorage.getItem("tasks")) || [];

    for(var i=0; i<newTaskReload.length; i++){
        taskInputEl[i].value = newTaskReload[i];
    }
});

//add a clear button to clear out all tasks at the top of the page
$(".clear-tasks").on("click", function (){
    localStorage.clear();
    window.location.reload();
})
