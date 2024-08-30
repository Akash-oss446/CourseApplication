package com.example.CourseApplication.Services;



import java.util.List;

import com.example.CourseApplication.Model.Course;

public interface CourseService {
      public Course createCourse(Course instance);
    public List<Course> getAllCourses();
    public Course getCourseById(Long id);
    public String deleteCourse(Long id);
}
