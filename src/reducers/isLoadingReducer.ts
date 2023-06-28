import { Action } from 'redux';

export interface IsLoadingState {
  [key: string]: boolean;
}

const getLoadingMatches = (actionType: string) =>
  /(.*)_(REQUESTING|SUCCESS|ERROR)/.exec(actionType);

const isLoadingReducer = (state: IsLoadingState = {}, action: Action) => {
  // console.log(action.type);
  const matches = getLoadingMatches(action.type);

  // console.log(matches);

  if (!matches) {
    return state;
  }

  const [, requestName, requestStatus] = matches;
  return {
    ...state,
    [requestName]: requestStatus === 'REQUESTING',
  };
};

export default isLoadingReducer;
