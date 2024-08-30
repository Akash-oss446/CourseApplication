package com.example.CourseApplication.Controller;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.CourseApplication.Model.Course;
import com.example.CourseApplication.Services.CourseService;
@CrossOrigin("*")
@RestController
@RequestMapping("/api")
public class CourseController {
     @Autowired
    private CourseService courseService;

    @PostMapping("/courses")
    public ResponseEntity<?>  createCourse(@RequestBody Course course) {
        return new ResponseEntity<>(courseService.createCourse(course),HttpStatus.CREATED);
    }

    @GetMapping("/courses")
    public ResponseEntity<?> getAllCourses() {
        return new ResponseEntity<>(courseService.getAllCourses(),HttpStatus.OK);
    }

    @GetMapping("/courses/{id}")
    public ResponseEntity<?> getCourseById(@PathVariable Long id) {
        return new ResponseEntity<>(courseService.getCourseById(id),HttpStatus.OK);
    }

    @DeleteMapping("/courses/{id}")
    public ResponseEntity<?> deleteCourse(@PathVariable Long id) {
        courseService.deleteCourse(id);
        return new ResponseEntity<>(courseService.deleteCourse(id),HttpStatus.OK);
    }
    
}
