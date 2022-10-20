import React from "react";
import Layout from "./Layout";

export default function Contact() {
    return (
        <Layout>
            <h2>Contact Us</h2>
            <h3>Your feedback is valuable to us!</h3>
            <p className="contact-caption">We pride ourselves in providing the best for our customers. Let us know how we can improve.</p>
            <div className="contact-form">
                <form>
                    <table>
                        <tbody>
                            <tr>
                                <td className="contact-table-title">
                                    Name:
                                </td>
                                <td className="contact-table-input">
                                    <input className="contact-input" type="text" id="contact-name" required/>
                                </td>
                            </tr>
                            <tr>
                                <td className="contact-table-title">
                                    Email:
                                </td>
                                <td className="contact-table-input">
                                    <input className="contact-input" type="email" id="contact-email" required/>
                                </td>
                            </tr>
                            <tr>
                                <td className="contact-table-title">
                                    Phone:
                                </td>
                                <td className="contact-table-input">
                                    <input className="contact-input" type="number" id="contact-phone" required/>
                                </td>
                            </tr>
                            <tr>
                                <td className="contact-table-title">
                                    Subject:
                                </td>
                                <td className="contact-table-input">
                                    <input className="contact-input" type="text" id="contact-subject" required/>
                                </td>
                            </tr>
                            <tr>
                                <td className="contact-table-title">
                                    Message:
                                </td>
                                <td className="contact-table-input">
                                    <textarea className="contact-input" id="contact-message" rows="15" required/>
                                </td>
                            </tr>
                        </tbody>
                    </table>  
                    <button>Submit</button> 
                </form>
            </div>
            <hr/>
        </Layout>
    )
}