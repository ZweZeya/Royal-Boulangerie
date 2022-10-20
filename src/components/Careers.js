import React from "react";
import Layout from "./Layout";
import Job from "./Job";

export default function Careers() {

    // List of all available job openings
    const jobList = [
        {
            title: "Kitchen Assistant",
            role: "Assist the bakery team in food preparation and ensure the general cleanliness of the kitchen",
            requirements: "Some baking or culinary experience"
        },
        {
            title: "Bakery Assistant",
            role: "Provide assistance with the logistics and ensure customer satisfaction",
            requirements: "Communication skills"
        },
        {
            title: "Bakery Manager",
            role: "Manage the general logistics and the development of new product lines",
            requirements: "Management and leadership skills, Knowledge in suppy chain management"
        }
    ];

    // Create a Job JSX element from each job opening in the array
    const jobElements = jobList.map(
        job => 
        <Job
            key={job.title}
            title={job.title}
            role={job.role}
            requirements={job.requirements}
        />
    );

    return (
        <Layout>
            <h2>Join Us!</h2>
            <p className="careers-caption">Customer satisfaction is our utmost priority. Hence, we invest in our people to provide the best service. We are a dynamic and are constantly look for opportunites to improve our products and service. If you are up to the challenge, join us!</p>
            <div>
                {jobElements}
            </div>
            <p className="careers-apply">To apply, please email to mycareer@royal.com</p>
            <hr/>
        </Layout>
    )
}