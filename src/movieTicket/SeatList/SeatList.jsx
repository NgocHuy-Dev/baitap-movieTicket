import React from "react";

import SeatRows from "./SeatRows";

import SeatHead from "./SeatHead";

export default function SeatList({ seats }) {
  let soGheList = seats[0].danhSachGhe;
  console.log("soGheList", soGheList);
  // loại bỏ phần tử đầu chứ thông tin số ghế
  let seatList = seats.slice(1);
  return (
    <div className="row">
      <div className="col-md-12 text-center bg-warning monitor">
        <h3>Màn hình</h3>
      </div>
      <div className="row seat-head">
        <div className="col-md-1"></div>
        <div className="col-md-11">
          <SeatHead seatHead={soGheList} />
        </div>
      </div>
      {seatList.map((seat, index) => {
        return (
          <>
            <div className="row">
              <div className="col-1">
                <div className="btn text-yellow seat-column">{seat.hang}</div>
              </div>

              <div className="col-11" key={index}>
                {/* <SeatItem seats={seat.danhSachGhe} /> */}
                <SeatRows seatRows={seat.danhSachGhe} />
              </div>
            </div>
          </>
        );
      })}
    </div>
  );
}
