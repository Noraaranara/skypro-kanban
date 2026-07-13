import { Link, useNavigate } from 'react-router-dom';
import { ROUTER } from '../../router/router';
import { useContext } from 'react';
import { AuthContext } from '../../context/contextApi';
import {
  SBlock,
  SContainer,
  SExit,
  SForm,
  SGroup,
  SNo,
  STitle,
  SYes,
} from './PopExit.styled';

function PopExit() {
  const navigate = useNavigate();
  const { logout } = useContext(AuthContext);
  function handleLogout(e) {
    e.preventDefault();
    logout();
    navigate(ROUTER.signIn);
  }
  return (
    <SExit id="popExit">
      <SContainer>
        <SBlock>
          <STitle>
            <h2>Выйти из аккаунта?</h2>
          </STitle>
          <SForm>
            <SGroup>
              <SYes onClick={handleLogout} type="button" id="exitYes">
                Да, выйти
              </SYes>
              <SNo id="exitNo">
                <Link to={ROUTER.main}>Нет, остаться</Link>
              </SNo>
            </SGroup>
          </SForm>
        </SBlock>
      </SContainer>
    </SExit>
  );
}

export default PopExit;
