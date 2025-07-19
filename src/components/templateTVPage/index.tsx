import React from "react";
import TVHeader from "../headerTV";    
import Grid from "@mui/material/Grid";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import { getTVSeriesImages } from "../../api/tmdb-api";
import { TVDetailsProps } from "../../types/interfaces";
import { useQuery } from "react-query";
import Spinner from '../spinner';

const styles = {
    gridListRoot: {
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "space-around",
    },
    gridListTile: {
        width: 450,
        height: '100vh',
    },
};

interface TemplateTVPageProps {
    tv: TVDetailsProps;
    children: React.ReactElement;
}

const TemplateTVPage: React.FC<TemplateTVPageProps> = ({tv, children}) => {
    const { data, error, isLoading, isError } = useQuery(
        ["tvImages", tv.id],
        () => getTVSeriesImages(tv.id)
    );

    if (isLoading) return <Spinner />;
    if (isError) return <h1>{(error as Error).message}</h1>;

    return (
        <>
            <TVHeader {...tv} />
            <Grid container spacing={5} style={{ padding: "15px" }}>
                <Grid item xs={3}>
                    <ImageList cols={1}>
                        {data?.map((image: { file_path: string }) => ( // Minimal type definition
                            <ImageListItem key={image.file_path} sx={styles.gridListTile}>
                                <img
                                    src={`https://image.tmdb.org/t/p/w500/${image.file_path}`}
                                    alt={`${tv.name} poster`}
                                />
                            </ImageListItem>
                        ))}
                    </ImageList>
                </Grid>
                <Grid item xs={9}>
                    {children}
                </Grid>
            </Grid>
        </>
    );
};

export default TemplateTVPage;