import React, {useRef} from "react";

function ComponentUseRef() {
    const inputRef = useRef(null);
    const handleClick = () => {
        inputRef.current.focus();
    }
    return (
        <div>
            <input ref={inputRef}/>
            <button onClick={handleClick}>Focus the input</button>
        </div>
    );
}

export default ComponentUseRef;