import React from 'react';
import Contacts from './Contacts';
import { FaFacebookSquare } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa6";
import { FaGooglePlusSquare } from "react-icons/fa";
import { FaSquareBehance } from "react-icons/fa6";
import { FaSquareDribbble } from "react-icons/fa6";

const Footer: React.FC = () => {
  return (
    <div className='Footer'>
      <div className="container">
        <Contacts/>
        <div className="Footer__block">
          <nav className="Footer-social social">
            <a href="#">
              <FaFacebookSquare />
            </a>
            <a href="#">
              <FaSquareXTwitter />
            </a>
            <a href="#">
              <FaLinkedin />
            </a>
            <a href="#">
              <FaGooglePlusSquare />
            </a>
            <a href="#">
              <FaSquareBehance />
            </a>
            <a href="#">
              <FaSquareDribbble />
            </a>
          </nav>
          <div className="Footer-copyright copyright">
            2017. All Right Reserved
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer