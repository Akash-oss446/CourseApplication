package com.example.CourseApplication.Repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.CourseApplication.Model.Course;

public interface CourseRepository  extends JpaRepository<Course, Long>{
   
}
