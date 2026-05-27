import { Link, useNavigate } from 'react-router-dom';
import {
  Wrapper,
  Container,
  Modal,
  ModalBlock,
  ModalTtl,
  ModalFormLogin,
  ModalInput,
  ModalBtnEnter,
  ModalFormGroup,
} from './AuthForm.styled';
import { ROUTER } from '../../router/router';

const AuthForm = ({ isSignUp, setIsAuth }) => {
  const navigate = useNavigate();
  const handleLogin = (e) => {
    e.preventDefault();
    setIsAuth(true);
    navigate(ROUTER.main);
  };
  return (
    <Wrapper>
      <Container>
        <Modal>
          <ModalBlock>
            <ModalTtl>
              <h2>{isSignUp ? 'Регистрация' : 'Вход'}</h2>
            </ModalTtl>
            <ModalFormLogin id="formLogIn" action="#">
              {isSignUp && (
                <ModalInput
                  type="text"
                  name="first-name"
                  id="first-name"
                  placeholder="Имя"
                />
              )}
              <ModalInput
                type="text"
                name="login"
                id="formlogin"
                placeholder="Эл. почта"
              />
              <ModalInput
                type="password"
                name="password"
                id="formpassword"
                placeholder="Пароль"
              />
              <ModalBtnEnter onClick={handleLogin}>
                {isSignUp ? 'Зарегистрироваться' : 'Войти'}
              </ModalBtnEnter>
              {!isSignUp && (
                <ModalFormGroup>
                  <p>Нужно зарегистрироваться?</p>
                  <Link to={ROUTER.signUp}>Регистрируйтесь здесь</Link>
                </ModalFormGroup>
              )}
              {isSignUp && (
                <ModalFormGroup>
                  <p>
                    Уже есть аккаунт?
                    <Link to={ROUTER.signIn}> Войдите здесь</Link>
                  </p>
                </ModalFormGroup>
              )}
            </ModalFormLogin>
          </ModalBlock>
        </Modal>
      </Container>
    </Wrapper>
  );
};
export default AuthForm;
