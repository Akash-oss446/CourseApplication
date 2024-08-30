import React, { useEffect, useState } from 'react';
import CourseInstance from './services/CourseInstance';  // Import the CourseInstance class

const CourseTable = ({ year, semester }) => {
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [message, setMessage] = useState(''); 

 
  useEffect(() => {
    if (year && semester) {
      CourseInstance.getAllCoursesInstancesbysem()
        .then(response => {
          setCourses(response.data);
          setLoading(false);
        })
        .catch(error => {
          console.error("There was an error fetching the course data!", error);
          setError('Error fetching course data');
          setLoading(false);
        });
    }
  }, [year, semester]);
  const handleDelete = (courseId) => {
    CourseInstance.deleteInstance(year, semester, courseId)
      .then(error => {
        setMessage('Course not Deleted Success');
      })
      .catch(res => {
        if (res.response.status === 500) {
        setCourses(courses.filter(course => course.id !== courseId));
        setMessage('Course Deleted Success');
        console.log('Course instance deleted:', res);
        }
      });
  };

  if (loading) return <p>Loading courses...</p>;
  if (error) return <p>{error}</p>;
  

  return (
    <>
    
    <table className="table table-bordered">
      <thead className="bg-primary text-white">
        <tr>
          <th>Course Title</th>
          <th>Year-Sem</th>
          <th>Code</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        {courses.map((course, index) => {
          // console.log(course.instance)
        
          if(course.instances  && course.instances.length>0){
            return (
          <tr key={index}>
            {console.log(course)}
            <td>{course.title}</td>
            <td>{course.instances[0]?.year}-{course.instances[0]?.semester}</td>
            <td>{course.courseCode}</td>
            <td>
              <button 
                className="btn btn-danger"
                onClick={() => handleDelete(course.id)}>
                Delete
              </button>
            </td>
          </tr>)
          }else{
            return null;
          }
          
})}
      </tbody>
    </table>
    </>
  );
}

export default CourseTable;