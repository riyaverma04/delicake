import { RiGoogleFill } from "react-icons/ri";

const GoogleIcon = () => {
  return (
    <div className="relative w-12 h-12">
      <RiGoogleFill className="absolute text-blue-500" />
      <RiGoogleFill className="absolute text-red-500 left-2 top-2" />
      <RiGoogleFill className="absolute text-yellow-500 left-4 top-4" />
      <RiGoogleFill className="absolute text-green-500 left-6 top-6" />
    </div>
  );
};

export default GoogleIcon;