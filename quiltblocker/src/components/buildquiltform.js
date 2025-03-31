import React, { useState, useEffect } from 'react'
import ShowCustomBlock from './showcustomblock';

function BuildQuiltForm() {
    const savedBlocks = JSON.parse(localStorage.getItem('blocks')) || [];
    const [ blockID, setBlockID ] = useState('');
    const [ quiltSizeHeight, setQuiltSizeHeight ] = useState('');
    const [ quiltSizeWidth, setQuiltSizeWidth ] = useState('');
    const [ quiltName, setQuiltName ] = useState('');
    const [ quiltID, setQuiltID ] = useState('');
    

    if (savedBlocks.length === 0) {
        return <div>No blocks found</div>;
    }

    const handleHeightChange = (e) => {
        const selectedSize = e.target.value;
        setQuiltSizeHeight(selectedSize);
        console.log('Selected Height:', selectedSize);
    }

    const handleWidthChange = (e) => {
        const selectedSize = e.target.value;
        setQuiltSizeWidth(selectedSize);
        console.log('Selected Width:', selectedSize);
    }

    const handleBlockChange = (e) => {
        const selectedBlock = e.target.value;
        setBlockID(selectedBlock);
        console.log('Selected Block:', selectedBlock);
    }

    const handleQuiltNameChange = (e) => {
        const selectedName = e.target.value;
        setQuiltName(selectedName);
        console.log('Selected Quilt Name:', selectedName);
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        const newQuiltID = Math.floor(Math.random() * 1000000);
        setQuiltID(newQuiltID);
        const newQuilt = {
            ID: newQuiltID,
            blockID: blockID,
            height: quiltSizeHeight,
            width: quiltSizeWidth,
            name: quiltName
        }
        const savedQuilts = JSON.parse(localStorage.getItem('quilts')) || [];
        savedQuilts.push(newQuilt);
        localStorage.setItem('quilts', JSON.stringify(savedQuilts));
        console.log('New Quilt:', newQuilt);
    }



  return (
    <div>
        <form onSubmit={handleSubmit}>
            <div>
                <label>Height</label>
                <input type='range' min="4" max="10" onChange={handleHeightChange}></input>
            </div>

            <div>
            <label>Width</label>
            <input type='range' min="4" max="10" onChange={handleWidthChange}></input>
            </div>

            <div>
                <label>Pick a Block</label>
                {savedBlocks.map((block, index) => (
                    <div key={index}>
                        <label htmlFor={`block-${index}`}><ShowCustomBlock ID={block.ID}/></label>
                        <input type='radio' name="block" value={block.ID} id={`block-${index}`} onChange={handleBlockChange}></input>
                    </div>
                ))}
            </div>

            <div>
                <label>Quilt Name</label>
                <input type='text' value={quiltName} onChange={handleQuiltNameChange}></input>
            </div>

            <div>
                <button type='submit'>Submit</button>
            </div>
        </form>
    </div>
  )
}

export default BuildQuiltForm