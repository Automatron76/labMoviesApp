import React, { useState, useEffect } from "react";
import PageTemplate from '../components/templateMovieListPage';
import { BaseMovieProps } from "../types/interfaces";
import { getPopularMovies } from "../api/tmdb-api";
import useFiltering from "../hooks/useFiltering";
import MovieFilterUI, {
  titleFilter,
  genreFilter,
} from "../components/movieFilterUI";
import AddToFavouritesIcon from "../components/cardIcons/addToFavourites";
import Spinner from "../components/spinner";
import { useQuery } from "react-query";

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

const PopularMoviesPage: React.FC = () => {
  const [page, setPage] = useState(1)
  const { data, isLoading, error } = useQuery<BaseMovieProps[], Error>(
    ["popularMovies", page],  () => getPopularMovies(page), { keepPreviousData: true}
     
  );
  const [filteredMovies, setFilteredMovies] = useState<BaseMovieProps[]>([]);
  const { filterValues, setFilterValues, filterFunction } = useFiltering(
    [titleFiltering, genreFiltering]
  );

  useEffect(() => {
    if (data) {
      console.log("Popular Movies:",data)
      setFilteredMovies(filterFunction(data));
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
        title="Popular Movies"
        movies={filteredMovies}
        action={(movie: BaseMovieProps) => {
          return <AddToFavouritesIcon {...movie} />
        }}
      />
      <MovieFilterUI
        onFilterValuesChange={changeFilterValues}
        titleFilter={filterValues[0].value}
        genreFilter={filterValues[1].value}
      />
    <div style={{ marginTop: "20px", textAlign: "center"}}>
      <button onClick={() => setPage((p) => Math.max(p-1,1))}> Previous</button>
      <span style={{ margin:"0 10px"}}>Page{page}</span>
      <button onClick={() => setPage((p) => p+1)}> Next</button>
      
    </div>
    
    </>
    
  );
};

export default PopularMoviesPage;