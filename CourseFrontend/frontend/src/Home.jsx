import React from 'react'
import './Home.css'
const Home = () => {
  return (
      <div className="home-page">
      <div className="header-section">
        <h1 className="title">Welcome to the Courses Management System</h1>
        <p className="subtitle">
          Easily manage your courses and instances. Create, view, and manage all your course information in one place.
        </p>
      </div>
      <div className="buttons-section">
      <a href="/display" className="btn btn-primary">View Courses</a>
      </div>
    </div>
  )
}

export default Home
