import Head from 'next/head'
import Navbar from '../components/sections/navbar/Navbar'
import Hero from '../components/sections/hero/Index'
import About from '../components/sections/about/Index'
import Agenda from '../components/sections/agenda/Index'
import Speakers from '../components/sections/speakers/Index'
import Partners from '../components/sections/patners/Index'
import Location from '../components/sections/location/Index'
import OurClub from '../components/sections/ourClub/Index'
import Footer from '../components/sections/footer/Index'
export default function Home() {
  return (
    <div className="bg-ingehack-black">
      <Head>
        <title>IngeHack 2k22</title>
        <meta name="description" content="IngeHack (3rd Edition) Event Website" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

        <Navbar />
        <Hero />
        <About />
        <Agenda />
        <Speakers />
        <Partners />
        <Location />
        <OurClub />
        <Footer />

    </div>
  )
}
