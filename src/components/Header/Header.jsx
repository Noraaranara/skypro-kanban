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
              <a href="#popNewCard">Создать новую задачу</a>
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
