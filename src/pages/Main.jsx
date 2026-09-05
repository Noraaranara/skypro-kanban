import { useContext, useEffect, useState } from 'react';
import Main from '../components/Main/Main';
import { AuthContext, TasksContext } from '../context/contextApi';
import { fetchCard } from '../services/api';

const MainPage = () => {
  const { loadTasks } = useContext(TasksContext);
  const { user } = useContext(AuthContext);

  useEffect(() => {
    if (user) {
      loadTasks();
    }
  }, []);
  return <Main />;
};

export default MainPage;
