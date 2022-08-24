const Stats = () => {
  return (
    <div className="flex justify-center items-center text-center my-24">
      <div className="flex flex-col">
        <h3 className="font-bold text-7xl">Stats</h3>
        <div className="space-y-10 md:space-x-24 md:space-y-0 flex flex-col md:flex-row mt-8">
          <div className="flex flex-col">
            <h3 className="font-bold text-5xl">220+</h3>
            <h6 className="font-light text-xl">Guilds</h6>
          </div>
          <div className="flex flex-col">
            <h3 className="font-bold text-5xl">99.7%</h3>
            <h6 className="font-light text-xl">Uptime</h6>
          </div>
          <div className="flex flex-col">
            <h3 className="font-bold text-5xl">40+</h3>
            <h6 className="font-light text-xl">Commands</h6>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Stats;
