import React from "react";

export default function Card(props) {
    return (
        <div className="Card">
            {/* renders anything it wraps here */}
            {props.children}
        </div>
    )
}