import React from "react";
import PageTemplate from '../components/templateMovieListPage';
import { BaseTVProps } from "../types/interfaces";
import { getPopularTVSeries } from "../api/tmdb-api";

import Spinner from "../components/spinner";
import { useQuery } from "react-query";
import { DiscoverTV } from "../types/interfaces";

const TVSeriesPage: React.FC = () => {
  const { data, isLoading, error } = useQuery<DiscoverTV, Error>(
    ["popularTVSeries"],
    getPopularTVSeries
  );

  if (isLoading) return <Spinner />;
  if (error) return <div>{error.message}</div>;

return (
  <PageTemplate
    title="TV Series"
    tvSeries={data?.results || []}
  />
); }

export default TVSeriesPage;