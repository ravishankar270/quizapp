import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import "react-toastify/dist/ReactToastify.css";

import AdminQuestion from "./AdminQuestion";

import { useNavigate } from "react-router-dom";
import { auth, db } from "../../firebase-config";
import {
  addDoc,
  getDocs,
  collection,
  deleteDoc,
  doc,
  query,
  where,
} from "firebase/firestore";
import { Bars  } from "react-loader-spinner";
import { async } from "@firebase/util";

const ques=[]
const count=0
export default function QuizTemplate() {
  let navigate = useNavigate();
  const { name, tag } = useParams();
  const [question, setQuestion] = useState("");
  const [correct, setCorrect] = useState(-1);
  const [op1, setOp1] = useState("");
  const [op2, setOp2] = useState("");
  const [op3, setOp3] = useState("");
  const [op4, setOp4] = useState("");
  
  const [sub,setSub] = useState(false);


  useEffect(() => {
    console.log(typeof questions);
  }, []);

//   const createPost = async ({ isAuth }) => {
//     await addDoc(postsCollectionRef, {title,body,author:{name:auth.currentUser.displayName ,id:auth.currentUser.uid}})
//     navigate("/")
// }

const postsCollectionRef = collection(db,"quizz")
  const submitQuiz = async() => {
    console.log("last push")
    await addDoc(postsCollectionRef, {
      name,
      tag,
      questions:ques
    })
    navigate("/admin")
  }

  return (
    <>
      <div
        className="container-fluid"
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
        }}
      >
        <AdminQuestion question={question} op1={op1} op2={op2} op3={op3} op4={op4} setQuestion={setQuestion} setOp1={setOp1} setOp2={setOp2} setOp3={setOp3} setOp4={setOp4} setCorrect={setCorrect}></AdminQuestion>
        <button
          className="btn btn-primary"
          onClick={()=>{
            
            console.log('hello')
            ques.push({
              q:question,
              1:op1,
              2:op2,
              3:op3,
              4:op4,
              correct
            })
            setQuestion("")
            setOp1("")
            setOp2("")
            setOp3("")
            setOp4("")
            console.log(ques)
            if(ques.length==2){
              setSub(true)
            }
            if(ques.length==3){
              submitQuiz()
            }
          }
          }
          >
          {sub? "submit" : "Next"}
        </button>
      </div>
    </>
  );
}
