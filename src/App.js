import {BrowserRouter as Router, Routes,Route } from "react-router-dom"
import Login from "./pages/Login"
import Holder from "./pages/Holder"
import Signup from "./pages/Signup"
import Dashboard from "./component/Dashboard"
import Blog from "./pages/Blog"
import TableUser from "./pages/Dashboardforuser"

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" exact element={<Holder/>}/>
        <Route path="/login" exact element={<Login/>}/>
        <Route path="/signup" exact element={<Signup/>}/>
        <Route path="/dashboard" exact element={<Dashboard/>}/>
        <Route path="/blogs" exact element={<Blog/>}/>
        <Route path="/user" exact element={<TableUser/>}/>
      </Routes>


    </Router>
  )
}