import { useDispatch } from 'react-redux';
import { addTask } from 'redux/actions';

import { Button } from 'components/Button/Button';
import css from './TaskForm.module.css';

export const TaskForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = evt => {
    evt.preventDefault();
    const form = evt.target;
    // Викликаємо генератор екшену та передаємо текст завдання для поля payload
    // Відправляємо результат – екшен створення завдання
    dispatch(addTask(form.elements.text.value));
    form.reset();
  };

  return (
    <form className={css.form} onSubmit={handleSubmit}>
      <input
        className={css.field}
        type="text"
        name="text"
        placeholder="Enter task text..."
      />
      <Button type="submit">Add task</Button>
    </form>
  );
};
