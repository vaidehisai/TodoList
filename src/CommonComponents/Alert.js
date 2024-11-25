import Swal from "sweetalert2";

// Create the ShowAlert function with conditional customization and default functionality
export const ShowAlert = ({
  id, // ID or condition to determine customization
  title,
  text,
  confirmAction,
  cancelAction,
  confirmButtonText = "OK", // Default button text
  confirmButtonAction = (resolve) => {
    resolve();
  }, // Default action (resolve with no action)
  ...otherOptions // Spread other options to be passed to Swal.fire
}) => {
  let customConfirmButtonText = confirmButtonText;
  let customConfirmButtonAction = confirmButtonAction;

  // Conditional customization based on ID or condition
  if (id === "specialCondition") {
    customConfirmButtonText = "Special OK"; // Custom button text for this condition
    customConfirmButtonAction = (resolve) => {
      // Custom functionality for this condition

      // Perform any specific action here and resolve/reject accordingly
      resolve(); // Resolve to close the alert
    };
  }

  // Initialize SweetAlert2 with customized options
  Swal.fire({
    title, // Use title from props
    text, // Use text from props
    confirmButtonText: customConfirmButtonText, // Apply customized or default OK button text
    willOpen: () => {
      const swalContainer = Swal.getContainer();
      if (swalContainer) {
        swalContainer.style.zIndex = "2100"; // Set the desired z-index
      }
      const swalPopup = Swal.getPopup();
      if (swalPopup) {
        swalPopup.style.zIndex = "2100"; // Set the desired z-index for the popup
      }
    },
    preConfirm: () => {
      return new Promise((resolve, reject) => {
        try {
          // Execute the custom button action
          customConfirmButtonAction(resolve, reject);
        } catch (error) {
          reject(error);
        }
      });
    },
    ...otherOptions, // Pass any additional options to Swal.fire
  }).then((result) => {
    if (result.isConfirmed) {
      // Handle the result of the confirmation
      if (confirmAction) {
        confirmAction();
      }
    } else {
      if (cancelAction) {
        cancelAction();
      }
    }
  });
};
