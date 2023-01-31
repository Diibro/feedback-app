import React from 'react';
import { FaQuestion } from 'react-icons/fa';
import {Link } from 'react-router-dom'

function AboutIcon() {
  return (
    <div className='AboutIcon'>
     <Link to={{
          pathname:'/about',
          search:"name"
     }} ><FaQuestion/></Link>
    </div>
  )
}

export default AboutIcon;