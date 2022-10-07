import React from "react";

export default function QuizQuestions() {
  return (
    <div style={{ margin: "20px",width:'60%' }} class="card">
      <div class="card-header"><h5>Q1: What is your name?</h5></div>
      <div class="card-body">
        <div class="form-check">
          <input
            class="form-check-input"
            type="radio"
            value=""
            id="1"
          />
          <label class="form-check-label" for="flexCheckDefault">
            Default checkbox
          </label>
        </div>
        <div class="form-check">
          <input
            class="form-check-input"
            type="radio"
            value=""
            id="2"
          />
          <label class="form-check-label" for="flexCheckDefault">
            Default checkbox
          </label>
        </div>
        <div class="form-check">
          <input
            class="form-check-input"
            type="radio"
            value=""
            id="3"
          />
          <label class="form-check-label" for="flexCheckDefault">
            Default checkbox
          </label>
        </div>
        <div class="form-check">
          <input
            class="form-check-input"
            type="radio"
            value=""
            id="4"
          />
          <label class="form-check-label" for="flexCheckDefault">
            Default checkbox
          </label>
        </div>
        <div style={{display:'flex',justifyContent:'flex-end'}}>
        <a  href="#" class="btn btn-primary">
          Next  
        </a>
        </div>
      </div>
    </div>
  );
}
