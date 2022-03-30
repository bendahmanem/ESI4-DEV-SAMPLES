import { useContext } from "react";
import { myContext } from "../Store/store";

const Child = () => {
    const ctx = useContext(myContext);
    ctx.setToto('toto');
  return (
    <div>
      <h1>Child Component</h1>
      <p>This is a child component</p>
        <p>{ctx.name}</p>
        
    </div>
  );
};

export default Child;
