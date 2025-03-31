import React from 'react';
import logo from '../images/logo.png';
import e1 from '../images/e1.png';
import e2 from '../images/e2.png';
import e3 from '../images/e3.png';
import e4 from '../images/e4.png';
import e5 from '../images/e5.png';
import e6 from '../images/e6.png';
import e7 from '../images/e7.png';
import e8 from '../images/e8.png';
import HurnDash from '../components/blocks/hurndash';


function Home() {
  return (
    <div className="home">
        <HurnDash />
      <div className='home-welcome'>
        <h1>Welcome To</h1>
        <img src={logo} alt="Logo"/>
      </div>
      <div className='home-intro'>
        <p>
          QuiltBlocker is a web application that allows you to create and customize quilt blocks and quilts. 
        </p>
      </div>
      <div className='rainbow-divider'></div>
      <div className='home-features'>
        <h2>Features</h2>
        <ul>
          <li>Create custom quilt blocks</li>
          <li>Assemble quilt blocks into quilts</li>
          <li>Save and manage your quilts</li>
          <li>Share your creations with others</li>
        </ul>
      </div>
      <div className='rainbow-divider'></div>
      <div class="home-examples">
      <div class="home-examples-marquee">
        {[...Array(10)].map((_, i) => (
              <React.Fragment key={i}>
                <div><img src={e1} alt="example block" /></div>
                <div><img src={e2} alt="example block" /></div>
                <div><img src={e3} alt="example block" /></div>
                <div><img src={e4} alt="example block" /></div>
                <div><img src={e6} alt="example block" /></div>
                <div><img src={e5} alt="example block" /></div>
                <div><img src={e8} alt="example block" /></div>
                <div><img src={e7} alt="example block" /></div>
              </React.Fragment>
            ))}
          </div>
      </div>

    </div>
  );
}

export default Home;