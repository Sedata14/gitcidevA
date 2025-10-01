
// Simple in-memory task list
let tasks = [];
let nextId = 1;


function getTasks() {
  return tasks;
}

function addTask(name) {
    const task = {
        id: Date.now(),
        name: name.trim(),
        done: false
    };
    tasks.push(task);
}



function reset() {
  tasks = [];
  nextId = 1;
}

module.exports = { getTasks, reset, addTask  };

