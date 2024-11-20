import "./flex.css";
import SideNav from "./components/SideNav";
import Pembayaran from "./pages/Pembayaran";
import Dashboard from "./pages/Dashboard";

function App() {
  return (
    <>
      <div className="flex_sidenav">
        <div className="flex_left">
          <SideNav />
        </div>
        <div className="flex_right">
          {/* <Pembayaran /> */}
          <Dashboard />
        </div>
      </div>
    </>
  );
}

export default App;
