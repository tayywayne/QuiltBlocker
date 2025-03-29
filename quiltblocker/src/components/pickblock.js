import React, { useState, useEffect } from 'react';

function PickBlock({ onSelect }) {
  const [blockType, setBlockType] = useState('');

  useEffect(() => {
    const storedBlock = localStorage.getItem('userBlockType');
    if (storedBlock) {
      setBlockType(storedBlock);
    }
  }, []);

  const handleSubmitBlock = (e) => {
    e.preventDefault();
    localStorage.setItem('userBlockType', blockType);
    onSelect(blockType);
  };

  return (
    <div className="home">
      <h2>PickBlock</h2>
      <form onSubmit={handleSubmitBlock}>
        <label htmlFor='userBlockType'>Pick a block</label>
        <select id='blocks' value={blockType} onChange={(e) => setBlockType(e.target.value)} required>
          <option value='fourpatch'>Four Patch</option>
          <option value='railfence'>Rail Fence</option>
          <option value='star'>Star</option>
        </select>
        <button type='submit'>Next</button>
      </form>
    </div>
  );
}

export default PickBlock;