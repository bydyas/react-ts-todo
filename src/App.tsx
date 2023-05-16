import { AddNewTask } from './components/AddNewTask/AddNewTask';

function App() {
  return (
    <div className='app'>
      <header>
        <h1 className='heading'>Todolist</h1>
        <AddNewTask />
      </header>
    </div>
  );
}

export default App;
