import React from 'react';
import { Outlet } from 'react-router-dom';
import { Footer } from './Footer';
import { NavBar } from './NavBar';

export const PublicLayout = () => {
    return (
        <>
            <div className="app-container">
                <header className="navbar" >
                    <NavBar />
                </header>
                <br/>
                <main className="main-content">
                    <Outlet />
                </main>
                <br/>
                <br/>
                <br/>
                <footer className="footer" >
                    <Footer />
                </footer>
            </div>
        </>
    );
};
