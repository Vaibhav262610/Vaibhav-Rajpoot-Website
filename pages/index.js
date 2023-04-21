import { Inter } from 'next/font/google'
import Navbar from '@/components/Navbar'
import Header from '@/components/Header'
import SideIcons from '@/components/Sideicons'
import Head from 'next/head'
import About from '@/components/About'
import Work from '@/components/Work'
import WhyMe from '@/components/WhyMe'
import Footer from '@/components/Footer'


const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
    <Head>
      <title>Vaibhav-Rajpoot</title>
    </Head>
      <SideIcons />
      <Navbar />
      <Header />
      <About />
      <Work />
      <WhyMe />
      {/* <Contact /> */}
      <Footer />
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
      <link href="https://fonts.googleapis.com/css2?family=Raleway:wght@100;200;300;400;500;600;700;800;900&display=swap" rel="stylesheet" />
    </>
  )
}
