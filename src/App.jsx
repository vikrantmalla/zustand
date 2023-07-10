import { create } from 'zustand';
import './App.css'

const useStore = create((set) => ({
  helloCount: 0,
  increaseCount: () => set((state) => ({ helloCount: state.helloCount + 1 })),
}));

function App() {
  const helloCount = useStore((state) => state.helloCount);
  const increaseCount = useStore((state) => state.increaseCount);
  return (
    <>
     <div>
      <h1>Hello Zustand {helloCount}</h1>
      <button onClick={increaseCount}>Increase No</button>
     </div>
    </>
  )
}

export default App
