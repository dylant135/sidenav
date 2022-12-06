import React from "react";

export default function Sidebar(props) {

    return (
        <div className="sidebar">
            {props.active === 'Home' && <div className="sideInfo">
                <h2 className="sideHeader">Home</h2>
            </div>}
            {props.active === 'About' && <div className="sideInfo">
                <h2 className="sideHeader">About</h2>
            </div>}
        </div>
    )
}