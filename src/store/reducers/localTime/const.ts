import { localTimeState } from "./types";

export const REDUCER_PATH = 'localTime';

export const INITIAL_STATE: localTimeState = {
  time: new Date().toLocaleDateString()
};
