import React from 'react';
import ReactDOM from 'react-dom';
import axios from "axios";

import App from './App';
import { setupAxios } from './commons/utils/utils'
import store, { persistor } from "./redux/store";

const { PUBLIC_URL } = process.env;

setupAxios(axios, store);

ReactDOM.render(
  <App
    store={store}
    persistor={persistor}
    basename={PUBLIC_URL}
  />,
  document.getElementById("root")
);
