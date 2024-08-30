package com.example.CourseApplication.Repository;
import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.CourseApplication.Model.CourseInstance;

public interface CourseInstanceRepository extends  JpaRepository<CourseInstance, Long>{
    List<CourseInstance> findByYearAndSemester(int year, int semester);
    CourseInstance findByYearAndSemesterAndCourseId(int year, int semester, Long courseId);

}