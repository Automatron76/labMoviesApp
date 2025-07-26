import React from "react";
import  Grid  from "@mui/material/Grid";
import TVCard from "../TVCard";
import { BaseTVProps } from "../../types/interfaces";

interface Props {
    tvSeries: BaseTVProps[];
}

const TVList: React.FC<Props> = ({ tvSeries}) => {
    return (
        <Grid container spacing={2} justifyContent="center">
            {tvSeries.map((tv) => (
                <Grid key={tv.id} item xs={12} sm={6} md={4} lg={2}>
                    <TVCard tv={tv} />
                    </Grid>
            ))}
        </Grid>
    );
};

export default TVList;