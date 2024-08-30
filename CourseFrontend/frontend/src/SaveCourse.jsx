import React, { useState } from 'react';
import Courseservice from './services/Courseservice'; // Import the service

const SaveCourse = () => {
  const [course, setCourse] = useState({
    courseCode: '',
    description: '',
    title: ''
  });
  const [message, setMessage] = useState('');
  const [showModal, setShowModal] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCourse((prevCourse) => ({
      ...prevCourse,
      [name]: value
    }));
  };
  const handleCloseModal = () => {
    setShowModal(false);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    Courseservice.saveCourse(course)
      .then(response => {
        setMessage('Course saved successfully!');
        setCourse({ title: '', courseCode: '', description: '' });
        setShowModal(true); // Reset form
      })
      .catch(error => {
        console.error("There was an error saving the course!", error);
        setMessage('Error saving the course.');
        setShowModal(true);
      });
  };

  return (
    <div className="container my-4">
      <h2 className="text-center mb-4">Add New Course</h2>
      <div className="d-flex justify-content-center">
        <form onSubmit={handleSubmit} className="w-50">
          <div className="mb-3">
            <label className="form-label">Course Title</label>
            <input 
              type="text" 
              className="form-control" 
              name="title" 
              value={course.title} 
              onChange={handleChange} 
              required
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Course Code</label>
            <input 
              type="text" 
              className="form-control" 
              name="courseCode" 
              value={course.courseCode} 
              onChange={handleChange} 
              required
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Description</label>
            <textarea 
              className="form-control" 
              name="description" 
              value={course.description} 
              onChange={handleChange} 
              required
            />
          </div>
          <button type="submit" className="btn btn-primary w-100">Save Course</button>
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
}

export default SaveCourse;
