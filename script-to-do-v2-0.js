
/*let taskListElement;
let taskid = 0;
var a;
let placeholdernumber = +taskid;
let
    arrowBox = document.querySelector('.task-list-container'),  // Get element
    scrollHeight = arrowBox.scrollHeight,  // Get scrollHeight
    maxHeight = 202,
    constantFactor = 1.1;  // To make sure after readjusting the width, content does not overflow again

if (scrollHeight > maxHeight) {
    // Increase width equivalent to the exceeded height in pixels
    let extraPx = (scrollHeight - maxHeight) * constantFactor;
    arrowBox.style.height = (arrowBox.offsetHeight + extraPx) + 'px';
}
var inputboxchecked = document.getElementsByClassName("task-checkbox");

function init(){
    taskListElement = document.querySelector("#task-list");
    let currentTaskListItems = taskListElement.children;

    for (let item of currentTaskListItems) {
        item.querySelector(".delete-btn").addEventListener("click", deleteTask);
        //parent property is created and used to delete the element
        //parent is not included into the Element or Node by default
        item.querySelector(".delete-btn").parent = item;
        item.querySelector(".delete-x").parent = item;
        item.querySelector(".task").parent = item;
        //toggle button added & parent property is added
        item.querySelector(".task-checkbox").addEventListener("click", toggleDone);
        item.querySelector(".task-checkbox").parent = item;

        //text of the task is added to memory
        let taskTextItem = item.querySelector(".task").innerText;
        let taskCheckboxState = item.querySelector(".task-checkbox").checked;
    }
}

function toggleDone(event) {
    let textItem = event.target.parent.querySelector(".task");

    //using add & remove instead of toggle because if code loads slow (e.g. on CodePen)
    //the user may check the input BEFORE code loads, making an inverted state
    //i.e. task-done applied when the input is unchecked
    if (event.target.checked) {
        textItem.classList.add("checked");
    } else {
        textItem.classList.remove("checked");
    }
}

/*function togglefunction() {
    var inputboxchecked = document.getElementsByClassName("task-checkbox");
    var lichange = document.getElementsByTagName("li");
   for (i = 0; i < inputboxchecked.length; i++) {
       lichange.classList.toggle('checked');
        }
}*/

/*function togglefunction() {
    var inputboxchecked = document.getElementsByClassName("task-checkbox");
    let litask = document.querySelector(".task-list");
    for (i = 0; i < inputboxchecked.length; i++) {
        inputboxchecked[i].addEventListener('click', function(e) {
            e.currentTarget.parentNode.parentNode.classList.toggle('checked');
        })
    }
}*/

/*function togglefunction() {
    var list = document.querySelector('ul');
    inputboxchecked.classList.toggle('checked');
}*/


//var inputboxchecked = document.getElementsByClassName("task-checkbox");
//inputboxchecked.addEventListener('click', togglefunction)

/*function togglefunction() {
    var check = document.getElementsByClassName('task-checkbox');
    var parentli = document.querySelector('.task-list');
    check.parent = parentli;
    check.addEventListener( 'click', function( event ){
        if( check.checked === true ){
            check.parentNode.parentNode.classList.add('checked');
        }
        else{
            check.parentNode.parentNode.classList.remove('checked');
        }
    } );
}*/

/*function togglefunction() {
    var check = document.getElementsByClassName('task-checkbox');
    for (i = 0; i < check.length; i++) {
        check[i].addEventListener('click', function (e) {
            e.currentTarget.parentNode.parentNode.classList.toggle('checked');
        }, false);
    }
}*/

