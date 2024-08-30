package com.example.CourseApplication.Services;


import java.util.List;

import com.example.CourseApplication.Model.CourseInstance;

public interface CourseInstanceService {
     public CourseInstance createCourseInstance(CourseInstance courseInstance);
    public List<CourseInstance> getInstancesByYearAndSemester(int year, int semester);
    public CourseInstance getInstanceDetails(int year, int semester, Long courseId);
    public String deleteInstance(int year, int semester, Long courseId);
}
