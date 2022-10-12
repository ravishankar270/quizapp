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
import { Bars } from "react-loader-spinner";

export default function AdminPage({ auth1, admin }) {
  const [quizLists, setQuizList] = useState([]);

  let navigate = useNavigate();
  const quizCollectionRef = collection(db, "quizz");

  const getQuizz = async () => {
    const data = await getDocs(quizCollectionRef);
    setQuizList(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    // console.log(quizLists);
  };

  useEffect(() => {
    if (!auth1) {
      navigate("/login");
    }
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
            flexDirection: "column",
          }}
        >
          <button
            style={{ margin: "10px" }}
            className="btn btn-primary"
            onClick={() => navigate("/quiz-add")}
          >
            Add Quiz
          </button>
          <>
            {quizLists.map((quiz) => (
              <QuizCard
                isadmin={admin}
                user={{ admin: "true" }}
                name={quiz.name}
                tag={quiz.tag}
                id={quiz.id}
                getql={getQuizz}
              >
                {" "}
              </QuizCard>
            ))}
          </>
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
