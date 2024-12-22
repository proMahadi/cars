import logo from "@/assets/logo.svg";
import { CiSearch } from "react-icons/ci";
import { HiOutlineBars3CenterLeft } from "react-icons/hi2";
import { RxCross1 } from "react-icons/rx";
import { infoData, navData } from "@/data/navData";
import { Link } from "react-router";
import { useState } from "react";

const Navbar: React.FC = () => {
  const [showSidebar, setShowSidebar] = useState<boolean>(false);

  return (
    <>
      <nav className="border-b-[1px] border-gray fixed w-full bg-white z-10">
        <div className="h-[8px] w-full bg-teal" />
        <div className="container py-7 px-3 md:px-6  ">
          <div className="flex items-center justify-between gap-x-12">
            <div>
              <img src={logo} alt="logo" className="md:w-[200px]" />
            </div>
            <form className="lg:w-[500px] h-fit lg:flex rounded-2xl overflow-hidden  hidden">
              <input
                type="text"
                placeholder="search any car or component"
                className="border-2 border-r-0 border-gray rounded-l-2xl bg-transparent py-3 px-2 w-full outline-none placeholder:capitalize"
                spellCheck={true}
              />
              <button
                type="submit"
                className="p-3 bg-teal hover:bg-teal/80 text-light text-2xl "
              >
                <CiSearch />
              </button>
            </form>
            <div onClick={()=>{setShowSidebar(true)}} className="w-fit h-fit md:hidden block text-4xl">
              <HiOutlineBars3CenterLeft />
            </div>
            <div className="md:flex items-center hidden">
              <ul className="flex items-center gap-x-6 text-lg capitalize font-medium text-black">
                {navData.map((navMenu) => (
                  <Link to={navMenu.path}>
                    <li className="hover:text-teal duration-300" key={navMenu.id}>{navMenu.label}</li>
                  </Link>
                ))}
              </ul>
              <ul className="text-2xl ml-8 gap-x-6 items-center flex">
                {infoData.map((info) => (
                  <Link to={info.path}>
                    <li className="hover:text-teal duration-300" key={info.id}>
                      <info.icon />
                    </li>
                  </Link>
                ))}
              </ul>
            </div>
          </div>
          <form className=" h-fit flex rounded-2xl overflow-hidden lg:hidden mt-6 ">
            <input
              type="text"
              className="border-2 border-r-0 border-gray rounded-l-2xl bg-transparent py-3 px-2 w-full outline-none placeholder:text-black"
            />
            <button type="submit" className="p-3 bg-teal text-light text-2xl ">
              <CiSearch />
            </button>
          </form>
        </div>
      </nav>
      {/* sidebar */}
      <div onClick={()=>{setShowSidebar(false)}} className={`absolute md:hidden h-screen w-screen bg-black/30 top-0 z-50 duration-200 ${showSidebar?"opacity-100 visible":"opacity-0 invisible"}`}>
        <div className="relative">
          <div
            onClick={(e) => {
              e.stopPropagation();
            }}
            className={`absolute w-[320px] bg-light h-screen top-0 p-4 duration-500 ${showSidebar?"left-0":"left-[-320px]"}`}
          >
            <div className="flex items-center justify-between">
              <div>
                <img src={logo} alt="logo" className="w-[150px]" />
              </div>
              <RxCross1 onClick={()=>{setShowSidebar(false)}} className="text-2xl cursor-pointer" />
            </div>
            <div className="mt-10">
              <ul className="flex flex-col gap-y-4 text-lg capitalize font-medium text-black">
                {navData.map((navMenu) => (
                  <Link to={navMenu.path}>
                    <li className="hover:text-teal duration-300 hover:px-3 py-2 hover:bg-gray/30 rounded-lg" key={navMenu.id}>{navMenu.label}</li>
                  </Link>
                ))}
              </ul>
            </div>
            <div className="mt-10">
              <ul className="text-3xl gap-x-6 items-center flex">
                {infoData.map((info) => (
                  <Link to={info.path}>
                    <li className="hover:text-teal duration-300" key={info.id}>
                      <info.icon />
                    </li>
                  </Link>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
      {/* sidebar */}
    </>
  );
};

export default Navbar;
