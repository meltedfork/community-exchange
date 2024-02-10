import { Copyright } from "@mui/icons-material";
import Box from "@mui/material/Box";
import Link from "@mui/material/Link";
import Typography from "@mui/material/Typography";



const Footer = () =>
(
  <Box sx={{ bgcolor: "#F7DC6F", p: 6 }} component="footer">
    <Typography variant="h6" align="center" gutterBottom>
      Community and Creativity
    </Typography>
    <Typography
      variant="subtitle1"
      align="center"
      color="text.secondary"
      component="p"
    >
      Contact:
      <Link href="info@communityexchange.art">
        info@communityexchange.art
      </Link>
    </Typography>
    <Typography variant="body2" color="text.secondary" align="center">
      Copyright
      <Copyright />
      <Link color="inherit" href="https://www.communityexchange.art">
        {'Community Exchange'}
      </Link>{' '}
      {new Date().getFullYear()}
    </Typography>
  </Box>
);

export default Footer;
