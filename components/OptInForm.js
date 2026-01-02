"use client";

import { useState } from 'react';

const OptInForm = ({ workerUrl }) => {
  const [phoneNumber, setPhoneNumber] = useState('');
  const [status, setStatus] = useState('idle'); // 'idle' | 'loading' | 'success' | 'error'
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('loading');
    setMessage('');

    const phoneRegex = /^[\d\s\-\+\(\)]+$/;
    if (!phoneNumber || !phoneRegex.test(phoneNumber)) {
      setStatus('error');
      setMessage('please enter a valid phone number');
      return;
    }

    try {
      const response = await fetch(workerUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ phoneNumber: phoneNumber.trim() }),
      });

      const text = await response.text();

      if (response.ok) {
        setStatus('success');
        setMessage('Successfully registered! You\'ll be notified when the web app launches.');
        setPhoneNumber('');
      } else {
        setStatus('error');
        setMessage(text || 'Registration failed. You may already be registered.');
      }
    } catch (error) {
      setStatus('error');
      setMessage('Network error. Please try again later.');
      console.error('Form submission error:', error);
    }
  };

  return (
    <div className="my-8 p-6 border-2 border-[#4E4950] rounded-lg bg-[#EFF0EF]">
      <h3 className="text-xl font-bold text-[#4E4950] mb-2">
        Get Early Access
      </h3>
      <p className="text-[#7D767F] mb-4">
        Sign up to be notified when this web app launches.
      </p>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="phone" className="block text-sm font-medium text-[#4E4950] mb-1">
            Phone Number
          </label>
          <input
            type="tel"
            id="phone"
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
            placeholder="+1 (555) 123-4567"
            disabled={status === 'loading' || status === 'success'}
            className="w-full px-4 py-2 border border-[#7D767F] rounded-md focus:outline-none focus:ring-2 focus:ring-[#7070F3] focus:border-transparent disabled:bg-gray-200 disabled:cursor-not-allowed"
            required
          />
        </div>

        <button
          type="submit"
          disabled={status === 'loading' || status === 'success'}
          className="w-full bg-[#4E4950] text-white font-medium py-2 px-4 rounded-md hover:bg-[#7D767F] transition-colors disabled:bg-gray-400 disabled:cursor-not-allowed"
        >
          {status === 'loading' ? 'submitting' : status === 'success' ? 'registered' : 'Sign Up'}
        </button>
      </form>

      {message && (
        <div className={`mt-4 p-3 rounded-md ${
          status === 'success'
            ? 'bg-green-100 border border-green-400 text-green-700'
            : 'bg-red-100 border border-red-400 text-red-700'
        }`}>
          {message}
        </div>
      )}
    </div>
  );
};

export default OptInForm;
