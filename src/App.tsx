import { Route, Routes } from "react-router";
import { routes } from "./router/routesData";
import Home from "./pages/Home";
import BasicLayout from "./components/layouts/BasicLayout";

function App() {
  const {
    home,
    // contact ,
    // details ,
    // checkout ,
    // categories ,
    // error ,
    // login ,
    // signup
  } = routes;

  return (
    <>
      <Routes>
        <Route element={<BasicLayout />}>
          <Route path={home} element={<Home />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
