import { createTheme } from '@mui/material/styles';
import { red } from '@mui/material/colors';

// A custom theme for this app
const theme = createTheme({
  palette: {
    primary: {
      main: '#556cd6',
    },
    secondary: {
      main: '#19857b',
    },
    error: {
      main: red.A400,
    },
  },
  components: {
    MuiTypography: {
      styleOverrides: {
        h1: {
          fontSize: "3em"
        },
        h2: {
          fontSize: "1.5em"
        }
      }
    },  
  }
});

export default theme;
