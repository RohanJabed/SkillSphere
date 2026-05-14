import Footer from '@/components/Footer/Footer';
import NavBar from '@/components/NavBar';
import React from 'react';

const ProfileLayout = ({ children }) => {
    return (
        <div>
            <NavBar></NavBar>
            {children}
        </div>
    );
};

export default ProfileLayout;