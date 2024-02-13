import React from 'react'
import './UpdatedApp.css';
import FooterBody from './FooterBody';
import MainBody from './MainBody';
import { Toaster } from 'react-hot-toast';
const UpdatedApp = () => {
  return (
    <div>
    <div>
      <Toaster position="top-center"
        toastOptions={{
          success:{
            theme:{
              primary:'#4aed88'
            }
          }
        }}/>
      </div>
        <MainBody />
        <FooterBody />
    </div>
  )
}

export default UpdatedApp
