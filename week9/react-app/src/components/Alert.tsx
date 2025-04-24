// components/Alert.tsx
import React from 'react';

interface AlertProps {
  children: React.ReactNode;
  onClose: () => void;
}

const Alert: React.FC<AlertProps> = ({ children, onClose }) => {
  return (
    <div className="alert alert-primary alert-dismissible fade show" role="alert">
      {children}
      <button
        type="button"
        className="btn-close"
        aria-label="Close"
        onClick={onClose}
      ></button>
    </div>
  );
};

export default Alert;
