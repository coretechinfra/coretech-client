import React from 'react';
import Navbar from '../components/Navbar/Navbar';
import Footer from '../components/Footer/Footer';
import Footer2 from '../components/Footer/Footer2';
import Navbar2 from '../components/Navbar/Navbar2';
import WhatsAppButton from '../components/Actions/WhatsAppButton';
import Navbar3 from '../components/Navbar/Navbar3';

const StaticLayout = ({ children }) => {
    return (
        <>
            <Navbar3 />
            {children}
            {/* <Footer /> */}
            <Footer2/>
            <WhatsAppButton phoneNumber="+19452785774" message="Hello!" />
        </>
    )
}

export default StaticLayout;