import React from "react";
import { useQuery } from "react-query";
import Spinner from "../components/spinner";
import TVTemplate from "../components/templateTVPage";
import { getPopularTVSeries } from "../api/tmdb-api";
import { BaseTVProps } from "../types/interfaces";
import { useState } from "react";

const PopularTVPage: React.FC = () => {
    const [page, setpage] = useState(1);

    const { data, isLoading, error} = useQuery<BaseTVProps[], Error> (["popularTV", page], () => getPopularTVSeries(page), { keepPreviousData: true});

    if (isLoading) return <Spinner/>
    if (error) return <div>{error.message}</div>;

    const filteredTVSeries = ( data ??[]).filter(tv => tv.vote_average >= 8);

    return ( 
        <>
    <TVTemplate title="Popular TV Shows" tvSeries={filteredTVSeries} />
    <div style={{marginTop: "20px", textAlign: "center"}}>
        <button onClick={() => setpage((p) => Math.max( p -1, 1))} disabled= { page === 1}>
            Previous
        </button>
        <span style={{ margin: "0 10px"}}>Page {page}</span>
        <button onClick={() => setpage((p) => p+1)}>
            Next
        </button>
    </div>    
</>
);
};

export default PopularTVPage