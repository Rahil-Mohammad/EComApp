import React, { useState } from 'react';

// Higher-Order Component for handling popups
const withPopup = (WrappedComponent) => {
  return (props) => {
    const [popupMessage, setPopupMessage] = useState(null);

    const showPopup = (message) => {
      setPopupMessage(message);
      setTimeout(() => {
        setPopupMessage(null);
      }, 3000); // Hide the popup after 3 seconds
    };

    return (
      <div>
        <WrappedComponent {...props} showPopup={showPopup} />
        {popupMessage && (
          <div className="fixed top-0 left-0 right-0 p-4 bg-red-500 text-white text-center">
            {popupMessage}
          </div>
        )}
      </div>
    );
  };
};

export default withPopup;
