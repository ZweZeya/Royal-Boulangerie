import React from "react";
import { Link } from "react-router-dom";

export default function Navigation(event) {

    // Setting up a state for click event
    const [isClicked, setIsClicked] = React.useState(false);

    // Click event toggles the state
    const handleClick = () => {
        setIsClicked(prevState => !prevState);
    };

    return (
        <>
            <style>{`
            @media only screen and (max-width: 782px) {
                .nav-brand {
                    text-align: left;
                    font-size: 2.3rem;
                }

                .hamburger {
                    display: flex;
                }

                .nav-items {
                    display: ${isClicked ? "flex" : "none"};
                    flex-direction: column;
                }

                .nav-items li {
                    text-align: center;
                }

                .nav-hr-bottom {
                    display: none;
                }
            `}</style>

            <div className="nav">
                <h1 className="nav-brand">
                    <Link to="/">Royal Boulangerie</Link>
                </h1>
                <button className="hamburger" onClick={handleClick}>                
                    <span className="bar"></span>
                    <span className="bar"></span>
                    <span className="bar"></span>
                </button>
                <hr/>
                <div>
                    <ul className="nav-items">
                        <li>
                            <Link to="/about">Our Story</Link>
                        </li>
                        <li>
                            <Link to="/products">Products</Link>
                        </li>
                        <li>
                            <Link to="/locations">Locations</Link>
                        </li>
                        <li>
                            <Link to="/careers">Careers</Link>
                        </li>
                        <li>
                            <Link to="/contact">Contact</Link>
                        </li>
                    </ul>
                </div>
            </div>
            <hr className="nav-hr-bottom"/>
        </>
    )
}