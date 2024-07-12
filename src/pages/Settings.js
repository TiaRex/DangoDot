import React from 'react'
import Navbar from '../components/Navbar';

const Settings = () => {
  return (
    <div>
        <Navbar />
        <aside id='settings' className='settings'>
        <ul className='settings-nav' id='settings-nav'>
            <li>Settings</li>
            <li>Privacy Policy</li>
            <li>Help</li>
            <li>Log Out</li>
        </ul>
        </aside>
    </div>
  )
}

export default Settings