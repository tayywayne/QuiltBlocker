import React from 'react'
import BuildQuilt from '../components/buildquilt'

function BuildBlock() {
  return (
    <div className="build-block">
        <h1>Build Your Quilt Block</h1>
        <p>Use the form below to create your custom quilt block.</p>
        <div>
            <BuildQuilt />
        </div>
    </div>
  )
}

export default BuildBlock