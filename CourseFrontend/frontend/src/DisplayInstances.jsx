import React, { useState } from 'react';
import './App.css';
import CourseTable from './CourseTable';

const DisplayInstances = () => {
  const [year, setYear] = useState('');
  const [semester, setSemester] = useState('');
  const [fetchData, setFetchData] = useState(false);
  

  const handleSubmit = (event) => {
    event.preventDefault();
    if (year && semester) {
      setFetchData(true);
    }
  };

  return (
    <div className="container my-4">
      <h2 className="mb-4">Course Instances</h2>
      <form className="d-flex justify-content-between mb-3" onSubmit={handleSubmit}>
        <input 
          type="text" 
          className="form-control w-25" 
          placeholder="Year" 
          value={year} 
          onChange={(e) => setYear(e.target.value)} 
        />
        <select 
          className="form-select w-25" 
          value={semester} 
          onChange={(e) => setSemester(e.target.value)}
        >
          <option value="">Select semester</option>
          <option value="1">Semester 1</option>
          <option value="2">Semester 2</option>
        </select>
        <button type="submit" className="btn btn-primary">List instances</button>
      </form>
      {fetchData && <CourseTable year={year} semester={semester} />}
    </div>
  );
}

export default DisplayInstances;

