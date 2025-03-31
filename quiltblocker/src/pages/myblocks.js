import React from 'react'
import ShowCustomBlock from '../components/showcustomblock'

function MyBlocks() {

    const savedBlocks = JSON.parse(localStorage.getItem('blocks')) || [];

    if (savedBlocks.length === 0) {
        return <div>No block found</div>;
    }

  return (
            <div>
            {savedBlocks.map((block) => (
                <div key={block.ID} className='block'>
                    <ShowCustomBlock ID={block.ID} />
                </div>
            ))}
        </div>
  )
}

export default MyBlocks