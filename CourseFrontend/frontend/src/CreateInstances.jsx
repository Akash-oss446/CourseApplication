import React, { useEffect, useState } from 'react';
import CourseService from './services/Courseservice';
import CourseInstance from './services/CourseInstance';

const CreateInstances = () => {
  const [courses, setCourses] = useState([]);
  const [selectedCourse, setSelectedCourse] = useState('');
  const [year, setYear] = useState('');
  const [semester, setSemester] = useState('');
  const [message, setMessage] = useState('');
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    const fetchCourses = async () => {
      try {
        const response = await CourseService.getAllCourses();
        setCourses(response.data);
      } catch (error) {
        console.error("There was an error fetching the courses!", error);
      }
    };

    fetchCourses();
  }, []);

  const handleCourseChange = (e) => {
    const courseId = parseInt(e.target.value);
    const selected = courses.find(course => course.id === courseId);
    setSelectedCourse(selected);
  };

  const handleYearChange = (e) => {
    setYear(e.target.value);
  };

  const handleSemesterChange = (e) => {
    setSemester(e.target.value);
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setMessage('');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (year && semester && selectedCourse) {
      try {
        const courseInstance = {
          year: parseInt(year),
          semester: parseInt(semester),
          course: {
            id: selectedCourse.id
          }
        };

        await CourseInstance.createCourseInstance(courseInstance);
        setMessage(`Course instance created successfully`);
        setShowModal(true);
        // Reset the form fields
        setYear('');
        setSemester('');
        setSelectedCourse('');
      } catch (error) {
        console.error("There was an error creating the course instance!", error);
        setMessage('Error creating course instance.');
        setShowModal(true);
      }
    } else {
      setMessage('Please fill out all fields.');
      setShowModal(true);
    }
  };

  return (
    <div className="container my-4">
      <h2 className="text-center mb-4">Create Course Instance</h2>
      <div className="d-flex justify-content-center">
        <form onSubmit={handleSubmit} className="w-50">
          <div className="mb-3">
            <label className="form-label">Year</label>
            <input
              type="number"
              className="form-control"
              value={year}
              onChange={handleYearChange}
              required
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Semester</label>
            <select
              className="form-select"
              value={semester}
              onChange={handleSemesterChange}
              required
            >
              <option value="">Select semester</option>
              <option value="1">Semester 1</option>
              <option value="2">Semester 2</option>
              {/* Add more options if needed */}
            </select>
          </div>
          <div className="mb-3">
            <label className="form-label">Select Course</label>
            <select
              className="form-select"
              value={selectedCourse ? selectedCourse.id : ''}
              onChange={handleCourseChange}
              required
            >
              <option value="">Select a course</option>
              {courses.map((course) => (
                <option key={course.id} value={course.id}>
                  {course.title}
                </option>
              ))}
            </select>
          </div>
          <button type="submit" className="btn btn-primary w-100">Submit</button>
        </form>
      </div>
      {showModal && (
        <div className="modal" style={{ display: 'block' }}>
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">Message</h5>
                <button type="button" className="close" onClick={handleCloseModal}>
                  <span>&times;</span>
                </button>
              </div>
              <div className="modal-body">
                <p>{message}</p>
              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-secondary" onClick={handleCloseModal}>Close</button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default CreateInstances;
