import { Link, useNavigate } from 'react-router-dom';
import { ROUTER } from '../../router/router';
import { useContext } from 'react';
import { AuthContext, ThemeContext } from '../../context/contextApi';
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
  const { theme } = useContext(ThemeContext);
  return (
    <SExit id="popExit">
      <SContainer>
        <SBlock
          style={{
            background: theme === 'light' ? '#ffffff' : '#20202C',
            border:
              theme === 'light' ? '0.7px solid #d4dbe5' : '0.7px solid #4E5566',
          }}
        >
          <STitle
            style={{
              color: theme === 'light' ? '#000' : '#fff',
            }}
          >
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
