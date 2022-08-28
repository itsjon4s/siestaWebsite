import type { NextPage } from 'next';
import Head from 'next/head';
import Link from 'next/link';
import Features from '../components/Features';
import Footer from '../components/Footer';
import NavBar from '../components/Navbar';
import Stats from '../components/Stats';

const Home: NextPage = () => {
  return (
    <div className="mx-10">
      <Head>
        <title>Siesta</title>
        <meta name="description" content="Siesta, a multipropuse discord bot, music focused with over 200 servers!" />
      </Head>
      <NavBar />
      <div className="my-20 flex flex-col md:flex-row items-center justify-center space-y-6">
        <div className="flex flex-col">
          <h1 className="font-semibold text-center text-6xl text-[]">
            Its time to invite <strong>Siesta</strong>!
          </h1>
          <div className="text-3xl font-normal md:ml-10 text-center pt-5 text-[#bac2de]">
            <p>
              My name is <strong className="font-bold">Siesta</strong> a <strong className="font-bold">multifunctional discord bot</strong>{' '}
            </p>
            <p>
              <strong className="font-bold">music focused</strong> but I also have many other functions that all servers needs.
            </p>
            <div className="flex flex-col md:flex-row items-center justify-center my-10 space-y-5 md:space-x-5 md:space-y-0">
              <button className="rounded-lg p-5 border-2 bg-[#313244] border-[#313244] shadow-md">
                <Link href="/discord">
                  <a>Support Server</a>
                </Link>
              </button>
              <button className="rounded-lg p-5 border-2 bg-[#181825] border-[#181825] text-[#fff] shadow-md">
                <Link href="/invite">
                  <a className="font-bold">Invite Siesta!</a>
                </Link>
              </button>
            </div>
          </div>
        </div>
      </div>
      <Features />
      <Stats />
      <Footer />
    </div>
  );
};

export default Home;
