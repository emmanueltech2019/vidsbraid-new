// import React, { useState, useRef, useEffect } from 'react';

// interface ModalProps {
//   isOpen?: boolean; // Optional prop for initial visibility
//   onClose?: () => void; // Callback function for closing the modal
//   children: React.ReactNode; // Content to be displayed within the modal
// }

// const Modal: React.FC<ModalProps> = ({ isOpen = false, onClose, children }) => {
//   const [isVisible, setIsVisible] = useState(isOpen); // Modal visibility state
//   const modalRef = useRef<HTMLDivElement>(null); // Reference to modal element

//   // Close modal on Escape key press (optional)
//   useEffect(() => {
//     const handleEscape = (event: KeyboardEvent) => {
//       if (event.key === 'Escape' && isVisible) {
//         onClose?.();
//         setIsVisible(false);
//       }
//     };

//     document.addEventListener('keydown', handleEscape);

//     // Cleanup function to remove event listener on unmount
//     return () => document.removeEventListener('keydown', handleEscape);
//   }, [isVisible, onClose]);

//   // Close modal when clicking outside (optional)
//   useEffect(() => {
//     const handleClickOutside = (event: MouseEvent) => {
//       if (modalRef.current && !modalRef.current.contains(event.target as Element) && isVisible) {
//         onClose?.();
//         setIsVisible(false);
//       }
//     };

//     document.addEventListener('click', handleClickOutside);

//     // Cleanup function to remove event listener on unmount
//     return () => document.removeEventListener('click', handleClickOutside);
//   }, [isVisible, onClose]);

//   const handleClose = () => {
//     onClose?.();
//     setIsVisible(false);
//   };

//   return (
//     <>
//       {isVisible && (
//         <div className="fixed inset-0 z-50 flex items-center justify-center bg-gray-500 bg-opacity-75">
            
//           <div
//             ref={modalRef}
//             className="bg-white rounded-lg p-8 shadow-md w-[40vw]"
//           >
//             {children}
//             {/* <button type="button" onClick={handleClose} className="mt-4 px-4 py-2 bg-red-500 text-white rounded hover:bg-red-700 focus:outline-none">
//               Close
//             </button> */}
//           </div>
//         </div>
//       )}
//     </>
//   );
// };

// export default Modal;


import React, { useState, useRef, useEffect } from 'react';

interface ModalProps {
  isOpen?: boolean; // Optional prop for initial visibility
  onClose?: () => void; // Callback function for closing the modal
  children: React.ReactNode; // Content to be displayed within the modal
}

const Modal: React.FC<ModalProps> = ({ isOpen = false, onClose, children }) => {
  const [isVisible, setIsVisible] = useState(isOpen); // Modal visibility state
  const modalRef = useRef<HTMLDivElement>(null); // Reference to modal element

  // Close modal on Escape key press (optional)
  useEffect(() => {
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape' && isVisible) {
        onClose?.();
        setIsVisible(false);
      }
    };

    document.addEventListener('keydown', handleEscape);

    // Cleanup function to remove event listener on unmount
    return () => document.removeEventListener('keydown', handleEscape);
  }, [isVisible, onClose]);

  // Close modal when clicking outside (optional)
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (modalRef.current && !modalRef.current.contains(event.target as Element) && isVisible) {
        onClose?.();
        setIsVisible(false);
      }
    };

    document.addEventListener('click', handleClickOutside);

    // Cleanup function to remove event listener on unmount
    return () => document.removeEventListener('click', handleClickOutside);
  }, [isVisible, onClose]);

  const handleClose = () => {
    onClose?.();
    setIsVisible(false);
  };

  return (
    <>
      {isVisible && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-gray-500 bg-opacity-75">
          <div
            ref={modalRef}
            className="bg-white rounded-lg p-8 shadow-md w-[40vw]"
          >
            {children}
            <button type="button" onClick={handleClose} className="mt-4 px-4 py-2 bg-red-500 text-white rounded hover:bg-red-700 focus:outline-none">
              Close
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default Modal;