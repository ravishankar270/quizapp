import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import "react-toastify/dist/ReactToastify.css";

import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";

import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";

import Checkbox from "@mui/material/Checkbox";

export default function AdminQuestion ({question,op1,op2,op3,op4,setQuestion,setOp1,setOp2,setOp3,setOp4,setCorrect}) {



    return(
        <>
        <Box
                component="form"
                sx={{
                  "& > :not(style)": { m: 1, width: "50ch" },
                }}
                noValidate
                autoComplete="off"
              >
                <TextField
                  onChange={(event) => setQuestion(event.target.value)}
                  id="outlined-basic"
                  value={question}
                  label="Question"
                  variant="outlined"
                  styles={{
                    width: "200px",
                  }}

                />
                <br />
                <FormControl>
                  <FormLabel id="demo-radio-buttons-group-label">
                    Options
                  </FormLabel>
                  <RadioGroup
                    aria-labelledby="demo-radio-buttons-group-label"
                    defaultValue="op1"
                    name="radio-buttons-group"
                  >
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                      }}
                    >
                      <FormControlLabel
                        value="op1"
                        control={<Radio />}
                        label="A"
                        onChange={(event)=>setCorrect(1)}
                      />
                      <TextField
                        onChange={(event) => setOp1(event.target.value)}
                        label="Option 1"
                        value={op1}
                        variant="standard"
                      />
                      <br />
                    </div>

                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                      }}
                    >
                      <FormControlLabel
                        value="op2"
                        control={<Radio />}
                        label="B"
                        onChange={(event)=>setCorrect(2)}
                      />
                      <TextField
                        onChange={(event) => setOp2(event.target.value)}
                        id="standard-basic"
                        label="Option 2"
                        value={op2}
                        variant="standard"
                      />
                      <br />
                    </div>

                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                      }}
                    >
                      <FormControlLabel
                        value="op3"
                        control={<Radio />}
                        label="C"
                        onChange={(event)=>setCorrect(3)}
                      />
                      <TextField
                        onChange={(event) => setOp3(event.target.value)}
                        id="standard-basic"
                        label="Option 3"
                        value={op3}
                        variant="standard"
                      />
                      <br />
                    </div>

                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                      }}
                    >
                      <FormControlLabel
                        value="op4"
                        control={<Radio />}
                        label="D"
                        onChange={(event)=>setCorrect(4)}
                      />
                      <TextField
                        onChange={(event) => {
                          console.log(event.target.value);
                          setOp4(event.target.value);
                        }}
                        id="standard-basic"
                        label="Option 4"
                        value={op4}
                        variant="standard"
                      />
                      <br />
                    </div>
                  </RadioGroup>
                </FormControl>
              </Box>
        </>
    )
}