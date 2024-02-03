import React, {useState} from "react";
import styled from "styled-components";


function Counter() {

    const [count, setCount] = useState(0);
    const increment = () => {
        setCount(count + 1);
    };

    const decrement = () => {

        if (count === 0) {
            return;
        }

        setCount(count - 1);
    };

    return (
        <div>
            <p>Count: {count == 0 ? "Decrement should not be less than 0" : count}</p>
            <button onClick={increment}>Increment</button>
            <button onClick={decrement}>Decrement</button>
        </div>
    );

}

export default Counter;



