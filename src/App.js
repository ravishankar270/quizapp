import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import QuizQuestions from "./components/quiz/QuizQuestions";
import Nav from "./components/Nav";
import UserPage from "./components/user/UserPage";
import SignUpPage from "./components/signup/SignUpPage";
import AdminPage from "./components/admin/AdminPage";
import LoginPage from "./components/login/LoginPage";
import { useState } from "react";
import PageNotFound from "./components/404";
import AddQuiz from "./components/admin/AddQuiz";
import QuizTemplate from "./components/admin/QuizTemplate";

function App() {
  const [isAuth, setAuth] = useState(localStorage.getItem("isAuth"));
  const [user, setUser] = useState(localStorage.getItem("user"));
  const [admin, setAdmin] = useState(localStorage.getItem("admin"));

  return (
    <Router>
      <Nav
        user={user}
        auth1={isAuth}
        setAuth={setAuth}
        admin={admin}
        setAdmin={setAdmin}
      ></Nav>
      <Routes>
        <Route path="/" element={<UserPage auth1={isAuth} admin={admin} />} />
        <Route
          path="/login"
          element={
            <LoginPage
              auth1={isAuth}
              setUser={setUser}
              setAuth={setAuth}
              setAdmin={setAdmin}
              admin={admin}
            />
          }
        />
        <Route
          path="/signup"
          element={
            <SignUpPage auth1={isAuth} setUser={setUser} setAuth={setAuth} />
          }
        />

        <Route
          path="/admin"
          element={<AdminPage auth1={isAuth} admin={admin} />}
        />
        <Route path="/quiz/:id" element={<QuizQuestions admin={admin} />} />
        <Route path="/quiz-add" element={<AddQuiz admin={admin}/>} />
        <Route path="/:name/:questions/:tag" element={<QuizTemplate/>} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </Router>
  );
}

export default App;
