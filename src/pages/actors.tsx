import React from "react";
import { useQuery } from "react-query";
import Spinner from "../components/spinner";
import ActorTemplate from "../components/templateActorPage";
import {  ActorApiResponse } from "../types/interfaces";
import { useState } from "react";

import { getPopularActors } from "../api/tmdb-api"; 
 
const PopularActorsPage: React.FC = () => {
  const [page, setPage] = useState(1);
  const { data, isLoading, error } = useQuery<ActorApiResponse, Error>(
    ["popularActors",page],() => getPopularActors(page), { keepPreviousData: true}
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
     <div style={{marginTop: "20px", textAlign:"center"}}>
      <button onClick={() => setPage((p) => Math.max( p-1,1))} disabled={page===1}>Previous</button>
      <span>page{page}</span>
      <button onClick={() => setPage((p) => Math.max( p+1))}>Next</button>
     </div>
    </>
  );
};

export default PopularActorsPage;