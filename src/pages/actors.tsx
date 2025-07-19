import React from "react";
import { useQuery } from "react-query";
import Spinner from "../components/spinner";
import ActorTemplate from "../components/templateActorPage";
import {  ActorApiResponse } from "../types/interfaces";


import { getPopularActors } from "../api/tmdb-api"; 
 
const PopularActorsPage: React.FC = () => {
  const { data, isLoading, error } = useQuery<ActorApiResponse, Error>(
    ["popularActors"], 
    getPopularActors
  );

  if (isLoading) return <Spinner />;
  if (error) return <div>{error.message}</div>;


  if (!Array.isArray(data?.results)) {console.error("Data is not an array:",data); return <div> Something went wrong.</div>}
  return (
    <>
      <ActorTemplate
        title="Popular Actors"
        actors={data?.results ?? []}
      />
     
    </>
  );
};

export default PopularActorsPage;