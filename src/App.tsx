import React from "react";
import { HashRouter as Router, Route, Redirect } from "react-router-dom";
import DefaultLayout from "containers/defaultLayout";
import Login from "containers/login";
import Loading from "components/loading";

interface Props {
  store?: any;
}

const App: React.FunctionComponent<Props> = (props) => {
  const { store } = props;

  return (
    // <Router basename={process.env.PUBLIC_URL}>
    <Router>
      <React.Suspense fallback={<Loading />}>
        <Route exact path="/login" component={() => <Login />} />
        <Route path="/home" component={() => <DefaultLayout store={store} />} />
        <Redirect from="/" to="/login" />
      </React.Suspense>
    </Router>
  );
};

export default App;
