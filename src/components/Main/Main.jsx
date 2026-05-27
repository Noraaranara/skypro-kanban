import { useEffect, useState } from 'react';
import cardList from '../../data';
import Column from '../Column/Column';
import Loader from '../Loader/Loader';
import { Block, Container, Content, MainEl } from './Main.styled';
import Header from '../Header/Header';
import PopBrowse from '../PopBrowse/PopBrowse';
import PopNewCard from '../PopNewCard/PopNewCard';
import PopUser from '../PopUser/PopUser';
import { Outlet } from 'react-router-dom';

function Main() {
  const columns = [
    { title: 'Без статуса', status: 'Без статуса' },
    { title: 'Нужно сделать', status: 'Нужно сделать' },
    { title: 'В работе', status: 'В работе' },
    { title: 'Тестирование', status: 'Тестирование' },
    { title: 'Готово', status: 'Готово' },
  ];

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, []);

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
                  cards={cardList.filter(
                    (card) => card.status === column.status,
                  )}
                />
              ))}
            </Content>
          </Block>
        </Container>
      </MainEl>
      <Outlet />
    </div>
  );
}

export default Main;
