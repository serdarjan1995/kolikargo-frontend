import "styled-components/macro";
import { BrowserRouter as Router } from "react-router-dom";
import "./helpers/i18-init";
import AppRoute from "./AppRoute";
import { ToastContainer } from "./containers";
import { ModalProvider, ToastProvider, UserProvider } from "./providers";

function App() {
  return (
    <Router>
      <ToastProvider>
        <ModalProvider>
          <UserProvider>
            <ToastContainer />
            <AppRoute />
          </UserProvider>
        </ModalProvider>
      </ToastProvider>
    </Router>
  );
}

export default App;
