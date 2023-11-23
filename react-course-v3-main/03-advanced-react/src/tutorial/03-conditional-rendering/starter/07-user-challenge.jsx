import { useState } from "react";

const UserChallenge = () => {
  const [user, setUser] = useState(null);
  const login = () => {
    setUser({ name: "Sharmila" });
  };
  const logout = () => {
    setUser(null);
  };
  return (
    <>
      {user ? (
        <div>
          <h3>hello there,{user.name}</h3>
          <button onClick={logout} className="btn">
            Log out
          </button>
        </div>
      ) : (
        <div>
          <h3>Please login</h3>
          <button onClick={login} className="btn">
            Log In
          </button>
        </div>
      )}
    </>
  );
};

export default UserChallenge;
