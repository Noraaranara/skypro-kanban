import Card from "../Card/Card"

function Column({ title, cards }) {
    return (
        <div className="main__column">
            <div className="column__title">
                <p>{title}</p>
            </div>

            <div className="cards">
                {cards.map((card, index) => (
                <Card
                    key={index}
                    title={card.title}
                    date={card.date}
                    theme={card.theme}
                    name={card.name}
                />
                ))}
            </div>
        </div>
    )
}

export default Column