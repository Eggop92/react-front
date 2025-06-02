import { createTheme, ThemeProvider } from '@mui/material';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { SnackbarProvider } from 'notistack';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import SkillCheckSnackbar from './componentes/SkillCheckSnackbar.tsx';
import './index.css';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 1000 * 60 * 60 * 5, // 5 hours Tiempo minimo antes de solicitar de nuevo los datos
      gcTime: 1000 * 60 * 60 * 24, // 24 hours Tiempo que se guardan los datos en caché
    }
  }
});


createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>

      <ThemeProvider theme={createTheme({ palette: { mode: 'dark' } })}>
        <SnackbarProvider maxSnack={1} anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }} Components={{
          skillCheckSnackbar: SkillCheckSnackbar
        }}>
          <App />
        </SnackbarProvider>
      </ThemeProvider>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  </StrictMode>,
)
