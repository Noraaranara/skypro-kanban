import { Link } from 'react-router-dom';
import { ROUTER } from '../../router/router';
import {
  Item,
  Cards,
  Group,
  Theme,
  Btn,
  Content,
  Title,
  Date,
} from './Card.styled';

function Card({ title, date, theme, topic }) {
  const themeClassMap = {
    'At home': '_orange',
    Work: '_green',
    School: '_purple',
  };

  const themeClass = themeClassMap[topic] || '_gray';

  return (
    <Item>
      <Cards>
        <Group>
          <Group>
            <Theme $themeType={topic}>
              <p>{topic}</p>
            </Theme>
          </Group>
          <Link to={ROUTER.popCard} target="_self">
            <Btn>
              <div></div>
              <div></div>
              <div></div>
            </Btn>
          </Link>
        </Group>

        <Content>
          <Title>{title}</Title>
          <Date>
            <p>{date}</p>
          </Date>
        </Content>
      </Cards>
    </Item>
  );
}

export default Card;
