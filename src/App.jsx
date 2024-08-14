import './App.css';
import { Link } from "react-router-dom";
import SingleEmployeeContainer from './SingleEmployeeContainer';
import SingleTaskContainer from './SingleTaskContainer';

function App() {
  return (
    <>
      <h1>WELCOME</h1>
      <Link to={`employees`}><button>All Employees</button></Link>
      <Link to={`tasks`}><button>All Tasks</button></Link>
      <Route path="/employees/:employeeId" element={<SingleEmployeeContainer />} />
      <Route path="/tasks/:taskId" element={<SingleTaskContainer />} />
    </>
  );
}

export default App;
