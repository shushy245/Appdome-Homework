import { createTheme, responsiveFontSizes } from '@mui/material';

const theme = responsiveFontSizes(createTheme({
  palette: {
    'background': 'linear-gradient(90deg, #857DDF 0%, #1FBFE8 100%)',
    'button': '#344A53',
    'container': '#DDF2ED',
  },
  typography: {
    fontFamily: 'Avenir'
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          backgroundColor: '#344A53',
          color: '#e9f5ff'
        }
      }
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          backgroundColor: "#e9f5ff",
        },
      }
    }
  }
}))

export default theme;