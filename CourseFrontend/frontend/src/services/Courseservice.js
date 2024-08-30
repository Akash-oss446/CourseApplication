import axios from 'axios';
const API_URL="http://localhost:8080";
class Courseservice
{
 saveCourse(course)
 {
   return axios.post(`${API_URL}/api/courses`, course);
 }
 getAllCourses()
 {
    return axios.get(API_URL +"/api/courses");
 }
 getCoursebyId(id)
 {
    return axios.get(API_URL +"/api/courses/" +id);
 }
 deleteCourses(id)
 {
    return axios.delete(API_URL+"/api/courses/"+id);
 }
}
export default new Courseservice();