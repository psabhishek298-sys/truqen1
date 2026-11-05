import React from 'react';
import LogoCloudSwap, { type LogoEntry } from './ui/LogoCloudSwap';

const CLIENT_LOGOS: LogoEntry[] = [
  { id: 'green-realm', name: 'Green Realm Logo', image: '/photos/Green%20Realm%20Logo.png' },
  { id: 'techno-plus', name: 'Techno Plus Logo', image: '/photos/techno%20plus%20logo.png' },
];

export const Clients: React.FC = () => (
  <LogoCloudSwap
    title="OUR CLIENTS"
    subtitle=""
    eyebrow=""
    logos={CLIENT_LOGOS}
    monochrome
    className="px-0"
  />
);
