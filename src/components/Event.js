import React from "react";

export default function Event(props) {
    return (
        <>
            <table className="event">
                <tbody>
                    <tr>
                        <td>
                            <img src={props.image} alt={props.title}/>
                        </td>
                        <td className="event-table-gap"></td>
                        <td>
                            <h4>{props.title}</h4>
                            <ul>
                                <li>{props.caption}</li>
                                <li>{props.condition}</li>
                                <li>{props.duration}</li>
                            </ul>
                        </td>
                    </tr>
                </tbody>            
            </table>
        </>
    )
}