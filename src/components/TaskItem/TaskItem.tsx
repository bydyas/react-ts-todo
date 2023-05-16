import './TaskItem.scss';
import { TaskItemProps } from '../../types';

export function TaskItem({ title, isCompleted = false }: TaskItemProps) {
  return (
    <li className='taskItem'>
      <div
        className='taskItem__statusStrip'
        style={{ backgroundColor: isCompleted ? '#9f3d2d' : 'limegreen' }}
      ></div>
      <div className='taskItem__content'>
        <label className='taskItem__lbl'>
          <span className='taskItem__title'>{title}</span>
          <input className='taskItem__check' type='checkbox' name='isComplete' />
        </label>
        <button className='taskItem__delete' type='button'>
          <span role='img' aria-label='trash can'>
            🗑️
          </span>
        </button>
      </div>
    </li>
  );
}
