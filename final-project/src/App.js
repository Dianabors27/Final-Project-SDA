import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./components/header/header";
import Footer from "./components/footer/footer";
import Home from "./pages/home/home";
import About from "./pages/about/about";
import Contact from "./pages/contact/contact";
import Project1 from "./pages/subPages/project1/project1";
import Project2 from "./pages/subPages/project2/project2";
import Project3 from "./pages/subPages/project3/project3";
import Project4 from "./pages/subPages/project4/project4";
import Project5 from "./pages/subPages/project5/project5";
import Error from "./pages/404/404";
import "./App.css";

function App() {
  return (
    <div className="page-container">
      <div className="content-wrap">
        <Router>
          <Header />
          <Switch>
            <Route exact path="/" component={Home}></Route>
            <Route
              exact
              path="/projects/imobil-cluj"
              component={Project1}
            ></Route>
            <Route
              exact
              path="/projects/amenajare-apartament"
              component={Project2}
            ></Route>
            <Route
              exact
              path="/projects/locuinta-deva"
              component={Project3}
            ></Route>
            <Route
              exact
              path="/projects/amenajare-living"
              component={Project4}
            ></Route>
            <Route
              exact
              path="/projects/blocuri-sibiu"
              component={Project5}
            ></Route>
            <Route exact path="/about" component={About}></Route>
            <Route component={Error}></Route>
          </Switch>
        </Router>
      </div>
      <Footer />
    </div>
  );
}

export default App;
