import React from 'react'
import Star from './blocks/star'
import FourPatch from './blocks/fourpatch'
import RailFence from './blocks/railfence'

function ShowCustomBlock({ID}) {

    const savedQuilts = JSON.parse(localStorage.getItem('quilts')) || [];
    // console.log(savedQuilts);
    if (savedQuilts.length === 0) {
        return <div>No quilts found</div>;
    }
    const quilt = savedQuilts.find(quilt => quilt.ID === Number(ID));
    // console.log(quilt);

    // console.log(quilt.colors)
    if (!quilt) {
        return <div>Quilt not found</div>;
    }
    if(quilt.pattern === 'fourpatch') {
        return (
            <div className='block'>
                <FourPatch colors={quilt.colors}/>
            </div>
        )
    }
    if(quilt.pattern === 'railfence') {
        return (
            <div className='block'>
                <RailFence colors={quilt.colors}/>
            </div>
        )
    }
    if(quilt.pattern === 'star') {
        return (
            <div className='block'>
                <Star colors={quilt.colors}/>
            </div>
        )
    }
}

export default ShowCustomBlock