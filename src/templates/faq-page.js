import React from 'react';
import Layout from "../components/Layout";
import NavOne from "../components/NavOne";
import Footer from "../components/Footer";
import Faq from "../components/Faq";
import Seo from '../components/Seo';

const FaqPage = () => {
    return (
        <Layout>
            <NavOne />
            {/*<PageHeader title="FAQ" />*/}
            <Faq />
            <Footer />
        </Layout>
    );
};

export default FaqPage;

export const Head = ({location}) => <Seo 
                            title="FAQ"
                            location={location.pathname}
                          />