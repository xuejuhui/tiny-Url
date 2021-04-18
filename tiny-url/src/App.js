import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import CssBaseline from "@material-ui/core/CssBaseline";
import Main from "./components/Main";
import Redirect from "./components/Redirect";

function App() {
  return (
    <div className="App">
      <CssBaseline />
      <Router>
        <Switch>
          <Route path="/" exact component={Main} />
          <Route path="/:shortUrl" component={Redirect} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
