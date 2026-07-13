import { Slide, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { AppRoutes } from './router/AppRoutes';
import './App.css';

function App() {
  return (
    <>
      <AppRoutes />
      <ToastContainer
        position="top-center"
        autoClose={3000}
        hideProgressBar
        theme="colored"
        closeOnClick
        pauseOnHover
        theme="colored"
        transition={Slide}
      />
    </>
  );
}

export default App;
