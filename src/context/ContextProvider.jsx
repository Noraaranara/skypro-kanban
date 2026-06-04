import { useContext, useState } from 'react';
import { AuthContext, TasksContext } from './contextApi';
import { deleteCard, fetchCard, postCard } from '../services/api';

export const AuthContextProvider = ({ children }) => {
  const [user, setUser] = useState(
    JSON.parse(localStorage.getItem('userInfo')) || null,
  );

  const login = (userData) => {
    setUser(userData);
    localStorage.setItem('userInfo', JSON.stringify(userData));
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem('userInfo');
  };
  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const TasksContextProvider = ({ children }) => {
  const [tasks, setTasks] = useState([]);
  const userInfo = JSON.parse(localStorage.getItem('userInfo'));

  const loadTasks = async () => {
    const tasks = await fetchCard({
      token: userInfo.token,
    });

    setTasks(tasks);
  };

  const addTask = async (task) => {
    await postCard({
      token: userInfo.token,
      card: task,
    });
    await loadTasks();
  };

  const deleteTask = async (id) => {
    await deleteCard({
      token: userInfo.token,
      id,
    });
    await loadTasks();
  };
  return (
    <TasksContext.Provider
      value={{ tasks, loadTasks, setTasks, addTask, deleteTask }}
    >
      {children}
    </TasksContext.Provider>
  );
};
