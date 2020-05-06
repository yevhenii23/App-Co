import React from 'react';
import './App.css';
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Main from "./components/Main/Main";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";


function App() {
  return (
    <div className="App">
        <Router>
            <Route path='/header'>
                <Header/>
            </Route>
            <Route path='/footer'>
                <Footer/>
            </Route>
        </Router>
        <Main/>
    </div>
  );
}

export default App;
