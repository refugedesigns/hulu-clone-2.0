import Head from 'next/head'
import { Header } from '../components/Header'
import Navbar from '../components/Navbar'
import Results from '../components/Results'
import requests from '../utils/request'

export default function Home({movieData}) {
  return (
    <div className="bg-[#06202A] text-gray-300 min-h-screen overflow-y-hidden">
      <Head>
        <title>Hulu Clone 2.0.0</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />
      <Navbar />
      <Results movieData={movieData} />
    </div>
  )
}

export async function getServerSideProps(context) {
  const genre = context.query.genre;

  const request = await fetch(
    `https://api.themoviedb.org/3${
      requests[genre]?.url || requests.fetchTrending.url
    }`
  ).then((res) => res.json());

  return {
    props: {
      movieData: request,
    },
  };
}