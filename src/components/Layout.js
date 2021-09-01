import React from 'react'
import Navbar from './Navbar'
import { useLayoutEffect } from 'react'
import { useDispatch } from 'react-redux';
import {fetchPeople} from '../actions'


const Layout = ({children}) => {
    const dispatch = useDispatch();

    useLayoutEffect(() => {
        dispatch(fetchPeople())
    }, [])
    return (
        <div className='layout'>
            <div className="toggle-sidebar" onClick={() => {
                const ref = document.querySelector('.nav')
                ref.classList.add('show-sidebar')
            }}>
                <div className=""></div>
                <div className=""></div>
                <div className=""></div>
            </div>
            <div className='nav'>
                <Navbar/>
            </div>
            {children}
        </div>
    )
}

export default Layout
