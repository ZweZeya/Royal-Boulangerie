import React from "react";

export default function Job(props) {
    return (
        <div className="job">
            <h3>{props.title}</h3>
            <h4>Role</h4>
            <p>{props.role}</p>
            <h4>Skills Required</h4>
            <p>{props.requirements}</p>
        </div>
    )
}