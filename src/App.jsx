import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import AllEmployeesContainer from './components/containers/AllEmployeesContainer';
import AllTasksContainer from './components/containers/AllTasksContainer';
import SingleEmployeeContainer from './components/containers/SingleEmployeeContainer';
import SingleTaskContainer from './components/containers/SingleTaskContainer';
import NewEmployeeForm from './components/containers/NewEmployeeForm';
import NewTaskForm from './components/containers/NewTaskForm';
import EditEmployeeForm from './components/containers/EditEmployeeForm';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/employees" component={AllEmployeesContainer} />
        <Route exact path="/tasks" component={AllTasksContainer} />
        <Route exact path="/employees/new" component={NewEmployeeForm} />
        <Route exact path="/tasks/new" component={NewTaskForm} />
        <Route exact path="/employees/:employeeId/edit" component={EditEmployeeForm} /> {/* Edit Employee Route */}
        <Route path="/employees/:employeeId" component={SingleEmployeeContainer} />
        <Route path="/tasks/:taskId" component={SingleTaskContainer} />
      </Switch>
    </Router>
  );
}

export default App;
