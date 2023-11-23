import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ordered, restocked } from "./iceCreamSlice";

export const IceCreamView = () => {
  const numOfIceCreams = useSelector((state) => state.iceCream.numOfIceCreams);
  const [amount, setAmount] = useState(1);
  const dispatch = useDispatch();
  return (
    <div>
      <h2>Number of iceCreams:{numOfIceCreams}</h2>
      <button
        onClick={() => {
          dispatch(ordered());
        }}
      >
        order ice cream
      </button>
      <div>
        <input
          type="number"
          value={amount}
          onChange={(e) => setAmount(parseInt(e.target.value))}
        />
      </div>
      <button
        onClick={() => {
          dispatch(restocked(amount));
        }}
      >
        restock ice creams
      </button>
    </div>
  );
};
