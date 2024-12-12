
const taskInput = document.getElementById("taskInput");
const addTaskBtn = document.getElementById("addTaskBtn");
const taskList = document.getElementById("taskList");

// Add event listener to the button
addTaskBtn.addEventListener("click", addTask);
function addTask() {
    const taskValue = taskInput.value; // Get the input value
    if (taskValue.trim() === "") {
      alert("Please enter a valid task!");
      return; // Exit the function if input is empty
    }
  
    const li = document.createElement("li"); // Create a new list item
    li.textContent = taskValue; // Set its text to the input value
  
    // Add a delete button for each task
    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Delete";
    deleteBtn.addEventListener("click", () => li.remove());
  
    li.appendChild(deleteBtn); // Add the delete button to the list item
    taskList.appendChild(li); // Add the list item to the task list
  
   taskInput.value = ""; // Clear the input field
  }
  