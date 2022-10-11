import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import "react-toastify/dist/ReactToastify.css";

import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';


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
    // <div className="container">
    //   <div className="row">
    //     <div className="col-sm-7 mx-auto">
          
    //         {dummy.map((ele)=>{
                
    //             <div class="mb-3">
    //               <label for="exampleInputPassword1" class="form-label">
    //                 Question
    //               </label>
    //               <input
    //                 required
    //                 name="question"
    //                 type="text"
    //                 class="form-control"
    //                 id="exampleInputPassword1"
    //               />
    //             </div>
    //             {options?
    //             <div class="mb-3">
    //               <div class="form-check">
    //                 <input
    //                   class="form-check-input"
    //                   type="radio"
    //                   value=""
    //                   id="flexCheckChecked"
                      
    //                 />
    //                 <label class="form-check-label" for="flexCheckChecked">
    //                   Option 1
    //                 </label>
    //               </div>
    //               <div class="form-check">
    //                 <input
    //                   class="form-check-input"
    //                   type="radio"
    //                   value=""
    //                   id="flexCheckChecked"
                      
    //                 />
    //                 <label class="form-check-label" for="flexCheckChecked">
    //                 Option 2
    //                 </label>
    //               </div>
    //               <div class="form-check">
    //                 <input
    //                   class="form-check-input"
    //                   type="radio"
    //                   value=""
    //                   id="flexCheckChecked"
                      
    //                 />
    //                 <label disabled  contenteditable="true" class="form-check-label" for="flexCheckChecked">
    //                 Option 3
    //                 </label>
    //               </div>
    //               <div class="form-check">
    //                 <input
    //                   class="form-check-input"
    //                   type="radio"
    //                   value=""
    //                   id="flexCheckChecked"
                      
    //                 />
    //                 <label  contenteditable="true" class="form-check-label" for="flexCheckChecked">
    //                 Option 4
    //                 </label>
    //               </div>
    //               <div class="mb-3">
    //               <button className="btn btn-secondary" onClick={()=>setQuestions([...question,{
    //                 l:''
    //               }]

    //               )}>Next Question</button>
    //             </div>
    //             </div>:
    //             <div class="mb-3">
    //             <button className="btn btn-secondary" onClick={()=>setOptions(true)}>Add Options</button>
    //           </div>
    //   }
    //         })}
          

    //       <button class="btn btn-primary">Submit</button>

    //       {/* </form> */}
    //     </div>
    //   </div>
    // </div>
    <>
    <div>
    <Box
      component="form"
      sx={{
        '& > :not(style)': { m: 1, width: '50ch' },
      }}
      noValidate
      autoComplete="off"
    >

      <TextField id="outlined-basic" label="Question" variant="outlined" styles={{
        width:"200px"
      }} /><br/>
      <FormControl>
      <FormLabel id="demo-radio-buttons-group-label">Options</FormLabel>
      <RadioGroup
        aria-labelledby="demo-radio-buttons-group-label"
        defaultValue="op1"
        name="radio-buttons-group"
      >
      
      <div style={{
        display:"flex",
        alignItems:"center"
      }}><FormControlLabel value="op1" control={<Radio />} label="A" /><TextField  label="Option 1" variant="standard" /><br/>
      </div>

      <div style={{
        display:"flex",
        alignItems:"center"
      }}>
        <FormControlLabel value="op2" control={<Radio />} label="B" /><TextField id="standard-basic" label="Option 2" variant="standard" /><br/>
      </div>
      
      <div style={{
        display:"flex",
        alignItems:"center"
      }}>
        <FormControlLabel value="op3" control={<Radio />} label="C" /><TextField id="standard-basic" label="Option 3" variant="standard" /><br/>
      </div>

      <div style={{
        display:"flex",
        alignItems:"center"
      }}>
        <FormControlLabel value="op4" control={<Radio />} label="D" /><TextField id="standard-basic" label="Option 4" variant="standard" /><br/>
      </div>

      </RadioGroup>
      </FormControl>
    </Box>

       
    </div>
    </>
  );
}
