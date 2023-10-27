import { combineReducers } from 'redux';
import { statusFilter } from 'redux/constants';

const initialStateTasks = [
  { id: 0, text: 'Learn HTML and CSS', completed: true },
  { id: 1, text: 'Get good at JavaScript', completed: true },
  { id: 2, text: 'Master React', completed: false },
  { id: 3, text: 'Discover Redux', completed: false },
  { id: 4, text: 'Build amazing apps', completed: false },
];

const tasksInitialState = {
  tasks: initialStateTasks,
  filters: {
    status: statusFilter.all,
  },
};
// export default appState;

/*
acions:
    Додати нове завдання з текстом, введеним користувачем
    Видалити завдання
    Переключити статус завдання
    Змінити значення фільтра статусу
*/
