

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

//     window.addEventListener('keydown', handleEscape);

//     // Cleanup function to remove event listener on unmount
//     return () => window.removeEventListener('keydown', handleEscape);
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
//             <button type="button" onClick={handleClose} className="mt-4 px-4 py-2 bg-red-500 text-white rounded hover:bg-red-700 focus:outline-none">
//               Close
//             </button>
//           </div>
//         </div>
//       )}
//     </>
//   );
// };

// export default Modal;



import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal'; 
import {ReactElement, ReactNode} from "react"

type MyModalProps = {
    isOpen?: boolean;
    onClose: () => void;
    children: ReactElement | ReactElement[];
};

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

export default function MyModal({isOpen = false, onClose, children}: MyModalProps) {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <Modal    
        open={open}
        onClose={handleClose}
      >
        {Array.isArray(children) ? <>{children}</> : children}
        </Modal>
    </div>
  );
}
