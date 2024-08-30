import axios from 'axios';
const API_URL="http://localhost:8080";
class CourseInstance
{
 getAllCoursesInstancesbysem()
 {
   const url = `${API_URL}/api/courses`;
   return axios.get(url);
 }
createCourseInstance = (courseInstance) => {
  return axios.post(`${API_URL}/api/instances`, courseInstance);
};
deleteInstance(year, semester, courseId) {
    return axios.delete(`${API_URL}/api/${year}/${semester}/${courseId}`); 
  }
}
export default new CourseInstance();