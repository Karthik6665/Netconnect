import React from 'react';
import './App.css';
import rad from './R.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faWifi,faPlus} from '@fortawesome/free-solid-svg-icons';
const App = () => {
  return (
    <div id='main'>
      <div id='section1'>
        <div id='section2'>
          <div className='innerdiv'>
            <div className='middiv'>
              <img id='po' src={rad} alt='R.png' />
              <div className='ind'>
                <h2 id='kl'>NetConnect</h2>
                <p id='ji'>by Google</p>
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
      <div id='section5'>
        <div id='web'>
          <div className='inweb'>
            <h4 className='lo'>NetConnect Meetings</h4>
          </div>
          <div className='sec2'>
            <p className='km'>Operational</p>
            <FontAwesomeIcon icon={faWifi} />
            <FontAwesomeIcon icon={faPlus} />
          </div>
        </div>
        <div id='wer'>
          <div className='inweb'>
              <h4 className='lo'>NetConnect App</h4>
            </div>
            <div className='sec2'>
              <p className='km'>Operational</p>
              <FontAwesomeIcon icon={faWifi} />
              <FontAwesomeIcon icon={faPlus} />
            </div>
        </div>
      </div>
    </div>
  );
};

export default App;