/*function togglefunction() {
    for (i = 0; i < inputboxchecked.length; i++) {
        inputboxchecked[i].addEventListener('click', function (e) {
            e.currentTarget.parentNode.parentNode.classList.toggle('checked');
        }, false);
    }
}

function newElement() {
    let li = document.createElement("li");
    let inputValue = document.getElementById("input-task").value;
    let t = document.createTextNode(inputValue);
    let spantext = document.createElement("span");
    let deletebutton = document.createElement('button');
    let deletebuttondiv = document.createElement('div');
    let labeltoggle = document.createElement('label');
    let labelinput = document.createElement('input');
    let labelspan = document.createElement('span');
    if (inputValue === '') {
        alert("You must write something!");
    } else {
        taskid ++;

        document.getElementById("task-list").appendChild(li); //Adding <li> to <ul>
        li.className = "task-list";
        //li.setAttribute("id",taskid)
        li.appendChild(spantext)
        //document.getElementById('1').appendChild(spantext);
        spantext.className = "task";
        spantext.appendChild(t);
        labeltoggle.className = "toggle";
        labeltoggle.appendChild(labelinput);
        labelinput.type = "checkbox";
        labelinput.className = 'task-checkbox';
        labeltoggle.appendChild(labelspan);
        labelspan.className = 'button-checkbox';
        li.appendChild(deletebutton);
        deletebutton.className = "delete-btn";
        deletebutton.appendChild(deletebuttondiv);
        deletebuttondiv.className = "delete-x";
        li.appendChild(labeltoggle);


    }
    document.getElementById("input-task").value = "";

    var close = document.getElementsByClassName("delete-btn");
    for (i = 0; i < close.length; i++) {
        close[i].addEventListener('click', function(e) {
            e.currentTarget.parentNode.remove();
            taskid --;
            //this.closest('.single').remove() // in modern browsers in complex dom structure
            //this.parentNode.remove(); //this refers to the current target element
            //e.target.parentNode.parentNode.removeChild(e.target.parentNode);
        }, false);
    }

    var inputboxchecked = document.getElementsByClassName("task-checkbox");
    for (i = 0; i < inputboxchecked.length; i++) {
        inputboxchecked[i].addEventListener('click', function (e) {
            e.currentTarget.parentNode.parentNode.classList.toggle('checked');
        }, false);
    }

}
function deleteTask() {
    var close = document.getElementsByClassName("delete-btn");
    for (i = 0; i < close.length; i++) {
        close[i].addEventListener('click', function (e) {
            e.currentTarget.parentNode.remove();
            taskid--;
            //this.closest('.single').remove() // in modern browsers in complex dom structure
            //this.parentNode.remove(); //this refers to the current target element
            //e.target.parentNode.parentNode.removeChild(e.target.parentNode);
        }, false);
    }
}
*/

let taskListElement;
let inputButton;
let inputField;
let clearTasksButton;
let taskid = 0;
let i;
let tasks;
let checkBoxState;
let taskListMemory;
let taskText;


// starts the script
init();

function init(){

    console.log("initializing buttons");
    taskListElement = document.querySelector("#task-list");

    console.log("Initialized taskListElement");


    console.log("Initialized currentTaskListItems");

    // declaring variables for input field, input button and clear tasks button
    inputButton = document.getElementById("add-task-button");
    inputField = document.getElementById("input-task");


    clearTasksButton = document.getElementById("clear-button");

    // pressing Enter -> creates task
    inputField.addEventListener('keydown',  (e) => {
        if (e.key === "Enter") {
            addTask(document.getElementById("input-task").value);
        }
    });


    let currentTaskListItems = taskListElement.children;
    for (let item of currentTaskListItems) {
        item.querySelector(".delete-btn").addEventListener("click", deleteTask);
        item.querySelector(".task-checkbox").addEventListener("click", toggleDone);
        item.querySelector(".delete-btn").parent = item;
        item.querySelector(".task").parent = item;
        item.querySelector(".toggle").parent = item;

        //adding listener to add button
        inputButton.addEventListener("click", addTask);
        clearTasksButton.addEventListener('click', clearTaskList);

       /* adding variables for task text and checkbox conditions
        let taskTextItem = item.querySelector(".task").innerText;
        let taskCheckboxState = item.querySelector(".task-checkbox").checked;*/

    }

    console.log("Task list initialized.")
    taskListElement = document.querySelector("#task-list");

}

function deleteTask(event){
    console.log(event.type);
    console.log("Delete button pressed");

    event.target.parent.remove();
    taskListElement = document.querySelector("#task-list");
}

