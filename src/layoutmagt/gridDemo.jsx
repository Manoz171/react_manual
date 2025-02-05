import React from 'react';
import './grid.css'; // Create this CSS file

const GridLayout = () => {
    return (
        <div className="grid-container">
            <header className="header">Header Grid Demo</header>
            <aside className="sidebar">Sidebar</aside>
            <main className="main-content">Main Content</main>
            <footer className="footer">Footer</footer>
        </div>
    );
};

export default GridLayout;