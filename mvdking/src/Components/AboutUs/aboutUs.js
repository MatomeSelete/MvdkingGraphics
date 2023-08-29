import React from "react";

import Logo from '../ images/icons8-logo-design-64.png';
import CustomLogo from '../ images/icons8-paint-48.png';


import "./aboutUs.css";

function AboutUs() {
  return (
    <div className="aboutUs">
      <section className="heading">
        <h1>Whats Makes Us Diffirent.</h1>
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book.
        </p>
      </section> 

      <section className="aboutBody">

        <div className="card w-96 bg-base-100 shadow-xl">
          <div className="card-body">
            <h2 className="card-title">Logo Design</h2>
            <img src={Logo} alt='log' className="imgLog"/>
            <p>If a dog chews shoes whose shoes does he choose?</p>
            <div className="card-actions justify-end">
              <button className="btn btn-primary">More</button>
            </div>
          </div>
        </div>

        <div className="card w-96 bg-base-100 shadow-xl">
          <div className="card-body">
            <h2 className="card-title">Custom Logo Design</h2>
            <img src={CustomLogo} alt='log' className="imgLog"/>
            
            <p>If a dog chews shoes whose shoes does he choose?</p>
            <div className="card-actions justify-end">
              <button className="btn btn-primary">More</button>
            </div>
          </div>
        </div>


      </section>
    </div>
  );
}

export default AboutUs;
