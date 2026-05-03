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
          <a href="#popBrowse" target="_self">
            <Btn>
              <div></div>
              <div></div>
              <div></div>
            </Btn>
          </a>
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
