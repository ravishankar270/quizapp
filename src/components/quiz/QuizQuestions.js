import React, { useState,useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./QuizQuestions.css";
export default function QuizQuestions({admin}) {
  const [selected, isSelected] = useState(-1);
  let navigate = useNavigate();
  useEffect(() => {
    if(admin){
      navigate('/admin')
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
      <div style={{ margin: "20px", width: "80%" }} class="card">
        <div class="card-header">
          <h5>Q1: What is your name?</h5>
        </div>
        <div class="card-body">
          <div className="body1">
            <div className="option"
            style={{border:selected===1?"2px solid green":"2px solid rgb(25, 81, 235)"}}
            onClick={() => isSelected(1)}>
              <div
                style={{
                  backgroundColor:
                    selected !== 1 ? "rgb(25, 81, 235)" : "green",
                }}
                className="no"
              >
                1
              </div>
              <div className="answer">Ravi</div>
            </div>
            <div className="option"
            style={{border:selected===2?"2px solid green":"2px solid rgb(25, 81, 235)"}}
            onClick={() => isSelected(2)}>
              <div
                style={{
                  backgroundColor:
                    selected !== 2 ? "rgb(25, 81, 235)" : "green",
                }}
                className="no"
              >
                2
              </div>
              <div className="answer">Anuj</div>
            </div>
          </div>
          <div className="body2">
            <div className="option"
            style={{border:selected===3?"2px solid green":"2px solid rgb(25, 81, 235)"}}
            onClick={() => isSelected(3)}>
              <div
                style={{
                  backgroundColor:
                    selected !== 3 ? "rgb(25, 81, 235)" : "green",
                }}
                className="no"
              >
                3
              </div>
              <div className="answer">Satya</div>
            </div>
            <div className="option"
            style={{border:selected===4?"2px solid green":"2px solid rgb(25, 81, 235)"}}
            onClick={() => isSelected(4)}>
              <div
                style={{
                  backgroundColor:
                    selected !== 4 ? "rgb(25, 81, 235)" : "green",
                }}
                className="no"
              >
                4
              </div>
              <div className="answer">Muskaan</div>
            </div>
          </div>
        </div>
        {/* <div style={{ display: "flex", justifyContent: "flex-end" }}>
            <a href="#" class="btn btn-primary">
              Next
            </a>
          </div> */}
        <div
          style={{
            display: "flex",
            justifyContent: "flex-end",
            alignItems: "center",
          }}
        >
          <img
            className="next"
            src="https://img.icons8.com/cotton/40/000000/circled-chevron-right--v2.png"
          />
        </div>
      </div>
    </div>
  );
}
