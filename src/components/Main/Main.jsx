import { useCallback, useEffect, useState } from 'react';
import cardList from '../../data';
import Column from '../Column/Column';
import Loader from '../Loader/Loader';
import { Block, Container, Content, MainEl } from './Main.styled';
import Header from '../Header/Header';
import PopBrowse from '../PopBrowse/PopBrowse';
import PopNewCard from '../PopNewCard/PopNewCard';
import PopUser from '../PopUser/PopUser';
import { data, Outlet } from 'react-router-dom';
import { fetchCard } from '../../services/api';

function Main() {
  const columns = [
    { title: 'Без статуса', status: 'Без статуса' },
    { title: 'Нужно сделать', status: 'Нужно сделать' },
    { title: 'В работе', status: 'В работе' },
    { title: 'Тестирование', status: 'Тестирование' },
    { title: 'Готово', status: 'Готово' },
  ];

  const [loading, setLoading] = useState(true);
  const [card, setCard] = useState([]);
  const [error, setError] = useState('');

  const userInfo = JSON.parse(localStorage.getItem('userInfo'));

  const getCard = useCallback(async () => {
    try {
      setLoading(true);
      const data = await fetchCard({
        token: userInfo.token,
      });
      if (data) setCard(data);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  }, [userInfo.token]);

  useEffect(() => {
    getCard();
  }, [getCard]);

  return loading ? (
    <Loader />
  ) : (
    <div className="wrapper">
      <Header />
      <MainEl>
        <Container>
          <Block>
            <Content>
              {columns.map((column) => (
                <Column
                  key={column.status}
                  title={column.title}
                  cards={card.filter((card) => card.status === column.status)}
                />
              ))}
            </Content>
            <p>{error}</p>
          </Block>
        </Container>
      </MainEl>
      <Outlet />
    </div>
  );
}

export default Main;
