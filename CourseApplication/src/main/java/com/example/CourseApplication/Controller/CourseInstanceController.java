package com.example.CourseApplication.Controller;


import java.util.List;

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

import com.example.CourseApplication.Model.CourseInstance;
import com.example.CourseApplication.Services.CourseInstanceService;
@CrossOrigin("*")
@RestController
@RequestMapping("/api")
public class CourseInstanceController {
    @Autowired
    private CourseInstanceService courseInstanceService;
    @PostMapping("/instances")
    public ResponseEntity<?> createInstance(@RequestBody CourseInstance instance) {
        return new ResponseEntity<>(courseInstanceService.createCourseInstance(instance),HttpStatus.CREATED);
    }

    @GetMapping("/instances/{year}/{semester}")
    public ResponseEntity<?>getInstances(@PathVariable int year, @PathVariable int semester) {
        List<CourseInstance> instances = courseInstanceService.getInstancesByYearAndSemester(year, semester);
        return new ResponseEntity<>(instances,HttpStatus.OK);
    }

    @GetMapping("/instances/{year}/{semester}/{courseId}")
    public ResponseEntity<?>getInstanceDetails(@PathVariable int year, @PathVariable int semester, @PathVariable Long courseId) {
        return new ResponseEntity<>(courseInstanceService.getInstanceDetails(year, semester, courseId),HttpStatus.OK);
    }
    @DeleteMapping("/{year}/{semester}/{courseId}")
    public ResponseEntity<?> deleteInstance(@PathVariable int year, @PathVariable int semester, @PathVariable Long courseId) {
       courseInstanceService.deleteInstance(year, semester, courseId);
       return new ResponseEntity<>(courseInstanceService.deleteInstance(year, semester, courseId),HttpStatus.OK);
    }
}
