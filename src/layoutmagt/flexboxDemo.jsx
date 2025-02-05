import React from 'react';
import './flex.css'; // Create this CSS file

const FlexboxLayout = () => {
    return (
        <div className="flex-container">
            <header className="header">Header flex demo</header>
            <div className="body">
                <aside className="sidebar">Sidebar</aside>
                <main className="main-content">Main Content</main>
            </div>
            <footer className="footer">Footer</footer>
        </div>
    );
};

export default FlexboxLayout;