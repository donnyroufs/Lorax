import React, { useEffect } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { useDispatch } from "react-redux";
import Layout from "./components/Layout";
import * as Page from "./pages";
import { getGuilds } from "./redux/actions/guild.actions";
/* eslint-disable */

function App({ match }) {
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
            <Route exact path="/:slug/" component={Page.Overview} />
            <Route exact path="/:slug/questions" component={Page.Questions} />
            <Route exact path="/:slug/answered" component={Page.Answered} />
            <Route exact path="/:slug/search" component={Page.Search} />
            <Route exact path="*" component={Page.Error} />
          </Switch>
        </Layout>
      </Router>
    </div>
  );
}

export default App;
