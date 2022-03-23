//moment for current day at the top using class = currentDay
var currentDay = moment();
$("#currentDay").text(currentDay.format("MMM Do, YYYY"));

//Create time blocks
var timedTasks = [
    {time: "09:00 AM", task: ""},
    {time: "10:00 AM", task: ""},
    {time: "11:00 AM", task: ""},
    {time: "12:00 PM", task: ""},
    {time: "01:00 PM", task: ""},
    {time: "02:00 PM", task: ""},
    {time: "03:00 PM", task: ""},
    {time: "04:00 PM", task: ""},
    {time: "05:00 PM", task: ""}

];

var timeNow = moment().format("HH:MM a");
var timeEl = document.querySelectorAll(".time");
for(i=0; i<timeEl.length; i++){
    timeEl[i].textContent = timedTasks[i].time;
};

var taskInputEl = document.querySelectorAll(".task_input");

for(i=0; i<taskInputEl.length; i++){
    if(moment().isAfter("timedTasks[i].time", "HH:MM A")){
        taskInputEl[i].setAttribute("background-color", "#d3d3d3")
    } else if(moment().isBefore(timedTasks[i].time)){
        taskInputEl[i].setAttribute("background-color", "#77dd77");
    }
}


console.log(timeEl)
console.log(timedTasks[0].time)

//Change the color of each timeblock based on calculated past present and future using moment

//Click on time block to enter an event

//save button --> local storage

var saveBtnEl = document.querySelectorAll(".saveBtn");
var newTask = [];

for (var i = 0; i < saveBtnEl.length; i++) {
    saveBtnEl[i].addEventListener("click", function(event){
        event.preventDefault();
        
        for(j=0; j<taskInputEl.length; j++) {
            if(taskInputEl[j].value != ""){
                newTask.splice(j, 0, taskInputEl[j].value.trim());
                localStorage.setItem("tasks", JSON.stringify(newTask));
            };
        };
        
        console.log(newTask)
    });
};

//take things out of local storage and populate on page load?

// $(window).on('load', function(){
    
//     var newTaskReload = JSON.parse(localStorage.getItem("tasks")) || [];

//     console.log("On Load New Task:", newTaskReload);

//     for(i=0; i<newTaskReload.length; i++){
//         taskInputEl[i].value = newTaskReload[i];
//     }

// });

//refresh --> tasks are still there