import { BiSearch, BiMenu } from "react-icons/bi";

export const Navbar = () => {
  return (
    <div className="border-b-2">
      <div className="flex justify-between items-center p-2 w-3/4 m-auto">
        <h1 className="font-bold text-lg">
          <span className="text-2xl mx-1.5">C</span>
          Crypto Tracker
        </h1>
        <div className="flex items-center">
          <BiSearch size={25} className="m-1" />
          <BiMenu size={25} className="m-1" />
        </div>
      </div>
    </div>
  );
};
