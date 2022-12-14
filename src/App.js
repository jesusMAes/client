import Home from "./pages/home/Home";
import TopBar from "./components/topbar/TopBar";
import Single from "./pages/single/Single";
import Write from "./pages/write/Write";
import Settings from "./pages/settings/Settings";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
  Link
} from "react-router-dom"
import { useContext } from "react";
import { Context } from "./context/Context";



function App() {
  const {user} = useContext(Context)
  return (
    <Router>
      <TopBar />
      <Routes>
       <Route path="/" element={<Home/>} />
       
       <Route path="/register" element={
       user ? <Navigate to="/"/>: <Register/> } />

       <Route path="/login" element={
        <Login/> }/>

       <Route path="/write" element={
       user ? <Write/> : <Navigate to="/register"/>} />

       <Route path="/settings" element={
       user ? <Settings/> : <Navigate to="/register"/>} />

       <Route path="/post/:postId" element={<Single/>} />
       
      </Routes>
    </Router>
  );
}

export default App;
