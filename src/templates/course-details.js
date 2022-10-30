import React from 'react';
import Layout from "../components/Layout";
import NavOne from "../components/NavOne";
import { getSrc } from "gatsby-plugin-image"
import Footer from "../components/Footer";
import CourseDetails from "../components/CourseDetails";
import CourseCatOne from "../components/CourseCatOne";
import TopCourses from "../components/TopCourses";
import { graphql } from 'gatsby';
import Seo from '../components/Seo';

const CoursesPage = ({ data }) => {
    const { markdownRemark: post } = data;
    
    return (
      <Layout>
            <NavOne />
            <CourseDetails details= {post.frontmatter}/>
            <CourseCatOne />
            <br/><br/>
            <TopCourses />
            <Footer />
        </Layout>
    );
};

export default CoursesPage;

export const treatmentDetailPageQuery = graphql`
  query TreatmentDetailPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        title
        image {
          childImageSharp {
            gatsbyImageData(quality: 100, layout: FULL_WIDTH)
          }
        }
        price
        duration
        anesthesia
        recovery
        result
        description
        whenconsider
        expectations
      }
    }
  }
`;

export const Head = ({location, data}) => <Seo 
                            title={data.markdownRemark.frontmatter.title}
                            description={data.markdownRemark.frontmatter.description.substr(0, data.markdownRemark.frontmatter.description.indexOf(".")) + "..."}
                            image={getSrc(data.markdownRemark.frontmatter.image) || data.markdownRemark.frontmatter.image}
                            location={location.pathname}
                          />