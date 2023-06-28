import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import createSagaMiddleware from "redux-saga";
import { compose, createStore, applyMiddleware } from "redux";

import "index.css";
import "react-datepicker/dist/react-datepicker.css";
import "react-confirm-alert/src/react-confirm-alert.css";
import "react-toastify/dist/ReactToastify.css";
import "react-perfect-scrollbar/dist/css/styles.css";
import './assets/css/styles.css';
import './assets/css/nav.css';
import './assets/css/reactmodal.css';

import App from "./App";
import rootReducer from "./reducers";
import rootSagas from "./sagas";

const sagaMiddleware = createSagaMiddleware();

/* prod */
const store = createStore(
  rootReducer,
  compose(applyMiddleware(sagaMiddleware)),
);

sagaMiddleware.run(rootSagas);

const container = document.getElementById("root") as HTMLElement;

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  container,
);
