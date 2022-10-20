import React from "react";
import Layout from "./Layout";
import Item from "./Item";

export default function Products() {

    // List of items on sale
    const productList = [
        {
            name: "Baguette",
            image: "images/baguette.jpg"
        },
        {
            name: "Brioche",
            image: "images/brioche.jpg"
        },
        {
            name: "Pain de campagne",
            image: "images/pain_de_campagne.jpg"
        },
        {
            name: "Croissant",
            image: "images/croissant.jpg"
        },
        {
            name: "Pain au chocolat",
            image: "images/pain_au_chocolat.jpg"
        },

    ];

    // Creating JSX elements for sale items from the list
    const productElements = productList.map(
        item => 
        <Item
            name={item.name}
            image={item.image}
        />
    );

    
    return (
        <Layout>
            <h1>Our Products</h1>
            <div>
                {productElements}
            </div>
            <hr/>
        </Layout>
    )
}