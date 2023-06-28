import React, { Suspense, useEffect, useRef } from "react";
import * as router from "react-router-dom";
import { connect, useDispatch } from "react-redux";
import * as _ from "lodash";
import NavLeft from "components/navLeft";
import { confirmAlert } from "react-confirm-alert";
import { ToastContainer, toast as notify } from "react-toastify";
import Loading from "../../components/loading";

const DefaultHeader = React.lazy(() => import("./DefaultHeader"));
const Dashboard = React.lazy(() => import("../dashboard"));

function PrivateRoute({ component: Component, ...rest }) {
  return (
    <router.Route
      {...rest}
      render={(props) => {
        // if (checkDefaultAuthorization(rest.dispatch.store))
        //  if (checkDefaultRight(props, rest.dispatch.token))
        return <Component {...props} store={rest.dispatch.store} />;
        //else return <router.Redirect to={{ pathname: "/home" }} />;
        // else return <router.Redirect to={{ pathname: "/login" }} />;
      }}
    />
  );
}

function DefaultLayout(props) {
  const dispatch = useDispatch();

  return (
    <div className="app overflow-y-hidden h-screen">
      <Suspense fallback={<Loading />}>
        <DefaultHeader />
      </Suspense>
      <div className="app-body">
        <NavLeft />
        <main className="main w-full h-screen xl:w-[calc(100%-256px)] nav_">
          <div className="p-0">
            <Suspense fallback={<Loading />}>
              <router.Switch>
                <PrivateRoute
                  path="/home/dashboard"
                  component={Dashboard}
                  dispatch={props}
                />
                <router.Redirect from="/home" to="/home/dashboard" />
              </router.Switch>
            </Suspense>
          </div>
        </main>
      </div>
      <ToastContainer />
    </div>
  );
}

const makeMapStateToProps = () => {
  const mapStateToProps = (state) => {
    return {};
  };
  return mapStateToProps;
};

export default connect(makeMapStateToProps)(DefaultLayout);
