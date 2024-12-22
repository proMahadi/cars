import { Outlet } from "react-router"
import Navbar from "../shared/Navbar"


const BasicLayout: React.FC = () => {
  return (
    <>
    <header className="relative">
      <Navbar/>
    </header>
    <main>
      <Outlet/>
    </main>
    </>
  )
}

export default BasicLayout