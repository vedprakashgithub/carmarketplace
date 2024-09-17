import React from 'react'
import { App as SendbirdApp } from '@sendbird/uikit-react';
import '@sendbird/uikit-react/dist/index.css';

function Inbox() {
  return (
    <div>
        <div style={{ width:'90vw', height:'100vh' }} className='border p-5 shadow-lg'>
      <SendbirdApp 
        // You can find your Sendbird application ID on the Sendbird dashboard. 
        appId={import.meta.env.VITE_SENDBIRD_APP_ID}
        // Specify the user ID you've created on the dashboard.
        // Or you can create a user by specifying a unique userId.  
        userId={'DigitalField'}
      />
    </div>
      
    </div>
  )
}

export default Inbox
