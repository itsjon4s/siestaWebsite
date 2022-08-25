import Feature from './Feature';

const Footer = () => {
  return (
    <div className="flex justify-center items-center my-10">
      <div className="flex flex-col text-center">
        <h3 className="font-bold text-7xl">Features</h3>
        <h6 className="font-extralight text-xl">What Siesta has to offer.</h6>
        <div className="flex flex-col md:flex-row space-y-10 md:space-x-10 md:space-y-0 mt-10 items-center">
          <Feature title="High Quality Music" description="Music lovers can enjoy Siesta's music system. Complete with powerful commands. You will never need another music bot again! " />
          <Feature title="Many Sources Supported" description="We work with many music/videos sources, like Spotify, Youtube, SoundCloud, Tiktok, Reddit, etc." />
          <Feature title="Web Dashboard" description="You're able to comfortably customize Siesta on the web without having to remember any commands or syntaxes. (Comming soon)" />
        </div>
      </div>
    </div>
  );
};

export default Footer;
