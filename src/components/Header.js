import React from "react";

export default function Header(props) {

    function changeActive(event) {
        const targ = event.target
        const t = targ.innerText
        if(t === props.active) {
            return
        } else {
            props.setActive(t)
        }
    }

    return (
        <div className="header">
            <div className="headLink" onClick={changeActive}
            style={{
                backgroundColor: props.active === 'Home' ? 'green' : 'transparent'
              }}
            >Home</div>
            <div className="headLink" onClick={changeActive}
            style={{
                backgroundColor: props.active === 'About' ? 'green' : 'transparent'
              }}
            >About</div>
            <div className="headLink">link3</div>
        </div>
    )
}