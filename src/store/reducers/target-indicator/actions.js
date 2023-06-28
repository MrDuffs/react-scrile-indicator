import { getIndicatorValues } from '../../../api';

export const GET_INITIAL_VALUE = 'GET_INITIAL_VALUE';
export const GET_INITIAL_VALUE_SUCCESS = 'GET_INITIAL_VALUE_SUCCESS';
export const GET_INITIAL_VALUE_ERROR = 'GET_INITIAL_VALUE_ERROR';

export const loadIndicatorValues = () => {
  return async (dispatch) => {
    dispatch({ type: 'GET_INITIAL_VALUE' });

    try {
      const response = await getIndicatorValues();
      const { data } = response;
      dispatch({
        type: 'GET_INITIAL_VALUE_SUCCESS',
        payload: data.balance_usd,
      });
    } catch (e) {
      dispatch({ type: 'GET_INITIAL_VALUE_ERROR', error: e });
    }
  };
};
