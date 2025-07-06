import React, { useState, useCallback } from "react";
import { BaseMovieProps, Review } from "../types/interfaces";
 
interface MovieContextInterface {
    favourites: number[];
    addToFavourites: ((movie: BaseMovieProps) => void);
    removeFromFavourites: ((movie: BaseMovieProps) => void);
    addReview: ((movie: BaseMovieProps, review: Review) => void);
    // New must watch properties
    mustWatch: number[];
    addToMustWatch: (movie: BaseMovieProps) => void;
    removeFromMustWatch: (movie: BaseMovieProps) => void;
}
const initialContextState: MovieContextInterface = {
    favourites: [],
    addToFavourites: () => {},
    removeFromFavourites: () => {},
    addReview: (movie, review) => { movie.id, review},
    // New must watch initial state
    mustWatch: [],
    addToMustWatch: () => console.log("Initial addToMustWatch"),
    removeFromMustWatch: () => console.log("Initial removeFromMustWatch"),
};

export const MoviesContext = React.createContext<MovieContextInterface>(initialContextState);

const MoviesContextProvider: React.FC<React.PropsWithChildren> = ({ children }) => {
     const [myReviews, setMyReviews] = useState<Review[]>( [] )
    const [favourites, setFavourites] = useState<number[]>([]);
const [mustWatch, setMustWatch] = useState<number[]>([]); // New state


    const addToFavourites = useCallback((movie: BaseMovieProps) => {
        setFavourites((prevFavourites) => {
            if (!prevFavourites.includes(movie.id)) {
                return [...prevFavourites, movie.id];
            }
            return prevFavourites;
        });
    }, []);

    const removeFromFavourites = useCallback((movie: BaseMovieProps) => {
        setFavourites((prevFavourites) => prevFavourites.filter((mId) => mId !== movie.id));
    }, []);

     const addReview = (movie:BaseMovieProps, review: Review) => {   // NEW
        setMyReviews( {...myReviews, [movie.id]: review } )
      };


       // New must watch functions. Copied the addToFavourites const
    const addToMustWatch = useCallback((movie: BaseMovieProps) => {
        setMustWatch((prevMustWatch) => {
            if (!prevMustWatch.includes(movie.id)) {
                console.log("Added to Must Watch:", movie.id); // Debug log
                return [...prevMustWatch, movie.id];
            }
            return prevMustWatch;
        });
    }, []);

    const removeFromMustWatch = useCallback((movie: BaseMovieProps) => {
        setMustWatch((prevMustWatch) => { console.log("Removed from Must Watch:", movie.id); // Debug log
            return prevMustWatch.filter((id) => id !== movie.id);
        });
    }, []);

    return (
        <MoviesContext.Provider
            value={{
                favourites,
                addToFavourites,
                removeFromFavourites,
                addReview,
                // New must watch values
                mustWatch,
                addToMustWatch,
                removeFromMustWatch,
            }}
        >
            {children}
        </MoviesContext.Provider>
    );
};

export default MoviesContextProvider;
