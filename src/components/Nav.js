import React from "react";
import { signOut } from "firebase/auth";
import { auth } from "../firebase-config";
import { Link, useNavigate } from "react-router-dom";

export default function Nav({user,auth1, setAuth,admin,setAdmin }) {
  let navigate = useNavigate();
  const signUserOut = () => {
    signOut(auth).then(() => {
      localStorage.clear();
      setAuth(false);
      if(admin){
        setAdmin(false)
      }
      navigate("/login");
    });
  };
  return (
    <>
      <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
        <div class="container-fluid">
          <Link class="navbar-brand" to="/">
            Quizzer
          </Link>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <li class="nav-item">
                
              </li>

            </ul>
            {auth1?
          <div class="dropdown">
          <button
            style={{color:'white'}}
            class="btn  dropdown-toggle"
            type="button"
            id="dropdownMenuButton2"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            {user}
          </button>
          <ul
            class="dropdown-menu dropdown-menu"
            aria-labelledby="dropdownMenuButton2"
          >
            <li>
              <a
                class="dropdown-item"
                style={{ cursor: "pointer" }}
                onClick={signUserOut}
              >
                Logout
              </a>
            </li>
          </ul>
        </div>
        :
        <button className="btn btn-secondary" onClick={()=>navigate('/login')}>Login</button>  
          
          }
            
          </div>
        </div>
      </nav>
    </>
  );
}
