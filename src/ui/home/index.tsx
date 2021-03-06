import Grid from "@mui/material/Grid";
import { useQuery } from "@apollo/client";
import Typography from "@mui/material/Typography";
import CircularProgress from "@mui/material/CircularProgress";

import queries from "../../Queries";
import Head2Head from "../../Model";
import PlayerList from "./components/PlayerList";

const HomeContainer = () => {
  const { data, loading, error } = useQuery<Head2Head>(queries.PLAYERS);

  if (loading) {
    return (
      <Grid container justifyContent="center">
        <Grid item sx={{ p: 4 }}>
          <CircularProgress />
        </Grid>
      </Grid>
    );
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <Grid
      container
      sx={{ width: "100%", p: 5 }}
      justifyContent="center"
      spacing={4}
    >
      <Grid item>
        <Typography variant="h1" sx={{ textAlign: "center" }}>
          Joueurs
        </Typography>
      </Grid>
      <PlayerList players={data?.headToHead} />
    </Grid>
  );
};

export default HomeContainer;
