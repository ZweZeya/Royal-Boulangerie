import React from "react";

export default function Footer() {

    return (
        <>
            <div className="newsletter">
                <div className="newsletter-form">
                    <h4>
                        JOIN OUR NEWSLETTER
                    </h4>
                    <h5>
                        TO RECEIVE THE LATEST NEWS AND PROMOTIONS
                    </h5>
                    <form>
                        <input type="email" placeholder="Enter your email" autoComplete="off"/>
                        <br />
                        <button>SUBSCRIBE</button>
                    </form>
                </div>
            </div>
            <hr/>
            <footer>
                <p className="footer-info">Opening Hours</p>
                <p className="footer-info">Monday to Saturday 9am - 5pm</p>
                <p className="footer-info">Closed on Sundays</p>
                <p>Private Policy</p>
                <p>Terms and Conditions</p>
                <p>© Royal Boulangerie Ptd Ltd. All Rights Reserved.</p>
            </footer>
        </>
    )
}