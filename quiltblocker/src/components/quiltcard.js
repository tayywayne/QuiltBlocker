import React from 'react'
import ShowCustomBlock from './showcustomblock'
import ShowQuilt from './showquilt'
import "./styles/showquilt.css"

function quiltcard({quilt}) {

  return (
    <div className='quilt-card'>
        <div className='quilt-card-preview'>
            <ShowQuilt ID={quilt.ID} />
        </div>
        <div className='quilt-card-info'>
          <div className='quilt-card-info-text'>
            <div>
              <h3>Quilt Name</h3>
              <p>{quilt.name}</p>
            </div>
            <div>
              <h3>Quilt ID</h3>
              <p>{quilt.ID}</p>
            </div>
            <div>
              <h3>Quilt Size</h3>
              <p>{quilt.width} x {quilt.height}</p>
            </div>
          </div>
          <div className='quilt-card-info-block'>
            <div>
              <h3>Block used</h3>
              <ShowCustomBlock ID={quilt.blockID} />
            </div>
          </div>
        </div>
    </div>
  )
}

export default quiltcard