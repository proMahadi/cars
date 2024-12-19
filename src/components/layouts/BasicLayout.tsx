import { Outlet } from "react-router"
import Navbar from "../shared/Navbar"


const BasicLayout = () => {
  return (
    <>
    <header>
      <Navbar/>
    </header>
    <main>
      <Outlet/>
    </main>
    </>
  )
}

export default BasicLayout