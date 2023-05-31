import { ChangeEvent, FormEvent, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { AuthData } from '../../types/data';
import { AppRoute, AuthStatus } from '../../const';
import { loginAction } from '../../store/api-actions';
import UserPageLayout from '../../components/user-page-layout/user-page-layout';

function Login(): JSX.Element {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const isAuth = useAppSelector((state) => state.authorizationStatus === AuthStatus.Auth);

  const [formData, setFormData] = useState<AuthData>({
    login: '',
    password: '',
  });

  useEffect(() => {
    if (isAuth) {
      navigate(AppRoute.Main);
    }
  }, [isAuth, navigate]);

  const fieldChangeHandler = (evt: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const {name, value} = evt.target;

    if (name === 'password' && !/^(?=.*[a-zA-Z])(?=.*\d)(?=.{1,}$)/.test(value)) {
      evt.target.setCustomValidity('Пароль должен состоять минимум из одной буквы и цифры.');
    } else {
      evt.target.setCustomValidity('');
    }

    setFormData({...formData, [name]: value});
  };

  const formSubmitHandler = (evt: FormEvent<HTMLFormElement>) => {
    evt.preventDefault();
    dispatch(loginAction(formData));
  };

  return (
    <UserPageLayout title="Sign in">
      <div className="sign-in user-page__content">
        <form action="#" className="sign-in__form" onSubmit={formSubmitHandler}>
          <div className="sign-in__fields">
            <div className="sign-in__field">
              <input
                onChange={fieldChangeHandler}
                value={formData.login}
                className="sign-in__input"
                type="email"
                name="login"
                placeholder="Email"
                required
              />
              <label className="sign-in__label visually-hidden" htmlFor="user-email">Email address</label>
            </div>
            <div className="sign-in__field">
              <input
                onChange={fieldChangeHandler}
                value={formData.password}
                className="sign-in__input"
                type="password"
                name="password"
                placeholder="Password"
                minLength={2}
                required
              />
              <label className="sign-in__label visually-hidden" htmlFor="user-password">Password</label>
            </div>
          </div>
          <div className="sign-in__submit">
            <button className="sign-in__btn" type="submit">Sign in</button>
          </div>
        </form>
      </div>
    </UserPageLayout>
  );
}

export default Login;
