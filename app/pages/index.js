import Head from 'next/head';
import HeroSection from '../components/HeroSection';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Notes App</title>
        <meta name="description" content="Notes App" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>
        <HeroSection />
      </div>
    </div>
  )
}
