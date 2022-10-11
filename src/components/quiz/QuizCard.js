// import * as React from 'react';
import { useTheme } from "@mui/material/styles";
import { useState } from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import "./QuizCard.css";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { useNavigate } from "react-router-dom";

export default function QuizCard({ isadmin,name,tag,id,user,score,q}) {
  let navigate = useNavigate();
  const theme = useTheme();
  const [show, setShow] = useState(false);
  const [show1, setShow1] = useState(false);

  const handleClose = () => setShow(false);
  const handleClose1 = () => setShow1(false);
  const handleShow = () => setShow(true);
  const handleShow1 = () => setShow1(true);
  
  return (
    <Card className="card" sx={{ display: "flex", alignItems: "center" }}>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          width: "100%",
        }}
      >
        <Box sx={{ display: "flex", flexDirection: "column" }}>
          <CardContent sx={{ flex: "1 0 auto" }}>
            <Typography component="div" variant="h5">
              {name}
            </Typography>
            <Typography
              component="div"
              variant="subtitle1"
              color="text.secondary"
            >
              #{tag}
            </Typography>
            <a onClick={handleShow} className="leaderboard">
              View Leaderboard
            </a>
            <Modal show={show} onHide={handleClose}>
              <Modal.Header closeButton>
                <Modal.Title>Top 3</Modal.Title>
              </Modal.Header>
              <Modal.Body>
                1:Ravi<br/>
                2:Jj<br/>
                3:Hh<br/>
              </Modal.Body>
              <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                  Close
                </Button>
              </Modal.Footer>
            </Modal>
            <Modal show={show1} onHide={handleClose1}>
              <Modal.Header closeButton>
                <Modal.Title>Quiz Information</Modal.Title>
              </Modal.Header>
              <Modal.Body>
                10 minutes time <br/>
                please complete it on time!
              </Modal.Body>
              <Modal.Footer>
                <Button variant="primary" onClick={()=>navigate(`/quiz/${id}`)}>
                  Start
                </Button>
              </Modal.Footer>
            </Modal>
          </CardContent>
        </Box>
        {isadmin ? (
          <div style={{width:'20%',display:'flex',justifyContent:'space-around',alignItems:'center',
  
          
          }}>
            <button className="btn btn-secondary">Update</button>
            <button className="btn btn-danger">Delete</button>
          </div>
        ) : (
          <>
          {!user.completed?
          <img
            onClick={() => setShow1(true)}
            className="arrow"
            src="https://img.icons8.com/material-outlined/48/000000/circled-right.png"
          />
          :
          <div style={{display:'flex',justifyContent:'space-between',alignItems:'space-between',width:'40%'}}>
          <div style={{fontSize:'40px',fontFamily:'fantasy'}}>
          {score}/{q.length}
          </div>
          <img src="https://img.icons8.com/parakeet/48/000000/experimental-checked-parakeet.png"/>
          </div>
          }
          </>
        )}
      </div>
    </Card>
  );
}
