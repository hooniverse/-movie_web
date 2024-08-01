import logo from './logo.svg';
import './App.css';
import {useEffect, useState} from 'react';
import Movie from './components/Movie';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Home from './routes/Home';
import Detail from './routes/Detail';
import { BrowserRouter } from 'react-router-dom';

function App() {
  return <Router basename={process.env.PUBLIC_URL}>
    <Routes>
      <Route path={`/movie/:id`} element={<Detail/>}/>
    
      <Route path={`${process.env.PUBLIC_URL}/`} element={<Home/>}/>
    </Routes>
  </Router>;
}

export default App;
