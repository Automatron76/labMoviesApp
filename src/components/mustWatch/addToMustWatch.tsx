// src/components/cardIcons/addToMustWatch.tsx
import React from "react";
import { BaseMovieProps } from "../../types/interfaces";
import PlaylistAddIcon from '@mui/icons-material/PlaylistAdd';
import { IconButton } from "@mui/material";

interface AddToMustWatchProps {
  movie: BaseMovieProps;
}

const AddToMustWatchIcon: React.FC<AddToMustWatchProps> = ({ movie }) => {
  return (
    <IconButton
      aria-label="add to must watch"
      onClick={() => {
        // TODO: Implement must watch functionality
        console.log("Added to must watch:", movie.title);
      }}
      color="primary"
    >
      <PlaylistAddIcon fontSize="large" />
    </IconButton>
  );
};

export default AddToMustWatchIcon;