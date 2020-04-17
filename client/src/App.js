import React, { useEffect } from "react";
import { Route, Switch, useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import Layout from "./components/Layout";
import * as Page from "./pages";
import { getGuilds } from "./redux/actions/guild.actions";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import getToken from "./utils/getToken";
import { getProfile } from "./redux/actions/auth.actions";

// import { getAccessToken } from "./redux/actions/auth.actions";

function App() {
  const dispatch = useDispatch();
  const history = useHistory();
  const isAuth = useSelector((state) => state.auth.isAuthenticated);
  // const isAuth = useSelector((state) => state.auth.isAuthenticated);

  useEffect(() => {
    dispatch(getGuilds());
  }, [dispatch]);

  useEffect(() => {
    if (!isAuth) {
      const accessToken = new URL(document.location).searchParams.get("accessToken");
      if (accessToken != null) {
        // Store in local storage
        localStorage.setItem("aft", accessToken);
        // Get Profile
        dispatch(getProfile());
        // Remove search param
        return history.push("/");
      }

      const sessionAccessToken = getToken();
      if (sessionAccessToken) {
        dispatch(getProfile());
      }
    }
  }, []);

  return (
    <div className="App">
      <Route
        render={({ location }) => (
          <TransitionGroup>
            <CSSTransition timeout={1000} classNames="fade" key={location.key}>
              <Layout key={location.key}>
                <Switch location={location}>
                  <Route exact path="/" component={Page.Home} />
                  <Route exact path="/about" component={Page.About} />
                  <Route exact path="/profile/questions" component={Page.UserQuestions} />
                  <Route exact path="/:slug/" component={Page.Overview} />
                  <Route exact path="/:slug/questions" component={Page.Questions} />
                  <Route exact path="/:slug/answered" component={Page.Answered} />
                  <Route exact path="/:slug/search" component={Page.Search} />
                  <Route exact path="*" component={Page.Error} />
                </Switch>
              </Layout>
            </CSSTransition>
          </TransitionGroup>
        )}
      />
    </div>
  );
}

export default App;
