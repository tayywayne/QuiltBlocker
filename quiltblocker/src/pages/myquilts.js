import React from 'react'
import QuiltCard from '../components/quiltcard'
import "../components/styles/showquilt.css"

function MyQuilts() {
    const savedQuilts = JSON.parse(localStorage.getItem('quilts')) || [];

    if (savedQuilts.length === 0) {
        return <div>No quilt found</div>;
    }

  return (
    <div>
        <h1>My Quilts</h1>
        <p>This is the My Quilts page.</p>
        <p>Here you can view and manage your quilts.</p>

        <div className='map-quilt-container'>
            {savedQuilts.map((quilt) => (
                <div key={quilt.ID}>
                    <div className='map-quilt-card'>
                        <QuiltCard quilt={quilt} />
                    </div>
                    <div className='rainbow-divider'></div>
                </div>
            ))}
        </div>

    </div>
  )
}

export default MyQuilts