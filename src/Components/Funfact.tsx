import React from 'react';
import icon_1 from '../assets/study.png';
import icon_2 from '../assets/happiness.png';
import icon_3 from '../assets/delivery-complete.png';
import icon_4 from '../assets/cup.png';

const Funfact: React.FC = () => {
  return (
    <div id='funfact' className="Funfact">
      <div className="container">
        <div className="Funfact__inner">
          <div className="Funfact-item item">
            <img src={icon_1} alt="Study" />
            <span className='item__subtitle'>120</span>
            <h6 className="item__title">HANDS TO WORK</h6>
          </div>
          <div className="Funfact-item item">
            <img src={icon_2} alt="Happiness" />
            <span className='item__subtitle'>310</span>
            <h6 className="item__title">HAPPY CLIENT</h6>
          </div>
          <div className="Funfact-item item">
            <img src={icon_3} alt="Complete" />
            <span className='item__subtitle'>510</span>
            <h6 className="item__title">FINISHED PROJECT</h6>
          </div>
          <div className="Funfact-item item">
            <img src={icon_4} alt="Coffee" />
            <span className='item__subtitle'>720</span>
            <h6 className="item__title">CUPS OF COFFEE</h6>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Funfact