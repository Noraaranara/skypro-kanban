import { StyledLink, Text, Title, Wrapper } from './NotFound.styled';

const NotFound = () => {
  return (
    <Wrapper>
      <Title>404</Title>
      <Text>Страница не найдена</Text>
      <StyledLink to="/">Вернуться на главную</StyledLink>
    </Wrapper>
  );
};
export default NotFound;
