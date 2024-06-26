import * as React from 'react';
import MuiAppBar, { AppBarProps } from '@mui/material/AppBar';

function AppBar(props: AppBarProps) {
  console.log(props)
  return <MuiAppBar elevation={0} position="fixed" {...props} />;
}

export default AppBar;
