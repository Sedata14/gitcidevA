
// Simple in-memory task list
let tasks = [];
let nextId = 1;


function getTasks() {
  return tasks;
}

function toggleTask(task) {
    if(task) task.done = !task.done;
    console.log("conflit branch");
}

function reset() {
  tasks = [];
  nextId = 1;
}

module.exports = { getTasks, reset, toggleTask };
