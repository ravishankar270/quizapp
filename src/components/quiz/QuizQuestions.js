import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./QuizQuestions.css";
import { auth, db } from "../../firebase-config";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
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
import { grey } from "@mui/material/colors";

let count = 0;
let answer = [];
export default function QuizQuestions({ admin, user }) {
  const { id } = useParams();
  const [ques, setQues] = useState([]);
  const [selected, isSelected] = useState(-1);
  // const [count, setCount] = useState(0);
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
      // console.log(ques)
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
        }else{
          onSubmit()
        }
      }
    }, 1000);
    return () => clearInterval(timer);
  });

  const onSubmit = async () => {
    if(selected==-1){
      toast.error('please select an option')
      return
    }
    answer.push(selected);
    // console.log(answers)
    // await addDoc(userCollectionRef, {
    //   id,
    //   answers,
    // });
    let score = 0;
    for (let i = 0; i < answer.length; i++) {
      if (answer[i] === Number(ques[i]["correct"])) {
        score += 1;
      }
    }
    if (selected == -1) {
      toast.error("select one option!");
      return;
    }
    const newstate = {
      ...quiz,
    };
    if(!newstate.users){
      newstate.users={
       
      }
      newstate.users[user] = {
        completed: true,
        score: score,
      };
    }else{
      newstate.users[user] = {
        completed: true,
        score: score,
      };
  }
    setDoc(docRef, newstate)
      .then((docRef) => {
        console.log("Entire Document has been updated successfully");
      })
      .catch((error) => {
        console.log(error);
      });
    answer = [];
    count=0
    navigate("/");
  };

  return (
    <>
      <ToastContainer position="top-center" />
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
                        ? "2px solid blue"
                        : "2px solid grey",
                  }}
                  onClick={() => isSelected(1)}
                >
                  <div
                    style={{
                      backgroundColor:
                        selected !== 1 ? "grey" : "blue",
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
                        ? "2px solid blue"
                        : "2px solid grey",
                  }}
                  onClick={() => isSelected(2)}
                >
                  <div
                    style={{
                      backgroundColor:
                        selected !== 2 ? "grey" : "blue",
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
                        ? "2px solid blue"
                        : "2px solid grey",
                  }}
                  onClick={() => isSelected(3)}
                >
                  <div
                    style={{
                      backgroundColor:
                        selected !== 3 ? "grey" : "blue",
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
                        ? "2px solid blue"
                        : "2px solid grey",
                  }}
                  onClick={() => isSelected(4)}
                >
                  <div
                    style={{
                      backgroundColor:
                        selected !== 4 ? "grey" : "blue",
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
                  marginLeft: "25px",
                  color:"grey",
                  fontSize:'30px'
                }}
              >
                {minutes < 10 ? "0" + minutes : minutes}:
                {seconds < 10 ? "0" + seconds : seconds}
              </h1>
              {!submit ? (
                <img
                  className="next"
                  onClick={() => {
                    if (selected == -1) {
                      toast.error("select one option!");
                      return;
                    }
                    answer.push(selected);
                    isSelected(-1);
                    if (count + 1 == ques.length) {
                      // setSubmit(true)
                    } else {
                      if (count + 2 == ques.length) {
                        setSubmit(true);
                      }
                      ++count;
                    }
                  }}
                  src="https://img.icons8.com/cotton/40/000000/circled-chevron-right--v2.png"
                />
              ) : (
                <button
                  style={{ marginRight: "20px" }}
                  className="btn btn-secondary"
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
