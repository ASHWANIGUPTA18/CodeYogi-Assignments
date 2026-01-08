import React, { useContext } from "react";
import { MyContext } from "./A";

function B() {
    const { count, setCount } = useContext(MyContext);

    return (
        <>
            <div>
                <h1>Count value in B is {count}</h1>
                <button onClick={() => setCount(count + 1)}>Increment Count</button>
            </div>
        </>
    );
}

export default B;