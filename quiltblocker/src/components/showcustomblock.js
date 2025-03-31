import React from 'react'
import Star from './blocks/star'
import FourPatch from './blocks/fourpatch'
import RailFence from './blocks/railfence'

function ShowCustomBlock({ID, altStyle}) {

    const savedBlocks = JSON.parse(localStorage.getItem('blocks')) || [];

    if (savedBlocks.length === 0) {
        return <div>No Blocks found</div>;
    }
    const block = savedBlocks.find(block => block.ID === Number(ID));
    if (!block) {
        return <div>block not found</div>;
    }


    if(block.pattern === 'fourpatch') {
        return (
            <div className='block' style={altStyle}>
                <FourPatch colors={block.colors}/>
            </div>
        )
    }
    if(block.pattern === 'railfence') {
        return (
            <div className='block' style={altStyle}>
                <RailFence colors={block.colors}/>
            </div>
        )
    }
    if(block.pattern === 'star') {
        return (
            <div className='block' style={altStyle}>
                <Star colors={block.colors}/>
            </div>
        )
    }
}

export default ShowCustomBlock