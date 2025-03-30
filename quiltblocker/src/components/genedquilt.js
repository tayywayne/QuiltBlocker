// import React from "react";
// import { blockdata } from "./blockdata";
// import FourPatch from "./blocks/fourpatch";
// import RailFence from "./blocks/railfence";
// import Star from "./blocks/star";
// import './styles/genedquilt.css';

// function GenedQuilt() {
//     const blockType = localStorage.getItem('userBlockType');
//     const colors = localStorage.getItem('userColors');
//     const currentBlock = blockdata.find(block => block.id === blockType);
//     const quiltSize = 6

//     const renderQuilt = () => {
//         const numOfBlocks = quiltSize * quiltSize;
//         const blocks = [];
//         for (let i = 0; i < numOfBlocks; i++) {
//             if (blockType === 'fourpatch') {
//                 blocks.push(<FourPatch key={i} colors={colors} />)
//             }
//             else if (blockType === 'railfence') {
//                 blocks.push(<RailFence key={i} colors={colors} />)
//             }
//             else if (blockType === 'star') {
//                 blocks.push(<Star key={i} colors={colors} />)
//             }
//             else {
//                 blocks.push(<div key={i} className="block-placeholder">Unknown Block</div>)
//             }
//         }
//         return blocks
//     }

//     return (
//         <div className="gened-quilt">
//             {renderQuilt()}
//         </div>
//     )
// }

// export default GenedQuilt;