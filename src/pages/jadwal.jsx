import React from "react";
import SideNav from "../components/SideNav";

const jadwal = () => {
  return (
    <div className="flex_sidenav">
      <div className="flex_left">
        <SideNav />
      </div>
      <div className="flex_right">
        <div className="jadwalKelas_wrapper">
          <div className="breadcrumb_wrapper">
            <p>Dashboard / Jadwal Kelas</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default jadwal;
