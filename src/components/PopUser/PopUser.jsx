import { Link } from 'react-router-dom';
import { ROUTER } from '../../router/router';

function PopUser() {
  return (
    <div className="header__pop-user-set pop-user-set" id="user-set-target">
      <p className="pop-user-set__name">Ivan Ivanov</p>
      <p className="pop-user-set__mail">ivan.ivanov@gmail.com</p>
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
