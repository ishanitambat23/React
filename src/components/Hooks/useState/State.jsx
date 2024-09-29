import { useState } from "react";
import "../EV.css";

export const State = () => {
    const [count, setCount] = useState(0);
    console.log("Parent Components rendered");

    const handleButtonClickIncrement = () => {
        setCount(count + 1);
    };

    const handleButtonClickDecrement = () => {
        setCount((prevCount) => (prevCount > 0 ? prevCount - 1 : 0));
    };

    return (
        <>
            <div className="main-div">
                <h1>{count}</h1>
                <button onClick={handleButtonClickIncrement}>Increment</button>
                <button onClick={handleButtonClickDecrement}>Decrement</button>
            </div>
            <ChildComponent count = {count}/>
        </>
    );
};

function ChildComponent({count}) {
    console.log("Child component rendered");
    return(
        <div className="main-div">
            <h2>Child Component : {count}</h2>
        </div>
    );
};
