import { useState } from 'react';
import PopUser from '../PopUser/PopUser';
import {
  Block,
  Btn,
  Container,
  HeaderEl,
  Logo,
  Nav,
  SUser,
} from './Header.styled';
import { Link } from 'react-router-dom';
import { ROUTER } from '../../router/router';
import { useContext } from 'react';
import { AuthContext, ThemeContext } from '../../context/contextApi';

function Header({ setIsAuth }) {
  const [open, setOpen] = useState(false);
  const { user } = useContext(AuthContext);
  const { theme } = useContext(ThemeContext);
  return (
    <HeaderEl style={{ background: theme === 'light' ? '#f0f0f0' : '#222' }}>
      <Container>
        <Block>
          <Logo>
            <a href="" target="_self">
              {theme === 'light' ? (
                <img src="images/logo.png" alt="logo" />
              ) : (
                <img src="images/logo_dark.png" alt="logo" />
              )}
            </a>
          </Logo>
          <Nav>
            <Btn id="btnMainNew">
              <Link to={ROUTER.newCard}>Создать новую задачу</Link>
            </Btn>
            <SUser
              style={{
                color: theme === 'light' ? '#565eef' : '#fff',
                borderLeftColor: theme === 'light' ? '#565eef' : '#fff',
                borderBottomColor: theme === 'light' ? '#565eef' : '#fff',
              }}
              onClick={() => setOpen(!open)}
            >
              {user?.name || 'Пользователь'}
            </SUser>
            {open && <PopUser />}
          </Nav>
        </Block>
      </Container>
    </HeaderEl>
  );
}

export default Header;
