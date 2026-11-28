import { useState } from 'react'
import {
  Avatar,
  Badge,
  Breadcrumb,
  Button,
  Card,
  Checkbox,
  Dialog,
  FormGroup,
  Input,
  LiveMessage,
  Marquee,
  Navbar,
  PageAnnouncer,
  Progress,
  Radio,
  RadioGroup,
  SkipLink,
  Spinner,
  Table,
  Textarea,
  VisuallyHidden,
} from '~/components/nb'

export default function Hello({ message, server_time }) {
  const [dialogOpen, setDialogOpen] = useState(false)

  return (
    <>
      <SkipLink href="#hello-main" />
      <PageAnnouncer />

      <Navbar
        brand={<strong>The Community Exchange</strong>}
        items={[
          { href: '/hello', label: 'Hello', current: true },
          { href: '/pages/about', label: 'About Us' },
          { href: '/pages/signup', label: 'Sign Up' },
          { href: 'https://www.paypal.com/pool/9g3mvR5vom', label: 'Make a Donation' },
        ]}
      />

      <main id="hello-main" tabIndex={-1} style={{ padding: '1rem' }}>
        <LiveMessage message="Wrapper showcase loaded." />
        <h1>{message}</h1>
        <p>Rendered by React. Rails sent this at {server_time}.</p>

        <Breadcrumb
          items={[
            { href: '/', label: 'Home' },
            { href: '/hello', label: 'Component Showcase' },
          ]}
        />

        <p>
          Status <Badge>Beta</Badge>{' '}
          <Spinner label="Loading demo state" />
        </p>

        <Card>
          <Card.Header>
            <h2>Card Compound</h2>
          </Card.Header>
          <Card.Body>
            <p>Testing card structure with avatar, progress, and action button.</p>
            <Avatar
              src="https://via.placeholder.com/80"
              alt="Sample avatar"
              size={64}
            />
            <Progress value={65} label="Migration progress" />
            <Button href="/" className="orange">Go to Home</Button>
          </Card.Body>
          <Card.Footer>
            <small>Card footer content</small>
          </Card.Footer>
        </Card>

        <FormGroup
          id="hello-email"
          label="Email for updates"
          hint="This is a demo field for wrapper testing."
        >
          <Input type="email" name="email" placeholder="you@example.com" />
        </FormGroup>

        <FormGroup
          id="hello-notes"
          label="Message"
          hint="This textarea is for wrapper styling/accessibility testing."
        >
          <Textarea name="notes" rows={4} placeholder="Type a short message..." />
        </FormGroup>

        <Checkbox
          id="hello-updates-opt-in"
          name="updates_opt_in"
          label="I want occasional event update emails"
          hint="This is a demo checkbox wrapper."
        />

        <RadioGroup
          name="hello-attendance"
          legend="Are you planning to attend the next exchange?"
          hint="This is a demo radio group wrapper."
        >
          <Radio name="hello-attendance" value="yes" label="Yes" />
          <Radio name="hello-attendance" value="maybe" label="Maybe" />
          <Radio name="hello-attendance" value="no" label="No" />
        </RadioGroup>

        <p>
          <button type="button" className="nb-button" onClick={() => setDialogOpen(true)}>
            Open Dialog
          </button>
        </p>

        <Dialog open={dialogOpen} onClose={() => setDialogOpen(false)} title="Native Dialog Demo">
          <p>This dialog uses the native dialog element with focus return behavior.</p>
          <form method="dialog">
            <button type="submit" className="nb-button">Close</button>
          </form>
        </Dialog>

        <Marquee items={['Creativity', 'Reuse', 'Community', 'Inspiration']} />

        <Table caption="Upcoming events preview">
          <thead>
            <tr>
              <th scope="col">Month</th>
              <th scope="col">Theme</th>
              <th scope="col">Location</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>December</td>
              <td>Let&apos;s Get Crafty</td>
              <td>Oak Park Main Library</td>
            </tr>
            <tr>
              <td>April</td>
              <td>Bring a Craft to Work On</td>
              <td>Maze Branch Meeting Room</td>
            </tr>
          </tbody>
        </Table>

        <VisuallyHidden>Screen-reader only confirmation text.</VisuallyHidden>
      </main>
    </>
  )
}
