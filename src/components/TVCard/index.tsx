import React from "react";
import { Card, CardMedia, CardContent, Typography } from "@mui/material";
import { BaseTVProps } from "../../types/interfaces";

const TVCard: React.FC<{ tv: BaseTVProps }> = ({ tv }) => {
  const imageUrl = tv.poster_path
    ? `https://image.tmdb.org/t/p/w500${tv.poster_path}`
    : "https://via.placeholder.com/200x300?text=No+Image";

  return (
    <Card sx={{ maxWidth: 200, margin: "10px" }}>
      <CardMedia
        component="img"
        height="300"
        image={imageUrl}
        alt={tv.name}
      />
      <CardContent>
        <Typography variant="body1" align="center">
          {tv.name}
        </Typography>
        <Typography variant="body2" align="center" color="textSecondary">
         ⭐ {tv.vote_average} | 📅{tv.first_air_date}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default TVCard;