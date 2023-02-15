import { createTheme } from '@mui/material';

export const customDarkTheme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      light: 'rgba(168,85,247,.80)',
      main: 'rgba(168,85,247,.65)',
      dark: '(168,85,247,.28)'
    },
    background: {
      paper: '#151515',
      default: 'rgba(0,0,0,.95)'
    }
  }
})