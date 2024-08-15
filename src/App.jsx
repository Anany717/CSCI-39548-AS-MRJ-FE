import './App.css';
import {Switch, Route, Link } from "react-router-dom";
import AllEmployeesContainer from './components/containers/AllEmployeesContainer';
import AllTasksContainer from './components/containers/AllTasksContainer';

function App() {
  return (
    <>
      <h1>WELCOME</h1>
      <Link to={`employees`}><button>All Employees</button></Link>
      <Link to={`tasks`}><button>All Tasks</button></Link>
      <Switch>
        <Route exact path="/" component={HomePageContainer} />
        <Route exact path="/instructors" component={AllInstructorsContainer} />
        <Route exact path="/instructor/:id" component={InstructorContainer} />
        <Route exact path="/courses" component={AllCoursesContainer} />
        <Route exact path="/newcourse" component={NewCourseContainer} />
        <Route exact path="/course/:id" component={CourseContainer} />
        <Route exact path="/editcourse/:id" component={EditCourseContainer} />
      </Switch>        
    </>
  );
}

export default App;
