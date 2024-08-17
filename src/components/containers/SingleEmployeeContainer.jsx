import React, { useEffect, useState } from 'react';
import axios from 'axios';
import SingleEmployeeView from '../views/SingleEmployeeView.jsx';
import { useParams } from 'react-router-dom';

const SingleEmployeeContainer = () => {
  const { employeeId } = useParams();
  const [employee, setEmployee] = useState(null);
  const [tasks, setTasks] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchEmployeeData = async () => {
      try {
        const employeeResponse = await axios.get(`http://localhost:3000/api/employees/${employeeId}`);
        setEmployee(employeeResponse.data);
        setTasks(employeeResponse.data.Tasks || []);
      } catch (error) {
        console.error('Error fetching employee data:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchEmployeeData();
  }, [employeeId]);

  const handleSaveChanges = async (updatedEmployee) => {
    //have to reload the page to see change
    try {
      await axios.put(`http://localhost:3000/api/employees/${employeeId}`, updatedEmployee);
    } catch (error) {
      console.error('Error updating employee:', error);
    }
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  return <SingleEmployeeView employee={employee} tasks={tasks} onSaveChanges={handleSaveChanges} />;
};

export default SingleEmployeeContainer;
