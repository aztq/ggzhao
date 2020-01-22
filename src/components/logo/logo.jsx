import React from 'react'
import logo from './dinasour.jpg'
import './logo.css'

export default function img(){
  return (
    <div className='logo-container'>
      <img src={logo} alt='logo' className='logo-img'/>
    </div>
  )
}