import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { Players, Player } from "../../../Model";
import PlayerItem from "./PlayerItem";

interface Props {
  players: Players;
}

const PlayerList = ({ players }: Props) => {
  return (
    <Grid
      item
      container
      direction="row"
      justifyContent="center"
      spacing={4}
    >
      {players.map((p: Player, index: number) => (
        <PlayerItem player={p} key={index} />
      ))}
    </Grid>
  );
};

PlayerList.defaultProps = {
  players: [],
};

export default PlayerList;
