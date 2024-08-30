package com.example.CourseApplication.Services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.CourseApplication.Model.CourseInstance;
import com.example.CourseApplication.Repository.CourseInstanceRepository;
@Service
public class CourseInstanceServiceImpl implements CourseInstanceService {
    @Autowired
    private CourseInstanceRepository courseInstanceRepo;
    @Override
    public CourseInstance createCourseInstance(CourseInstance courseInstance) {
        return courseInstanceRepo.save(courseInstance);
    }
    @Override
    public List<CourseInstance> getInstancesByYearAndSemester(int year, int semester) {
        return courseInstanceRepo.findByYearAndSemester(year, semester);
    }
    @Override
    public CourseInstance getInstanceDetails(int year, int semester, Long courseId) {
        return courseInstanceRepo.findByYearAndSemesterAndCourseId(year, semester, courseId);
    }
    @Override
    public String deleteInstance(int year, int semester, Long courseId) {
        CourseInstance instance = courseInstanceRepo.findById(courseId).get();
        if (instance != null) {
            courseInstanceRepo.delete(instance);
            return "Instance delete success";
        }
        return "Something wrong";
    }
    
}
