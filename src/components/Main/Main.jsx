import { useCallback, useContext, useEffect, useState } from 'react';
import cardList from '../../data';
import Column from '../Column/Column';
import Loader from '../Loader/Loader';
import { Block, Container, Content, MainEl, SEmpty } from './Main.styled';
import Header from '../Header/Header';
import PopBrowse from '../PopBrowse/PopBrowse';
import PopNewCard from '../PopNewCard/PopNewCard';
import PopUser from '../PopUser/PopUser';
import { data, Outlet } from 'react-router-dom';
import { fetchCard } from '../../services/api';
import { TasksContext, ThemeContext } from '../../context/contextApi';
import { toast } from 'react-toastify';

function Main() {
  const columns = [
    { title: 'Без статуса', status: 'Без статуса' },
    { title: 'Нужно сделать', status: 'Нужно сделать' },
    { title: 'В работе', status: 'В работе' },
    { title: 'Тестирование', status: 'Тестирование' },
    { title: 'Готово', status: 'Готово' },
  ];

  const { tasks, loading, error } = useContext(TasksContext);

  const userInfo = JSON.parse(localStorage.getItem('userInfo'));

  const { theme } = useContext(ThemeContext);

  return (
    <div className="wrapper">
      <Header />
      <MainEl style={{ background: theme === 'light' ? '#eaeef6' : '#151419' }}>
        <Container>
          <Block>
            <Content>
              {columns.map((column) => (
                <Column
                  key={column.status}
                  loading={loading}
                  title={column.title}
                  cards={tasks.filter((task) => task.status === column.status)}
                />
              ))}
            </Content>
            {!loading && tasks.length === 0 && <SEmpty>Новых задач нет</SEmpty>}
          </Block>
        </Container>
      </MainEl>
      <Outlet />
    </div>
  );
}

export default Main;
