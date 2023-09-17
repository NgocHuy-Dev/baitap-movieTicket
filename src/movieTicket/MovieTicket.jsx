import React from "react";
import data from "./danhSachGhe.json";
import { useSelector } from "react-redux";
import SeatList from "./SeatList/SeatList";
import Tickets from "./Ticket/Tickets";

export default function MovieTicket() {
  return (
    <div className="container">
      <h1 className="text-center text-primary">Đặt vé xem phim CyberSoft</h1>

      <div className="row">
        <div className="col-md-8">
          <SeatList seats={data} />
        </div>
        <div className="col-md-4">
          <Tickets />
        </div>
      </div>
    </div>
  );
}
