import useAppStore from '../src/store/appStore';
import './App.css'

function App() {
  const {
    counter,
    increaseCounter,
    decreaseCounter,
    increaseBy,
    decreaseBy,
    reset,
  } = useAppStore();
  return (
    <>
      <div>
        <h1>{counter}</h1>
        <div style={{ display: "flex", flexDirection: "row", gap: "2rem" }}>
          <div style={{ display: "flex", flexDirection: "column", gap: "2rem" }}>
            <button onClick={increaseCounter}>+</button>
            <button onClick={decreaseCounter}>-</button>
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: "2rem" }}>
            <button onClick={() => increaseBy(10)}>Increase by 10</button>
            <button onClick={() => decreaseBy(10)}>Decrease by 10</button>
          </div>
          <button onClick={reset}>Reset</button>
        </div>
      </div>
    </>
  )
}

export default App
