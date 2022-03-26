# Workday Scheduler - Week 5 Homework

## Description

The task was to create a calendar application that could save events for each hour block within a given workday. I was supplied starter code to modify. The application was to run in the browser and feature updated HTML and CSS while being powered by jQuery. 

## Table of Contents
- [Application](#Application)
- [HTML](#html)
- [Time Blocks](#timeblocks)
- [Moment Comparisons](#moment)
- [Save Button](#save)
- [Page Reload](#reload)
- [Tests](#tests)
- [Link](#link)

## Application

The user story stated that the user has a busy workday and would like to be able to add important events to a daily planner to assist time management.

The acceptance criteria included being able to open the planner and the current date is displayed at the top. When scrolling down the user should see timeblocks for standard business hours. Each timeblock should be color coded to indicate whether the time is past, present, or future. Finally, the user should be able to save an event and have it stay in that timeblock even after page reload.

## HTML

To start, I went into the HTML file and added in a three column layout for the time blocks. I used a division for the time blocks in which I could add text through javascript. Then I created an input field for the tasks that the user wants to save and formatted those to fill up the majority of the page using bootstrap. Finally, I added the save button to the end of the input field. The saveBtn class already had formatting in the CSS starter code and I added a save icon. 

## Timeblocks

To populate the times in the timeblock divisions, I created an array in the javascript file and then looped through the array to populate the text content. 

## Moment

I used the moment.js library to populate the current date at the top of the page. Furthermore, I created an hourNow variable that held just the current hour to compare to the hour in each of the time blocks. 

I looped through my time block array to substring each time into an hour variable that I also parsed as an integer to be comparable to the hourNow variable. Once created, I made if/then statements to add the past, present, or future classes already created in the CSS file to each of the input fields to change the background color. 

## Save

In order to save each of the input fields I created a "tasks" field in local storage that I store items in as a stringifyed array. I looped through the input fields and saved the tasks into the array. I used the splice method to pull out previous tasks and replace them with the current ones. 

## Reload

On page reload I pulled from the local storage "tasks" field and repopulated the tasks into their corresponding input field. I also created a "clear all tasks" button at the top of the page so the user could clear out their previous tasks by clearing local storage and reloading the page. 

## Tests

To test the application I went through each of the acceptance criteria to make sure I met the user's goals for the application. 
- Current date displayed at the top
- Timeblocks present upon scrolling down
- Timeblocks are color coded based on past, present, and future
- Tasks save with the save button
- Tasks presist through page load

![GIF demonstrating testing the workday schedular for a variety of conditions as well as assessing all button functionality](https://github.com/nbulger1/workday-scheduler/blob/main/assets/images/Workday%20Schedule.gif)

## Link

See the following for the link to my deployed application: 






