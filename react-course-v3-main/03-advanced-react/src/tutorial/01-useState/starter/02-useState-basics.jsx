import { useState } from "react";

const UseStateBasics = () => {
  const [count, setCount] = useState(0);
  const [name,setName]=useState( )
  const increment = () => {
    setCount(count + 1);
  };
  return (
    <>
      <h2>Clicked {count} times</h2>
      <button type="button" onClick={increment} className="btn">
        increment
      </button>
    </>
  );
};

export default UseStateBasics;
