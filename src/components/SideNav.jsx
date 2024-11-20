import React from "react";
import Logo from "../assets/Logo.png";
import ProfilePic from "../assets/profilePic.png";
import "../sideNav.css";

const SideNav = () => {
  return (
    <div className="sideNav_wrapper">
      <div className="logo_wrapper">
        <img src={Logo} alt="" />
      </div>
      <div className="profile_wrapper">
        <div className="profilepic_wrapper">
          <img src={ProfilePic} alt="" />
        </div>
        <div className="namaEmail_wrapper">
          <p className="nama_siswa">Okarun</p>
          <p className="email_siswa">email@gmail.com</p>
        </div>
      </div>
      <hr />
      <div className="navLink_wrapper">
        <a href="">Dashboard</a>
        <a href="">Jadwal Kelas</a>
        <a href="">Pembayaran</a>
      </div>
    </div>
  );
};

export default SideNav;
