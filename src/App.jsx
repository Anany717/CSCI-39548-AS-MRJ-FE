import './App.css';
import { Link } from "react-router-dom";
import AllEmployeesContainer from './components/containers/AllEmployeesContainer';
import AllTasksContainer from './components/containers/AllTasksContainer';

function App() {
  return (
    <>
      <h1>WELCOME</h1>
      <Link to={`employees`}><button>All Employees</button></Link>
      <Link to={`tasks`}><button>All Tasks</button></Link>
    </>
  );
}

export default App;
