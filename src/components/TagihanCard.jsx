import React from "react";
import "../tagihanCard.css";

const TagihanCard = () => {
  return (
    <div className="tagihanCard_wrapper">
      <div className="tagihanCard">
        <h3>Tagihan Pembayaran</h3>
        <p>Nama Tagihan</p>
        <p>Jumlah</p>
        <p>Status Pembayaran</p>
      </div>
    </div>
  );
};

export default TagihanCard;
