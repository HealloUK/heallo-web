import React from "react";
import Layout from "../components/Layout";
import TopbarOnlyText from "../components/TopbarOnlyText";
import NavOne from "../components/NavOne";
import AboutTwo from "../components/AboutTwo";
import TopCourses from "../components/TopCourses";
import BlogThree from "../components/BlogThree";
import Footer from "../components/Footer";


const HomePage = () => (
  <Layout pageTitle="Kipso - React Next Online Education Learning & LMS Template">
    <TopbarOnlyText />
    <NavOne />
    <AboutTwo />
    <TopCourses />
    <BlogThree />
    <Footer />
  </Layout>
);

export default HomePage;
