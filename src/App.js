import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { createContext } from 'react';
import Login from './components/login';
import Signup from './components/signup';
import axios from 'axios';
import HomePage from './components/homepage';
import Upload from './components/upload';
import PostView from './components/postview';

export const userContext = createContext([])

function App() {
  const [useInfo, setUseinfo] = useState({
    accessToken: ""
  });

  return (

    <div className="App">
      <BrowserRouter>
        <userContext.Provider value={[useInfo, setUseinfo]}>
          <Routes>
            <Route path='/' element={<Login />} />
            <Route path='/register' element={<Signup />} />
            <Route path='/homepage' element={<HomePage />} />
            <Route path='/upload' element={<Upload />} />
            <Route path='/postview' element={<PostView />} />
          </Routes>
        </userContext.Provider>
      </BrowserRouter>
    </div>
  );
}

export default App;
