import React from "react";
import Grid from "@mui/material/Grid"; 
import  Typography from "@mui/material/Typography";
import ActorList from "../actorList";

import { ActorProps } from "../../types/interfaces"; // adjust import if needed

interface ActorTemplateProps {
  title: string;
  actors: ActorProps[];
}


const ActorTemplate: React.FC<ActorTemplateProps> = ({ title, actors }) => {
  return (
    <>

      <Grid container spacing={3} sx={{ padding: "15px" }}>
        <Grid item xs={12}>
          <Typography variant="h4" align="center">{title}</Typography>
          </Grid>
          <Grid item xs={12}>
            <ActorList actors={actors} />
          </Grid>
      </Grid>
    </>
  );
};

export default ActorTemplate;