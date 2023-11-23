import { useState } from "react";

const UseStateObject = () => {
  const [person, setPerson] = useState({
    name: "peter",
    age: 23,
    hobby: "Reading books",
  });
  // const [name, setName] = useState("Peter");
  // const [age, setAge] = useState(23);
  // const [hobby, setHobby] = useState("Reading books");
  const displayPerson = () => {
    // setName("John");
    // setAge(25);
    // setHobby("Playing sports");
    setPerson({ name: "John", age: 25, hobby: "playing sports" });
    setPerson({ ...person, name: "Sharmila" });
  };
  return (
    <>
      <h3>{person.name}</h3>
      <h3>{person.age}</h3>
      <h3>{person.hobby}</h3>
      <button className="btn" onClick={displayPerson}>
        show John
      </button>
    </>
  );
};

export default UseStateObject;
