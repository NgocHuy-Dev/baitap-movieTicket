import React from "react";

export default function SeatHead({ seatHead }) {
  return (
    <div className="col">
      {seatHead.map((seat) => {
        return (
          <span className="seat-head" disabled={true}>
            {seat.soGhe}
          </span>
        );
      })}
    </div>
  );
}
