// файл оголошення функцій-редюсерів для оновлення стану
// import appState from './features/systemApi/reduxApi';
import { statusFilter } from './constants';
import { combineReducers } from 'redux';

const initialStateTasks = [
  { id: 0, text: 'Learn HTML and CSS', completed: true },
  { id: 1, text: 'Get good at JavaScript', completed: true },
  { id: 2, text: 'Master React', completed: false },
  { id: 3, text: 'Discover Redux', completed: false },
  { id: 4, text: 'Build amazing apps', completed: false },
];

const tasksReducer = (state = initialStateTasks, action) => {
  switch (action.type) {
    case 'tasks/addTask':
      return [...state, action.payload];
    case 'tass/deleteTask':
      return [state.filter(task => task.id !== action.payload)];
    case 'tasks/toggleCompleted':
      return [
        state.map(task => {
          if (task.id !== action.payload) {
            return task;
          }
          return {
            ...task,
            completed: !task.completed,
          };
        }),
      ];
    default:
      return state;
  }
};
const filtersInitialState = {
  status: statusFilter.all,
};
const filterReducer = (state = filtersInitialState, action) => {
  switch (action.type) {
    case 'filters/setStatusFilter':
      return {
        ...state,
        status: action.payload,
      };
    default:
      return state;
  }
};

export const rootReducer = combineReducers({
  tasks: tasksReducer,
  filters: filterReducer,
});
