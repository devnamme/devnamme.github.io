import "./assets/css/global.css";
import "./assets/css/fonts.css";
import HomePage from "./pages/home";
import { Outlet, Route, Routes } from "react-router-dom";
import PrimaryNav from "./components/nav/primary";
import SecondaryNav from "./components/nav/secondary";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={GeneralLayout()}>
          <Route path="/" element={<HomePage />} />
          <Route path="/works/:slug?" element={<HomePage />} />
          <Route path="/produced/:slug?" element={<HomePage />} />
          <Route path="/awards" element={<HomePage />} />
          <Route path="/experiences" element={<HomePage />} />
          <Route
            path="/project/:slug"
            element={<HomePage hasActiveProject={true} />}
          />
          <Route path="*" element={<HomePage />} />
        </Route>
      </Routes>
    </>
  );
}

function GeneralLayout() {
  return (
    <>
      <PrimaryNav />
      <SecondaryNav />
      <Outlet />
    </>
  );
}

export default App;
