import React, { useEffect, useState } from 'react'
import { useCourse } from '../Context/CourseContext'
import frontend from '../image/front-end.jpeg'
import react from '../image/react.jpeg'
import angular from '../image/angular.jpeg'
import bootstrap from '../image/bootstrap.jpeg'
import c from '../image/c.jpeg'
import axios from 'axios'


function Course() {
    const{course , setCourse} = useCourse();
    const [courseID , setCourseID] = useState(null)

    const deleteCourse=(id)=>{
      const afterDeleteCourse = course.filter((delCourse)=> delCourse.id !== id);
      setCourse(afterDeleteCourse)
    }

  return (
    <div className="container">
      <div className="row">
        
          {course.map((item)=>{
            return <div key={item.id} className="col-sm-4">
                <div className='card mt-1'>
                  <img src={1} alt="" />
                    <div className='card-body'>
                    <h5 className='card-title'>{item.title}</h5>
                    <p className='card-text'>{item.content}</p>
                    <p className='text-danger'>{`${item.price}₺`}</p>
                    <button className='btn btn-danger btn-sm m-2' onClick={()=>{deleteCourse(item.id)}}>Delete</button>
                    </div>
                </div>
               </div>
          })}
      </div>
    </div>
  )
}

export default Course
