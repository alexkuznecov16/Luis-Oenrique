import React from 'react';
import { IoMdSend } from "react-icons/io";


const Contacts: React.FC = () => {
  return (
    <div id="Contacts" className="Contacts">
       <div className="container">
        <h3 className="Contacts-name section-name">SAY <span>HE</span>LLO!</h3>
        <form action='/'>
          <input required type="text" placeholder='Name' />
          <input required type="email" placeholder='Email' />
          <textarea required placeholder='Message'></textarea>
          <button type='submit'>SEND <IoMdSend /></button>
        </form>
       </div>
    </div>
  )
}

export default Contacts