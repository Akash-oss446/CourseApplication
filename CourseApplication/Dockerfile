FROM openjdk:17
EXPOSE 8080
ADD target/CourseApplication-0.0.1-SNAPSHOT.jar CourseApplication-0.0.1-SNAPSHOT.jar
WORKDIR /src
ENTRYPOINT ["java","-jar","/CourseApplication-0.0.1-SNAPSHOT.jar"]