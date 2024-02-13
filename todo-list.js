function addTask() {
    var taskInput = document.getElementById("taskInput").value;
    var taskList = document.getElementById("taskList");
    var listItem = document.createElement("li");
    listItem.appendChild(document.createTextNode(taskInput));
    taskList.appendChild(listItem);
  }
  