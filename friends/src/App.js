import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import PrivateRoute from "./components/PrivateRoute";
import Login from "./components/CardLogin";
import Header from './components/Header';
import Protected from "./components/ProtectedRoute";


function App() {
  return (
    <div className="App">
      <Header />
      <Router>
      
        <Link to="/"> Login</Link>
      
        <Link to="/protected"> Protected Page </Link>
        
        <Route exact path="/" component={Login} />
        
        <PrivateRoute exact path="/protected" component={Protected} />
      
      </Router>
    
    </div>
  );
}

export default App;
