import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Button from '@mui/material/Button';
import CameraIcon from '@mui/icons-material/PhotoCamera';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Link from '@mui/material/Link';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import ParaglidingIcon from '@mui/icons-material/Paragliding';

function Copyright() {
  return (
    <Typography variant="body2" color="text.secondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://www.communityexchange.art">
        {'Community Exchange'}
      </Link>{' '}
      {new Date().getFullYear()}
    </Typography>
  );
}

const theme = createTheme();

export default function Album() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <AppBar position="relative">
        <Toolbar> 
          <Typography variant="h6" color="inherit" noWrap>
            Donate Supplies
          </Typography>
          <Typography variant="h6" color="inherit" noWrap>
                Attend Events
          </Typography>
        </Toolbar>
      </AppBar>
      <main>
        {/* Hero unit */}
        <Box
          sx={{
            bgcolor: 'background.paper',
            pt: 8,
            pb: 6,
          }}
        >
          <Container maxWidth="sm">
            <Typography
              component="h1"
              variant="h2"
              align="center"
              color="text.primary"
              gutterBottom
            >
            Find Your Creative Outlet and Your Community
            </Typography>
        
            <Typography variant="h5" align="center" color="text.secondary" paragraph>
              We are the Community Art Supply Exchange, an organization for sharing new and gently-used art and craft supplies to stoke your creativity and building community. 
              All materials are FREE! Discover or donate supplies for fiber arts, painting, paper arts and more
              Pick out something new from the Community Exchange  
              Have leftover supplies from a craft that didn’t resonate with you?
              Drop off supplies to the Community Exchange for someone else to try
              Available items include paints, drawing supplies, wood, paper, fibers and more!
            </Typography>
            <Typography variant="h5" align="center" color="text.secondary" paragraph>
              New or gently-used art and craft supplies:
              yarn, needles (knitting, crochet, latch hook)
              fabric, notions (needles, thread, pins, buttons, zippers) 
              paints (oil, acrylic), paintbrushes any size, canvas
              drawing pencils, charcoal, pastels, sketchbooks
              markers, crayons, coloring books
              scrapbooking paper, stickers, cutting tools
              craft kits, glue
              instructional books
            </Typography>
            <Typography variant="h3" align="center" color="text.secondary" paragraph>
              Saturday, June 17, 2023
              10:00 am - 2:00 pm<br />
              New Location!
              Somewhere in the Area!
            </Typography>
          </Container>   
        </Box>
        
      </main>
      {/* Footer */}
      <Box sx={{ bgcolor: 'background.paper', p: 6 }} component="footer">
        <Typography variant="h6" align="center" gutterBottom>
          Holding Space for Community and Creativity
        </Typography>
        <Typography
          variant="subtitle1"
          align="center"
          color="text.secondary"
          component="p"
        >
         Contact: info@communityexchange.art
        </Typography>
        <Copyright />
      </Box>
      {/* End footer */}
    </ThemeProvider>
  );
}