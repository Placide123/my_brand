import {BrowserRouter as Router, Routes,Route } from "react-router-dom"
import Login from "./pages/Login"
import Holder from "./pages/Holder"
import Signup from "./pages/Signup"

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" exact element={<Holder/>}/>
        <Route path="/login" exact element={<Login/>}/>
        <Route path="/signup" exact element={<Signup/>}/>
      </Routes>
    </Router>
  )
}