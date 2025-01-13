const taskInput = document.getElementById("task-input");
const addTaskBtn = document.getElementById("add-task-btn");
const taskList = document.getElementById("task-list");

//add new task to list
function addTask(){
    const taskText = taskInput.value.trim();
    
    //checks if input is empty and ends functions
    if (taskText === ''){
        alert('Please enter a task');
        return;
    }
    
    //create task item
    const taskItem = document.createElement('li');
    taskItem.textContent = taskText;
    
    //add delete button
    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = 'Delete';
    deleteBtn.addEventListener('click', () => taskList.removeChild(taskItem))
    
    //adds delete button to taskItem
    taskItem.appendChild(deleteBtn);
    
    //add task item to list
    taskList.appendChild(taskItem);
    
    //clear input
    taskInput.value = '';
}

//event listener for "add task" button
addTaskBtn.addEventListener('click', addTask);
taskInput.addEventListener('keypress', (event) => {
    if (event.key === 'Enter'){
        addTask();
    }
})