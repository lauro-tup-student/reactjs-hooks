import './App.css';
import Counter from "./components/decrement.js";
import ComponentUseRef from "./components/useRef.js"


function App() {
    return (
        <div>
            <Counter/>
            <ComponentUseRef/>
        </div>
    );
}

export default App;
