import React, { useState } from 'react';
import Login from './Login';
const ModalLoginButton = () => {
  return(
    <div style={{borderRadius:'5px'}}>
        <div className="modal">
          <div className="modal-content">
            <span className="close text-black" onClick={()=>document.querySelector('.modal').style.display='none'}>&times;</span>
            <Login />
          </div>
        </div>
        </div>)
    }
export default ModalLoginButton;