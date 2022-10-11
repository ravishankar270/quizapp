import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./QuizQuestions.css";
import { auth, db } from "../../firebase-config";
import {
  getDocs,
  getDoc,
  setDoc,
  addDoc,
  collection,
  deleteDoc,
  doc,
} from "firebase/firestore";
import { Bars } from "react-loader-spinner";
import { useParams } from "react-router-dom";
import { async } from "@firebase/util";

var answers = [];
export default function QuizQuestions({ admin,user }) {
  const { id } = useParams();
  const [ques, setQues] = useState([]);
  const [selected, isSelected] = useState(-1);
  const [count, setCount] = useState(0);
  const [seconds, setSeconds] = useState(59);
  const [minutes, setMinutes] = useState(9);
  const [submit, setSubmit] = useState(false);
  const [quiz, setQuiz] = useState({});
  let navigate = useNavigate();
  const docRef = doc(db, "quizz", id);

  var timer;
  useEffect(() => {
    if (admin) {
      navigate("/admin");
    }
    const getSingleQuizz = async () => {
      const docSnap = await getDoc(docRef);

      setQues(docSnap.data().questions);
      setQuiz(docSnap.data());
    };
    getSingleQuizz();
  }, []);

  useEffect(() => {
    timer = setInterval(() => {
      setSeconds(seconds - 1);
      if (seconds === 0) {
        if (minutes != 0) {
          setMinutes(minutes - 1);
          setSeconds(59);
        }
      }
    }, 1000);
    return () => clearInterval(timer);
  });

  const onSubmit = async () => {
    answers.push(selected);
    // console.log(answers)
    // await addDoc(userCollectionRef, {
    //   id,
    //   answers,
    // });
    const newstate = {
      ...quiz,
      users: {
        ...quiz.users,
        user: {
          completed: true,
          score: 2,
        },
      },
    };
    setDoc(docRef, newstate)
      .then((docRef) => {
        console.log("Entire Document has been updated successfully");
      })
      .catch((error) => {
        console.log(error);
      });
    answers = [];
    navigate("/");
  };

  return (
    <>
      {ques.length !== 0 ? (
        <div
          className="container-fluid"
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <div style={{ margin: "20px", width: "80%" }} class="card">
            <div class="card-header">
              <h5>
                Q{count + 1}: {ques[count].q}
              </h5>
            </div>
            <div class="card-body">
              <div className="body1">
                <div
                  className="option"
                  style={{
                    border:
                      selected === 1
                        ? "2px solid green"
                        : "2px solid rgb(25, 81, 235)",
                  }}
                  onClick={() => isSelected(1)}
                >
                  <div
                    style={{
                      backgroundColor:
                        selected !== 1 ? "rgb(25, 81, 235)" : "green",
                    }}
                    className="no"
                  >
                    1
                  </div>
                  <div className="answer">{ques[count]["1"]}</div>
                </div>
                <div
                  className="option"
                  style={{
                    border:
                      selected === 2
                        ? "2px solid green"
                        : "2px solid rgb(25, 81, 235)",
                  }}
                  onClick={() => isSelected(2)}
                >
                  <div
                    style={{
                      backgroundColor:
                        selected !== 2 ? "rgb(25, 81, 235)" : "green",
                    }}
                    className="no"
                  >
                    2
                  </div>
                  <div className="answer">{ques[count]["2"]}</div>
                </div>
              </div>
              <div className="body2">
                <div
                  className="option"
                  style={{
                    border:
                      selected === 3
                        ? "2px solid green"
                        : "2px solid rgb(25, 81, 235)",
                  }}
                  onClick={() => isSelected(3)}
                >
                  <div
                    style={{
                      backgroundColor:
                        selected !== 3 ? "rgb(25, 81, 235)" : "green",
                    }}
                    className="no"
                  >
                    3
                  </div>
                  <div className="answer">{ques[count]["3"]}</div>
                </div>
                <div
                  className="option"
                  style={{
                    border:
                      selected === 4
                        ? "2px solid green"
                        : "2px solid rgb(25, 81, 235)",
                  }}
                  onClick={() => isSelected(4)}
                >
                  <div
                    style={{
                      backgroundColor:
                        selected !== 4 ? "rgb(25, 81, 235)" : "green",
                    }}
                    className="no"
                  >
                    4
                  </div>
                  <div className="answer">{ques[count]["4"]}</div>
                </div>
              </div>
            </div>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <h1
                style={{
                  marginLeft: "20px",
                }}
              >
                {minutes < 10 ? "0" + minutes : minutes}:
                {seconds < 10 ? "0" + seconds : seconds}
              </h1>
              {!submit ? (
                <img
                  className="next"
                  onClick={() => {
                    answers.push(selected);
                    console.log(answers);
                    isSelected(-1);
                    if (count + 1 == ques.length) {
                      // setSubmit(true)
                    } else if (count + 2 == ques.length) {
                      setSubmit(true);
                    } else {
                      setCount(count + 1);
                    }
                  }}
                  src="https://img.icons8.com/cotton/40/000000/circled-chevron-right--v2.png"
                />
              ) : (
                <button
                  style={{ marginRight: "20px" }}
                  className="btn btn-primary"
                  onClick={onSubmit}
                >
                  Submit Quiz
                </button>
              )}
            </div>
          </div>
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
