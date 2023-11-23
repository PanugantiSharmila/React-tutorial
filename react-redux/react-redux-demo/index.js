const redux = require("redux");
const createStore = redux.legacy_createStore;
const combineReducers = redux.combineReducers;
const reduxLogger = require("redux-logger");
const logger = reduxLogger.createLogger();
const applyMiddleware = redux.applyMiddleware;

const BUY_CAKE = "BUY_CAKE";
const BUY_ICECREAM = "BUY_ICECREAM";
function buyCake() {
  return {
    type: BUY_CAKE,
    info: "First Redux action",
  };
}
function buyIcecream() {
  return {
    type: BUY_ICECREAM,
    info: "First IceCream",
  };
}
// const initialState = {
//   numOfCakes: 20,
//   numOfIcecreams: 20,
// };
const initialCakeState = {
  numOfCakes: 20,
};
const initialIcecreamState = {
  numOfIcecreams: 20,
};

// const reducer = (state = initialState, action) => {
//   switch (action.type) {
//     case BUY_CAKE:
//       return {
//         ...state,
//         numOfCakes: state.numOfCakes - 1,
//       };
//     case BUY_ICECREAM:
//       return {
//         ...state,
//         numOfIcecreams: state.numOfIcecreams - 1,
//       };
//     default:
//       return state;
//   }
// };
const Cakereducer = (state = initialCakeState, action) => {
  switch (action.type) {
    case BUY_CAKE:
      return {
        numOfCakes: state.numOfCakes - 1,
      };
    default:
      return state;
  }
};
const Icecreamreducer = (state = initialIcecreamState, action) => {
  switch (action.type) {
    case BUY_ICECREAM:
      return {
        numOfIcecreams: state.numOfIcecreams - 1,
      };
    default:
      return state;
  }
};

const rootReducer = combineReducers({
  cake: Cakereducer,
  iceCream: Icecreamreducer,
});
const store = createStore(rootReducer, applyMiddleware(logger));
console.log("Initial state", store.getState());
const unSubscribe = store.subscribe(() => {});

store.dispatch(buyCake());
store.dispatch(buyCake());
store.dispatch(buyIcecream());
store.dispatch(buyIcecream());

unSubscribe();
