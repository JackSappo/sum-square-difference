import React from 'react';

export function NetworkRequest(props) {
  const { payload } = props;

  return (
    <div className="network-request">
      {payload.number} => {payload.value}
    </div>
  )
}