import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import AllEmployeesContainer from './components/containers/AllEmployeesContainer';
import AllTasksContainer from './components/containers/AllTasksContainer';
import SingleEmployeeContainer from './components/containers/SingleEmployeeContainer';
import SingleTaskContainer from './components/containers/SingleTaskContainer';
import NewEmployeeForm from './components/containers/NewEmployeeForm';
import NewTaskContainer from './components/containers/NewTaskContainer';
import EditEmployeeForm from './components/containers/EditEmployeeForm';
import EditTaskForm from './components/containers/EditTaskForm';


function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/employees" component={AllEmployeesContainer} />
        <Route exact path="/tasks" component={AllTasksContainer} />
        <Route exact path="/employees/new" component={NewEmployeeForm} />
        <Route exact path="/tasks/new" component={NewTaskContainer} />
        <Route exact path="/employees/:employeeId/edit" component={EditEmployeeForm} /> 
        <Route exact path="/tasks/:taskId/edit" component={EditTaskForm} />
        <Route path="/employees/:employeeId" component={SingleEmployeeContainer} />
        <Route path="/tasks/:taskId" component={SingleTaskContainer} />
      </Switch>
    </Router>
  );
}

export default App;
