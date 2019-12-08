import React from 'react';
import { NetworkRequest } from './NetworkRequest';

export function NetworkRequests(props) {
  const requestCount = props.networkRequests.length;

  return (
    <div id="network-requests">
      {props.networkRequests.map((payload, i) => (
        <NetworkRequest
          key={i}
          label={requestCount - i - 1}
          payload={payload}
        />
      ))}
    </div>
  );
}
