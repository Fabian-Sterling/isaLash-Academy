"use client"

import React, { useState } from 'react';

export const Payment = () => {
  const [email, setEmail] = useState('');

  const handlePayment = async () => {
    try {
      const response = await fetch('/api/mercadopago', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      });

      if (!response.ok) {
        throw new Error('Error creating subscription');
      }

      const data = await response.json();
      console.log('Subscription created:', data);
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div>
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Enter your email"
      />
      <button onClick={handlePayment}>Pay Now</button>
    </div>
  );
};










