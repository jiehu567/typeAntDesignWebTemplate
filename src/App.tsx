import { Button } from "antd";
import * as React from "react";
import { hot } from "react-hot-loader";
import { Provider } from "react-redux";
import { HashRouter } from "react-router-dom";
import { store } from "./store";

const App = () =>
    <HashRouter>
        <Provider store={store}>
          <Button type="primary">Button</Button>
        </Provider>
    </HashRouter>;

export default hot(module)(App);
