import React from 'react';

const Footer = () => {
  return (
    <footer className="footer bg-dark text-white p-4 ">
      <div className="container">
        <div className="row">
          <div className="col-md-6 mb-3 mb-md-0">
            <h5>About the Course App</h5>
            <p>
              This course management application allows you to manage and explore various courses effectively. Add, view, update, and delete courses with ease.
            </p>
          </div>
          <div className="col-md-3 mb-3 mb-md-0">
            <h5>Follow Us</h5>
            <ul className="list-unstyled">
              <li><a href="https://twitter.com" className="text-white" target="_blank" rel="noopener noreferrer">Twitter</a></li>
              <li><a href="https://facebook.com" className="text-white" target="_blank" rel="noopener noreferrer">Facebook</a></li>
              <li><a href="https://linkedin.com" className="text-white" target="_blank" rel="noopener noreferrer">LinkedIn</a></li>
            </ul>
          </div>
          <div className="col-md-3 mb-3 mb-md-0">
            <h5>Contact Us</h5>
            <p>Email: support@courseapp.com</p>
            <p>Phone: +123 456 7890</p>
          </div>
        </div>
        <div className="row mt-3">
          <div className="col-12">
            <p className="mb-0">&copy; 2024 Course App. All Rights Reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

