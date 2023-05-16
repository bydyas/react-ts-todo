import { TaskItem } from '../TaskItem/TaskItem';
import { TaskItemProps } from '../../types';
import './TaskList.scss';

const mockTasks: TaskItemProps[] = [
  { title: 'Clean my room', isCompleted: false },
  { title: 'Repair the bike', isCompleted: true },
];

export function TaskList() {
  return (
    <ul className='taskList'>
      {mockTasks.map(({ title, isCompleted }: TaskItemProps) => (
        <TaskItem title={title} isCompleted={isCompleted} />
      ))}
    </ul>
  );
}
