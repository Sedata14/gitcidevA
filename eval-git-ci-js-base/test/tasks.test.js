const { getTasks, reset, addTask } = require('../lib/tasks');

beforeEach(() => {
  reset();
});

test('initial task list is empty', () => {
  expect(getTasks()).toEqual([]);
});

const task = { id: 1, name: "Test Task", done: false };




