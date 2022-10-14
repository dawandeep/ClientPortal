import logo from './logo.svg';
import './App.css';
import Login from './Components/Login/Login';
import ViewClient from './Components/View/ViewClient';
import AddClient from './Components/AddClient/AddClient';
import AppContext from './AppContext';
import {useReducer} from 'react';
import reducer,{initialState} from './Reducer';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './Components/Header.js/Header';

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <div className="App">
    <BrowserRouter>
     <AppContext.Provider value={{ state, dispatch }}>
     <Header/>
    <Routes>
      <Route path='/' element={<Login/>}></Route>
     <Route path='/clients' element={<ViewClient/>}></Route>
     <Route path='/addClient' element={<AddClient/>}></Route>
    </Routes>
    </AppContext.Provider>
    </BrowserRouter>
    </div>
  );
}

export default App;
