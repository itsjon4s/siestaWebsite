import { NextPage } from 'next';

const Legal: NextPage = () => {
  return (
    <div className="flex items-center justify-center mx-10 my-10">
      <div className="flex flex-col space-y-10 text-3xl">
        <div id="terms" className="flex flex-col">
          <h3 className="pb-3 font-bold text-4xl">Terms Of Service</h3>
          <ul className="space-y-3">
            <li>- Spread lies and fake news about siesta.</li>
            <li>- Use adult and NSFW content in siesta functions.</li>
            <li>- Attack, take down, harm our bots.</li>
            <li>- Create bots that have the same name, avatar that siesta have</li>
          </ul>
        </div>
        <div id="privacy" className="flex flex-col">
          <h3 className="pb-3 font-bold text-4xl">Privacy Policy</h3>
          <ul className="space-y-3">
            <li>- You agree to have the following information stored by the bot indefinitely: your user id, your guild id.</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Legal;
