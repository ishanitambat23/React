import { useState } from "react";
import "./challenge.css"; // Ensure this path is correct

const CounterChallenge = () => {
    const [count, setCount] = useState(0);
    const [step, setStep] = useState(1); // Default step value

    const handleIncrement = () => {
        setCount(prevCount => Math.min(prevCount + step, 100)); // Increment up to 100
    };

    const handleDecrement = () => {
        setCount(prevCount => Math.max(prevCount - step, 0)); // Decrement down to 0
    };

    const handleReset = () => {
        setCount(0);
    };

    return (
        <div className="container state-container">
            <h1>useState Challenge</h1>
            <p className="count-display">
                Count: <span>{count}</span>
            </p>
            <div className="step-container">
                <label>
                    Step:
                    <input 
                        type="number" 
                        value={step} 
                        onChange={(e) => setStep(Number(e.target.value))} 
                        min="1" // Ensure step is at least 1
                    />
                </label>
            </div>
            <div className="grid-three-cols">
                <button 
                    onClick={handleIncrement} 
                    className="increment" 
                    disabled={count >= 100}
                >
                    Increment
                </button>
                <button 
                    onClick={handleDecrement} 
                    className="decrement" 
                    disabled={count <= 0}
                >
                    Decrement
                </button>
                <button 
                    onClick={handleReset} 
                    className="reset"
                >
                    Reset
                </button>
            </div>
        </div>
    );
};

export default CounterChallenge;
