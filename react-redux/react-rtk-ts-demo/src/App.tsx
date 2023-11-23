import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { CakeView } from "./features/cake/cakeView";
import { IceCreamView } from "./features/iceCreams/iceCreamView";
import { UserView } from "./features/user/userView";

function App() {
  //const [count, setCount] = useState(0);

  return (
    <>
      <CakeView />
      <IceCreamView />
      <UserView />
    </>
  );
}

export default App;
