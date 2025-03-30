// import React, { useState } from "react";
// import { blockdata } from "./blockdata";

// function PickColors({type, onSelect}) {
//     const currentBlock = blockdata.find(block => block.id === type);
//     const [colors, setColors] = useState(
//         Array(currentBlock.numofblocks).fill('#ffffff')
//     )

//     const handleColorChange = (index, value) => {
//         const newColors = [...colors];
//         newColors[index] = value;
//         setColors(newColors);
//     }

//     const handleSubmit = (e) => {
//         e.preventDefault();
//         localStorage.setItem('userColors', colors)
//         onSelect(colors);
//     }


//     return (
//         <div>
//             <form onSubmit={handleSubmit}>
//                 {currentBlock.colors.map((color, index) => (
//                     <div key={color.id}>
//                         <label htmlFor={`color-${index}`}>Color {index + 1}</label>
//                         <input
//                             type="color"
//                             id={`color-${index}`}
//                             value={colors[index]}
//                             onChange={(e) => handleColorChange(index, e.target.value)}
//                         />
//                     </div>
//                 ))}
//                 <button type="submit">next</button>
//             </form>
//         </div>
//     )
// }

// export default PickColors;