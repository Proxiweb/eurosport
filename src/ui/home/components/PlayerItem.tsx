import { Player } from "../../../Model";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper"
import Typography from "@mui/material/Typography";
import PlayerData from "./PlayerData";
import Last from "./Last";

interface PlayerProps {
    player: Player
}

const PlayerItem = ({ player } : PlayerProps) => {

    const fullName = `${player.firstname} ${player.lastname}`;

    return <Grid item>
        <Paper sx={{ p: 4 }}>
            <Grid container justifyContent="center" spacing={3}>
                <Grid item>
                    <Typography variant="h2">{fullName}</Typography>
                </Grid>
                <Grid item container justifyContent="space-between">
                    <Grid item xs={2}>
                        <img src={player?.picture?.url} alt={fullName} />
                    </Grid>
                    <Grid item xs={4}>
                        <ul style={{ listStyleType: "none"}}>
                            <PlayerData name="Rang" value={player.stats.rank} />
                            <PlayerData name="Points" value={player.stats.points} />
                            <PlayerData name="Age" value={player.stats.age} suffix="ans" />
                            <PlayerData name="Rang" value={player.stats.rank} />
                            <PlayerData name="Poids" value={player.stats.weight / 1000} suffix="kg"/>
                            <PlayerData name="Taille" value={player.stats.height / 100} suffix="m" />
                        </ul>
                    </Grid>
                </Grid>
                <Grid item>
                    <Last datas={player.stats.last} />
                </Grid>
            </Grid>
        </Paper>
    </Grid>
}

export default PlayerItem;