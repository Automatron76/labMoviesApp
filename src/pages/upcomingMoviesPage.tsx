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
import Spinner from "../components/spinner";
import { useQuery } from "react-query";
import { DiscoverMovies } from "../types/interfaces";



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
     const { data, isLoading, error } = useQuery<DiscoverMovies, Error>(
    ["upcomingMovies"], // Query key as array
    getUpcomingMovies
  );
      const [filteredMovies, setFilteredMovies] = useState<BaseMovieProps[]>([]);
     const { filterValues, setFilterValues, filterFunction } = useFiltering(
    [titleFiltering, genreFiltering]
  );

useEffect(() => {
    if (data?.results) {
      setFilteredMovies(filterFunction(data.results));
    }
  }, [data, filterFunction]);


 if (isLoading) return <Spinner />;
  if (error) return <div>{error.message}</div>;



  const changeFilterValues = (type: string, value: string) => {
    const changedFilter = { name: type, value: value };
    const updatedFilterSet =
      type === "title"
        ? [changedFilter, filterValues[1]]
        : [filterValues[0], changedFilter];
    setFilterValues(updatedFilterSet);
  };

  return (
    <>
      <PageTemplate
        title="Upcoming Movies"
        movies={filteredMovies}
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
