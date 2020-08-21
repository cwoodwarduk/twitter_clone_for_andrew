import React from 'react';
import './SidebarOption.css';

function SidebarOption({active, Icon, text}) {
    return (
        <div className={`sidebarOption ${active && 'sidebarOption--active'}`}>
            < Icon />
            <h3>{text}</h3>
        </div>
    )
}

export default SidebarOption;
