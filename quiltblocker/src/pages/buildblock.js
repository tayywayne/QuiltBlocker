import React from 'react'
import BuildBlockForm from '../components/buildblockform'

function BuildBlock() {
  return (
    <div className="build-block">
        <h1>Build Your Quilt Block</h1>
        <p>Use the form below to create your custom quilt block.</p>
        <div>
            <BuildBlockForm />
        </div>
    </div>
  )
}

export default BuildBlock