import React from "react";
import { Link } from "gatsby";
import course1 from "../assets/images/treatments/rhino-1.jpg";
import course2 from "../assets/images/treatments/hair-1.jpg";
import course3 from "../assets/images/treatments/breast-1.jpg";
import course4 from "../assets/images/treatments/tummy-1.jpg";
import course5 from "../assets/images/treatments/lipo-1.jpg";
import course6 from "../assets/images/treatments/butt-1.jpg";

const TopCourses = () => {
  return (
    <section className="top-course-one top-course-page">
      <div className="container">
        <div className="row">

          <div className="col-lg-4">
            <div className="course-one__single">
              <div className="treatment-one__image">
                <img src={course1} alt="" />
              </div>
              <div className="treatment-one__content">
                <a href="#none" className="treatment-one__category">
                  Rhinoplasty
                </a>
              </div>
            </div>
          </div>

          <div className="col-lg-4">
            <div className="course-one__single">
              <div className="treatment-one__image">
                <img src={course2} alt="" />
              </div>
              <div className="treatment-one__content">
                <a href="#none" className="treatment-one__category">
                  Hair Transplant
                </a>
              </div>
            </div>
          </div>

          <div className="col-lg-4">
            <div className="course-one__single">
              <div className="treatment-one__image">
                <img src={course3} alt="" />
              </div>
              <div className="treatment-one__content">
                <a href="#none" className="treatment-one__category">
                  Breast Augmentation
                </a>
              </div>
            </div>
          </div>


          <div className="col-lg-4">
            <div className="course-one__single">
              <div className="treatment-one__image">
                <img src={course4} alt="" />
              </div>
              <div className="treatment-one__content">
                <a href="#none" className="treatment-one__category">
                  Tummy Tuck
                </a>
              </div>
            </div>
          </div>

          <div className="col-lg-4">
            <div className="course-one__single">
              <div className="treatment-one__image">
                <img src={course5} alt="" />
              </div>
              <div className="treatment-one__content">
                <a href="#none" className="treatment-one__category">
                  Liposuction
                </a>
              </div>
            </div>
          </div>

          <div className="col-lg-4">
            <div className="course-one__single">
              <div className="treatment-one__image">
                <img src={course6} alt="" />
              </div>
              <div className="treatment-one__content">
                <a href="#none" className="treatment-one__category">
                  Butt Lift
                </a>
              </div>
            </div>
          </div>
          
          

        </div>

        <div className="all-items-link">
          
          <a href="/courses">
            <button type="button" class="btn btn-light">See All Treatments</button>
          </a>
          
        </div>
        

      </div>
    </section>
  );
};

export default TopCourses;
