import React from 'react';
import Header from './Header';

const Hero: React.FC = () => {
  return (
    <div className="Hero">
      <div className="container">
        <Header />
        <div className="Hero__block">
          <h2 className="title">Luis Oenrique</h2>
          <p className="info">User Experience / User Interface Expert</p>
          <div className="buttons">
            <button>KNOW MORE</button>
            <button>HIRE ME</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero