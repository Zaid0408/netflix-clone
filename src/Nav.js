import './Nav.css';
import React from 'react';
import { useEffect,useState } from 'react';
function Nav() {
    const [show,handleShow]=useState(false);
    const handleScroll = () => {
        if (window.scrollY > 100) {
          handleShow(true);
        } else {
          handleShow(false);
        }
      };
    
    useEffect(() => {
        // Add the scroll event listener
        window.addEventListener('scroll', handleScroll);
    
        // Clean up the event listener when the component is unmounted
        return () => {
          window.removeEventListener('scroll', handleScroll);
        };
      }, []);
    return (
        <div className={"nav"+(show && " nav__black")}>
            <img
                className="nav__logo"
                src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg"
                alt="Netflix Logo"
            />
            <img
                className="nav__avatar"
                src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png"
                alt="Netflix Logo"
            />
        </div>
    )
}

export default Nav;