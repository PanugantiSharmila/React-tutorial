import React from "react";
// import { useDispatch, useSelector } from "react-redux";
import { useAppSelector, useAppDispatch } from "../../app/hooks";
import { ordered, restocked } from "./cakeSlice";

export const CakeView = () => {
  const numOfCakes = useAppSelector((state) => state.cake.numOfCakes);
  const dispatch = useAppDispatch();
  return (
    <div>
      <h2>Number of cakes:{numOfCakes}</h2>
      <button
        onClick={() => {
          dispatch(ordered());
        }}
      >
        order cake
      </button>
      <button
        onClick={() => {
          dispatch(restocked(5));
        }}
      >
        restock cakes
      </button>
    </div>
  );
};
