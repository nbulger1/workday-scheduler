//moment for current day at the top using class = currentDay
var currentDay = moment();
$("#currentDay").text(currentDay.format("MMM Do, YYYY"));

//Create time blocks
var timedTasks = [
    {time: "09:00 am", task: ""},
    {time: "10:00 am", task: ""},
    {time: "11:00 am", task: ""},
    {time: "12:00 pm", task: ""},
    {time: "01:00 pm", task: ""},
    {time: "02:00 pm", task: ""},
    {time: "03:00 pm", task: ""},
    {time: "04:00 pm", task: ""},
    {time: "05:00 pm", task: ""}

];
//Populating times on browser
var timeEl = document.querySelectorAll(".time");
for(i=0; i<timeEl.length; i++){
    timeEl[i].textContent = timedTasks[i].time;
};

//Change the color of each timeblock based on calculated past present and future using moment
//Me trying lots of different things :)
var timeNow = moment().format("hh:mm a");
console.log(timeNow);

//get the actual hour of the time - if the block hour is less than current hour then add/remove this class - moment.hours - look into this for comparison :) splice up times to direct compare parse int stuff

//Starting thinking I needed to make each time into it's own variable?
for(i=0; i<timedTasks.length; i++){
    var timeToCheck = timedTasks[i].time;
}

//only gave me 05:00 pm which makes sense
console.log(timeToCheck)

//selecting all my input fields because I want to change their background color
var taskInputEl = document.querySelectorAll(".task_input");

//original for loop that was my plan for coloring each input section
for(i=0; i<taskInputEl.length; i++){
    if(moment().isAfter(timedTasks[i].time, "hh:mm a")){
        taskInputEl[i].style.backgroundColor="#d3d3d3";
    } else if(moment().isBefore(timedTasks[i].time, "hh:mm a")){
        taskInputEl[i].style.backgroundColor="#77dd77";
    }
}

//Now trying to change
jumbotronEl = document.querySelector('.jumbotron')

var yesOrNo = moment().isAfter('05:00 pm')
console.log(yesOrNo)

console.log(timeEl)
console.log(timedTasks[0].time)
//Where I stopped trying things




//save button --> local storage

var saveBtnEl = document.querySelectorAll(".saveBtn");

var newTask = [];

//pull from tasks first 

for (var i = 0; i < saveBtnEl.length; i++) {
    saveBtnEl[i].addEventListener("click", function(event){
        event.preventDefault();
        //have to clear out new task!!!! :)
        newTask = [];
        for(j=0; j<taskInputEl.length; j++) {
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

    for(i=0; i<newTaskReload.length; i++){
        taskInputEl[i].value = newTaskReload[i];
    }

});

//add a clear button to clear out tasks

