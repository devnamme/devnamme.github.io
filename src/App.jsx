import "./assets/css/global.css";
import "./assets/css/fonts.css";
import HomePage from "./pages/home";
import { Outlet, Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={GeneralLayout()}>
          <Route path="/" element={<HomePage />} />
        </Route>
      </Routes>
    </>
  );
}

function GeneralLayout() {
  return (
    <>
      <Outlet />
    </>
  );
}

export default App;
