import React, { useEffect, useState } from "react";
import courseservice from "./services/Courseservice";

const Display = () => {
  const [courselist, setcourselist] = useState([]);
  const [msg, setMsg] = useState("");

  useEffect(() => {
    init();
  }, [courselist]);

  const init = () => {
    courseservice
      .getAllCourses()
      .then((res) => {
        console.log("API response:", res.data);
          setcourselist(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const deleteCourses = (id) => {
    courseservice
      .deleteCourses(id)
      .then(error => {
        setMsg('Course not Deleted Success');
      })
      .catch(res => {
        if (res.response.status === 500) {
        setcourselist(courselist.filter((course) => course.id !== id));
        }  // Update state to remove deleted course
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="container mt-3">
      <h3 className="text-center">All Courses List</h3>
      {msg && <p className="text-center text-success">{msg}</p>}
      <div className="row">
        <div className="col-md-12">
          <div className="card">
            <div className="card-body">
              <table className="table">
                <thead>
                  <tr>
                    <th scope="col">Sr No</th>
                    <th scope="col">Course Title</th>
                    <th scope="col">Course Code</th>
                    <th scope="col">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {courselist.map((c, index) => (
                    <tr key={c.id}>
                      <td>{index + 1}</td>
                      <td>{c.title}</td>
                      <td>{c.courseCode}</td>
                      <td>
                        <button
                          onClick={() => deleteCourses(c.id)}
                          className="btn btn-sm btn-danger ms-1"
                        >
                          Delete
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Display;
