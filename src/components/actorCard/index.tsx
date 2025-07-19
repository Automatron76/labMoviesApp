import React from "react";
import { Card } from "@mui/material";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { ActorProps } from "../../types/interfaces";


interface ActorCardProps {
    actor: ActorProps
}


const ActorCard: React.FC<ActorCardProps > = ({actor}) => {
    const imageUrl = actor.profile_path
                      ? `https://image.tmdb.org/t/p/w500/${actor.profile_path}`
                      : "https://via.placeholder.com/200x300?text=No+Image";
    
    
    return (
        <Card sx={{maxWidth: 200, margin:"10px"}}>
            <CardMedia
              component="img"
              height="300"
              image={imageUrl}
              alt={actor.name}/>

              <CardContent>
                <Typography variant="body1" align="center">
                    {actor.name}
                </Typography>
              </CardContent>
        </Card>
    );
};

export default ActorCard;