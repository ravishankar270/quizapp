import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function QuizTemplate() {
  const { name, questions, tag } = useParams();
  const [question,setQuestions]=useState([])
  const [dummy,setDummy]=useState([])
  const [options, setOptions] = useState(false);
  useEffect(()=>{
    console.log(questions)
    for(let i=0;i<questions;i++){
        setDummy([...dummy,i])
    }
    console.log(dummy)

  },[])
  return (
    <div className="container">
      <div className="row">
        <div className="col-sm-7 mx-auto">
          
            {dummy.map((ele)=>{
                
                <div class="mb-3">
                  <label for="exampleInputPassword1" class="form-label">
                    Question
                  </label>
                  <input
                    required
                    name="question"
                    type="text"
                    class="form-control"
                    id="exampleInputPassword1"
                  />
                </div>
                {options?
                <div class="mb-3">
                  <div class="form-check">
                    <input
                      class="form-check-input"
                      type="radio"
                      value=""
                      id="flexCheckChecked"
                      
                    />
                    <label class="form-check-label" for="flexCheckChecked">
                      Option 1
                    </label>
                  </div>
                  <div class="form-check">
                    <input
                      class="form-check-input"
                      type="radio"
                      value=""
                      id="flexCheckChecked"
                      
                    />
                    <label class="form-check-label" for="flexCheckChecked">
                    Option 2
                    </label>
                  </div>
                  <div class="form-check">
                    <input
                      class="form-check-input"
                      type="radio"
                      value=""
                      id="flexCheckChecked"
                      
                    />
                    <label disabled  contenteditable="true" class="form-check-label" for="flexCheckChecked">
                    Option 3
                    </label>
                  </div>
                  <div class="form-check">
                    <input
                      class="form-check-input"
                      type="radio"
                      value=""
                      id="flexCheckChecked"
                      
                    />
                    <label  contenteditable="true" class="form-check-label" for="flexCheckChecked">
                    Option 4
                    </label>
                  </div>
                  <div class="mb-3">
                  <button className="btn btn-secondary" onClick={()=>setQuestions([...question,{
                    l:''
                  }]

                  )}>Next Question</button>
                </div>
                </div>:
                <div class="mb-3">
                <button className="btn btn-secondary" onClick={()=>setOptions(true)}>Add Options</button>
              </div>
      }
            })}
          

          <button class="btn btn-primary">Submit</button>

          {/* </form> */}
        </div>
      </div>
    </div>
  );
}
