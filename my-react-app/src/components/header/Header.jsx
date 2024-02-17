import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Header.css";
import { HamburgetMenuClose, HamburgetMenuOpen } from "./Icons";
import { Link as ScrollLink } from 'react-scroll';

function Header() {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);
  return (
    <>
      <nav className="navbar">
        <div className="nav-container">
          <Link exact to="/" className="nav-logo">
            <span><img src="https://a-us.storyblok.com/f/1015735/264x76/4e58d1223b/8352-2x.png/m/filters:quality(80)" alt="" style={{height:'50px',padding:'5px'}}/></span>
          </Link>

          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li className="nav-item">
              <ScrollLink
                exact
                to="hero"
                smooth={true}
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                Home
              </ScrollLink>
            </li>
            <li className="nav-item">
              <ScrollLink
                exact
                to="courses"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                Courses
              </ScrollLink>
            </li>
            <li className="nav-item">
              <ScrollLink
              smooth={true}
                exact
                to="about"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                About
              </ScrollLink>
            </li>
            <li className="nav-item">
              <ScrollLink
               smooth={true}
                exact
                to="testimonials"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                Testimonials
              </ScrollLink>
            </li>
            <li className="nav-item">
              <ScrollLink
               smooth={true}
                exact
                to="temp"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                Contact
              </ScrollLink>
            </li>
            <li className="nav-item">
              <Link
                exact
                to="#"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                SignUp
              </Link>
            </li>
            <li className="nav-item">
              <Link
                exact
                to="#"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                Login
              </Link>
            </li>
          </ul>
          <div className="nav-icon" onClick={handleClick}>

            {click ? (
              <span className="icon">
                <HamburgetMenuClose />{" "}
              </span>
            ) : (
              <span className="icon">
                <HamburgetMenuOpen />
              </span>
            )}
          </div>
        </div>
      </nav>
    </>
  );
}

export default Header;







