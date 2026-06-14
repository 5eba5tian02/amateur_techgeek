function Page() {
  return <h1> Hello, Next.js!</h1>
}

function Subheadline() {
  return <h2> this is the subheadline </h2>
}

function Footer() {
  return <nav>
    <p> hello this is text</p>
    <p> is this human language</p>
  </nav>

}

export default function LandingPage() {
  return (
    <div>
      <Page />
      <Subheadline />
      <Footer />
    </div>
  )
}
