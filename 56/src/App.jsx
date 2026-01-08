import React, { useCallback } from "react";
import Message from "./Message";
import { useState } from "react";
import Button from "./Button";
import Login from "./Login";
import A from "./A";
function App() {

// const [amount,setAmount]=useState(0);
// const [count,setCount]=useState(0);
// const  ChangeCount=useCallback(() => {
//   setCount(count+1);
// }, [count]);
// const square = React.useMemo(() => {
//   console.log("Calculating square...");
//   return count * count;
// }, [count]);

// const handleChange = (e) => {
//   setAmount(+e.target.value);
// };

  return (<>
    {/* <div className="flex flex-col space-y-2 items-start p-5">
      <Message amount={amount} />
      <input className="border p-2 rounded-md border-gray-300" type="number" value={amount} onChange={handleChange} />
      <Button>Donate now!</Button>
      <div>
        Count is {count} and Square is {square}
      </div>
      <Button onClick={ChangeCount}>Increment me</Button>
    </div> */}


    <Login />

    {/* <A/> */}
    </>
  );
}

export default App
