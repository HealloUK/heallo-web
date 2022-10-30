import React from 'react';
import Layout from "../components/Layout";
import NavOne from "../components/NavOne";
import Footer from "../components/Footer";
import Courses from "../components/Courses";
import Seo from '../components/Seo';

const CoursesPage = () => {
    return (
        <Layout>
            <NavOne />
            <Courses />
            <Footer />
        </Layout>
    );
};

export default CoursesPage;

export const Head = ({location}) => <Seo 
                            title="Aesthetic Treatments in Turkey"
                            description="Our skilled surgeons offers a wide range of procedures, including rhinoplasty, tummy tuck, bbl, liposuction, facelift, and breast surgery with affordable prices."
                            location={location.pathname}
                          />