import { Link, useNavigate } from 'react-router-dom';
import { ROUTER } from '../../router/router';
import { useContext } from 'react';
import { AuthContext, ThemeContext } from '../../context/contextApi';
import { SButton, SMail, SName, SPopUser, STheme } from './PopUser.styled';

function PopUser() {
  const { theme, toggleTheme } = useContext(ThemeContext);
  const { user } = useContext(AuthContext);
  return (
    <SPopUser
      id="user-set-target"
      style={{
        background: theme === 'light' ? '#fff' : '#202229',
        border:
          theme === 'light'
            ? '0.7px solid rgba(148, 166, 190, 0.4)'
            : '0.7px solid #4E5566',
        boxShadow:
          theme === 'light'
            ? '0px 10px 39px 0px rgba(26, 56, 101, 0.21)'
            : 'box-shadow: 0px 10px 39px 0px #94A6BE66',
      }}
    >
      <SName style={{ color: theme === 'light' ? '#000' : '#fff' }}>
        {user?.name || 'Пользователь'}
      </SName>
      <SMail>{user?.login || 'email@example.com'}</SMail>
      <STheme $theme={theme}>
        <p style={{ color: theme === 'light' ? '#000' : '#fff' }}>
          Темная тема
        </p>
        <input type="checkbox" name="checkbox" onClick={toggleTheme} />
      </STheme>
      <SButton
        style={{
          color: theme === 'light' ? '#565eef' : '#fff',
          border: theme === 'light' ? '1px solid #565eef' : '1px solid #fff',
        }}
        type="button"
      >
        <Link
          style={{ color: theme === 'light' ? '#565eef' : '#fff' }}
          to={ROUTER.popExit}
        >
          Выйти
        </Link>
      </SButton>
    </SPopUser>
  );
}

export default PopUser;
