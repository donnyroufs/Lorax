import React, { useEffect } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import Layout from "./components/Layout";
import * as Page from "./pages";
import { getGuilds } from "./redux/actions/guild.actions";
import { CSSTransition, TransitionGroup } from "react-transition-group";
// import { getAccessToken } from "./redux/actions/auth.actions";

function App() {
  const dispatch = useDispatch();
  // const isAuth = useSelector((state) => state.auth.isAuthenticated);

  useEffect(() => {
    dispatch(getGuilds());
  }, [dispatch]);

  return (
    <div className="App">
      <Router>
        <Route
          render={({ location }) => (
            <TransitionGroup>
              <CSSTransition
                timeout={1000}
                classNames="fade"
                key={location.key}
              >
                <Layout key={location.key}>
                  <Switch location={location}>
                    <Route exact path="/" component={Page.Home} />
                    <Route exact path="/about" component={Page.About} />
                    <Route exact path="/:slug/" component={Page.Overview} />
                    <Route
                      exact
                      path="/:slug/questions"
                      component={Page.Questions}
                    />
                    <Route
                      exact
                      path="/:slug/answered"
                      component={Page.Answered}
                    />
                    <Route exact path="/:slug/search" component={Page.Search} />
                    <Route exact path="*" component={Page.Error} />
                  </Switch>
                </Layout>
              </CSSTransition>
            </TransitionGroup>
          )}
        />
      </Router>
    </div>
  );
}

export default App;
