import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';

export default function Index() {

  return (
    <main>
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
            Free materials for Everyone
            </Typography>
          </Container>
          <Container maxWidth="sm">
            <Typography variant="h5" align="center" color="text.secondary" paragraph>
              We are the Community Art Supply Exchange, an organization for sharing new and gently-used art and craft supplies to stoke your creativity and building community. 
              All materials are FREE! Discover or donate supplies for fiber arts, painting, paper arts and more
              Pick out something new from the Community Exchange  
              Have leftover supplies from a craft that didn’t resonate with you?
              Drop off supplies to the Community Exchange for someone else to try
              Available items include paints, drawing supplies, wood, paper, fibers and more!
            </Typography>
          </Container>
          <Container maxWidth="sm">
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
          </Container>
          <Container maxWidth="sm">
            <Typography variant="h3" align="center" color="text.secondary" paragraph>
              Saturday, June 17, 2023
              10:00 am - 2:00 pm<br />
              New Location!
              Somewhere in the Area!
            </Typography>
          </Container>   
        </Box>
      </main>
  )
}

