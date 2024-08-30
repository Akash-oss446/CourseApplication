package com.example.CourseApplication.Services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.CourseApplication.Model.Course;
import com.example.CourseApplication.Repository.CourseRepository;

@Service
public class CourseServiceImpl implements CourseService {
     @Autowired
    private CourseRepository courseRepository;
    @Override
    public Course createCourse(Course instance) {
        return courseRepository.save(instance);
    }
    @Override
    public List<Course> getAllCourses() {
        return courseRepository.findAll();
    }
    @Override
    public Course getCourseById(Long id) {
        return courseRepository.findById(id).orElse(null);
    }
    @Override
    public String deleteCourse(Long id) {
        Course c1=courseRepository.findById(id).get();
        if(c1!=null)
        {
            courseRepository.delete(c1);
            return "Course delete success";
        }
        return  "Something wrong";
    }
  
}