function taskCompositing() {

        console.log("Task compositing initiated");
        //making container for task item elements
        let li = document.createElement("li");
        li.setAttribute("class", "task-list");
        li.setAttribute("id", taskid);

        console.log(li.className + " created");

        //making checkbox
        let labeltoggle = document.createElement('label');
        labeltoggle.setAttribute("class", "toggle");

        let labelinput = document.createElement('input');
        labelinput.setAttribute("type", "checkbox");
        labelinput.setAttribute("class", "task-checkbox");
        checkBoxState = labelinput.checked;

        console.log(checkBoxState);

        let labelspan = document.createElement('span');
        labelspan.setAttribute("class", "button-checkbox");

        //adding toggle style change listener
        labelinput.addEventListener("click", toggleDone);

        //adding parent property to reach parent element and text
        labelinput.parent = labeltoggle;
        labelspan.parent = labeltoggle;

        console.log(labelinput.className + " created");

        //making task text (span)
        let taskItemElement = document.createElement("span");
        taskItemElement.setAttribute("class", "task");
        taskItemElement.innerText = taskText;

        console.log(taskItemElement.className + " created");

        //making delete button
        let deletebutton = document.createElement('button');
        deletebutton.setAttribute("class", "delete-btn");

        let deletebuttondiv = document.createElement('div');
        deletebuttondiv.setAttribute("class", "delete-x");

        //parent property is created and used to delete the element
        //parent is not included into the Element or Node by default
        deletebutton.parent = li;
        deletebuttondiv.parent = li;

        //adding listener to the delete button
        deletebutton.addEventListener("click", deleteTask);

        console.log(deletebutton.className + " created");

        //add all elements of the task list item to the task item container
        li.appendChild(taskItemElement);
        li.appendChild(deletebutton);
        deletebutton.appendChild(deletebuttondiv);

        li.appendChild(labeltoggle);
        labeltoggle.appendChild(labelinput);
        labeltoggle.appendChild(labelspan);

        //adding li to the task list
        taskListElement.appendChild(li);

        console.log("Added task " + "\"" + taskText + "\"");

}

function addTask(){

    if (inputField.value === '') {
        alert("You must write something!");

    } else {
        taskid ++;
        taskText = document.getElementById("input-task").value;
        console.log("Input: " + taskText);
        document.getElementById("input-task").value = "";
        taskCompositing();
    }


}

function toggleDone(event){

    let textItem = event.target.parentNode.parentNode.querySelector(".task");

    if (event.target.checked) {
        textItem.classList.add("checked");
        console.log("Checked added");
    } else {
        textItem.classList.remove("checked");
        console.log("Checked removed");
    }

}

function addToMemory() {

}

function updateTask() {

}

function loadFromMemory() {

}

function deleteFromMemory() {

}

function clearTaskList() {
    console.log("Found children: " + taskListElement.children.length);

    //to remove from "live" array, we need to iterate backwards - otherwise the iteration won't be complete
    for (let i = taskListElement.children.length - 1; i >= 0; i--) {
        if (taskListElement.children[i].classList.contains("task-list")) {
            taskListElement.children[i].remove();
        }
    }
}

    /*
    console.log("AddTask button pressed");
    console.log(event.type);
    let li = document.createElement("li");
    let inputValue = document.getElementById("input-task").value;
    let t = document.createTextNode(inputValue);
    let spantext = document.createElement("span");
    let deletebutton = document.createElement('button');
    let deletebuttondiv = document.createElement('div');
    let labeltoggle = document.createElement('label');
    let labelinput = document.createElement('input');
    let labelspan = document.createElement('span');


    if (inputValue === '') {
        alert("You must write something!");
    } else {
        taskid ++;
        //createTask();
        document.getElementById("task-list").appendChild(li); //Adding <li> to <ul>
        li.className = "task-list";
        li.setAttribute("id",taskid)
        li.appendChild(spantext);
        spantext.className = "task";
        spantext.appendChild(t);
        labeltoggle.className = "toggle";
        labeltoggle.appendChild(labelinput);
        labelinput.type = "checkbox";
        labelinput.className = 'task-checkbox';
        labelinput.addEventListener("click", toggleDone);
        labeltoggle.appendChild(labelspan);
        labelspan.className = 'button-checkbox';
        li.appendChild(deletebutton);
        deletebutton.className = "delete-btn";
        deletebutton.addEventListener("click", deleteTask);
        labelinput.addEventListener("click", toggleDone)
        deletebutton.appendChild(deletebuttondiv);
        deletebuttondiv.className = "delete-x";
        li.appendChild(labeltoggle);


        //toLocal();


    }
    console.log("Task added");
    inputField.value = "";

     */

/*function createTask(){

}*/



