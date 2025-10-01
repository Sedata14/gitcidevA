
// Simple in-memory task list
let tasks = [];
let nextId = 1;


function getTasks() {
  return tasks;
}

function toggleTask(task) {
    if(task) task.done = !task.done;
}

function countDone(tasks) {
    return tasks.filter(t => t.done).length;
}

function reset() {
  tasks = [];
  nextId = 1;
}

module.exports = { getTasks, reset };

module.exports = { tasks, addTask, toggleTask, countDone };
