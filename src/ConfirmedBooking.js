import React from "react";
import { useNavigate } from "react-router-dom";

const ConfirmedBooking = () => {
  const navigate = useNavigate();

  const handleReturnHome = () => {
    navigate("/");
  };

  return (
    <div className="ConfirmedBooking">
      <h2>Thank you for your reservation!</h2>
      <p>We look forward to serving you</p><br/>
      <button onClick={handleReturnHome} className="return-button">
        Return to Homepage
      </button>
    </div>
  );
};

export default ConfirmedBooking;