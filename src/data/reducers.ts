import { combineReducers } from "redux";
import { shellReducers, ShellStatus } from "./shellReducers";

export interface IData {
    readonly shell: ShellStatus;
}

export const DataReducers = combineReducers({
    shell: shellReducers,
});
