import cardList from '../../data';
import Column from '../Column/Column';
import Loader from '../Loader/Loader';
import { Block, Container, Content, MainEl } from './Main.styled';

function Main({ loading }) {
  const columns = [
    { title: 'Без статуса', status: 'Без статуса' },
    { title: 'Нужно сделать', status: 'Нужно сделать' },
    { title: 'В работе', status: 'В работе' },
    { title: 'Тестирование', status: 'Тестирование' },
    { title: 'Готово', status: 'Готово' },
  ];

  return loading ? (
    <Loader />
  ) : (
    <MainEl>
      <Container>
        <Block>
          <Content>
            {columns.map((column) => (
              <Column
                key={column.status}
                title={column.title}
                cards={cardList.filter((card) => card.status === column.status)}
              />
            ))}
          </Content>
        </Block>
      </Container>
    </MainEl>
  );
}

export default Main;
