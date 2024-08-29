import React from 'react';
import '../Css/Sidebar.css'; 
const Sidebar = ({ isOpen }) => {
    return (
        <div className={`sidebar ${isOpen ? 'open' : 'closed'}`}>
            <ul>
                <li className="toolbar-item">Dashboard</li>
                <li className="toolbar-item">Reports</li>
                <li className="toolbar-item">Settings</li>
            </ul>
        </div>
    );
};

export default Sidebar;
