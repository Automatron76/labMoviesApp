import React, { useState } from "react";
import { Card, CardContent, CardMedia, Typography, Button } from "@mui/material";
import { useQuery } from "react-query";
import { getPopularActorsBio } from "../../api/tmdb-api";
import { ActorProps } from "../../types/interfaces";

interface ActorCardProps {
  actor: ActorProps;
}

const ActorCard: React.FC<ActorCardProps> = ({ actor }) => {
  const [showFullBio, setShowFullBio] = useState(false);

  const imageUrl = actor.profile_path
    ? `https://image.tmdb.org/t/p/w500/${actor.profile_path}`
    : "https://via.placeholder.com/200x300?text=No+Image";

  const { data: biography, isLoading, isError } = useQuery(
    ["actorBio", actor.id],
    () => getPopularActorsBio(actor.id),
    { staleTime: 1000 * 60 * 60 }
  );

  const toggleBio = () => setShowFullBio(!showFullBio);

  return (
    <Card sx={{ maxWidth: 200, margin: "10px" }}>
      <CardMedia
        component="img"
        height="300"
        image={imageUrl}
        alt={actor.name}
      />
      <CardContent>
        <Typography variant="body1" align="center" gutterBottom>
          {actor.name}
        </Typography>

        {isLoading && (
          <Typography variant="body2">Loading bio...</Typography>
        )}

        {isError && (
          <Typography variant="body2" color="error">
            Failed to load bio.
          </Typography>
        )}

        {biography && (
          <>
            <Typography variant="body2" sx={{ mt: 1 }}>
              {showFullBio
                ? biography
                : biography.length > 150
                ? biography.slice(0, 150) + "..."
                : biography}
            </Typography>

            {biography.length > 150 && (
              <Button onClick={toggleBio} size="small">
                {showFullBio ? "Read less" : "Read more"}
              </Button>
            )}
          </>
        )}
      </CardContent>
    </Card>
  );
};

export default ActorCard;