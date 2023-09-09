import { useContext } from "react";
import { favName } from "../App";
export const Home = () => {
  const {name} = useContext(favName);
  return (
    <div className="container">
      <h1 className="mt-5">useReducer,useRef,useCotext,navLink</h1>
      <div className="alert alert-primary" role="alert">
        Main Page .

        && {name}

      </div>
    </div>
  );
};
