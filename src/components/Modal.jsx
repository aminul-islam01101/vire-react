import React from 'react';

function Modal({ isOpen, onClose, children }) {
  const overlayClasses = isOpen ? 'fixed inset-0 bg-black opacity-50 z-50' : 'hidden';

  const modalClasses = isOpen
    ? 'fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white rounded-2xl shadow-lg z-50'
    : 'hidden';

  return (
    <>
      <div className={overlayClasses} onClick={onClose} role="button" tabIndex="0" />
      <div className={modalClasses}>{children}</div>
    </>
  );
}
export default Modal;
