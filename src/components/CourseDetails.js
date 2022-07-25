import React from "react";
import team1 from "../assets/images/team-1-1.jpg";
import team2 from "../assets/images/team-1-1.jpg";
import courseD1 from "../assets/images/treatments/rhino-1.jpg";
import lcImage1 from "../assets/images/lc-1-1.jpg";
import lcImage2 from "../assets/images/lc-1-2.jpg";
import lcImage3 from "../assets/images/lc-1-3.jpg";

const CourseDetails = () => {
  return (
    <section className="course-details">
      <div className="container">
        <div className="row">
          <div className="col-lg-8">
            <div className="course-details__content">

              <div className="course-details__top">
                <div className="course-details__top-left">
                  <h2 className="course-details__title">
                    Rhinoplasty
                  </h2>
                </div>
                
              </div>
              <div className="course-one__image">
                <img src={courseD1} alt="" />
              </div>



              <ul className="course-details__tab-navs list-unstyled nav nav-tabs">
                <li>
                  <a
                    class="active"
                    id="overview-tab"
                    data-bs-toggle="tab" 
                    data-bs-target="#overview"
                    href="#overview"
                    role="tab"
                    type="button"
                    aria-controls="overview" 
                    aria-selected="true"
                  >
                    Description
                  </a>
                </li>
                <li class="nav-item" role="presentation">
                  <a
                    class=""
                    id="consider-tab"
                    data-bs-toggle="tab" 
                    data-bs-target="#consider"
                    href="#consider"
                    role="tab"
                    type="button"
                    aria-controls="consider" 
                    aria-selected="false"
                  >
                    When to Consider?
                  </a>
                </li>
                <li>
                <a
                    class=""
                    id="expectations-tab"
                    data-bs-toggle="tab" 
                    data-bs-target="#expectations"
                    href="#expectations"
                    role="tab"
                    type="button"
                    aria-controls="expectations" 
                    aria-selected="false"
                  >
                    Expectations
                  </a>
                </li>
              </ul>

              <div className="tab-content course-details__tab-content ">
                <div
                  className="tab-pane show active animated fadeInUp"
                  role="tabpanel"
                  id="overview"
                  aria-labelledby="overview-tab"
                >
                  <p className="course-details__tab-text">
                  Rhinoplasty is a surgical procedure that can improve the appearance of your nose. It can correct functional problems with your nose, such as difficulty breathing, and it can also improve the overall symmetry of your face.
                  </p>
                  <br />
                  <p className="course-details__tab-text">
                  Rhinoplasty is typically performed by a plastic surgeon and requires general anesthesia. Recovery time varies depending on the extent 
                  of surgery, but most people are able to return to work within one week.
                  </p>
                  <br />
                  <ul className="list-unstyled course-details__overview-list">
                    <li>It has survived not only five centuries</li>
                    <li>Lorem Ipsum is simply dummy text of the new design</li>
                    <li>Printng and type setting ipsum</li>
                    <li>Take a look at our round up of the best shows</li>
                  </ul>
                </div>


                <div
                  className="tab-pane  animated fadeInUp"
                  role="tabpanel"
                  id="consider"
                  aria-labelledby="consider-tab"
                >
                  <ul className="course-details__curriculum-list list-unstyled">
                    <li>
                      <div className="course-details__curriculum-list-left">
                        <div className="course-details__meta-icon video-icon">
                        </div>
                        <a href="#none">Aiming for a better proportion and a more appealing look</a>{" "}
                      </div>
                    </li>
                    
                    <li>
                      <div className="course-details__curriculum-list-left">
                        <div className="course-details__meta-icon video-icon">
                        </div>
                        <a href="#none">Restoring the symmetry of the breasts</a>{" "}
                      </div>
                    </li>

                    <li>
                      <div className="course-details__curriculum-list-left">
                        <div className="course-details__meta-icon video-icon">
                        </div>
                        <a href="#none">Post-pregnancy, massive weight loss and aging</a>{" "}
                      </div>
                    </li>
                    
                  </ul>
                </div>


                <div
                  className="tab-pane  animated fadeInUp"
                  role="tabpanel"
                  id="expectations"
                  aria-labelledby="expectations-tab"
                >
                  <ul className="course-details__curriculum-list list-unstyled">
                    <li>
                      <div className="course-details__curriculum-list-left">
                        <div className="course-details__meta-icon video-icon">
                        </div>
                        <a href="#none">Improved balance, shape and symmetry</a>{" "}
                      </div>
                    </li>
                    
                    <li>
                      <div className="course-details__curriculum-list-left">
                        <div className="course-details__meta-icon video-icon">
                        </div>
                        <a href="#none">Youthful appearance</a>{" "}
                      </div>
                    </li>

                    <li>
                      <div className="course-details__curriculum-list-left">
                        <div className="course-details__meta-icon video-icon">
                        </div>
                        <a href="#none">Enhanced self-confidence</a>{" "}
                      </div>
                    </li>
                    
                  </ul>
                </div>


                
              </div>

            </div>
          </div>
          <div className="col-lg-4">
            <div className="course-details__price">
              <p className="course-details__price-text">Average price </p>
              <p className="course-details__price-amount">$5000.00</p>
              <a href="#none" className="thm-btn course-details__price-btn">
                Get Free Quote
              </a>
            </div>

            <div className="course-details__meta">
              <a href="#none" className="course-details__meta-link">
                <span className="course-details__meta-icon">
                  <i className="far fa-clock"></i>
                </span>
                Duration: <span>3-5 hours</span>
              </a>
              <a href="#none" className="course-details__meta-link">
                <span className="course-details__meta-icon">
                <i class="fas fa-regular fa-capsules"></i>
                </span>
                Anesthesia: <span>General</span>
              </a>
              <a href="#none" className="course-details__meta-link">
                <span className="course-details__meta-icon">
                  <i className="fas fa-play"></i>
                </span>
                Recovery: <span>3-4 weeks</span>
              </a>
              <a href="#none" className="course-details__meta-link">
                <span className="course-details__meta-icon">
                <i class="fas fa-check"></i>
                </span>
                Result: <span>2 months</span>
              </a>
            </div>
            <div className="course-details__list">
              <h2 className="course-details__list-title">Popular Treatments</h2>
              <div className="course-details__list-item">
                <div className="course-details__list-img">
                  <img src={lcImage1} alt="" />
                </div>
                <div className="course-details__list-content">
                  
                  <h3>
                    <a href="#none">Breast Augmentation</a>
                  </h3>
                  
                </div>

              </div>
              <div className="course-details__list-item">
                <div className="course-details__list-img">
                  <img src={lcImage2} alt="" />
                </div>
                <div className="course-details__list-content">
                  
                  <h3>
                    <a href="#none">Tummy Tuck</a>
                  </h3>

                  
                </div>
              </div>
              <div className="course-details__list-item">
                <div className="course-details__list-img">
                  <img src={lcImage3} alt="" />
                </div>
                <div className="course-details__list-content">
                  
                  <h3>
                    <a href="#none">Liposuction</a>
                  </h3>
                  
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CourseDetails;
