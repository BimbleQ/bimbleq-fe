import { Route, Routes } from "react-router-dom";
// import SideNav from "./components/SideNav";
import Pembayaran from "./pages/Pembayaran";
import Dashboard from "./pages/Dashboard";
import Jadwal from "./pages/jadwal";
import "./flex.css";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/pembayaran" element={<Pembayaran />} />
        <Route path="/jadwal" element={<Jadwal />} />
      </Routes>
      {/* <div className="flex_sidenav">
        <div className="flex_left">
          <SideNav />
        </div>
        <div className="flex_right">
          <Pembayaran />
          <Dashboard />
        </div>
      </div> */}
    </>
  );
}

export default App;
