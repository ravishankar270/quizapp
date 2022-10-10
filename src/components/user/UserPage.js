import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import QuizCard from "../quiz/QuizCard";

export default function UserPage({ auth1,admin}) {
  let navigate = useNavigate();
  useEffect(() => {
    if(admin){
      navigate('/admin')
    }
    if (!auth1) {
      navigate("/login");
    }
  },[]);
  return (
    <div
      className="container-fluid"
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <QuizCard></QuizCard>
    </div>
  );
}
