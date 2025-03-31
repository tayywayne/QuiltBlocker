import React from 'react';
import './fourpatch.css';

function FourPatch({ colors }) {
  if (!colors || colors.length < 4) {
    return null;
  }


  const style = {
    '--fourpatch-color1': colors[0],
    '--fourpatch-color2': colors[1],
    '--fourpatch-color3': colors[2],
    '--fourpatch-color4': colors[3],
  };


  return (
    <div className="fourpatch" style={style}>
      <div className='fourpatch1' />
      <div className='fourpatch2' />
      <div className='fourpatch3' />
      <div className='fourpatch4' />
    </div>
  );
}

export default FourPatch;