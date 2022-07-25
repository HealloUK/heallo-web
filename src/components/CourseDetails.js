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
                    id="curriculum-tab"
                    data-bs-toggle="tab" 
                    data-bs-target="#curriculum"
                    href="#curriculum"
                    role="tab"
                    type="button"
                    aria-controls="curriculum" 
                    aria-selected="false"
                  >
                    Curriculum
                  </a>
                </li>
                <li>
                <a
                    class=""
                    id="reviews-tab"
                    data-bs-toggle="tab" 
                    data-bs-target="#reviews"
                    href="#reviews"
                    role="tab"
                    type="button"
                    aria-controls="reviews" 
                    aria-selected="false"
                  >
                    Reviews
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
                  Rhinoplasty is typically performed by a plastic surgeon and requires general anesthesia. Recovery time varies depending on the extent 
                  of surgery, but most people are able to return to work within one week.
                  </p>
                  <br />
                  <p className="course-details__tab-text">
                  Rhinoplasty is a surgical procedure that can improve the appearance of your nose. It can correct functional problems with your nose, such as difficulty breathing, and it can also improve the overall symmetry of your face. Rhinoplasty has many benefits, including:
-Improved Appearance: A well-performed rhinoplasty surgery can enhance the appearance of your nose by making it more symmetrical with the rest of your face. It can also make it look smaller or larger, depending on what you desire.
-Improved Functionality: If you have difficulty breathing through your nose due to a structural problem, rhinoplasty surgery may be able to correct that issue.
-Improved Self-Esteem: Many people who undergo rhinoplasty surgery report feeling more confident and self-assured after their procedure is complete.
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
                  id="curriculum"
                  aria-labelledby="curriculum-tab"
                >
                  <h3 className="course-details__tab-title">
                    Starting beginners level course
                  </h3>
                  <br />
                  <p className="course-details__tab-text">
                    Aelltes port lacus quis enim var sed efficitur turpis gilla
                    sed sit Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry’s
                    standard dummy text ever since.
                  </p>
                  <br />
                  <ul className="course-details__curriculum-list list-unstyled">
                    <li>
                      <div className="course-details__curriculum-list-left">
                        <div className="course-details__meta-icon video-icon">
                          <i className="fas fa-play"></i>
                        </div>
                        <a href="#none">Introduction to Editing</a>{" "}
                        <span>Preview</span>
                      </div>
                      <div className="course-details__curriculum-list-right">
                        16 minutes
                      </div>
                    </li>
                    <li>
                      <div className="course-details__curriculum-list-left">
                        <div className="course-details__meta-icon video-icon">
                          <i className="fas fa-play"></i>
                        </div>
                        <a href="#none">Overview of Editing</a>{" "}
                        <span>Preview</span>
                      </div>
                      <div className="course-details__curriculum-list-right">
                        10 minutes
                      </div>
                    </li>
                    <li>
                      <div className="course-details__curriculum-list-left">
                        <div className="course-details__meta-icon file-icon">
                          <i className="fas fa-folder"></i>
                        </div>
                        <a href="#none">Basic Editing Technology</a>
                      </div>
                    </li>
                    <li>
                      <div className="course-details__curriculum-list-left">
                        <div className="course-details__meta-icon quiz-icon">
                          <i className="fas fa-comment"></i>
                        </div>
                        <a href="#none">Quiz</a>
                      </div>
                      <div className="course-details__curriculum-list-right">
                        6 questions
                      </div>
                    </li>
                  </ul>
                  <br />
                  <br />
                  <h3 className="course-details__tab-title">
                    Intermediate Level
                  </h3>
                  <br />
                  <p className="course-details__tab-text">
                    Aelltes port lacus quis enim var sed efficitur turpis gilla
                    sed sit Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry’s
                    standard dummy text ever since.
                  </p>
                  <br />
                  <ul className="course-details__curriculum-list list-unstyled">
                    <li>
                      <div className="course-details__curriculum-list-left">
                        <div className="course-details__meta-icon video-icon">
                          <i className="fas fa-play"></i>
                        </div>
                        <a href="#none">Introduction to Editing</a>
                        <span>Preview</span>
                      </div>
                      <div className="course-details__curriculum-list-right">
                        16 minutes
                      </div>
                    </li>
                    <li>
                      <div className="course-details__curriculum-list-left">
                        <div className="course-details__meta-icon file-icon">
                          <i className="fas fa-folder"></i>
                        </div>
                        <a href="#none">Basic Editing Technology</a>
                      </div>
                    </li>
                    <li>
                      <div className="course-details__curriculum-list-left">
                        <div className="course-details__meta-icon quiz-icon">
                          <i className="fas fa-comment"></i>
                        </div>
                        <a href="#none">Quiz</a>
                      </div>
                      <div className="course-details__curriculum-list-right">
                        6 questions
                      </div>
                    </li>
                  </ul>
                </div>


                <div
                  className="tab-pane  animated fadeInUp"
                  role="tabpanel"
                  id="reviews"
                  aria-labelledby="reviews-tab"
                >
                  <div className="row">
                    <div className="col-xl-7 d-flex">
                      <div className="course-details__progress my-auto">
                        <div className="course-details__progress-item">
                          <p className="course-details__progress-text">
                            Excellent
                          </p>
                          <div className="course-details__progress-bar">
                            <span style={{ width: `95%` }}></span>
                          </div>
                          <p className="course-details__progress-count">5</p>
                        </div>
                        <div className="course-details__progress-item">
                          <p className="course-details__progress-text">
                            Very Good
                          </p>
                          <div className="course-details__progress-bar">
                            <span style={{ width: `65%` }}></span>
                          </div>
                          <p className="course-details__progress-count">2</p>
                        </div>
                        <div className="course-details__progress-item">
                          <p className="course-details__progress-text">
                            Average
                          </p>
                          <div className="course-details__progress-bar">
                            <span style={{ width: `33%` }}></span>
                          </div>
                          <p className="course-details__progress-count">1</p>
                        </div>
                        <div className="course-details__progress-item">
                          <p className="course-details__progress-text">Poor</p>
                          <div className="course-details__progress-bar">
                            <span
                              style={{ width: `0%` }}
                              className="no-bubble"
                            ></span>
                          </div>
                          <p className="course-details__progress-count">0</p>
                        </div>
                        <div className="course-details__progress-item">
                          <p className="course-details__progress-text">
                            Terrible
                          </p>
                          <div className="course-details__progress-bar">
                            <span
                              style={{ width: `0%` }}
                              className="no-bubble"
                            ></span>
                          </div>
                          <p className="course-details__progress-count">0</p>
                        </div>
                      </div>
                    </div>
                    <div className="col-xl-5 justify-content-xl-end justify-content-sm-center d-flex">
                      <div className="course-details__review-box">
                        <p className="course-details__review-count">4.6</p>
                        <div className="course-details__review-stars">
                          <i className="fas fa-star"></i>
                          <i className="fas fa-star"></i>
                          <i className="fas fa-star"></i>
                          <i className="fas fa-star"></i>
                          <i className="fas fa-star-half"></i>
                        </div>
                        <p className="course-details__review-text">
                          30 reviews
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="course-details__comment">
                    <div className="course-details__comment-single">
                      <div className="course-details__comment-top">
                        <div className="course-details__comment-img">
                          <img src={team1} alt="" />
                        </div>
                        <div className="course-details__comment-right">
                          <h2 className="course-details__comment-name">
                            Steven Meyer
                          </h2>
                          <div className="course-details__comment-meta">
                            <p className="course-details__comment-date">
                              26 July, 2019
                            </p>
                            <div className="course-details__comment-stars">
                              <i className="fa fa-star"></i>
                              <i className="fa fa-star"></i>
                              <i className="fa fa-star"></i>
                              <i className="fa fa-star"></i>
                              <i className="fa fa-star star-disabled"></i>
                            </div>
                          </div>
                        </div>
                      </div>
                      <p className="course-details__comment-text">
                        Lorem ipsum is simply free text used by copytyping
                        refreshing. Neque porro est qui dolorem ipsum quia quaed
                        inventore veritatis et quasi architecto beatae vitae
                        dicta sunt explicabo.
                      </p>
                    </div>
                    <div className="course-details__comment-single">
                      <div className="course-details__comment-top">
                        <div className="course-details__comment-img">
                          <img src={team2} alt="" />
                        </div>
                        <div className="course-details__comment-right">
                          <h2 className="course-details__comment-name">
                            Lina Kelley
                          </h2>
                          <div className="course-details__comment-meta">
                            <p className="course-details__comment-date">
                              26 July, 2019
                            </p>
                            <div className="course-details__comment-stars">
                              <i className="fa fa-star"></i>
                              <i className="fa fa-star"></i>
                              <i className="fa fa-star"></i>
                              <i className="fa fa-star star-disabled"></i>
                              <i className="fa fa-star star-disabled"></i>
                            </div>
                          </div>
                        </div>
                      </div>
                      <p className="course-details__comment-text">
                        Lorem ipsum is simply free text used by copytyping
                        refreshing. Neque porro est qui dolorem ipsum quia quaed
                        inventore veritatis et quasi architecto beatae vitae
                        dicta sunt explicabo.
                      </p>
                    </div>
                  </div>
                  <form action="#" className="course-details__comment-form">
                    <h2 className="course-details__title">Add a review</h2>
                    <p className="course-details__comment-form-text">
                      Rate this Course?{" "}
                      <a href="#give-star" aria-label="review stars">
                        <i className="fas fa-star"></i>
                      </a>
                      <a href="#give-star" aria-label="review stars">
                        <i className="fas fa-star"></i>
                      </a>
                      <a href="#give-star" aria-label="review stars">
                        <i className="fas fa-star"></i>
                      </a>
                      <a href="#give-star" aria-label="review stars">
                        <i className="fas fa-star"></i>
                      </a>
                      <a href="#give-star" aria-label="review stars">
                        <i className="fas fa-star"></i>
                      </a>
                    </p>
                    <div className="row">
                      <div className="col-lg-6">
                        <input type="text" placeholder="Your Name" />
                        <input type="text" placeholder="Email Address" />
                      </div>
                      <div className="col-lg-12">
                        <textarea placeholder="Write Message"></textarea>
                        <button
                          type="submit"
                          className="thm-btn course-details__comment-form-btn"
                        >
                          Leave a Review
                        </button>
                      </div>
                    </div>
                  </form>
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
                  <i className="far fa-folder-open"></i>
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
                  <i className="far fa-bell"></i>
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
