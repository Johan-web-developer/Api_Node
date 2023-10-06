import React from "react";
import PropTypes from "prop-types";

// core components
import Header from "../../components/header/header.jsx";
import HeaderBanner from "../../components/banner/banner.jsx";
import Footer from "../../components/footer/footer.jsx";

// sections for this page
import Cards from "./sections/cards.jsx";
import CallToAction from "../../components/call-to-action/CallToAction";


const Components = () => {
    return (
        <div id="main-wrapper">
            <Header />
            <div className="page-wrapper">
                <div className="">
                    <HeaderBanner />
                    <Cards />
                    <CallToAction />
                </div>
            </div>
            <Footer />
        </div>
    );
}

Components.propTypes = {
    classes: PropTypes.object
};

export default Components;
