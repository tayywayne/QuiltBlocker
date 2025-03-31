import React from 'react'
import "./hurndash.css";

function HurnDash({ colors }) {

    if (!colors || colors.length < 3) {
        return null;
      }
    

    const style = {
        '--hurndash-color1': colors[0],
        '--hurndash-color2': colors[1],
        '--hurndash-color3': colors[2],
    };

  return (
    <div className='hurndash' style={style}>
        <div className='hurndash-row'>
            <div className='hurndash-tri'></div>
            <div className='hurndash-half'></div>
            <div className='hurndash-tri hurndash-rotate-1'></div>
        </div>
        <div className='hurndash-row'>
            <div className='hurndash-half hurndash-rotate-2'></div>
            <div className='hurndash-mid'></div>
            <div className='hurndash-half hurndash-rotate-1'></div>
        </div>
        <div className='hurndash-row'>
            <div className='hurndash-tri hurndash-rotate-2'></div>
            <div className='hurndash-half hurndash-rotate-3'></div>
            <div className='hurndash-tri hurndash-rotate-3'></div>
        </div>
    </div>
  )
}

export default HurnDash