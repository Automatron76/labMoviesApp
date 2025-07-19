import React from "react";
import Header from "../headerMovieList";
import Grid from "@mui/material/Grid";
import TVList from "../tvList";
import { TVListPageTemplateProps } from "../../types/interfaces";

const styles = {
  root: { 
    backgroundColor: "#bfbfbf",
  }
};

const TVListPageTemplate: React.FC<TVListPageTemplateProps> = ({ 
  tvSeries, 
  title,
  action 
}) => {
  return (
    <Grid container sx={styles.root}>
      <Grid item xs={12}>
        <Header title={title} />
      </Grid>
      <Grid item container spacing={5}>
        <TVList tvSeries={tvSeries} action={action} />
      </Grid>
    </Grid>
  );
};

export default TVListPageTemplate;