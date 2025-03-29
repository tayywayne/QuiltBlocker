import React from 'react';
import QuiltForm from '../components/quiltform';
import GenedQuilt from '../components/genedquilt';


function Home() {
  return (
    <div className="home">
        <QuiltForm />
        <GenedQuilt />
    </div>
  );
}

export default Home;