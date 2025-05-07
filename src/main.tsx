import { createTheme, ThemeProvider } from '@mui/material';
import { SnackbarProvider } from 'notistack';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import SkillCheckSnackbar from './componentes/SkillCheckSnackbar.tsx';
import './index.css';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ThemeProvider theme={createTheme({ palette: { mode: 'dark' } })}>
      <SnackbarProvider maxSnack={1} anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }} Components={{
        skillCheckSnackbar: SkillCheckSnackbar
      }}>
        <App />
      </SnackbarProvider>
    </ThemeProvider>
  </StrictMode>,
)
