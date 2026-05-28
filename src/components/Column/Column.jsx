import { useParams } from 'react-router-dom';
import cardList from '../../data';
import Card from '../Card/Card';
import { Cards, Columns, Title } from './Column.styled';
import { useMemo } from 'react';

function Column({ title, cards }) {
  return (
    <Columns>
      <Title>
        <p>{title}</p>
      </Title>

      <Cards>
        {cards.map((card) => (
          <Card
            key={card._id}
            id={card._id}
            title={card.title}
            date={card.date}
            topic={card.topic}
          />
        ))}
      </Cards>
    </Columns>
  );
}

export default Column;
