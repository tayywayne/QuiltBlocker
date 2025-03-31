// import React from 'react'
// import ShowCustomBlock from './showcustomblock';

// function MyQuilts() {
//     const savedQuilts = JSON.parse(localStorage.getItem('quilts')) || [];

//     if (savedQuilts.length === 0) {
//         return <div>No quilts found</div>;
//     }

//     return (
//         <div>
//             {savedQuilts.map((quilt) => (
//                 <div key={quilt.ID} className='block'>
//                     <ShowCustomBlock ID={quilt.ID} />
//                 </div>
//             ))}
//         </div>
//     )
// }

// export default MyQuilts