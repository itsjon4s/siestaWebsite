import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import Footer from '../components/Footer';
import NavBar from '../components/Navbar';
import Stats from '../components/Stats';

const Home: NextPage = () => {
  return (
    <div className="w-full">
      <Head>
        <title>Siesta</title>
        <meta name="description" content="Siesta, a multipropuse discord bot, music focused with over 200 servers!" />
      </Head>
      <NavBar />
      <div className="bg-[#3d3e51] h-1 m-6"></div>
      <div className="my-20 flex flex-col md:flex-row items-center justify-center space-y-6">
        <Image src="/siesta.jpeg" width="300px" height="300px" className="rounded-full shadow-md" />
        <div className="flex flex-col">
          <h1 className="font-semibold text-center text-6xl">
            Its time to invite <strong>Siesta</strong>!
          </h1>
          <div className="text-3xl font-light md:ml-10 text-center pt-5">
            <p>
              My name is <strong className="font-bold">Siesta</strong> a <strong className="font-bold">multifunctional discord bot</strong>{' '}
            </p>
            <p>
              <strong className="font-bold">music focused</strong> but I also have many other functions that all servers needs
            </p>
          </div>
        </div>
      </div>
      <Stats />
      <Footer />
    </div>
  );
};

export default Home;
