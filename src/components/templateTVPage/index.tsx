import React from "react";
import Grid from "@mui/material/Grid";
import Typography  from "@mui/material/Typography";
import TVList from "../TVList";
import { BaseTVProps } from "../../types/interfaces";

interface TVTemplateProps {
    title: string;
    tvSeries: BaseTVProps[]
}

const TVTemplate: React.FC<TVTemplateProps> = ({ title, tvSeries}) => {
    return (
        <Grid container spacing={3} sx={{ padding:"20px" }}>
            <Grid item xs={12}>
                <Typography variant="h4" align="center">{title}</Typography>
            </Grid>
            <Grid item xs={12}>
                <TVList tvSeries={tvSeries}/>
            </Grid>
        </Grid>
    );
};

export default TVTemplate;