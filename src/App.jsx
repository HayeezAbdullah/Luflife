import {
  BrowserRouter as Router,
  Route,
  Switch,
} from "react-router-dom/cjs/react-router-dom.min";
import "./App.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./Pages/Home";
import Edit from "./Pages/Edit";
import Create from "./Pages/Create";

function App() {
  return (
    <Router>
      <div className="container">
        <Navbar></Navbar>

        <Switch>
          <Route path="/posts" component={Home}></Route>
          <Route path="/about" component={Edit}></Route>
          <Route path="/create" component={Create}></Route>
        </Switch>

        <Footer></Footer>
      </div>
    </Router>
  );
}

export default App;
