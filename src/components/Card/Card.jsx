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
  Date,
} from './Card.styled';
import { useMemo } from 'react';
import cardList from '../../data';

function Card({ id, title, date, topic }) {
  const themeClassMap = {
    'Web Design': '_orange',
    Research: '_green',
    Copywriting: '_purple',
  };

  const themeClass = themeClassMap[topic] || '_gray';

  return (
    <Item>
      <Cards>
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
