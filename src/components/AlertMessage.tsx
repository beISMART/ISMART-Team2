import React from 'react';
import {
  AiOutlineCheckCircle,
  AiOutlineCloseCircle,
  AiOutlineExclamationCircle,
} from 'react-icons/ai';

interface AlertProps {
  variant: 'success' | 'failure' | 'warning';
  children: React.ReactNode;
}

const Alert: React.FC<AlertProps> = ({ variant, children }) => {
  const getIcon = () => {
    switch (variant) {
      case 'success':
        return <AiOutlineCheckCircle />;
      case 'failure':
        return <AiOutlineCloseCircle />;
      case 'warning':
        return <AiOutlineExclamationCircle />;
      default:
        return null;
    }
  };

  const getAlertColor = () => {
    switch (variant) {
      case 'success':
        return 'bg-green-300 text-green-800';
      case 'failure':
        return 'bg-red-300 text-red-800';
      case 'warning':
        return 'bg-blue-300 text-blue-800';
      default:
        return '';
    }
  };

  const containerClassName = `flex items-center justify-center shadow-lg rounded-[10px] h-[57px] w-[302px] py-2 px-3 ${getAlertColor()}`;

  return (
    <div className={containerClassName}>
      <div className="mr-2">{getIcon()}</div>
      <div className="text-lg">{children}</div>
    </div>
  );
};

export default Alert;
