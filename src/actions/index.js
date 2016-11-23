export const SET_GLOBAL_STATE_VAR = "SET_GLOBAL_STATE_VAR";

export function setGlobalStateVar(params) {
  return {
    type: SET_GLOBAL_STATE_VAR,
    payload: params
  };
}
