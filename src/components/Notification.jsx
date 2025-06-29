import React from 'react';

const Notification = ({ message, type, onClose }) => {
  return (
    <div
      className={`fixed bottom-4 right-4 p-4 rounded shadow-lg text-white ${type === 'error' ? 'bg-red-500' : 'bg-green-500'}`}
    >
      {message}
      <button onClick={onClose} className="ml-4 text-lg font-bold">&times;</button>
    </div>
  );
};

export default Notification;
