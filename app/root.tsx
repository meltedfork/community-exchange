import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import type { V2_MetaFunction } from "@remix-run/node";
import CssBaseline from '@mui/material/CssBaseline';
import { createTheme, ThemeProvider } from '@mui/material/styles';

import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "@remix-run/react";


import Header from './components/header.component';
import Footer from './components/footer.component';

export const meta: V2_MetaFunction = () => {
  return [{ title: "Community Art Supply Exchange" }];
};

const theme = createTheme({
  palette: {
    primary: {
      light: '#f1c583',
      main: '#FFB480',
      dark: '#cb4e07',
      contrastText: '#000',
    },
    secondary: {
      light: '#ebf49c',
      main: '#808f6c',
      dark: '#90eb53',
      contrastText: '#000',
    },
  },
})

export default function App() {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body>
        <ThemeProvider theme={theme} >
          <CssBaseline />
          <Header />
          <Outlet />
          <Footer />
        </ThemeProvider> 
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  );
}
