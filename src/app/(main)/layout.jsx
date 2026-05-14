import NavBar from '@/components/NavBar';
import Footer from '@/components/Homepage/Footer';
import React from 'react';

const MainLayout = ({ children }) => {
    return (
        <div>
            <NavBar />
            {children}
            <Footer />
        </div>
    );
};

export default MainLayout;