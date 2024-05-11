import spinner from "../../../assets/images/Animation.gif";
const Spinner = () => {
  return (
    <div className="flex justify-center bg-base-100">
      <img src={spinner} className="object-cover" />
    </div>
  );
};

export default Spinner;
