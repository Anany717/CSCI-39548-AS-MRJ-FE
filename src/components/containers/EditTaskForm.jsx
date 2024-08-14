import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { editTask } from '../../store/tasksSlice.js';

const EditTaskForm = ({ task }) => {
  const dispatch = useDispatch();
  const [content, setContent] = useState(task.content);
  const [priority, setPriority] = useState(task.priority);
  const [completed, setCompleted] = useState(task.completed);
  const [errors, setErrors] = useState({});

  useEffect(() => {
    setContent(task.content);
    setPriority(task.priority);
    setCompleted(task.completed);
  }, [task]);

  const validate = () => {
    const errors = {};
    if (!content) errors.content = "Task content is required";
    return errors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
    } else {
      dispatch(editTask({ id: task.id, content, priority, completed }));
      setErrors({});
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Task Content:</label>
        <input
          type="text"
          value={content}
          onChange={(e) => setContent(e.target.value)}
        />
        {errors.content && <p style={{color: 'red'}}>{errors.content}</p>}
      </div>
      <div>
        <label>Priority:</label>
        <input
          type="number"
          value={priority}
          onChange={(e) => setPriority(e.target.value)}
        />
      </div>
      <div>
        <label>Completed:</label>
        <input
          type="checkbox"
          checked={completed}
          onChange={(e) => setCompleted(e.target.checked)}
        />
      </div>
      <button type="submit">Save Changes</button>
    </form>
  );
};

export default EditTaskForm;
