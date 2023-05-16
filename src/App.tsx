import { AddNewTask } from './components/AddNewTask/AddNewTask';
import { Divider } from './components/Divider/Divider';
import { TaskList } from './components/TaskList/TaskList';

function App() {
  return (
    <div className='app'>
      <header>
        <h1 className='heading'>Todolist</h1>
        <AddNewTask />
      </header>
      <Divider />
      <main className='main'>
        <TaskList />
      </main>
    </div>
  );
}

export default App;
