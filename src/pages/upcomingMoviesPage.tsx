import React, { useState, useEffect } from "react";
import PageTemplate from '../components/templateMovieListPage';
import { BaseMovieProps } from "../types/interfaces";
import { getUpcomingMovies } from "../api/tmdb-api";
import useFiltering from "../hooks/useFiltering";
import MovieFilterUI, {
  titleFilter,
  genreFilter,
} from "../components/movieFilterUI";
 import AddToMustWatchIcon from "../components/mustWatch/addToMustWatch";


const titleFiltering = {
  name: "title",
  value: "",
  condition: titleFilter,
};
const genreFiltering = {
  name: "genre",
  value: "0",
  condition: genreFilter,
};

const UpcomingMoviesPage: React.FC = () => {
  const [movies, setMovies] = useState<BaseMovieProps[]>([]);
  const favourites = movies.filter(m => m.favourite)

  
  const { filterValues, setFilterValues, filterFunction } = useFiltering(
    [titleFiltering, genreFiltering]
  );



  localStorage.setItem('favourites', JSON.stringify(favourites))
  // New function
  const addToFavourites = (movieId: number) => {
    const updatedMovies = movies.map((m: BaseMovieProps) =>
      m.id === movieId ? { ...m, favourite: true } : m
    );
    setMovies(updatedMovies);
  };



  const changeFilterValues = (type: string, value: string) => {
    const changedFilter = { name: type, value: value };
    const updatedFilterSet =
      type === "title"
        ? [changedFilter, filterValues[1]]
        : [filterValues[0], changedFilter];
    setFilterValues(updatedFilterSet);
  };

  useEffect(() => {
    getUpcomingMovies().then((movies: BaseMovieProps[]) => {
      setMovies(movies);
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);



  const displayedMovies = filterFunction(movies);


  return (
    <>
      <PageTemplate
        title="Upcoming Movies"
        movies={displayedMovies}
        action={(movie: BaseMovieProps) => {
          return <AddToMustWatchIcon movie={movie} />
        }}
      />
      <MovieFilterUI
        onFilterValuesChange={changeFilterValues}
        titleFilter={filterValues[0].value}
        genreFilter={filterValues[1].value}
      />
    </>
  );
};
export default UpcomingMoviesPage;
