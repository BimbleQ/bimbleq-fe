import React from "react";
import "../dashboard.css";
import TagihanCard from "../components/TagihanCard";
import SideNav from "../components/SideNav";

const Dashboard = () => {
  return (
    <div className="flex_sidenav">
      <div className="flex_left">
        <SideNav />
      </div>
      <div className="flex_right">
        <div className="dashboard_wrapper">
          <h2>
            Selamat Datang, <span className="namaSiswa">Nama Siswa</span>{" "}
          </h2>
          <div className="tagihan">
            <h3>Tagihan</h3>
            <TagihanCard />
          </div>
          <div className="jadwalKelas_wrapper">
            <h3>Jadwal Kelas</h3>
            <div className="jadwalCard_wrapper">
              <div className="kelasRegulerCard">
                <h3 className="judulKelas">Jadwal Kelas Reguler Hari Ini</h3>
                <div className="kelasReguler">
                  <h4 className="mapel">Nama Mata Pelajaran</h4>
                  <p className="namaGuru">Nama Guru</p>
                  <div className="kelasWaktuReguler">
                    <p>Kelas A</p>
                    <p>Waktu</p>
                  </div>
                </div>
              </div>
              <div className="kelasPrivatCard">
                <h3 className="judulKelas">jadwal Kelas Privat Hari Ini</h3>
                <div className="kelasPrivat">
                  <h4 className="mapel">Nama Mata Pelajaran</h4>
                  <p className="namaGuru">Nama Guru</p>
                  <div className="kelasWaktuPrivat">
                    <p>Kelas A</p>
                    <p>Waktu</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="pengumuman_wrapper">
            <h3>Pengumuman</h3>
            <div className="pengumumanCard_wrapper">
              <div className="pengumumanCard">
                <h4 className="judulPengumuman">Judul Pengumuman</h4>
                <div className="isiWrapper">
                  <p>Isi Pengumuman</p>
                  <p>Waktu</p>
                </div>
              </div>
              <div className="pengumumanCard">
                <h4 className="judulPengumuman">Judul Pengumuman</h4>
                <div className="isiWrapper">
                  <p>Isi Pengumuman</p>
                  <p>Waktu</p>
                </div>
              </div>
              <div className="pengumumanCard">
                <h4 className="judulPengumuman">Judul Pengumuman</h4>
                <div className="isiWrapper">
                  <p>Isi Pengumuman</p>
                  <p>Waktu</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
