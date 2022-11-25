import React from 'react';

const ConfirmationModal = ({ title, message, successAction, modalData, setDeletePproduct }) => {
   console.log(modalData);

   return (
      <div>
         {/* The button to open modal */}

         {/* Put this part before </body> tag */}
         <input type="checkbox" id="my-modal" className="modal-toggle" />
         <div className="modal">
            <div className="modal-box">
               <h3 className="font-bold text-lg">{title}</h3>
               <p className="py-4">{message}</p>
               <div className="modal-action">
                  <label onClick={() => successAction(modalData._id)} htmlFor="my-modal" className="btn">
                     Confirm
                  </label>
                  <label onClick={() => setDeletePproduct(null)} htmlFor="my-modal" className="btn">
                     Cancel
                  </label>
               </div>
            </div>
         </div>
      </div>
   );
};

export default ConfirmationModal;
