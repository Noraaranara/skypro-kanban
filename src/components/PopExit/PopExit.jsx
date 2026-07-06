import { Link, useNavigate } from 'react-router-dom';
import { ROUTER } from '../../router/router';
import { useContext } from 'react';
import { AuthContext } from '../../context/contextApi';

function PopExit({ setIsAuth }) {
  const navigate = useNavigate();
  const { logout } = useContext(AuthContext);
  function handleLogout(e) {
    e.preventDefault();
    logout();
    setIsAuth(false);
    navigate(ROUTER.signIn);
  }
  return (
    <div className="pop-exit" id="popExit">
      <div className="pop-exit__container">
        <div className="pop-exit__block">
          <div className="pop-exit__ttl">
            <h2>Выйти из аккаунта?</h2>
          </div>
          <form className="pop-exit__form" id="formExit" action="#">
            <div className="pop-exit__form-group">
              <button
                onClick={handleLogout}
                className="pop-exit__exit-yes _hover01"
                type="button"
                id="exitYes"
              >
                Да, выйти
              </button>
              <button className="pop-exit__exit-no _hover03" id="exitNo">
                <Link to={ROUTER.main}>Нет, остаться</Link>
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default PopExit;
