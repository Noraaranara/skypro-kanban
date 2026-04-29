function Card({ title, date, theme, topic }) {
  const themeClassMap = {
    'At home': '_orange',
    Work: '_green',
    School: '_purple',
  };

  const themeClass = themeClassMap[topic] || '_gray';

  return (
    <div className="cards__item">
      <div className="cards__card card">
        <div className="card__group">
          <div className="card__group">
            <div className={`card__theme ${themeClass}`}>
              <p className={themeClass}>{topic}</p>
            </div>
          </div>
          <a href="#popBrowse" target="_self">
            <div className="card__btn">
              <div></div>
              <div></div>
              <div></div>
            </div>
          </a>
        </div>

        <div className="card__content">
          <h3 className="card__title">{title}</h3>
          <div className="card__date">
            <p>{date}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
