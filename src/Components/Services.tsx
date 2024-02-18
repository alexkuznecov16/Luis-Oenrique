import React from 'react'
import service_1 from '../assets/1.png'
import service_2 from '../assets/2.png'
import service_3 from '../assets/3.png'
import service_4 from '../assets/4.png'
import service_5 from '../assets/5.png'
import service_6 from '../assets/6.png'

const Services: React.FC = () => {
  return (
    <div id='services' className="Services">
      <div className="container">
        <h3 className="Services-name section-name">SER<span>VI</span>CES</h3>
        <div className="Services__inner">
          <div className="Services-item item">
            <img src={service_1} alt="User Research" />
            <h6 className="item__title">User Research</h6>
          </div>
          <div className="Services-item item">
            <img src={service_2} alt="IA And Wireframes" />
            <h6 className="item__title">IA And Wireframes</h6>
          </div>
          <div className="Services-item item">
            <img src={service_3} alt="User Testing" />
            <h6 className="item__title">User Testing</h6>
          </div>
          <div className="Services-item item">
            <img src={service_4} alt="Looks and Feel Design (UI)" />
            <h6 className="item__title">Looks and Feel Design (UI)</h6>
          </div>
          <div className="Services-item item">
            <img src={service_5} alt="Delivery" />
            <h6 className="item__title">Delivery</h6>
          </div>
          <div className="Services-item item">
            <img src={service_6} alt="Integration Support" />
            <h6 className="item__title">Integration Support</h6>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Services