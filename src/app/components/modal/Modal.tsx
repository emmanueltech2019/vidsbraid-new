
// import * as React from 'react';
// import Box from '@mui/material/Box';
// import Button from '@mui/material/Button';
// import Typography from '@mui/material/Typography';
// import Modal from '@mui/material/Modal'; 
// import {ReactElement, ReactNode} from "react"

// type MyModalProps = {
//     isOpen?: boolean;
//     onClose: () => void;
//     children: ReactElement | ReactElement[];
// };

// const style = {
//   position: 'absolute',
//   top: '50%',
//   left: '50%',
//   transform: 'translate(-50%, -50%)',
//   width: 400,
//   bgcolor: 'background.paper',
//   border: '2px solid #000',
//   boxShadow: 24,
//   p: 4,
// };

// export default function MyModal({isOpen = true, onClose, children}: MyModalProps) {
//   const [open, setOpen] = React.useState(false);
//   const handleOpen = () => setOpen(true);
//   const handleClose = () => setOpen(false);

//   return (
//     <div>
//       <Modal    
//         open={open}
//         onClose={onClose}
//       >
//         {/* {children} */}
//         {Array.isArray(children) ? <>{children}</> : children}
//         </Modal>
//     </div>
//   );
// }



// src/components/Modal.tsx

// import React from 'react';

// interface ModalProps {
//   isOpen: boolean;
//   onClose: () => void;
//   title: string;
//   children: React.ReactNode;
// }

// const Modal: React.FC<ModalProps> = ({ isOpen, onClose, children }) => {
//   if (!isOpen) return null;

//   return (
//     <div className="fixed inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full">
//       <div className="relative top-20 mx-auto p-5 border w-96 shadow-lg rounded-md bg-white">
//         <div className="mt-3 text-center">
//           {/* <h3 className="text-lg leading-6 font-medium text-gray-900">
//             {title}
//           </h3> */}
//           <div className="mt-2 px-7 py-3">
//             {children}
//           </div>
//           {/* <div className="items-center px-4 py-3">

//           </div> */}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Modal;


// src/components/Modal.tsx

import React, { useEffect, useRef } from 'react';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, children }) => {
  const modalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (modalRef.current && !modalRef.current.contains(event.target as Node)) {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full">
      <div
        ref={modalRef}
        className="relative top-20 mx-auto p-5 border w-96 shadow-lg rounded-md bg-white"
      >
        <div className="mt-3 text-center">
          {/* <h3 className="text-lg leading-6 font-medium text-gray-900">
            {title}
          </h3> */}
          <div className="mt-2 px-7 py-3">
            {children}
          </div>
          {/* <div className="items-center px-4 py-3">
            <button
              className="px-4 py-2 bg-blue-500 text-white text-base font-medium rounded-md w-full shadow-sm hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-300"
              onClick={onClose}
            >
              Close
            </button>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default Modal;
