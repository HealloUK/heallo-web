import React from "react";
import { Link } from "gatsby";
import BlogRoll from "../components/BlogRoll";

const News = () => {
  return (
    <section className="blog-one blog-page" style={{paddingTop: "120px"}}>
      <div className="container">
        <div className="row">

        <BlogRoll />

        </div>
        <div className="post-pagination">
          <a href="#none">
            <i className="fa fa-angle-double-left"></i>
          </a>
          <a className="active" href="#none">
            1
          </a>
          <a href="#none">2</a>
          <a href="#none">3</a>
          <a href="#none">4</a>
          <a href="#none">
            <i className="fa fa-angle-double-right"></i>
          </a>
        </div>
      </div>
    </section>
  );
};

export default News;
