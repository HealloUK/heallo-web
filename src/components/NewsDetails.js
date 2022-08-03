import React from "react";
import blogd1 from "../assets/images/blog-d-1-1.jpg";
import author1 from "../assets/images/author-1-1.jpg";
import comment1 from "../assets/images/comment-1-1.jpg";
import comment2 from "../assets/images/comment-1-2.jpg";
import lp1 from "../assets/images/lp-1-1.jpg";
import lp2 from "../assets/images/lp-1-2.jpg";
import lp3 from "../assets/images/lp-1-3.jpg";
import PropTypes from "prop-types";
import PreviewCompatibleImage from "./PreviewCompatibleImage";
import Content, { HTMLContent } from "../components/Content";
import { kebabCase, startCase } from "lodash";
import { Link } from "gatsby";
import BlogRollPostPageLatest from "./BlogRollPostPageLatest";


const NewsDetails = ({
  content,
  contentComponent,
  description,
  tags,
  title,
  group
}) => {
  const PostContent = contentComponent || Content;

  
  return (
    <section className="blog-details">
      <div className="container">
        <div className="row">
          <div className="col-lg-8">
            <div className="blog-one__single">
              
              <div className="blog-one__content">
                
                <h2 className="blog-one__title text-center">
                    {title}
                </h2>

                <p>{description}</p>
                
                <PostContent content={content} />
                
              </div>
            </div>
            <div className="share-block">
              <div className="left-block">
                <p>
                  Tags: 
                  
                  {tags.map((tag) => (
                      <Link key={tag + `tag`} to={`/tags/${kebabCase(tag)}/` }>{startCase(tag)}</Link>
                  ))}

                </p>
              </div>
              <div className="social-block">
                <a href="#none">
                  <i className="fab fa-twitter"></i>
                </a>
                <a href="#none">
                  <i className="fab fa-facebook-f"></i>
                </a>
                <a href="#none">
                  <i className="fab fa-instagram"></i>
                </a>
                <a href="#none">
                  <i className="fab fa-dribbble"></i>
                </a>
              </div>
            </div>
            
            
            {/*Form will be here*/}



          </div>
          <div className="col-lg-4">
            <div className="sidebar">
            
              <div className="sidebar__single sidebar__post">
                <h3 className="sidebar__title">Latest News</h3>
                <div className="sidebar__post-wrap">
                  
                  <BlogRollPostPageLatest/>
                  
                </div>
              </div>
              



              <div className="sidebar__single sidebar__category">
                <h3 className="sidebar__title">Categories</h3>
                <ul className="sidebar__category-list">
                  
                  
                  {group &&
                    group.map((tag) => (

                      <li className="sidebar__category-list-item" key={tag.fieldValue + tag.totalCount}>
                              <Link to={`/tags/${kebabCase(tag.fieldValue)}/`}>{startCase(tag.fieldValue)}</Link>
                      </li>

                  ))}
                  
                  
                </ul>
              </div>






            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

NewsDetails.propTypes = {
  content: PropTypes.node.isRequired,
  contentComponent: PropTypes.func,
  description: PropTypes.string,
  featuredimage: PropTypes.string,
  title: PropTypes.string,
  group: PropTypes.array,
};

export default NewsDetails;
