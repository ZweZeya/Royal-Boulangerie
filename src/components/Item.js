import React from "react";

export default function Item(props) {
    return (
        <div className="product-item">
            <img src={props.image} alt={`${props.name} image`} />
            <h3>{props.name}</h3>
        </div>
    )
}