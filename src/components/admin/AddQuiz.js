import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function AddQuiz({ admin }) {
  const [name, setName] = useState("");
  // const [no, setNo] = useState("");
  const [tag, setTag] = useState("");
  const [time, setTime] = useState(0);
  let navigate = useNavigate();
  useEffect(() => {
    if (!admin) {
      navigate("/login");
    }
  }, []);
  const addQuiz = () => {
    if (!name || !tag || !time) {
      toast.error("fields are missing!");
      return;
    }
    if(time>60 || time<=0){
      toast.error('time limit is wrong')
      return
    }
    navigate(`/${name}/${tag}`);
  };
  return (
    <div className="container">
      <ToastContainer position="top-center" />
      <div className="row">
        <div className="col-sm-7 mx-auto">
          {/* <form class="login"> */}

          <div class="mb-3">
            <label for="exampleInputEmail1" class="form-label">
              Name of the Quiz
            </label>
            <input
              required
              onChange={(event) => setName(event.target.value)}
              type="text"
              name="name"
              class="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
            />
          </div>
          {/* <div class="mb-3">
            <label for="exampleInputPassword1" class="form-label">
              No of Questions
            </label>
            <input
              required
              onChange={(event) => setNo(event.target.value)}
              name="number"
              type="number"
              class="form-control"
              id="exampleInputPassword1"
            />
          </div> */}
          <div class="mb-3">
            <label for="exampleInputPassword1" class="form-label">
              Tag
            </label>
            <input
              required
              onChange={(event) => setTag(event.target.value)}
              name="tag"
              type="text"
              class="form-control"
              id="exampleInputPassword1"
            />
          </div>
          <div class="mb-3">
            <label for="exampleInputPassword1" class="form-label">
              Time limit
            </label>
            <div style={{display:'flex'}}>
            <input
              required
              onChange={(event) => setTime(event.target.value)}
              name="time"
              type="number"
              class="form-control"
              id="time"
              style={{
                width:'80%'
              }}
            />
            <select style={{
                width:'20%'
              }} class="form-select" aria-label="Default select example">
              <option selected>Min</option>
            </select>
            </div>
          </div>

          <button class="btn btn-primary" onClick={addQuiz}>
            Add Questions
          </button>

          {/* </form> */}
        </div>
      </div>
    </div>
  );
}
