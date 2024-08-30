import React from "react";
import {Link} from "react-router-dom";
const Navbar=()=>{
return(
    <nav className="navbar navbar-expand-lg navbar-dark bg-success">
                <div className="container-fluid">
                    <a className="navbar-brand" href="#">Course Application</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                                <Link to="/" className="nav-link active" aria-current="page" href="#">Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/display" className="nav-link active" aria-current="page" href="#">Display Courses</Link>
                            </li>
                            <li className="nav-item">
                                <Link  to="/save" className="nav-link active" aria-current="page" href="#">Add Course</Link>
                            </li>
                            <li className="nav-item">
                                <Link  to="/createinstances" className="nav-link active" aria-current="page" href="#">Add Course Instances</Link>
                            </li>
                            <li className="nav-item">
                                <Link  to="/dispinstances" className="nav-link active" aria-current="page" href="#">Display Course Instances</Link>
                            </li>
                        </ul>

                    </div>
                </div>
            </nav>
)
}
export default Navbar