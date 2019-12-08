import React from 'react';

export function NetworkRequest(props) {
  const { label, payload } = props;

  return (
    <div className="network-request">
      <b>{label}:</b> {JSON.stringify(payload, null, 2)}
    </div>
  );
}
