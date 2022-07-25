import React from 'react';
import Layout from "../components/Layout";
import NavOne from "../components/NavOne";
import PageHeader from "../components/PageHeader";
import Footer from "../components/Footer";
import CourseDetails from "../components/CourseDetails";
import CourseCatOne from "../components/CourseCatOne";

const CoursesPage = () => {
    return (
        <Layout pageTitle="Nose Job Rhinoplasty | Heallo">
            <NavOne />
            <CourseDetails />
            <CourseCatOne />
            <Footer />
        </Layout>
    );
};

export default CoursesPage;
