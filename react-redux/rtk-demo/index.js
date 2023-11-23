const store = require("./app/store");
const { cakeActions } = require("./features/cake/cakeSlice");
const { iceCreamActions } = require("./features/iceCreams/iceCreamSlice");
const fetchUsers = require("./features/user/userSlice").fetchUsers;

console.log(store.getState());
const unSubscribe = store.subscribe(() => {
  console.log("Update:", store.getState());
});
// store.dispatch(cakeActions.ordered());
// store.dispatch(cakeActions.ordered());
// store.dispatch(cakeActions.restocked(2));
// store.dispatch(iceCreamActions.ordered());
// store.dispatch(iceCreamActions.ordered());
// store.dispatch(iceCreamActions.restocked(2));
store.dispatch(fetchUsers());
// unSubscribe();
