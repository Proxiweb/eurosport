import CheckboxIcon from "@mui/icons-material/CheckBox";
import NoCheckboxIcon from "@mui/icons-material/CheckBoxOutlineBlank";
import Grid from "@mui/material/Grid";

interface LastProps {
  datas: boolean[];
}

const Last = ({ datas }: LastProps) => (
  <Grid item container>
    {datas.map((d: boolean, idx: number) => (
      <Grid item key={idx}>{d ? <CheckboxIcon /> : <NoCheckboxIcon />}</Grid>
    ))}
  </Grid>
);

export default Last;
