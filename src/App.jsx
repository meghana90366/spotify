import React, { useContext, Fragment } from "react";
import Navbar from "./Pages/HeaderComponent/Navbar";
import Slider from "./Pages/SliderComponent/Slider";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./Pages/Home";
import Login from "./Components/AuthComponent/Login";
import Signup from "./Components/AuthComponent/Signup";
import PageNotFound from "./Pages/PageNotFound";
import { AuthContextApi } from "./Apis/AuthContent";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import UserHome from "./UsersComponent/UserHome";

const App = () => {
  let state = useContext(AuthContextApi);
  let IsAnonymousTemplate = () => {
    return (
      <section>
        <article>
          <Router>
            <header>
              <Navbar />
            </header>
            <ToastContainer />
            <main>
              {/* dynamic routing starts here */}
              <Switch>
                <Route path="/" exact>
                  <Home />
                </Route>
                <Route path="/login" exact>
                  <Login />
                </Route>
                {/*  */}
                {/* <Route path="">
                  <UserHome />
                </Route> */}
                {/*  */}
                <Route path="/signup" exact>
                  <Signup />
                </Route>
                <Route path="*">
                  <PageNotFound />
                </Route>
              </Switch>
              {/* dynamic routing ends here */}
            </main>
          </Router>
        </article>
      </section>
    );
  };
  let IsAuthenticatedTemplate = () => {
    return <UserHome />;
  };
  return (
    <Fragment>
      {state === null ? <IsAnonymousTemplate /> : <IsAuthenticatedTemplate />}
    </Fragment>
  );
};

export default App;
