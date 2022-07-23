import React, { Component } from "react";
//import CountUp from "react-countup";
//import VisibilitySensor from "react-visibility-sensor";
import about1 from "../assets/images/about-1-1.jpg";
export default class AboutTwo extends Component {
  constructor() {
    super();
    /*
    this.state = {
      startCounter: false
    };
    */

  }

  /*
  onVisibilityChange = (isVisible) => {
    if (isVisible) {
      this.setState({ startCounter: true });
    }
  };
  */

  render() {
    return (
      <section className="about-two">
        <div className="container">
          <div className="row">
            <div className="col-xl-12">
              <div className="about-two__content">

                <div className="block-title text-left">
                  <h2 className="block-title__title">
                    Choose Your Treatment in Turkey
                  </h2>
                </div>
                
                <p className="about-two__text">
                  There are many variations of passages of lorem ipsum available
                  but the majority have suffered alteration in some form by
                  injected humour or randomised words which don't look.
                </p>

                <div className="about-two__single-wrap">
                  
                  <div className="about-two__single">
                    <div className="about-two__single-icon">
                      <i className="kipso-icon-professor"></i>
                    </div>
                    <div className="about-two__single-content">
                      <p className="about-two__single-text">
                        Find Best Doctors
                      </p>
                    </div>
                  </div>

                  <div className="about-two__single">
                    <div className="about-two__single-icon">
                      <i className="kipso-icon-knowledge"></i>
                    </div>
                    <div className="about-two__single-content">
                      <p className="about-two__single-text">
                        Get Consultation
                      </p>
                    </div>
                  </div>

                  <div className="about-two__single">
                    <div className="about-two__single-icon">
                      <i className="kipso-icon-knowledge"></i>
                    </div>
                    <div className="about-two__single-content">
                      <p className="about-two__single-text">
                      Start Your Medical Journey
                      </p>
                    </div>
                  </div>

                </div>
                
              </div>
            </div>
            
          </div>
        </div>
      </section>
    );
  }
}
