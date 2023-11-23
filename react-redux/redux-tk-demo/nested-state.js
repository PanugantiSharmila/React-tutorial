const redux = require("redux");
const logger = require("redux-logger").createLogger();
const produce = require("immer").produce;
const initialState = {
  name: "Sharmi",
  address: {
    street: "GaneshNagar",
    city: "Dharmaram",
    state: "Telangana",
  },
};
const STREET_UPDATED = "STREET_UPDATED";
function streetUpdate(street) {
  return {
    type: STREET_UPDATED,
    payload: street,
  };
}
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case STREET_UPDATED:
      //   return {
      //     ...state,
      //     address: { ...state.address, street: action.payload },
      //   };
      return produce(state, (draft) => {
        draft.address.street = action.payload;
      });
    default:
      return state;
  }
};
const store = redux.legacy_createStore(reducer, redux.applyMiddleware(logger));
console.log(store.getState());
const unSubscribe = store.subscribe(() => {});
store.dispatch(streetUpdate("Hanuman nagar"));
unSubscribe();
