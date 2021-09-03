import React from 'react'
import RecipeReviewCard from './Edu-card'
import '../styles/Education.css'
import { useSelector } from "react-redux";


export const Education = () => {
    let person = null;
    person = useSelector((state) => state.fetch.person);
    return (
        <div id="edu">
            <h1>Education</h1>
        <div className='education'>
            {
                person.education.map(edu => {
                    return <RecipeReviewCard edu={edu}/>
                })
            }
        </div>
        </div>
    )
}
