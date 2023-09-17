import React from "react";
import { useSelector } from "react-redux";
import Seat from "./Seat";

export default function SeatRows({ seatRows }) {
  const { selectedSeats } = useSelector((state) => {
    return state.movieTicket;
  });
  return (
    <div className="col">
      {seatRows.map((seat) => {
        const isSelected = selectedSeats.find(
          (item) => item.soGhe === seat.soGhe
        );
        return <Seat seat={seat} isSelected={!!isSelected} />;
      })}
    </div>
  );
}
