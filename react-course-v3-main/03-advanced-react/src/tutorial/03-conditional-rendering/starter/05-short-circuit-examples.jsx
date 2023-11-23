import { useState } from "react";

const ShortCircuitExamples = () => {
  // falsy
  const [text, setText] = useState("hi");
  // truthy
  const [name, setName] = useState("susan");
  const [user, setUser] = useState({ name: "john" });
  const [isEditing, setIsEditing] = useState(false);

  return (
    <div>
      {/* <h2>{text || "Default value"}</h2>
      <h2>{text && <div>{user.name}</div>}</h2> */}

      {user && <SomeComponent name={name} />}
    </div>
  );
};

const SomeComponent = ({ name }) => {
  return (
    <div>
      <h2>Name: {name}</h2>
    </div>
  );
};

export default ShortCircuitExamples;
