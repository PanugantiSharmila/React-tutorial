import { Person } from "./Person";
import { people } from "../../../data";
import React from "react";

export const List = () => {
  return (
    <div>
      {people.map((person) => {
        return <Person {...person} key={person.id} />;
      })}
    </div>
  );
};
