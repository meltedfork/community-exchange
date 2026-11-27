import { Button } from '../components/nb'

export default function Hello({ message, server_time }) {
  return (
    <main>
      <h1>{message}</h1>
      <p>Rendered by React. Rails sent this at {server_time}.</p>
      <Button href="/" className="orange">Go to Home</Button>
    </main>
  )
}
