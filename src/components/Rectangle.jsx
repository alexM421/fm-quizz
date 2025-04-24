import React from "react";

export default function Rectangle ( { text, svg }) {


    return(
        <a className="rectangle">
            {svg}
            <h2 className="text-preset-4">{text}</h2>
        </a>
    )
}