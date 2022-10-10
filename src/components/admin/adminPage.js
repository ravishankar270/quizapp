import React, { useEffect } from 'react'
import { useNavigate } from "react-router-dom";
import QuizCard from '../quiz/QuizCard'

export default function AdminPage({auth1,admin}) {
  let navigate = useNavigate();
  useEffect(() => {
    if (!auth1) {
      navigate("/login");
    }
  },[]);
  return (
    <div className='container-fluid'
    style={{
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      flexDirection:'column'
    }}
    >
        <button style={{margin:'10px'}} className='btn btn-primary' onClick={()=>navigate('/quiz-add')}>Add Quiz</button>
        <QuizCard isadmin={admin}></QuizCard>
    </div>

  )
}
