import { useState } from "react";

function CounterHook() {
    const [count,setcount] = useState(0);
    const [step,setstep] = useState(1);

    function handleIncrease() {
        setcount((prev) => prev + step);
    }

    function handleReset() {
        setcount(0);
    }

    function handleStepChange(params) {
        const value = Number(event.target.value);
        setstep(value);
    }

    return(
        <div>
            <p>Count: {count}</p>

            Step: <input type="number" value={step} onChange={handleStepChange} />

            <div>
                <button onClick={handleIncrease}>Increase</button>
                <button onClick={handleReset}>Reset</button>
            </div>
        </div>
    )
}
export default CounterHook;