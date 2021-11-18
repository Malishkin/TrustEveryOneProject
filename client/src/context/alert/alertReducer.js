import { SET_ALERT, REMOVE_ALERT } from '../types';

/* eslint import/no-anonymous-default-export: [2, {"allowArrowFunction": true}] */
export default (state, action) => {
  switch (action.type) {
    case SET_ALERT:
      return action.payload;
    case REMOVE_ALERT:
      return null;
    default:
      return state;
  }
};

// 1) This is a simple imlementaion for React's useReducer
//    (to explain how it works)
//
// useReducer(alertReducer, initialValue)  //returns [state,dispatch]
// {
//   let state = null;
//   const dispatch=(type, payload)=>
//   {
//        state = alertReducer(type, payload);
//   }
//   return [state, dispatch];
// }
//
//
// 2) How we (developers) use the useReducer
//    Note: We also write our reducer function (see above code)
//          named alertReducer
//
// const [state, dispatch] = useReducer(AlertReducer, initialState);
//
//   const setAlert = (msg, type) => {
//     dispatch({
//       type: SET_ALERT,
//       payload: { msg, type },
//     });
