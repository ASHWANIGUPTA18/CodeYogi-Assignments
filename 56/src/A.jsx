import React from "react";
import { createContext } from "react";
import B from "./B";

export const MyContext = createContext();

function A() {
    const [count, setCount] = React.useState(0);
    const data = { count, setCount };

    return (
        <>
            <MyContext.Provider value={data}>
                <B />
            </MyContext.Provider>
        </>
    );
}

export default A;