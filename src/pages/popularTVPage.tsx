import React from "react";
import { useQuery } from "react-query";
import Spinner from "../components/spinner";
import TVTemplate from "../components/templateTVPage";
import { getPopularTVSeries } from "../api/tmdb-api";
import { BaseTVProps } from "../types/interfaces";


const PopularTVPage: React.FC = () => {
    const { data, isLoading, error} = useQuery<BaseTVProps[], Error> (["popularTV"], getPopularTVSeries);

    if (isLoading) return <Spinner/>
    if (error) return <div>{error.message}</div>;

    return ( <TVTemplate title="Popular TV Shows"
        tvSeries={data ?? []} />
    );
};

export default PopularTVPage