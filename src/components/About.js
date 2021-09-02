import React from 'react'
import { useSelector } from 'react-redux';
import parse from 'html-react-parser';
import '../styles/About.css'


const About = () => {
    let person = null
    person = useSelector(state => state.fetch.person)
    return (
        <div id='about'>
            <text>&lt;html&gt;</text><br />
                <text className='margin-1'>&lt;body&gt;</text><br />
                    <text className='margin-2'>&lt;h2&gt;</text>
                        <h2 className='margin-3 about-header'>My, Myself & I</h2>
                    <text className='margin-2'>&lt;/h2&gt;</text><br />
                    <text className='margin-2'>&lt;p&gt;</text><br />
                    <div className="margin-3">
                        { parse(person.aboutMe1) }
                        { parse(person.aboutMe2) }
                    </div>
                    <text className='margin-2'>&lt;/p&gt;</text><br />
                <text className='margin-1'>&lt;/body&gt;</text><br />
            <text>&lt;/html&gt;</text>
            <div className="basic-skills">
                <ul className='panels'>
                    {
                        person.basicSkills.map((skill, i) => {
                            if (i%2 == 0) {
                                return(
                                    <li>
                                        <div className="front-panel">{skill}</div>
                                        <div className="back-panel">{person.basicSkills[i + 1]}</div>
                                    </li>
                                    )
                            }
                            else {
                                return ''
                            }
                            
                        })
                    }
                    {/* <li>
                        <div className="front-panel">{person.basicSkills[0]}</div>
                        <div className="back-panel">{person.basicSkills[1]}</div>
                    </li>
                    <li>
                        <div className="front-panel">{person.basicSkills[2]}</div>
                        <div className="back-panel">{person.basicSkills[3]}</div>
                    </li> */}
                </ul>
            </div>
        </div>
    )
}

export default About
