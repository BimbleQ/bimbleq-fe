import React from "react";
import "../pembayaran.css";
import TagihanCard from "../components/TagihanCard";

const Pembayaran = () => {
  return (
    <div className="pembayaran_wrapper">
      <div className="breadcrumb_wrapper">
        <p>Dashboard / Pembayaran</p>
      </div>
      <div className="tagihanCard_wrapper">
        <h3>Tagihanmu</h3>
        <TagihanCard />
      </div>
      <div className="tagihanForm_wrapper">
        <h3>Pembayaran Tagihan</h3>
        <form class="formSignin">
          <h3>Form Pembayaran tagihan</h3>
          <input
            type="text"
            class="form-control"
            placeholder="Nama Tagihan"
            required=""
            autofocus=""
          />
          <input
            type="number"
            class="form-control"
            placeholder="Nominal"
            required=""
            autofocus=""
          />
          <input
            type="file"
            class="form-control"
            placeholder="Nominal"
            required=""
            autofocus=""
          />
          <input
            type="text"
            class="form-control"
            placeholder="Keterangan (opsional)"
            required=""
            autofocus=""
          />
          <button class="btn" type="submit">
            Kirim
          </button>
        </form>
      </div>
      <div className="jadwalKelas_wrapper">
        <h3>Jadwal Kelas Mingguan</h3>
        <table>
          <tr>
            <th>Nama Tagihan</th>
            <th>Jumlah Pembayaran</th>
            <th>Tanggal Pembayaran</th>
            <th>Bukti Pembayaran</th>
            <th>Status</th>
          </tr>
          <tr>
            <td>1</td>
            <td>2</td>
            <td>3</td>
            <td>4</td>
            <td>5</td>
          </tr>
          <tr>
            <td>1</td>
            <td>2</td>
            <td>3</td>
            <td>4</td>
            <td>5</td>
          </tr>
          <tr>
            <td>1</td>
            <td>2</td>
            <td>3</td>
            <td>4</td>
            <td>5</td>
          </tr>
          <tr>
            <td>1</td>
            <td>2</td>
            <td>3</td>
            <td>4</td>
            <td>5</td>
          </tr>
        </table>
      </div>
    </div>
  );
};

export default Pembayaran;
