import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function Protected({ children }) {
  const navigate = useNavigate();

  useEffect(() => {
    const userInfo = localStorage.getItem("user-info");
    if (!userInfo) {
      navigate("/register");
    }
  }, [navigate]);

  return <div>{children}</div>;
}
