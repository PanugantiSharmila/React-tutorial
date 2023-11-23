import { useState } from "react";

const ToggleChallenge = () => {
  const [value, setValue] = useState(true);
  return (
    <>
      <button onClick={() => setValue(!value)}>display</button>
      {value && <h2>Component toggled</h2>}
    </>
  );
};

export default ToggleChallenge;
