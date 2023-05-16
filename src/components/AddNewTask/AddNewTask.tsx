import React from 'react';
import './AddNewTask.scss';

type Task = {
  title: string;
  createdAt: number;
};

const initTask = {
  title: '',
  createdAt: 0,
};

export function AddNewTask(): JSX.Element {
  const [task, setTask] = React.useState<Task>(initTask);

  const onFormSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    const createdTask = { ...task, createdAt: Date.now() };
    console.log(createdTask);
    setTask(initTask);
  };

  const onTaskInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTask({
      ...task,
      title: event.target.value,
    });
  };

  return (
    <form onSubmit={onFormSubmit} className='form' action='#'>
      <input
        onChange={onTaskInput}
        className='form__input input'
        placeholder='Cook spaghetti'
        type='text'
        name='task'
        value={task.title}
      />
      <button className='form__btn'>
        <span>+ Add</span>
      </button>
    </form>
  );
}
