import React, { useEffect, useState } from "react";

const CleanupFunction = () => {
  const [value, setValue] = useState(false);
  return (
    <>
      <button onClick={() => setValue(!value)} className="btn">
        Toggle
      </button>
      {value && <SecondComponent />}
    </>
  );
};
const SecondComponent = () => {
  useEffect(() => {
    // console.log("Initial render");
    // const interval = setInterval(() => {
    //   console.log("interval here");
    // }, 1000);
    // return () => {
    //   clearInterval(interval);
    // };
    const someFun = () => {
      console.log("Scrolling");
    };
    window.addEventListener("keyup", someFun);
    return () => window.removeEventListener("keyup", someFun);
  }, []);
  return <div>Second Component</div>;
};

export default CleanupFunction;
