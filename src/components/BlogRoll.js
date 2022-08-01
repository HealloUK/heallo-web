import React from 'react'
import PropTypes from 'prop-types'
import { Link, graphql, StaticQuery } from 'gatsby'
import PreviewCompatibleImage from './PreviewCompatibleImage'

class BlogRollTemplate extends React.Component {
  render() {
    const { data } = this.props
    const { edges: posts } = data.allMarkdownRemark

    return (
      <>
        {posts &&
          posts.map(({ node: post }) => (


            <div className="col-lg-4">
            <div className="blog-one__single">
              <div className="blog-one__image">
              {post.frontmatter.featuredimage ? (
                    <div className="featured-thumbnail">
                      <PreviewCompatibleImage
                        imageInfo={{
                          image: post.frontmatter.featuredimage,
                          alt: `featured image thumbnail for post ${post.frontmatter.title}`,
                          width:
                            post.frontmatter.featuredimage.childImageSharp
                              .gatsbyImageData.width,
                          height:
                            post.frontmatter.featuredimage.childImageSharp
                              .gatsbyImageData.height,
                        }}
                      />
                    </div>
                  ) : null}
                <a className="blog-one__plus" href="news-details.html">
                  <i className="kipso-icon-plus-symbol"></i>
                </a>
              </div>
              <div className="blog-one__content text-center">
                
                <h2 className="blog-one__title">
                <Link
                      className="title has-text-primary is-size-4"
                      to={post.fields.slug}
                    >
                      {post.frontmatter.title}
                    </Link>
                </h2>
          
          

                {post.frontmatter.tags &&
                  post.frontmatter.tags.map(( tag, i ) => (
                  <span>
                  <Link to={`/tags/${tag}`} className="blog-one__link">
                      {tag}
                  </Link>
                  {i == post.frontmatter.tags.length - 1 ? "" : ", "}
                  </span>
                ))}



              </div>
            </div>
          </div>




          ))}
      </>
    )
  }
}

BlogRoll.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.array,
    }),
  }),
}


export default function BlogRoll() {
  return (
    <StaticQuery
      query={graphql`
        query BlogRollQuery {
          allMarkdownRemark(
            sort: { order: DESC, fields: [frontmatter___date] }
            filter: { frontmatter: { templateKey: { eq: "blog-post" } } }
          ) {
            edges {
              node {
                excerpt(pruneLength: 400)
                id
                fields {
                  slug
                }
                frontmatter {
                  title
                  templateKey
                  date(formatString: "MMMM DD, YYYY")
                  featuredpost
                  tags
                  featuredimage {
                    childImageSharp {
                      gatsbyImageData(
                        quality: 100
                        layout: FULL_WIDTH
                      )

                    }
                  }
                }
              }
            }
          }
        }
      `}
      render={(data, count) => <BlogRollTemplate data={data} count={count} />}
    />
  );
}
