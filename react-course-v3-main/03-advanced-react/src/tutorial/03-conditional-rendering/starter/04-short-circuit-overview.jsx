import { useState } from "react";

const ShortCircuitOverview = () => {
  const [text, setText] = useState("");
  const [name, setName] = useState("Sharmi");
  return (
    <>
      <h2>{text || "Hello"}</h2>
      <h2>{name && "Hello"}</h2>
    </>
  );
};
export default ShortCircuitOverview;
