// import React, { useState, useEffect } from "react";
// import PickBlock from "./pickblock";
// import PickColors from "./pickcolors";
// import GenedQuilt from "./genedquilt";

// function QuiltForm() {
//     const [blockType, setBlockType] = useState(() => localStorage.getItem('userBlockType') || null);
//     const [colors, setColors] = useState(() => localStorage.getItem('userColors') || null);

//     useEffect(() => {
//         if (blockType) {
//             localStorage.setItem('userBlockType', blockType);
//         }
//     }, [blockType]);

//     const handleBlockSubmit = (selectedType) => {
//         setBlockType(selectedType);
//     };

//     useEffect(() => {
//         if (colors) {
//             localStorage.setItem('userColors', colors);
//         }
//     }, [colors]);

//     const handleColorSubmit = (selectedColors) => {
//         setColors(selectedColors);
//     }

//     return (
//         <div>
//             <PickBlock onSelect={handleBlockSubmit} />
//             {blockType && <PickColors type={blockType} onSelect={handleColorSubmit}/>}
//             {colors && <GenedQuilt />}
//         </div>
//     );
// }

// export default QuiltForm;