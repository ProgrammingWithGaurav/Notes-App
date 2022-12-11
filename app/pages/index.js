import Head from 'next/head';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import HeroSection from '../components/HeroSection';
import { supabase } from '../supabaseClient';

export default function Home() {
  const router = useRouter();
  useEffect(() => {
    const redirect = async () => {
      const { data, error } = await supabase.auth.getSession();
      if (data.session?.user) {
        router.push("/dashboard");
      }
    };
    redirect();
  }, []);
  return (
    <div>
      <Head>
        <title>Notes App</title>
        <meta name="description" content="Notes App" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
        <HeroSection />
    </div>
  )
}
