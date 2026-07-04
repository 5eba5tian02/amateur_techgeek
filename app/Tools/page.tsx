import Link from "next/link";

function Layout() {
  return (
    <>
        <nav>
        <a className="logo" href="#"><span>#</span>AmateurTechGeek</a>
        <ul> 
          <li><a href="/">Home </a></li>
          <li><a href="tutorial">Tutorial </a></li>
        </ul>
       </nav>
    </>
  )
}

function ToolsMenu() {
  return (
    <main className="container">
      <h1>My Tools</h1>

      <div className="grid">
        <Link href="/Tools/BirdChirping" className="card">
          <h2> Bird Chirping</h2>
          <p>Relax with natural bird sounds</p>
        </Link>

        <Link href="/Tools/OfficeYoga" className="card">
          <h2> Office Yoga</h2>
          <p>Quick exercises for your workday</p>
        </Link>
      </div>
    </main>
  );
}

export default function LandingPage() {
  return (
    <div>
      <Layout />
      <h2> Hello</h2>
      <ToolsMenu />

      
    </div>
  )
}