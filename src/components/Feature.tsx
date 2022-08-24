interface FeatureProps {
  title: string;
  description: string;
}

const Feature = (props: FeatureProps) => {
  return (
    <div className="border-2 p-10 w-[20rem] h-[24rem] rounded-lg items-start text-left">
      <h5 className="font-bold text-3xl">{props.title}</h5>
      <p className="font-light text-xl pt-2">{props.description}</p>
    </div>
  );
};

export default Feature;
