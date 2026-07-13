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
              <svg
                width="8"
                height="5"
                viewBox="0 0 8 5"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                style={{
                  transform: open ? 'rotate(180deg)' : 'rotate(0deg)',
                  transition: 'transform 0.3s ease',
                }}
              >
                <path
                  d="M1.08955 0.184627C0.840306 -0.0615423 0.437472 -0.0615423 0.188227 0.184627C-0.0627424 0.432499 -0.0627423 0.835681 0.188227 1.08355L2.87162 3.73384C3.35849 4.2147 4.14151 4.2147 4.62838 3.73384L7.31177 1.08355C7.56274 0.835681 7.56274 0.4325 7.31177 0.184627C7.06253 -0.0615419 6.65969 -0.0615425 6.41045 0.184627L3.75 2.81225L1.08955 0.184627Z"
                  style={{
                    fill: theme === 'light' ? '#565EEF' : '#fff',
                  }}
                />
              </svg>
            </SUser>
            {open && <PopUser />}
          </Nav>
        </Block>
      </Container>
    </HeaderEl>
  );
}

export default Header;
