import React, { useContext, useEffect, useState } from "react";
import axios from 'axios'

const CourseContext = React.createContext();

export const CourseProvider = ({children})=>{
    const [course , setCourse] = useState([]);


    const fetchapi = async () =>{
        const response = await axios.get("http://localhost:3000/courses");
        setCourse(response.data)
    }
    useEffect(()=>{
        fetchapi();
    },[]);

    const data ={
        course , setCourse
    };
    return <CourseContext.Provider value={data}>
        {children}
    </CourseContext.Provider>
}

export const useCourse =()=> useContext(CourseContext);