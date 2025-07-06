// src/components/cardIcons/addToMustWatch.tsx
import React, { useContext} from "react";
import { BaseMovieProps } from "../../types/interfaces";
import PlaylistAddIcon from '@mui/icons-material/PlaylistAdd';
import { IconButton } from "@mui/material";
import { MoviesContext } from "../../contexts/moviesContext";


interface AddToMustWatchProps {
  movie: BaseMovieProps;
}

const AddToMustWatchIcon: React.FC<AddToMustWatchProps> = ({ movie }) => {

   const { mustWatch, addToMustWatch, removeFromMustWatch } = useContext(MoviesContext);
  
  const isMustWatch = mustWatch.includes(movie.id);

  const handleClick = () => {
    if (isMustWatch) {
      removeFromMustWatch(movie);
      console.log("Removed from Must Watch:", movie.title);
    } else {
      addToMustWatch(movie);
      console.log("Added to Must Watch:", movie.title);
    }
  };

  return (
   <IconButton
      aria-label={isMustWatch ? "Remove from Must Watch" : "Add to Must Watch"}
      onClick={handleClick}
      color={isMustWatch ? "secondary" : "primary"}
    >
      <PlaylistAddIcon fontSize="large" />
    </IconButton>
  );
};

export default AddToMustWatchIcon;