import Card from '../Card/Card';
import { Cards, Columns, Title } from './Column.styled';

function Column({ title, cards }) {
  return (
    <Columns>
      <Title>
        <p>{title}</p>
      </Title>

      <Cards>
        {cards.map((card, index) => (
          <Card
            key={card.id}
            title={card.title}
            date={card.date}
            theme={card.theme}
            topic={card.theme}
          />
        ))}
      </Cards>
    </Columns>
  );
}

export default Column;
