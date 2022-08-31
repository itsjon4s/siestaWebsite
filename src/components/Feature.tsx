interface FeatureProps {
  title: string;
  description: string;
}

const Feature = (props: FeatureProps) => {
  return (
    <div className="border-2 p-10 w-[20rem] h-[24rem] rounded-lg items-start text-left bg-mantle border-blue shadow-md">
      <div className="flex flex-col items-center">
        <h5 className="font-bold text-3xl">{props.title}</h5>
        <p className="text-subtext font-normal text-xl pt-2">{props.description}</p>
      </div>
    </div>
  );
};

export default Feature;
