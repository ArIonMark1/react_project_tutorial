// файл оголошення екшенів програм
// екшени які описуватимуть додавання, видалення та перемикання статусу завдання, а також зміну значення фільтра.
import { nanoid } from 'nanoid';

export const addTask = text => {
  return {
    type: 'tasks/addTask',
    payload: {
      id: nanoid(),
      completed: false,
      text,
    },
  };
};
export const deleteTask = taskId => {
  return { type: 'tasks/deleteTask', payload: taskId };
};

export const toggleCompleted = taskId => {
  return {
    type: 'tasks/toggleCompleted',
    payload: taskId,
  };
};

export const setStatusFilter = value => {
  return {
    type: 'tasks/setStatusFilter',
    payload: value,
  };
};
