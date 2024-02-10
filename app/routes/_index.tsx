import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import { Fragment } from 'react';
import ProductHero from '~/components/views/ProductHero';
// TODO: upgrade npm=> npm install -g npm@10.0.0

// import { ExternalScriptsFunction } from 'remix-utils';
// import Subscribe from '~/components/form.component';


// const scripts: ExternalScriptsFunction = () => [
//   {
//     async: true,
//     src: '//s3.amazonaws.com/downloads.mailchimp.com/js/mc-validate.js',
//   }
// ]
// export const handle = { scripts };

export default function Index(): JSX.Element {

  return (
    <ProductHero />
    // <main>
    //   <Box
    //     sx={{
    //       bgcolor: "#EDEAE5",
    //       pt: 8,
    //       pb: 6,
    //     }}
    //   >
    //     <Container maxWidth="md" color="#A26EA1">
    //       <Typography
    //         component="h1"
    //         variant="h2"
    //         align="center"
    //         color="text.primary"
    //         gutterBottom
    //       >
    //         Free Materials for Everyone
    //       </Typography>
    //     </Container>
    //     <Container maxWidth="md" color="#A26EA1">
    //       <Typography variant="h5" align="center" color="text.secondary" paragraph>
    //         Welcome to the Community Art Supply Exchange! We focus on sharing new and gently-used art and craft supplies to support your creativity.
    //         All materials are donated and free to everyone.~
    //       </Typography>
    //     </Container>
    //     <Container maxWidth="md" color="#A26EA1">
    //       <Typography variant="h5" align="center" color="text.secondary" paragraph>
    //         All materials are FREE! Discover or donate supplies for fiber arts, painting, paper arts and more.
    //       </Typography>
    //     </Container>
    //     {/* <Container maxWidth="md" color="#A26EA1">
    //       <Typography variant="h5" align="center" color="text.secondary" paragraph>
    //         New or gently-used art and craft supplies:
    //         yarn, needles (knitting, crochet, latch hook)
    //         fabric, notions (needles, thread, pins, buttons, zippers)
    //         paints (oil, acrylic), paintbrushes any size, canvas
    //         drawing pencils, charcoal, pastels, sketchbooks
    //         markers, crayons, coloring books
    //         scrapbooking paper, stickers, cutting tools
    //         craft kits, glue
    //         instructional books
    //       </Typography>
    //     </Container> */}
    //     <Container maxWidth="md" color="F18A9B">
    //       <Typography variant="h3" align="center" color="text.secondary" paragraph>
    //         Saturday, October 21, 2023<br />
    //         10:00 am - 2:00 pm<br />
    //       </Typography>
    //     </Container>
    //   </Box>
    // </main>
  )
};

// extra text: Pick out something new from the Community Exchange
  // Have leftover supplies from a craft that didn’t resonate with you?
  // Drop off supplies to the Community Exchange for someone else to try
  // Available items include paints, drawing supplies, wood, paper, fibers and more!
