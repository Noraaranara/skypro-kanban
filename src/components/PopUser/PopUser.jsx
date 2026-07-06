import { Link, useNavigate } from 'react-router-dom';
import { ROUTER } from '../../router/router';
import { useContext } from 'react';
import { AuthContext } from '../../context/contextApi';

function PopUser() {
  const { user } = useContext(AuthContext);
  return (
    <div className="header__pop-user-set pop-user-set" id="user-set-target">
      <p className="pop-user-set__name">{user?.name || 'Пользователь'}</p>
      <p className="pop-user-set__mail">{user?.login || 'email@example.com'}</p>
      <div className="pop-user-set__theme">
        <p>Темная тема</p>
        <input className="checkbox" type="checkbox" name="checkbox" />
      </div>
      <button type="button" className="_hover03">
        <Link to={ROUTER.popExit}>Выйти</Link>
      </button>
    </div>
  );
}

export default PopUser;
