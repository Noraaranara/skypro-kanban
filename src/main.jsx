import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx';
import { AppRoutes } from './router/AppRoutes.jsx';
import {
  AuthContextProvider,
  TasksContextProvider,
  ThemeContextProvider,
} from './context/ContextProvider.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthContextProvider>
      <TasksContextProvider>
        <ThemeContextProvider>
          <AppRoutes />
        </ThemeContextProvider>
      </TasksContextProvider>
    </AuthContextProvider>
  </StrictMode>,
);
