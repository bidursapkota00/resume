import React from 'react'
import '../styles/Navbar.css'
import { useSelector } from 'react-redux';


const Navbar = () => {
    let person = null
    person = useSelector(state => state.fetch.person)
    return (
        <div className="nav-container">
            <div className='navbar'>
                <div className="profile-img">
                    <img src={person.imageUrl} alt="" />
                </div>
                <div className="short-profile-description">
                    <h1>{person.firstName} {" "} {person.middleName} {" "} {person.lastName}</h1>
                    <a href="#top"><p>{person.mainJobTitle}</p></a>
                    <span>IN</span>
                    <br />
                    <span>NEPAL</span>
                </div>
                <div class="nav-list">
                    <ul onClick={() => {
                        const ref = document.querySelector('.nav')
                        if(ref.classList.contains('show-sidebar')) {
                            ref.classList.remove('show-sidebar')
                        }
                    }}>
                        <li class="active"><a href="#top" data-nav-section="home">Home</a></li>
                        <li><a href="#about">About</a></li>
                        <li><a href="#skills">Skills</a></li>
                        <li><a href="#education">Education</a></li>
                        <li><a href="#experience">Experience</a></li>
                        <li><a href="#contact">Contact</a></li>
                    </ul>
                </div>
                <small>&copy;
                    Copyright &copy;<script>document.write(new Date().getFullYear());</script>
                    All rights reserved
                </small>
            </div>
        </div>
    )
}

export default Navbar
