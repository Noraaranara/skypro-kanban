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
import { useContext } from 'react';
import { AuthContext, ThemeContext } from '../../context/contextApi';
import { toast } from 'react-toastify';

const AuthForm = ({ isSignUp, setIsAuth }) => {
  const navigate = useNavigate();
  const { login } = useContext(AuthContext);
  const { theme } = useContext(ThemeContext);

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
      toast.warning(
        'Введенные вами данные не корректны.\nЧтобы завершить регистрацию, заполните все поля в форме.',
      );
      isValid = false;
    }

    if (!formData.login.trim()) {
      newErrors.login = true;
      toast.warning(
        'Введенные вами данные не корректны.\nЧтобы завершить регистрацию, заполните все поля в форме.',
      );
      isValid = false;
    }

    if (!formData.password.trim()) {
      newErrors.password = true;
      toast.warning(
        'Введенные вами данные не корректны.\nЧтобы завершить регистрацию, заполните все поля в форме.',
      );
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
        const { password, ...safeUserData } = data;
        login(safeUserData);
        toast.success('Вы успешно вошли');
        navigate(ROUTER.main);
      }
    } catch (err) {
      toast.error(err.message);
    }
  };
  return (
    <Wrapper
      style={{
        backgroundColor: theme === 'light' ? '#eaeef6' : '#151419',
      }}
    >
      <Container>
        <Modal>
          <ModalBlock
            style={{
              backgroundColor: theme === 'light' ? '#ffffff' : '#20202C',
              border:
                theme === 'light'
                  ? '0.7px solid #d4dbe5'
                  : '0.7px solid #4E5566',
            }}
          >
            <ModalTtl
              style={{
                color: theme === 'light' ? '#000' : '#fff',
              }}
            >
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
                  $error={errors.name}
                />
              )}
              <ModalInput
                type="text"
                name="login"
                id="formlogin"
                placeholder="Эл. почта"
                value={formData.login}
                onChange={handleChange}
                $error={errors.login}
                style={{
                  color: theme === 'light' ? '#000' : '#fff',
                }}
              />
              <ModalInput
                type="password"
                name="password"
                id="formpassword"
                placeholder="Пароль"
                value={formData.password}
                onChange={handleChange}
                $error={errors.password}
              />
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
