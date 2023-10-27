import { useSelector, useDispatch } from 'react-redux';
import { statusFilter } from 'redux/constants';
import { Button } from 'components/Button/Button';
import { getStatusFilter } from 'redux/selectors';
import { setStatusFilter } from 'redux/actions';
// import css from './StatusFilter.module.css';

export const StatusFilter = () => {
  const dispatch = useDispatch();
  const filter = useSelector(getStatusFilter);
  const handleFilterChange = filter => dispatch(setStatusFilter(filter));

  return (
    <div>
      <Button
        selected={filter === statusFilter.all}
        onClick={() => handleFilterChange(statusFilter.all)}
      >
        All
      </Button>
      <Button
        selected={filter === statusFilter.active}
        onClick={() => handleFilterChange(statusFilter.active)}
      >
        Active
      </Button>
      <Button
        selected={filter === statusFilter.completed}
        onClick={() => handleFilterChange(statusFilter.completed)}
      >
        Completed
      </Button>
    </div>
  );
};
