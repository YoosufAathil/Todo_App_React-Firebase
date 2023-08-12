import './App.css';
import AddNewToDo from './components/AddNewToDo';
import Calendar from './components/Calendar';
import EditTodos from './components/EditTodos';
import Sidebar from './components/Sidebar';
import Main from './components/Main';
import Projects from './components/Projects';
import Todos from './components/Todos';
import User from './components/User';

function App() {
  return (
    <div className='App' >
      <Sidebar>
        <User/>
        <AddNewToDo/>
        <Calendar/>
        <Projects/>
      </Sidebar>

      <Main>
      <Todos/>
      <EditTodos/>

      </Main>
    </div>
  );
}

export default App;
