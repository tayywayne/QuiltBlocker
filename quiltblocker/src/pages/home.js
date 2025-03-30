import React from 'react';
import BuildQuilt from '../components/buildquilt';
// import ShowCustomBlock from '../components/showcustomblock';
import MyQuilts from '../components/myquilts';


function Home() {
  return (
    <div className="home">
      <BuildQuilt />
      <MyQuilts />
      {/* <ShowCustomBlock ID='119151'/> */}
    </div>
  );
}

export default Home;