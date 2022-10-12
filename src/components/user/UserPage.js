import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import QuizCard from "../quiz/QuizCard";
import { auth, db } from "../../firebase-config";
import {
  getDocs,
  collection,
  deleteDoc,
  doc,
  query,
  where,
} from "firebase/firestore";
import { Bars  } from "react-loader-spinner";

export default function UserPage({ auth1, admin,user }) {
  const [quizLists, setQuizList] = useState([]);
  const quizCollectionRef = collection(db, "quizz");
  let navigate = useNavigate();
  useEffect(() => {
    if (admin) {
      navigate("/admin");
    }
    if (!auth1) {
      navigate("/login");
    }
    const getQuizz = async () => {
      const data = await getDocs(quizCollectionRef);
      setQuizList(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
      // console.log(quizLists);
    };
    getQuizz();
   

  }, []);
  return (
    <>
      {quizLists.length !== 0 ? (
        <div
          className="container-fluid"
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          {quizLists.map((quiz)=>
          
          <QuizCard name={quiz.name} tag={quiz.tag} id={quiz.id} user={quiz.users?quiz.users[user]:true} score={quiz.users?(quiz.users[user]?quiz.users[user].score:0):0} q={quiz.questions}  ></QuizCard>)}
          
        </div>
      ) : (
        <Bars
          height="80"
          width="80"
          radius="48"
          color="black"
          ariaLabel="watch-loading"
          wrapperStyle={{
            width: "100px",
            height: "100px",

            position: "absolute",
            top: 0,
            bottom: 0,
            left: 0,
            right: 0,

            margin: "auto",
          }}
          wrapperClassName=""
          visible={true}
        />
      )}
    </>
  );
}
