import { Container } from "@mui/material";
import Typography from "@mui/material/Typography";

export default function Donate(): JSX.Element {

  return (
    <>
      <Container sx={{
        height: '77vh',
        minHeight: 500,
        mt: 10,
      }}>
        <p>Donate Supplies</p>
        <Typography variant="h5" align="center" color="text.secondary" paragraph>
          New or gently-used art and craft supplies:
          <br></br>
          yarn, needles (knitting, crochet, latch hook),
          fabric, notions (needles, thread, pins, buttons, zippers),
          paints (oil, acrylic), paintbrushes any size, canvas,
          drawing pencils, charcoal, pastels, sketchbooks,
          markers, crayons, coloring books,
          scrapbooking paper, stickers, cutting tools,
          craft kits, all types of glue,
          instructional books
        </Typography>
      </Container>
    </>
  )
}
