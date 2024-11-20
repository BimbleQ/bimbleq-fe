import React from "react";
import Logo from "../assets/Logo.png";
import ProfilePic from "../assets/profilePic.png";
import "../sideNav.css";
<<<<<<< HEAD
import { Link } from "react-router-dom";
=======
>>>>>>> f6b2dcc72d6a8e24569e0732af5e9dfb976e6aa6

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
<<<<<<< HEAD
        <Link className="link" to="/">
          {" "}
          Dashboard
        </Link>
        <Link className="link">Jadwal Kelas</Link>
        <Link className="link" to="/Pembayaran">
          Pembayaran
        </Link>
=======
        <a href="">Dashboard</a>
        <a href="">Jadwal Kelas</a>
        <a href="">Pembayaran</a>
>>>>>>> f6b2dcc72d6a8e24569e0732af5e9dfb976e6aa6
      </div>
    </div>
  );
};

export default SideNav;
