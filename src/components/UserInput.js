import React from 'react';

export function UserInput(props) {
  const { inputValue = '', loading, onInputChange, calculate, solutionValue } = props;

  return (
    <div className="user-input-container">
      <div className="user-input">
        <input value={inputValue} onChange={onInputChange} />
        <button onClick={calculate}>Calculate</button>
      </div>
      <div className="solution">
        <b>Solution</b>: {loading ? 'LOADING': solutionValue}
      </div>
    </div>
  );
}
