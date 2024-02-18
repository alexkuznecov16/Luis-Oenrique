import React from 'react';
import about from '../assets/about-img.png';

const About: React.FC = () => {
  return (
    <div id='about' className="About">
      <div className="container">
        <div className="About__inner">
          <div className="About__info">
            <h3 className="About-name section-name"><span>KN</span>OW MORE ABOUT ME</h3>
            <p className="About-text">
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim.
            </p>
            <button>DOWNLOAD MY CV</button>
          </div>
          <img src={about} alt='about' className="About__img"/>
        </div>
      </div>
    </div>
  )
}

export default About