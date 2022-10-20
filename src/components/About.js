import React from "react";
import Layout from "./Layout";

export default function About() {
    return (
        <Layout>
            <h1>Our Story</h1>
            <div className="about">
                <img src="images/about.jpg" alt="about image" />
                <p>At Royal Boulangerie, we are committed to bringing the best quality products to our customers. We practice artisnal bread making with the finest ingredients. Our recipe has remained unchanged for 50 years and our chefs are well experienced in the art of dough making and baking. Nothing beats the aroma and the taste of freshly baked bread and we promise that you will be transported to Paris.</p>
            </div>
            <hr />
        </Layout>
    )
}