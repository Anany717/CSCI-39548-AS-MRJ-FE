import './App.css';
import { Link, Routes, Route } from "react-router-dom";
import AllEmployeesView from './components/views/AllEmployeesView';
import AllTasksView from './components/views/AllTasksView';
import SingleEmployeeView from './components/views/SingleEmployeeView';
import SingleTaskView from './components/views/SingleTaskView';
import NewTaskView from './components/views/NewTaskView';
import EmployeeCountView from './components/views/EmployeeCountView';
import TaskCountView from './components/views/TaskCountView';
import EmployeesByDepartmentView from './components/views/EmployeesByDepartmentView';
import TasksByPriorityView from './components/views/TasksByPriorityView';
import IncompleteTasksView from './components/views/IncompleteTasksView';

function App() {
    return (
        <>
            <h1>WELCOME</h1>
            <Link to={`employees`}><button>All Employees</button></Link>
            <Link to={`tasks`}><button>All Tasks</button></Link>
            <Link to={`new-task`}><button>New Task</button></Link>
            <Link to={`employee-count`}><button>Employee Count</button></Link>
            <Link to={`task-count`}><button>Task Count</button></Link>
            <Link to={`employees-by-department`}><button>Employees by Department</button></Link>
            <Link to={`tasks-by-priority`}><button>Tasks by Priority</button></Link>
            <Link to={`incomplete-tasks`}><button>Incomplete Tasks</button></Link>

            <Routes>
                <Route path="/employees" element={<AllEmployeesView />} />
                <Route path="/tasks" element={<AllTasksView />} />
                <Route path="/employees/:id" element={<SingleEmployeeView />} />
                <Route path="/tasks/:id" element={<SingleTaskView />} />
                <Route path="/new-task" element={<NewTaskView />} />
                <Route path="/employee-count" element={<EmployeeCountView />} />
                <Route path="/task-count" element={<TaskCountView />} />
                <Route path="/employees-by-department" element={<EmployeesByDepartmentView />} />
                <Route path="/tasks-by-priority" element={<TasksByPriorityView />} />
                <Route path="/incomplete-tasks" element={<IncompleteTasksView />} />
            </Routes>
        </>
    );
}

export default App;
