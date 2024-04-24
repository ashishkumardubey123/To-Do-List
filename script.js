document.querySelector("#push").onclick = function () {
  if (document.querySelector("#newtask input").value.length == 0) {
    alert("please enter a task");
  } else {
    document.querySelector("#tasks").innerHTML += ` <div class="task"> 
        <span id= "taskname"> ${document.querySelector("#newtask input").value}
        </span>
        <button  class= "delete"> <i class="fa-solid fa-trash-can"></i> </button
        </div>
        `;
  }
  var current_tasks = document.querySelectorAll(".delete");

  for (let i = 0; i < current_tasks.length; i++) {
    current_tasks[i].onclick = function () {
      this.parentNode.remove();
    };
  }

  var tasks = document.querySelectorAll("#taskname");
  for (let i = 0; i < tasks.length; i++) {
    tasks[i].onclick = function () {
      this.classList.toggle("completed");
      let taskNumber = i + 1;
      if (this.classList == "completed") {
        alert("Task " + taskNumber + " completed!");
      }
    };
  }
  document.querySelector("#newtask input").value = "";
};

// ? this code is run when  enter key is press

// Event listener for keydown event
window.addEventListener("keydown", function (e) {
  if (e.key === "Enter") {
    // Check if Enter key is pressed

    if (document.querySelector("#newtask input").value.length == 0) {
      alert("please enter a task");
    } else {
      document.querySelector("#tasks").innerHTML += ` <div class="task"> 
           <span id= "taskname"> ${
             document.querySelector("#newtask input").value
           }
           </span>
           <button  class= "delete"> <i class="fa-solid fa-trash-can"></i> </button
           </div>
           `;
    }
    var current_tasks = document.querySelectorAll(".delete");

    for (let i = 0; i < current_tasks.length; i++) {
      current_tasks[i].onclick = function () {
        this.parentNode.remove();
      };
    }

    var tasks = document.querySelectorAll("#taskname");
    for (let i = 0; i < tasks.length; i++) {
      tasks[i].onclick = function () {
        this.classList.toggle("completed");
        let taskNumber = i + 1;
        if (this.classList == "completed") {
          alert("Task " + taskNumber + " completed!");
        }
      };
    }
    document.querySelector("#newtask input").value = "";
  }
  console.log("button press")
});
