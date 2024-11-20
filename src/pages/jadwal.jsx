import React from "react";
import "../jadwal.css";
import SideNav from "../components/SideNav";

const Jadwal = () => {
  return (
    <div className="flex_sidenav">
      <div className="flex_left">
        <SideNav />
      </div>
      <div className="flex_right">
        <div className="jadwal_wrapper">
          <div className="breadcrumb_wrapper">
            <p>Dashboard / Pembayaran</p>
          </div>
          <div className="pengajuanKelasCard_wrapper">
            <div className="pengajuanKelasCard">
              <h3>Tagihan Pembayaran</h3>
              <p>Nama Tagihan</p>
              <p>Jumlah</p>
              <p>Status Pembayaran</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Jadwal;
