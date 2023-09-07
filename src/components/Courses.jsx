import React, { useState } from 'react'
import Course from './Course'
import { useCourse } from '../Context/CourseContext'
import axios from 'axios'


function Courses() {
    const {course , setCourse} = useCourse();
    const [loading , setLoadint] = useState(false)



        const fetchapi = async () =>{
            const response = await axios.get("http://localhost:3000/courses");
            setCourse(response.data)
        }


  return (
    <div>
        <div className='border text-center text-light'>
            <h2 className='fs-1 fw-bold' >My-Courses</h2>
        </div>
    {course.length<= 0 ? 
    (<div className='container text-center mt-5 text-light'> 
    <div className='row bg-dark rounded'>
    <h2>- You Deleted All The Courses -</h2>
    <span className='text-white-50 mt-5'>You can reset it from the button below.</span>
    <button onClick={()=>{fetchapi()}} className='mt-5 btn btn-success btn-lg'>Reset Courses</button> 
    </div>
</div>) 
    : ( <Course/>)}
    </div>
  )
}

export default Courses
