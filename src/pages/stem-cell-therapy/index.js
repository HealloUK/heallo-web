import React from 'react';
import Layout from "../../components/Layout";
import NavOne from "../../components/NavOne";
import Footer from "../../components/Footer";
import StemTexts from '../../components/StemTexts';
import CourseCatOne from '../../components/CourseCatOne';
import Seo from '../../components/Seo';


const AboutPage = () => {
    return (
        <Layout>
            <NavOne decor="none" />
            <StemTexts />
            <CourseCatOne />
            <Footer />
        </Layout>
    );
};

export default AboutPage;

export const Head = ({location}) => <Seo 
                            title="Stem Cell Treatments in Turkey"
                            description="Stem Cell Treatments in Turkey"
                            location={location.pathname}
                          />