import { Link, useParams } from 'react-router-dom';
import { ROUTER } from '../../router/router';
import {
  Item,
  Cards,
  Group,
  Theme,
  Btn,
  Content,
  Title,
  DateText,
} from './Card.styled';
import { useMemo } from 'react';
import cardList from '../../data';
import { useContext } from 'react';
import { ThemeContext } from '../../context/contextApi';

function Card({ id, title, date, topic }) {
  const themeClassMap = {
    'Web Design': '_orange',
    Research: '_green',
    Copywriting: '_purple',
  };

  const formattedDate = new Date(date).toLocaleDateString('ru-RU');

  const themeClass = themeClassMap[topic] || '_gray';

  const { theme } = useContext(ThemeContext);

  return (
    <Item>
      <Cards style={{ background: theme === 'light' ? '#fff' : '#20202C' }}>
        <Group>
          <Group>
            <Theme $themeType={themeClass}>
              <p>{topic}</p>
            </Theme>
          </Group>
          <Link to={`${ROUTER.popCard}${id}`} target="_self">
            <Btn>
              <div></div>
              <div></div>
              <div></div>
            </Btn>
          </Link>
        </Group>

        <Content>
          <Title style={{ color: theme === 'light' ? '#000000' : '#fff' }}>
            {title}
          </Title>
          <DateText>
            <p>{formattedDate}</p>
          </DateText>
        </Content>
      </Cards>
    </Item>
  );
}

export default Card;
