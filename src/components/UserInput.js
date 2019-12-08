import React from 'react';
import Loader from 'react-loader-spinner';

export function UserInput(props) {
  const { inputValue = '', loading, onInputChange, calculate, solutionValue } = props;

  return (
    <div className="user-input-container">
      <div className="user-input">
        <input value={inputValue} onChange={onInputChange} disabled={loading}/>
        <button onClick={calculate} disabled={loading}>Calculate</button>
      </div>
      <div className="solution">
        <b>Solution</b>: {loading ? renderLoader() : solutionValue}
      </div>
    </div>
  );
}

function renderLoader() {
  return (
    <Loader
      visible={true}
      type="TailSpin"
      color="#000000"
      height={14}
      width={14}
    />
   );
}