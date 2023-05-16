import { AddNewTask } from './components/AddNewTask/AddNewTask';
import { Divider } from './components/Divider/Divider';

function App() {
  return (
    <div className='app'>
      <header>
        <h1 className='heading'>Todolist</h1>
        <AddNewTask />
      </header>
      <Divider />
    </div>
  );
}

export default App;
