// const { useSelector } = require("react-redux");
import { useSelector } from 'react-redux';
import { statusFilter } from 'redux/constants';
import { getTasks, getStatusFilter } from 'redux/selectors';
import { Task } from 'components/Task/Task';
import css from './TaskList.module.css';

const getVisibleTasks = (tasks, statusF) => {
  switch (statusF) {
    case statusFilter.active:
      return tasks.filter(task => !task.completed);
    case statusFilter.completed:
      return tasks.filter(task => task.completed);
    default:
      return tasks;
  }
};
// component
export const TaskList = () => {
  // Отримуємо масив завдань із стану Redux
  const tasks = useSelector(getTasks);
  // Отримуємо значення фільтра із стану Redux
  const statusF = useSelector(getStatusFilter);
  const visibleTasks = getVisibleTasks(tasks, statusF);
  console.log(visibleTasks);

  return (
    <ul className={css.list}>
      {visibleTasks.map(task => (
        <li className={css.listItem} key={task.id}>
          <Task task={task} />
        </li>
      ))}
    </ul>
  );
};
