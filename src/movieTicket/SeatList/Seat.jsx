import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { selectSeat } from "../../redux/slices/movieTicketSlice";

export default function Seat({ seat, isSelected }) {
  const dispatch = useDispatch();

  // const [isSelected, setIsSelected] = useState(false);

  const handleSelect = () => {
    // setIsSelected(!isSelected);
    // dispatch
    dispatch(selectSeat({ ...seat, isSelected: !isSelected }));
  };

  // thêm class phân biệt trạng thái đặt chổ
  let classes = "btn m-1 btn-secondary seat";
  if (seat.daDat) {
    classes += " btn-danger";
  } else if (isSelected) {
    classes += " btn-success";
  } else {
    classes += " btn-secondary";
  }

  return (
    <button
      key={seat.soGhe}
      className={classes}
      onClick={handleSelect}
      disabled={seat.daDat}
    >
      {seat.soGhe}
    </button>
  );
}
