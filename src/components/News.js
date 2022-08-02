import React from "react";
import { Link } from "gatsby";
import BlogCard from './BlogCard'

const News = ({ posts, pageContext }) => {

  const {currentPage, numPages} = pageContext
  const isFirst = currentPage === 1
  const ifLast = currentPage === numPages
  const prevPage = currentPage - 1 === 1 ? "/" : `/${currentPage - 1}`
  const nextPage = `/${currentPage + 1}`

  return (
    <section className="blog-one blog-page" style={{paddingTop: "120px"}}>
      <div className="container">
        <div className="row">

        {posts &&
          posts.map(({ node: post }) => (

            <BlogCard post= { post } />

          ))}

        </div>

        <div className="post-pagination">
        
        {!isFirst && (<Link to= {`/health-news${prevPage}`}>
            <i className="fa fa-angle-double-left"> Previous</i>
          </Link>)
        }

        {!ifLast && (<Link to= {`/health-news${nextPage}`}>
        <i className="fa fa-angle-double-right"> Next</i>
          </Link>)
        }

        </div>
      </div>
    </section>
  );
};

export default News;
