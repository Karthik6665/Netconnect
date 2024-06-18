import React from 'react';
import './App.css';
import rad from './R.png'
const App = () => {
  return (
    <div id='main'>
      <div id='section1'>
        <div id='section2'>
          <div className='innerdiv'>
            <div className='di'>
              <img id='po' src={rad} alt='R.png' />
              <div className='ind'>
                <h2>NetConnect</h2>
                <p>by Google</p>
              </div>
            </div>
            <h1 className='k'>Global Service Status</h1>
          </div>
          <div id='innerdiv2'>
            <button className='stbtn'>Plans&Price</button>
            <select>
              <option>English(united states)</option>
              <option>Dansk</option>
              <option>Detuch</option>
              <option>English(united Kindom)</option>
              <option>Polski</option>
              <option>Nederlands</option>
              <option>Norsk</option>
            </select>
            <button className='strtbtn'>Start For Free</button>
          </div>
        </div>
        <div id='section3'>
        <li>NetConnect for Commercial</li>
        <li>NetConnect for Government</li>
        <li>Incident History</li>
        <li>Maintenance</li>
        <li>Updates</li>
        <li>Calendar</li>
        <li>FAQ's</li>
        </div>
        <div id='section4'>
          <h1 className='head'>NetConnect For Commercials</h1>
          <p className='pi'>View the operational status of NetConnect services in real-time.</p>
        </div>
      </div>
      <div className='footer'>
        <span>©2024 Google and/or its affiliates. All rights reserved.</span>
        <span>Terms & Conditions</span>
        <span>Privacy Statement</span>
        <span>Cookies</span>
        <span>Trademarks</span>
      </div>
      <div className='mi'>
        <h1>Welcome to NetConnect</h1>
        <p className='ko'>Your ultimate platform for virtual meetings and collaboration. Connect with people globally, seamlessly</p>
      </div>
    </div>
  );
};

export default App;
