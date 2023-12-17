import React from 'react'
import { ConnectButton } from '@rainbow-me/rainbowkit';
export default function Nav() {
  return (
    <div
    style={{
      display: 'flex',
      justifyContent: 'flex-end',
      padding: 12,
    }}>
    <ConnectButton />
  </div>
  )
}
