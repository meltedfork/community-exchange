import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import type { V2_MetaFunction } from "@remix-run/node";
import CssBaseline from '@mui/material/CssBaseline';
import { createTheme, ThemeOptions, ThemeProvider } from '@mui/material/styles';
import { ExternalScripts } from 'remix-utils';

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
import AppBar from './components/AppBar';
import AppAppBar from './components/views/AppAppBar';
import AppFooter from './components/views/AppFooter';

export const meta: V2_MetaFunction = () => {
  return [{ title: "Community Art Supply Exchange" }];
};

const theme = createTheme({
  palette: {
    primary: {
      light: '#5c9ca3',
      main: '#34848c',
      dark: '#026670',
      contrastText: '#fff',
    },
    secondary: {
      light: '#fce79a',
      main: '#FCE181',
      dark: '#b09d5a',
      contrastText: '#000',
    },
  },
});

export default function App() {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link href="https://fonts.googleapis.com/css2?family=Montserrat&display=swap" rel="stylesheet" />

        <Meta />
        <Links />
      </head>
      <body style={{ zoom: 1 }}>
        <ThemeProvider theme={theme} >
          <CssBaseline />
          <AppAppBar />
          {/* <Header /> */}
          <Outlet />
          {/* <Footer /> */}
          <AppFooter />
        </ThemeProvider>
        <ScrollRestoration />
        <ExternalScripts />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  );
}
