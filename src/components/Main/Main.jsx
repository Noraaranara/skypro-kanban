import cardList from '../../data';
import Column from '../Column/Column';
import Loader from '../Loader/Loader';

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
    <main className="main">
      <div className="container">
        <div className="main__block">
          <div className="main__content">
            {columns.map((column) => (
              <Column
                key={column.status}
                title={column.title}
                cards={cardList.filter((card) => card.status === column.status)}
              />
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}

export default Main;
