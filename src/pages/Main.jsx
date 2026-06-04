import { useContext, useEffect, useState } from 'react';
import Main from '../components/Main/Main';
import { TasksContext } from '../context/contextApi';
import { fetchCard } from '../services/api';

const MainPage = () => {
  const { loadTasks } = useContext(TasksContext);

  useEffect(() => {
    loadTasks();
  }, []);
  return <Main />;
};

export default MainPage;
