import React from "react";
import blog1 from "../assets/images/blog-1-1.jpg";
import blog2 from "../assets/images/blog-1-2.jpg";
import blog3 from "../assets/images/blog-1-3.jpg";
import { Link, graphql } from "gatsby";

const BlogThree = () => {
  return (
    <section className="blog-one  blog-one__home-two">
      <div className="container">
        <div className="block-title text-center">
          <h2 className="block-title__title">
          Latest Health News
          </h2>
          <br />
          <h6><Link to="/health-news" style={{ color: "#7c4bc0" }}>More Health News</Link></h6>
        </div>
        <div className="row">


          <div className="col-lg-4">
            <div className="blog-one__single">
              <div className="blog-one__image">
                <img src="https://cdn.pixabay.com/photo/2019/04/09/19/45/galata-4115381_960_720.jpg" alt="" />
                <a className="blog-one__plus" href="news-details.html">
                  <i className="kipso-icon-plus-symbol"></i>
                </a>
              </div>
              <div className="blog-one__content text-center">
                
                <h2 className="blog-one__title">
                  <a href="news-details.html">
                  How Good is Turkey for Healthcare?
                  </a>
                </h2>
                
                <a href="news-details.html" className="blog-one__link">
                  Health News
                </a>
                ,  
                <a href="news-details.html" className="blog-one__link">
                  Hair Transplant
                </a>
              </div>
            </div>
          </div>


          



        </div>
      </div>
    </section>
  );
};

export default BlogThree;
