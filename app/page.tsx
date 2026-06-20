

function Layout() {
  return (
    <>
        <nav>
        <a className="logo" href="#"><span>#</span>AmateurTechGeek</a>
        <ul> 
          <li><a href="#home">Home </a></li>
          <li><a href="#tools">Tools </a></li>
          <li><a href="tutorial">Tutorial </a></li>
        </ul>
       </nav>
    </>
  )
}

function Page() {
  return (
    <> 
    <section className="hero">
       <h1> Welcome to Amateur_TechGeek</h1> 
      <h2 className="hero-sub">
    Tools and Tutorials to become the top 1% Tech Geek!
   </h2>
   </section>

   </>
   );

  }

export default function LandingPage() {
  return (
    <div>
      <Layout />
      <Page />

      
    </div>
  )
}
