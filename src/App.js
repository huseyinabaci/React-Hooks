import { useState, useRef, useEffect } from 'react';
import NumberList from './NumberList';

function App() {
  const [name, setName] = useState('');

  const renderCount = useRef(0);

  const inputRef = useRef();

  useEffect(() => {
    renderCount.current = renderCount.current + 1;
  })

  const focusInput = () => {
    inputRef.current.focus();
    inputRef.current.value = 'Raftello'
  }

  return (
    <div className="App">
      <input
        ref={inputRef}
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <div>Benim adım {name}</div>
      <div>{renderCount.current} defa render oldu</div>
      <button onClick={focusInput}>Focus</button>
    </div>
  );
}

export default App;
