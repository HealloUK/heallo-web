import React from 'react';

const BecomeTeacher = () => {
    return (
        <section>
            <div className="container">
                <div className="row">
                    <div className="col-lg-6">
                        <div className="become-teacher__content">
                            <h2 className="become-teacher__title">About Heallo</h2>
                            <p className="become-teacher__text">We connect patients our trusted doctors, clinics, hospitals. 
                            We have a wide range of services and treatments for you to choose from all at an affordable price.</p>
                            <h2 className="become-teacher__subtitle">Experienced team of Professionals</h2>
                            <p className="become-teacher__text">We are dedicated to helping our clients look and feel their best. 
Our experienced team of professionals will work with you to create a personalized treatment plan that meets your needs and fits your budget.</p>
                            <h2 className="become-teacher__subtitle">Perfect Journey</h2>
                            <p className="become-teacher__text">We design every step of your medical journey from the moment you 
leave your home to the moment you return home.

Our team is passionate about providing excellent customer service 
and we are dedicated to ensuring that you have wonderful experience.

Contact us today to schedule a consultation!</p>
                        </div>
                    </div>
                    <div className="col-lg-6" id="quote-form">
                        <div className="become-teacher__form">
                            <div className="become-teacher__form-top">
                                <h2 className="become-teacher__form-title">
                                    Get Free Quote
                                </h2>
                            </div>
                            <form action="#"
                                  className="become-teacher__form-content contact-form-validated"
                                  noValidate="novalidate">
                                <input type="text" placeholder="Your Name" name="name" />
                                <input type="text" placeholder="Email Address" name="email" />
                                <input type="text" placeholder="Phone Number" name="phone" />
                                <input type="text" placeholder="Comment" name="message" />
                                <button type="submit" className="thm-btn become-teacher__form-btn">Apply
                                    For It
                                </button>
                            </form>
                            <div className="result text-center"></div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default BecomeTeacher;
