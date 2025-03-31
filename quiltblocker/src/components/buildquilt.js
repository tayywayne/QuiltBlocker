import React, { useState, useEffect } from 'react'
import { blockdata } from './blockdata'
import FourPatch from './blocks/fourpatch'
import RailFence from './blocks/railfence'  
import Star from './blocks/star'
import { useNavigate } from 'react-router-dom'

function BuildQuilt() {
    const [quiltID, setQuiltID] = useState('');
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
        // console.log('Selected Pattern:', selectedPattern);
        // console.log('Number of Colors:', numColors);
        // console.log('Colors:', colors);
    }

    const handleColorChange = (index, value) => {
        const newColors = [...colors]
        newColors[index] = value;
        setColors(newColors);
        // console.log('Updated Colors:', newColors);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        const newQuiltID = Math.floor(Math.random() * 1000000);
        setQuiltID(newQuiltID);
        const newQuilt = {
            ID: newQuiltID,
            pattern: pattern,
            colors: colors
        }
        const savedQuilts = JSON.parse(localStorage.getItem('quilts')) || [];
        savedQuilts.push(newQuilt);
        localStorage.setItem('quilts', JSON.stringify(savedQuilts));
        // console.log('New Quilt:', newQuilt);
        // console.log('Saved Quilts:', savedQuilts);
        navigate(`/myblocks`);

    }



  return (
    <div>

        <form onSubmit={handleSubmit} className='build-quilt-form'>
            <div>
                <h2>Choose a Pattern</h2>
                <input onClick={handlePatternChange} type='radio' value='fourpatch' id='fourpatch' name='pattern' required/>
                <label htmlFor='fourpatch'><FourPatch colors={defaultColors}/>Four Patch</label>
                <input onClick={handlePatternChange} type='radio' value='railfence' id='railfence' name='pattern' required/>
                <label htmlFor='railfence'><RailFence colors={defaultColors}/>Rail Fence</label>
                <input onClick={handlePatternChange} type='radio' value='star' id='star' name='pattern' required/>
                <label htmlFor='star'><Star colors={defaultColors}/>Star</label>
            </div>

            <div>
                <h2>Pick your colors</h2>
                {colors.map((color, index) => (
                    <div key={index}>
                        <label htmlFor={`color-${index}`}>{`color-${index + 1}`}</label>
                        <input type='color' id={`color-${index}`} value={color} onChange={(e) => handleColorChange(index, e.target.value)} required/>
                    </div>

                ))}
            </div>
            <div className='build-quilt-form-submit'>
                <button type='submit'>Submit</button>
            </div>
            
        </form>
    </div>
  )
}

export default BuildQuilt