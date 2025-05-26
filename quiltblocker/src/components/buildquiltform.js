import React, { useState, useEffect } from 'react'
import ShowCustomBlock from './showcustomblock';
import { useNavigate } from 'react-router-dom'

function BuildQuiltForm() {
    const savedBlocks = JSON.parse(localStorage.getItem('blocks')) || [];
    const [ blockID, setBlockID ] = useState('');
    const [ quiltSizeHeight, setQuiltSizeHeight ] = useState('');
    const [ quiltSizeWidth, setQuiltSizeWidth ] = useState('');
    const [ quiltName, setQuiltName ] = useState('');
    const [ quiltID, setQuiltID ] = useState('');
    const navigate = useNavigate();
    

    if (savedBlocks.length === 0) {
        return <div>No blocks found, please go make one!</div>;
    }

    const handleHeightChange = (e) => {
        const selectedSize = e.target.value;
        setQuiltSizeHeight(selectedSize);
    }

    const handleWidthChange = (e) => {
        const selectedSize = e.target.value;
        setQuiltSizeWidth(selectedSize);
    }

    const handleBlockChange = (e) => {
        const selectedBlock = e.target.value;
        setBlockID(selectedBlock);
    }

    const handleQuiltNameChange = (e) => {
        const selectedName = e.target.value;
        setQuiltName(selectedName);
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
        navigate(`/myquilts`);
    }



  return (
    <div>
        <form onSubmit={handleSubmit} className='build-quilt-form'>

            <div className='build-quilt-form-size'>
                <div className='build-quilt-form-size-div'>
                    <label>Height</label>
                    <input type='range' min="4" max="10" onChange={handleHeightChange} required></input>
                </div>

                <div className='build-quilt-form-size-div'>
                    <label>Width</label>
                    <input type='range' min="4" max="10" onChange={handleWidthChange} required></input>
                </div>
            </div>


            <div className='build-quilt-form-pick-block-main'>
                <label>Pick a Block</label>
                <div className='build-quilt-form-pick-block'>
                    {savedBlocks.map((block, index) => (
                        <div key={index} className='build-quilt-blocks'>
                            
                            <input type='radio' name="block" value={block.ID} id={`block-${index}`} onChange={handleBlockChange} required></input>
                            <label htmlFor={`block-${index}`}><ShowCustomBlock ID={block.ID}/></label>
                        </div>
                    ))}
                </div>

            </div>

            <div>
                <label>Quilt Name</label>
                <input type='text' value={quiltName} onChange={handleQuiltNameChange} required></input>
            </div>

            <div className='build-quilt-form-submit'>
                <button type='submit'>Submit</button>
            </div>
        </form>
    </div>
  )
}

export default BuildQuiltForm