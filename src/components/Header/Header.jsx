import { useState } from 'react';
import PopUser from '../PopUser/PopUser';
import {
  Block,
  Btn,
  Container,
  HeaderEl,
  Logo,
  Nav,
  User,
} from './Header.styled';
import { Link } from 'react-router-dom';
import { ROUTER } from '../../router/router';

function Header() {
  const [open, setOpen] = useState(false);
  return (
    <HeaderEl>
      <Container>
        <Block>
          <Logo>
            <a href="" target="_self">
              <img src="images/logo.png" alt="logo" />
            </a>
          </Logo>
          <Logo $dark>
            <a href="" target="_self">
              <img src="images/logo_dark.png" alt="logo" />
            </a>
          </Logo>
          <Nav>
            <Btn id="btnMainNew">
              <Link to={ROUTER.newCard}>Создать новую задачу</Link>
            </Btn>
            <User href="#" onClick={() => setOpen(!open)}>
              Ivan Ivanov
            </User>
            {open && <PopUser />}
          </Nav>
        </Block>
      </Container>
    </HeaderEl>
  );
}

export default Header;
