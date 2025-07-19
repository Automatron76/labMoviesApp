import React from "react";
import { BaseTVProps } from "../../types/interfaces";

const TVHeader: React.FC<BaseTVProps> = (props) => {
    return (
        <div className="tv-header">
            <h1>{props.name}</h1>
            <p>{props.first_air_date}</p>
            <p>{props.overview}</p>
        </div>
    );
};

export default TVHeader;