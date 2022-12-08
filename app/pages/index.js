import Head from 'next/head';
import Header from '../components/Header';
import AddModal from '../components/AddModal';
import Note from '../components/Note';
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
        {/* <Header /> */}
        <AddModal />
        {/* <Note /> */}
        <HeroSection />
      </div>
    </div>
  )
}
