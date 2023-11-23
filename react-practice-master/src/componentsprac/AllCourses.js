

import React, { useState } from 'react'
import { Course } from './Course'

export const AllCourses = () => {

    const [courses,setCourses]=useState([
        {title:"Java Course",description:"This is demo course"},
        {title:"Django Course",description:"This is demo course"},
        {title:"ReactJS Course",description:"This is demo course"},
        {title:"Angular Course",description:"This is demo course"},
    ])
    return (
        <div>
            <h1>All Courses</h1>
            <p>List of Courses are as follows</p>{
                courses.length>0?courses.map(
                    (item)=><Course course={item}/>
                ):"No Courses"
            }
        </div>
    )
}
