import React from 'react'
import ShowCustomBlock from './showcustomblock'
import "./styles/showquilt.css"

function ShowQuilt({ ID }) {
  const savedQuilts = JSON.parse(localStorage.getItem('quilts')) || [];
  const quilt = savedQuilts.find((quilt) => quilt.ID === ID);

  const altStyle = {
    '--block-size': '50px',
  }

  if (!quilt) {
      return <div>Quilt not found</div>;
  }

  const numOfBlocks = Number(quilt.height) * Number(quilt.width);
  const quiltAreaArray = Array.from({ length: numOfBlocks }, (_, index) => index);

  const style = {
      '--quilt-height': quilt.height,
      '--quilt-width': quilt.width,
  };

  return (
      <div className='full-quilt' style={style}>
          {quiltAreaArray.map((block, index) => (
              <div className='single-block' key={index}>
                  <ShowCustomBlock ID={quilt.blockID} altStyle={altStyle}/>
              </div>
          ))}
      </div>
  );
}

export default ShowQuilt