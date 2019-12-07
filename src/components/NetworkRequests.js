import React from 'react';
import { NetworkRequest } from './NetworkRequest'

export function NetworkRequests(props) {
  return (
    <div id="network-requests">
      {props.networkRequests.map(
        payload => <NetworkRequest payload={payload}/>
      )}
    </div>  
  )
}