import { useSelector } from 'react-redux';
import React from 'react'
import '../styles/Home.css'

const Home = () => {
    let person = null
    person = useSelector(state => state.fetch.person)
    return (
        <div className='i-am-description'>
            <div id='top' >
                <div className='circle circle1'></div>
                <div className='circle circle2'></div>
                <div className="i-am">
                    <div className="front">
                        <h1>Hi!</h1>
                        <h1>I'm {person.firstName} {" "} {person.middleName} {" "} {person.lastName}</h1>
                        <p className='view-portfolio-button'>
                            <a href="">DOWNLOAD CV</a>
                        </p>
                    </div>
                    <div className="back">
                        <h1>I'm</h1>
                        <h1>{person.mainJobTitle}</h1>
                        <p className='view-portfolio-button'>
                            <a href="">VIEW PORTFOLIO</a>
                        </p> 
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home
