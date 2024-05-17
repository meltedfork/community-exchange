import * as React from 'react';
import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import AppBar from '../components/AppBar';
import Toolbar from '../components/Toolbar';

const rightLink = {
  fontSize: 16,
  color: 'common.white',
  ml: 3,
};

function AppHeader() {
  return (
    <AppBar>
      <Toolbar sx={{ justifyContent: 'space-between' }}>
        <Box sx={{ flex: 1 }} />
        <Link
          variant="h6"
          underline="none"
          color="inherit"
          href="/"
          sx={{ fontSize: 24 }}
        >
          {'Community Exchange'}
        </Link>
        <Box sx={{ flex: 1, display: 'flex', justifyContent: 'flex-end' }}>
          <Link
            color="inherit"
            variant="h6"
            underline="none"
            href="/donate"
            sx={rightLink}
          >
            {'How to Donate'}
          </Link>
          {/* <Link
            variant="h6"
            underline="none"
            href="/join"
            sx={{ ...rightLink, color: 'secondary.main' }}
          >
            {'Join our Mailing List'}
          </Link> */}
        </Box>
      </Toolbar>
    </AppBar>
  );
}

export default AppHeader;
