import logo from "@/assets/logo.svg";
import { CiSearch } from "react-icons/ci";
import { HiOutlineBars3CenterLeft } from "react-icons/hi2";
import { navData } from "@/data/navData";
import { Link } from "react-router";

const Navbar = () => {
  return (
    <nav>
      <div className="h-[8px] w-full bg-teal" />
      <div className="container py-7 md:px-6 border-[1px] border-gray ">
        <div className="flex items-center justify-between gap-x-12">
          <div>
            <img src={logo} alt="logo" className="md:w-[200px]" />
          </div>
          <form className="lg:w-[500px] h-fit lg:flex rounded-2xl overflow-hidden  hidden">
            <input
              type="text"
              className="border-2 border-r-0 border-gray rounded-l-2xl bg-transparent py-3 px-2 w-full outline-none placeholder:text-dark"
            />
            <button type="submit" className="p-3 bg-teal text-light text-2xl ">
              <CiSearch />
            </button>
          </form>
          <div className="w-fit h-fit md:hidden block text-4xl">
            <HiOutlineBars3CenterLeft />
          </div>
          <div className="md:block hidden">
            <ul className="flex items-center gap-x-6 text-lg capitalize font-medium text-black">
              {navData.map((navMenu) => (
                <Link to={navMenu.path}>
                  <li key={navMenu.id}>{navMenu.label}</li>
                </Link>
              ))}
            </ul>
          </div>
        </div>
        <form className=" h-fit flex rounded-2xl overflow-hidden lg:hidden mt-6 ">
          <input
            type="text"
            className="border-2 border-r-0 border-gray rounded-l-2xl bg-transparent py-3 px-2 w-full outline-none placeholder:text-dark"
          />
          <button type="submit" className="p-3 bg-teal text-light text-2xl ">
            <CiSearch />
          </button>
        </form>
      </div>
    </nav>
  );
};

export default Navbar;
