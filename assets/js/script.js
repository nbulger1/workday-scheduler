//moment for current day at the top using class = currentDay
var currentDay = moment();
$("#currentDay").text(currentDay.format("MMM Do, YYYY"));

//Create time blocks
var timedTasks = ["09:00", "10:00", "11:00", "12:00", "13:00", "14:00", "15:00", "16:00", "17:00"]

//Populating times on browser
var timeEl = document.querySelectorAll(".time");
for(var i=0; i<timeEl.length; i++){
    timeEl[i].textContent = timedTasks[i];
};

//Change the color of each timeblock based on calculated past present and future using moment
var hourNow = moment().hours();
console.log(hourNow);
var taskInputEl = document.querySelectorAll(".task_input");

for(var i=0; i<timedTasks.length; i++){
    var substringTime = parseInt(timedTasks[i].substring(0,2));
    if(substringTime == hourNow){
        taskInputEl[i].className += " present";
    } else if (substringTime < hourNow){
        taskInputEl[i].className += " past";
    } else {
        taskInputEl[i].className += " future";
    };
}

//save button --> local storage

var saveBtnEl = document.querySelectorAll(".saveBtn");

var newTask = [];

//pull from tasks first 

for (var i = 0; i < saveBtnEl.length; i++) {
    saveBtnEl[i].addEventListener("click", function(event){
        event.preventDefault();
        //have to clear out new task!!!! :)
        newTask = [];
        for(var j=0; j<taskInputEl.length; j++) {
            newTask.splice(j, 0, taskInputEl[j].value.trim());
            localStorage.setItem("tasks", JSON.stringify(newTask));
        };
        
        console.log(newTask)
    });
};

//take things out of local storage and populate on page load?
//refresh --> tasks are still there
$(window).on('load', function(){
    
    var newTaskReload = JSON.parse(localStorage.getItem("tasks")) || [];

    console.log("On Load New Task:", newTaskReload);

    for(var i=0; i<newTaskReload.length; i++){
        taskInputEl[i].value = newTaskReload[i];
    }

});

//add a clear button to clear out tasks?

