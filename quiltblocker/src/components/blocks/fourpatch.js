import React from 'react';
import './fourpatch.css';

function FourPatch({ colors }) {
  const colorArray = typeof colors === 'string' 
  ? colors.split(',') 
  : Array.isArray(colors) 
    ? colors 
    : ['#ffffff', '#ffffff', '#ffffff', '#ffffff']; // Fallback

  const [color1, color2, color3, color4] = colorArray;

  return (
    <div className="fourpatch">
      <div style={{ backgroundColor: colorArray[0] }} className='fourpatch1'/>
      <div style={{ backgroundColor: colorArray[1] }} className='fourpatch2'/>
      <div style={{ backgroundColor: colorArray[2] }} className='fourpatch3'/>
      <div style={{ backgroundColor: colorArray[3] }} className='fourpatch4'/>
    </div>
  );
}

export default FourPatch;