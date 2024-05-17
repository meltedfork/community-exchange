import * as React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Link from '@mui/material/Link';
import Container from '@mui/material/Container';
import Typography from '../components/Typography';
import TextField from '../components/TextField';

function Copyright() {
  return (
    <React.Fragment>
      {'© '}
      <Link color="inherit" href="mailto:info@communityexchange.art" target="_blank">
        The Community Exchange
      </Link>{' '}
      {new Date().getFullYear()}
    </React.Fragment>
  );
}

const iconStyle = {
  width: 48,
  height: 48,
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  backgroundColor: 'warning.main',
  mr: 1,
  '&:hover': {
    bgcolor: 'warning.dark',
  },
};

export default function AppFooter() {
  return (
    <Typography
      component="footer"
      sx={{ display: 'flex', bgcolor: 'secondary.light' }}
    >
      <Container sx={{ my: 1.5, display: 'flex' }}>
        <Grid container spacing={5}>
          <Grid item xs={6} sm={4} md={3}>
            <Grid
              container
              direction="column"
              justifyContent="flex-end"
              spacing={2}
            // sx={{ minHeight: }}
            >
              <Grid item sx={{ display: 'flex' }}>
                <Copyright />
              </Grid>
            </Grid>
          </Grid>
          {/* <Grid item xs={6} sm={4} md={2}>
            <Box component="ul" sx={{ m: 0, listStyle: 'none', p: 0 }}>
              <Box component="li" sx={{ py: 0.5 }}>
                <Link href="/about">About the Exchange</Link>
              </Box>
              <Box component="li" sx={{ py: 0.5 }}>
                <Link href="#">Privacy</Link>
              </Box>
            </Box>
          </Grid> */}
        </Grid>
      </Container>
    </Typography>
  );
}
