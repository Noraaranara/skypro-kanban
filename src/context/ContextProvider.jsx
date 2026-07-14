import { useContext, useState } from 'react';
import { AuthContext, TasksContext, ThemeContext } from './contextApi';
import { deleteCard, editCard, fetchCard, postCard } from '../services/api';

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
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const { user } = useContext(AuthContext);

  const loadTasks = async () => {
    setLoading(true);
    setError('');
    try {
      const tasks = await fetchCard({
        token: user.token,
      });
      setTasks(tasks);
    } catch (error) {
      setTasks([]);
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  const addTask = async (task) => {
    await postCard({
      token: user.token,
      card: task,
    });
    await loadTasks();
  };

  const deleteTask = async (id) => {
    await deleteCard({
      token: user.token,
      id,
    });
    await loadTasks();
  };

  const updateTask = async (id, card) => {
    await editCard({
      token: user.token,
      id,
      card,
    });
    await loadTasks();
  };
  return (
    <TasksContext.Provider
      value={{
        tasks,
        loadTasks,
        setTasks,
        addTask,
        deleteTask,
        updateTask,
        loading,
        error,
      }}
    >
      {children}
    </TasksContext.Provider>
  );
};

export const ThemeContextProvider = ({ children }) => {
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem('theme') || 'light';
  });

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    localStorage.setItem('theme', newTheme);
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
