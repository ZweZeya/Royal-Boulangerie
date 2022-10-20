import React from "react";

export default function Place(props) {
    return (
        <div className="place">
            <h3>{props.name}</h3>
            <p>{props.address}</p>
            <a href={props.url}>Go Google Maps</a>
        </div>
    )
}