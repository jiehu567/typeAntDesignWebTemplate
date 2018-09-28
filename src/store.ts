import { applyMiddleware, combineReducers } from "redux";
import { createStore } from "redux";
import { createLogger } from "redux-logger";
import thunkMiddleware from "redux-thunk";
import { IData, DataReducers } from "./data/reducers";
import { IState, StateReducers } from "./pages/reducers";
// import { shellReducers } from "./shell/shellReducers";

export const reducers = combineReducers({
    state: StateReducers,
    data: DataReducers,
    // shell: shellReducers,
});

export interface IStoreState {
    readonly state: IState;
    readonly data: IData;
}

// TODO: Only enable logger for dev
const loggerMiddleware = createLogger({
    duration: true,
});

export const store = createStore(
    reducers,
    applyMiddleware(
        thunkMiddleware,
        loggerMiddleware, // redux-logger must be the last middleware
    ),
);
