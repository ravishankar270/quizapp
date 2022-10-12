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
   console.log(typeof(questions))

  },[])
  return (
    <>
      <div className="container-fluid" style={{
        display:'flex',
        justifyContent:'center',
        alignItems:'center',
        flexDirection:'column'
      }}>
    {[...Array(Number(questions))].map((e, i) => {
     return(
      <div style={{
        display:'flex',
        justifyContent:'space-around',
        boxShadow:'0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)',
        margin:'10px',
        padding:'10px'
      
      }}>  
        <div style={{
          fontFamily:'fantasy',
          fontSize:'35px',
          margin:'10px'
        }}>
          {i+1}
        </div>
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
     )

       
})}
</div>
    </>
  );
}
