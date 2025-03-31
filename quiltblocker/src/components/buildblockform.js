import React, { useState, useEffect } from 'react'
import { blockdata } from './blockdata'
import FourPatch from './blocks/fourpatch'
import RailFence from './blocks/railfence'  
import Star from './blocks/star'
import HurnDash from './blocks/hurndash'
import { useNavigate } from 'react-router-dom'

function BuildBlockForm() {
    const [blockID, setBlockID] = useState('');
    const [pattern, setPattern] = useState('');
    const [numColors, setNumColors] = useState(0);
    const [colors, setColors] = useState([]);
    const navigate = useNavigate();
    const defaultColors = ['#f9c6c9', '#dbcdf0', '#c9e4de', '#faedcb'];

    const handlePatternChange = (e) => {
        const selectedPattern = e.target.value;
        setPattern(selectedPattern);
        const patternData = blockdata.find(block => block.id === selectedPattern);
        if (patternData) {
            setNumColors(patternData.numofcolors);
            setColors(Array(patternData.numofcolors).fill('#000000'));
        }
    }

    const handleColorChange = (index, value) => {
        const newColors = [...colors]
        newColors[index] = value;
        setColors(newColors);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        const newBlockID = Math.floor(Math.random() * 1000000);
        setBlockID(newBlockID);
        const newBlock = {
            ID: newBlockID,
            pattern: pattern,
            colors: colors
        }
        const savedBlocks = JSON.parse(localStorage.getItem('blocks')) || [];
        savedBlocks.push(newBlock);
        localStorage.setItem('blocks', JSON.stringify(savedBlocks));
        navigate(`/myblocks`);

    }



  return (
    <div>

        <form onSubmit={handleSubmit} className='build-quilt-form'>
            <div className='build-block-pick-pattern'>
                <h2>Choose a Pattern</h2>
                <div className='build-block-pattern'>
                    <input onClick={handlePatternChange} type='radio' value='fourpatch' id='fourpatch' name='pattern' required/>
                    <label htmlFor='fourpatch'><FourPatch colors={defaultColors}/></label>
                </div>
                <div className='build-block-pattern'>
                    <input onClick={handlePatternChange} type='radio' value='railfence' id='railfence' name='pattern' required/>
                    <label htmlFor='railfence'><RailFence colors={defaultColors}/></label>
                </div>
                <div className='build-block-pattern'>
                    <input onClick={handlePatternChange} type='radio' value='star' id='star' name='pattern' required/>
                    <label htmlFor='star'><Star colors={defaultColors}/></label>
                </div>
                <div className='build-block-pattern'>
                    <input onClick={handlePatternChange} type='radio' value='hurndash' id='hurndash' name='pattern' required/>
                    <label htmlFor='hurndash'><HurnDash colors={defaultColors}/></label>
                </div>
            </div>

            <div className='build-block-pick-colors'>
                <div>
                    <h2>Pick your colors</h2>
                    {colors.map((color, index) => (
                        <div key={index} className='build-block-color'>
                            <label htmlFor={`color-${index}`}>{`Color ${index + 1}`}</label>
                            <input type='color' id={`color-${index}`} value={color} onChange={(e) => handleColorChange(index, e.target.value)} required/>
                        </div>

                    ))}
                </div>

            </div>
            <div className='build-quilt-form-submit'>
                <button type='submit'>Submit</button>
            </div>
            
        </form>
    </div>
  )
}

export default BuildBlockForm