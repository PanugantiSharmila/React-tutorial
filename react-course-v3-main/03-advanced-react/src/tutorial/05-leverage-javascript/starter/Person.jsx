import React from "react";
export function Person({ name, nickName, images }) {
  const img = images?.[0]?.small?.url;
  return (
    <div>
      <img src={img} alt={name} style={{ width: "50px" }} />
      <h4>{name}</h4>
      <p>NickName: {nickName || "Kelly"}</p>
    </div>
  );
}
