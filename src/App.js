import logo from "./logo.svg";
import "./App.css";
import {BrowserRouter as Router,Routes,Route} from "react-router-dom";
import QuizQuestions from "./components/quiz/QuizQuestions";
import Nav from "./components/Nav";
import UserPage from "./components/user/UserPage";
import SignUpPage from "./components/signup/SignUpPage";
import AdminPage from "./components/admin/AdminPage";
import LoginPage from "./components/login/LoginPage";

function App() {
  return (
    <Router>
      <Nav></Nav>
      <Routes>
        <Route path="/" element={<UserPage/>}  />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignUpPage/>} />
        <Route path="/admin" element={<AdminPage/>} />
        <Route path="/quiz/:id" element={<QuizQuestions />} />
        {/* <Route path="/" element={<QuizQuestions />} /> */}
      </Routes>
    </Router>
  );
}

export default App;
