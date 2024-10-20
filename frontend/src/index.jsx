import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { Provider } from "react-redux";
import store from "./store";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css'; // Import Toastify styles

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <React.StrictMode>
      <App />
      <ToastContainer 
        position="bottom-center" // Position of the toast
        autoClose={5000} // Duration for which the toast is visible
        hideProgressBar={false} // Show progress bar
        closeOnClick // Close on click
        draggable // Allow dragging
        pauseOnHover // Pause on hover
        theme="light" // Theme of the toast
      />
    </React.StrictMode>
  </Provider>
);
