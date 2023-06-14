import { ChangeEvent, FormEvent, useState } from 'react';
import { useAppDispatch } from '../../hooks';
import { AuthData } from '../../types/data';
import { loginAction } from '../../store/api-actions';

function LoginForm(): JSX.Element {
  const dispatch = useAppDispatch();

  const [formData, setFormData] = useState<AuthData>({
    login: '',
    password: '',
  });

  const hanldeFieldChange = (evt: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const {name, value} = evt.target;

    if (name === 'password' && !/^(?=.*[a-zA-Z])(?=.*\d)(?=.{1,}$)/.test(value)) {
      evt.target.setCustomValidity('Пароль должен состоять минимум из одной буквы и цифры.');
    } else {
      evt.target.setCustomValidity('');
    }

    setFormData({...formData, [name]: value});
  };

  const hanldeFormSubmit = (evt: FormEvent<HTMLFormElement>) => {
    evt.preventDefault();
    dispatch(loginAction(formData));
  };

  return (
    <form action="#" className="sign-in__form" onSubmit={hanldeFormSubmit}>
      <div className="sign-in__fields">
        <div className="sign-in__field">
          <input
            onChange={hanldeFieldChange}
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
            onChange={hanldeFieldChange}
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
  );
}

export default LoginForm;
