import React from "react";
import { Link } from "gatsby";
import course1 from "../assets/images/treatments/rhino-1.jpg";
import course2 from "../assets/images/treatments/hair-1.jpg";
import course3 from "../assets/images/treatments/breast-1.jpg";
import course4 from "../assets/images/treatments/tummy-1.jpg";
import course5 from "../assets/images/treatments/lipo-1.jpg";
import course6 from "../assets/images/treatments/butt-1.jpg";
import { StaticImage } from "gatsby-plugin-image"

const TopCourses = () => {
  return (
    <section className="top-course-one top-course-page">
      <div className="container">
        <div className="row">

        <div className="col-lg-4">
            <Link to="/treatments/rhinoplasty">
              <div className="course-one__single">
                <div className="treatment-one__image">
                  <StaticImage placeholder="blurred" src="../assets/images/treatments/rhino-1.jpg" alt="" />
                </div>
                <div className="treatment-one__content">
                  <a className="treatment-one__category">
                  Rhinoplasty
                  </a>
                </div>
              </div>
            </Link>
          </div>

          <div className="col-lg-4">
            <a href="#none">
              <div className="course-one__single">
                <div className="treatment-one__image">
                  <StaticImage placeholder="blurred" src="../assets/images/treatments/hair-1.jpg" alt="" />
                </div>
                <div className="treatment-one__content">
                  <a className="treatment-one__category">
                  Hair Transplant
                  </a>
                </div>
              </div>
            </a>
          </div>

          <div className="col-lg-4">
            <a href="#none">
              <div className="course-one__single">
                <div className="treatment-one__image">
                  <StaticImage placeholder="blurred" src="../assets/images/treatments/breast-1.jpg" alt="" />
                </div>
                <div className="treatment-one__content">
                  <a className="treatment-one__category">
                  Breast Augmentation
                  </a>
                </div>
              </div>
            </a>
          </div>


          <div className="col-lg-4">
            <a href="#none">
              <div className="course-one__single">
                <div className="treatment-one__image">
                  <StaticImage placeholder="blurred" src="../assets/images/treatments/tummy-1.jpg" alt="" />
                </div>
                <div className="treatment-one__content">
                  <a className="treatment-one__category">
                  Tummy Tuck
                  </a>
                </div>
              </div>
            </a>
          </div>

          <div className="col-lg-4">
            <a href="#none">
              <div className="course-one__single">
                <div className="treatment-one__image">
                  <StaticImage placeholder="blurred" src="../assets/images/treatments/lipo-1.jpg" alt="" />
                </div>
                <div className="treatment-one__content">
                  <a className="treatment-one__category">
                  Liposuction
                  </a>
                </div>
              </div>
            </a>
          </div>
          
          <div className="col-lg-4">
            <a href="#none">
              <div className="course-one__single">
                <div className="treatment-one__image">
                  <StaticImage placeholder="blurred" src="../assets/images/treatments/butt-1.jpg" alt="" />
                </div>
                <div className="treatment-one__content">
                  <a className="treatment-one__category">
                    Butt Lift
                  </a>
                </div>
              </div>
            </a>
          </div>
          
          

        </div>

        <div className="all-items-link">
          
          <a href="/courses" className="thm-btn">
            View All Treatments
          </a>
          
        </div>
        

      </div>
    </section>
  );
};

export default TopCourses;
