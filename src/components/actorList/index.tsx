import React from "react";
import Grid from "@mui/material/Grid";
import ActorCard from "../actorCard";

import { ActorProps } from "../../types/interfaces";

interface ActorListProps {
    actors: ActorProps[];
}

const ActorList:React.FC<ActorListProps> = ({ actors}) => {
    return(
        <Grid container spacing={2} justifyContent="center">
            {actors.map((actor) => (
                <Grid key={actor.id} item xs={12} sm={6} md={4} lg={2}>
                    <ActorCard actor={actor} />
                    </Grid>
            ))}
        </Grid>
    )
}

export default ActorList;