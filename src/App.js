import logo from "./logo.svg";
import "./App.css";
import SignUp from "./components/signUp/SignUp";
import Login from "./components/login/Login";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/navbar/Navbar";

function App() {
  return (
    <div className="App">

      <BrowserRouter>
      <Header/>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/register" element={<SignUp />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import Login from './pages/Login/Login';
// import Signup from './pages/Signup/Signup';
// import HomePage from './pages/Homepage/Homepage';
// import Header from './Components/Header/Header';
// import SearchResults from './SearchResults/SearchResults';

// import {RecoilRoot} from "recoil"

// import { BrowserRouter, Routes, Route } from "react-router-dom";

// import 'bootstrap/dist/css/bootstrap.min.css';
// import './index.css';
// import { Passenger } from './BookTicket/BookTicket';
// import CreateBooking from './pages/BookingPage/BookingPage'

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <RecoilRoot>
//   <BrowserRouter>
//   <Header/>
//   <Routes>
//     <Route path='/' element = {<HomePage/>}/>
//     <Route path='/login' element={<Login/>}/>
//     <Route path='/Register' element={<Signup/>}/>
//     <Route path="/ticket"  element={<SearchResults/>}/>
//     {/* <Route path="/booking" element={<CreateBooking />} /> */}
//     <Route path="/booking/:id" element={<CreateBooking />} />
//     <Route path="/passenger/:id" element={<Passenger />} />

//   </Routes>

//   </BrowserRouter>
//   </RecoilRoot>

// );
