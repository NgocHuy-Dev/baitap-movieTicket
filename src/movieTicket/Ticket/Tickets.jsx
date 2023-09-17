import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeSeat } from "../../redux/slices/movieTicketSlice";
import { resetSeat } from "../../redux/slices/movieTicketSlice";
import TicketStatus from "./TicketStatus";

export default function Tickets() {
  const { selectedSeats } = useSelector((state) => {
    return state.movieTicket;
  });
  const dispatch = useDispatch();

  if (selectedSeats) {
  }
  const { totalPrice } = useSelector((state) => {
    return state.movieTicket;
  });

  const handleBook = () => {
    if (selectedSeats.length !== 0) {
      dispatch(resetSeat());
      alert("Chúc mừng bạn đã đặt vé thành công");
    } else {
      alert("Vui lòng chọn vé");
    }
  };

  const handleRemove = (seatNumber) => {
    dispatch(removeSeat(seatNumber));
  };

  console.log("selectedSeats", selectedSeats);
  console.log("selectedSeats length", selectedSeats.length);
  return (
    <div>
      <h3 className="text-white text-center">Danh sách vé đang chọn</h3>

      <TicketStatus />
      <table className="table table-bordered">
        <thead>
          <tr>
            <th>STT</th>
            <th>Số Ghế</th>
            <th>Giá</th>
            <th className="text-center">Hủy</th>
          </tr>
        </thead>
        {selectedSeats.map((item, index) => {
          return (
            <tbody>
              <tr>
                <th>{index}</th>
                <th>{item.soGhe}</th>
                <th>
                  {item.gia.toLocaleString("it-IT", {
                    style: "currency",
                    currency: "VND",
                  })}
                </th>
                <th className="text-center">
                  <button
                    className="btn btn-danger"
                    onClick={() => handleRemove(item.soGhe)}
                  >
                    X
                  </button>
                </th>
              </tr>
            </tbody>
          );
        })}
      </table>
      <h4 className="text-white text-end">
        Tổng tiền:{" "}
        <span className="text-warning">
          {totalPrice.toLocaleString("it-IT", {
            style: "currency",
            currency: "VND",
          })}
        </span>
      </h4>
      <div className="text-center mt-3">
        <button className="btn btn-primary" onClick={handleBook}>
          Đặt vé
        </button>
      </div>
    </div>
  );
}
