import React from "react";
import Layout from "./Layout";
import Event from "./Event";

export default function Home() {

    // List of events and promotions
    const eventLists = [
        {
            title: "Celebrate Oktoberfest!",
            caption: "Free Pretzel for every purchase",
            condition: "Limited to the first 15 customers daily",
            duration: "From 1st Oct to 5th Oct",
            img: "images/pretzels.png"
        }
    ];

    // Creating an Event JSX tag from each event object from the array
    const eventElements = eventLists.map(
        event =>  
        <Event 
        key={event.title}
        title={event.title}
        caption={event.caption}
        condition={event.condition}
        duration={event.duration}
        image={event.img}
        />
    );

    return (
        <Layout>
            <div className="hero">
                <img src="images/hero.png" alt="hero-img"/>
            </div>
            <hr/>
            <div className="events">
                <h2>Promotions</h2>
                {eventElements}
                <hr/>
            </div>
        </Layout>
    )
}