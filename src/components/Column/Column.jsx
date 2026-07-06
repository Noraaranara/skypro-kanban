import { useParams } from 'react-router-dom';
import cardList from '../../data';
import Card from '../Card/Card';
import { Cards, Columns, SEmpty, Title } from './Column.styled';
import { useMemo } from 'react';
import CardLoader from '../CardLoader/CardLoader';

function Column({ title, cards, loading }) {
  return (
    <Columns>
      <Title>
        <p>{title}</p>
      </Title>

      <Cards>
        {loading ? (
          Array.from({ length: 3 }).map((_, index) => (
            <CardLoader key={index} />
          ))
        ) : cards.length ? (
          cards.map((card) => (
            <Card
              key={card._id}
              id={card._id}
              title={card.title}
              date={card.date}
              topic={card.topic}
            />
          ))
        ) : (
          <SEmpty>Новых задач нет</SEmpty>
        )}
      </Cards>
    </Columns>
  );
}

export default Column;
