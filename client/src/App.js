import React, { useEffect } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { useDispatch } from "react-redux";
import Layout from "./components/Layout";
import * as Page from "./pages";
import { getGuilds } from "./redux/actions/guild.actions";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getGuilds());
  }, [dispatch]);

  return (
    <div className="App">
      <Router>
        <Layout>
          <Switch>
            <Route exact path="/" component={Page.Home} />
            <Route path="/:id/questions" component={Page.Questions} />
            <Route path="/:id/answered" component={Page.Answered} />
          </Switch>
        </Layout>
      </Router>
    </div>
  );
}

export default App;
