import Card from '../Card/Card';

function Column({ title, cards }) {
  return (
    <div className="main__column">
      <div className="column__title">
        <p>{title}</p>
      </div>

      <div className="cards">
        {cards.map((card, index) => (
          <Card
            key={card.id}
            title={card.title}
            date={card.date}
            theme={card.theme}
            topic={card.theme}
          />
        ))}
      </div>
    </div>
  );
}

export default Column;
