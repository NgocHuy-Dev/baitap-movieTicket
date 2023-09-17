import React from "react";

export default function TicketStatus() {
  return (
    <div className="ticket-status">
      <div className="status">
        <button className="btn btn-danger text-danger">##</button>
        <span className="status-text">Ghế đã được đặt</span>
      </div>
      <div className="status">
        <button className="btn btn-success text-success">##</button>
        <span className="status-text">Ghế đang chọn</span>
      </div>
      <div className="status">
        <button className="btn btn-secondary text-secondary">##</button>
        <span className="status-text">Ghế trống</span>
      </div>
    </div>
  );
}
