import * as React from 'react';
import './style.css';
import useLocalStorage from './useLocalStorage';

export default function App() {
  const [storedValue, setStoredValue] = useLocalStorage(
    'select-value',
    'Light'
  );
  return (
    <div className="container">
      <select
        className="select"
        value={storedValue}
        onChange={(e) => setStoredValue(e.target.value)}
      >
        <option value="light">Light</option>
        <option value="dark">Dark</option>
      </select>
      <p className="desc">
        Value from local storage: <span>{storedValue}</span>
      </p>
    </div>
  );
}
