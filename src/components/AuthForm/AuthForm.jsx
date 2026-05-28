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
import { useState } from 'react';
import { signIn, signUp } from '../../services/auth';

const AuthForm = ({ isSignUp, setIsAuth }) => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: '',
    login: '',
    password: '',
  });

  const [errors, setErrors] = useState({
    name: '',
    login: '',
    password: '',
  });

  const [error, setError] = useState('');

  const validateForm = () => {
    const newErrors = { name: '', login: '', password: '' };
    let isValid = true;

    if (isSignUp && !formData.name.trim()) {
      newErrors.name = true;
      setError('Заполните все поля');
      isValid = false;
    }

    if (!formData.login.trim()) {
      newErrors.login = true;
      setError('Заполните все поля');
      isValid = false;
    }

    if (!formData.password.trim()) {
      newErrors.password = true;
      setError('Заполните все поля');
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
    setErrors({ ...errors, [name]: false });
    setError('');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) {
      return;
    }
    try {
      const data = !isSignUp
        ? await signIn({ login: formData.login, password: formData.password })
        : await signUp(formData);

      if (data) {
        setIsAuth(true);
        const { password, ...safeUserData } = data;
        localStorage.setItem('userInfo', JSON.stringify(safeUserData));
        navigate(ROUTER.main);
      }
    } catch (err) {
      setError(err.message);
    }
  };
  return (
    <Wrapper>
      <Container>
        <Modal>
          <ModalBlock>
            <ModalTtl>
              <h2>{isSignUp ? 'Регистрация' : 'Вход'}</h2>
            </ModalTtl>
            <ModalFormLogin id="formLogIn" action="#" onSubmit={handleSubmit}>
              {isSignUp && (
                <ModalInput
                  type="text"
                  name="name"
                  id="name"
                  placeholder="Имя"
                  value={formData.name}
                  onChange={handleChange}
                />
              )}
              <ModalInput
                type="text"
                name="login"
                id="formlogin"
                placeholder="Эл. почта"
                value={formData.login}
                onChange={handleChange}
              />
              <ModalInput
                type="password"
                name="password"
                id="formpassword"
                placeholder="Пароль"
                value={formData.password}
                onChange={handleChange}
              />
              <p style={{ color: 'red' }}>{error}</p>
              <ModalBtnEnter>
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
