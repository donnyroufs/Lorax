import React from "react";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import Layout from "./components/Layout";
import * as Page from "./pages";

function App() {
  return (
    <div className="App">
      <Router>
        <Layout>
          <Switch>
            <Route exact path="/" component={Page.Home} />
            <Route path="/:id" component={Page.Questions} />
          </Switch>
        </Layout>
      </Router>
    </div>
  );
}

export default App;
