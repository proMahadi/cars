import logo from "@/assets/logo.svg"


const Navbar = () => {
  return (
    <nav>
      <div className="h-[8px] w-full bg-teal"/>
      <div className="container py-7 md:px-6 border-[1px] border-gray ">
        <div>
          <img src={logo} alt="logo" />
        </div>
        <div></div>
      </div>
    </nav>
  )
}

export default Navbar