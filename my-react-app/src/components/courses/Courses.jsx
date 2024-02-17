import React from 'react'
import data from '../../assets/data'
import { Link } from 'react-router-dom'
import './Courses.css'
export default function Course() {
  return (
    <div id='courses'>
      <div className='courseHeading'>
        <h2>Discover Our Premium Courses</h2>
      </div>

      <div className="course_card">
      {
        data.map((course) => (
          <div className="card" style={{ width: '18rem' }} key={course.id}>
            <img src="https://businesslobby.net/wp-content/uploads/2021/06/English-teacher-1.jpg" className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">{course.categoryName}</h5>
              <h6>Learn Comple {course.courseName} by {course.teacherName}</h6>
              <Link href="#" className="btn btn-primary">View Course</Link>
            </div>
          </div>  
        ))
      }
      <div className="allCourses">
        <p>View all courses</p>
      </div>
      </div>
    </div>
  )
}
