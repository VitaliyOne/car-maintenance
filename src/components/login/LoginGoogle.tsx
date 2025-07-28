import { useGoogleLogin } from '@react-oauth/google';
import { useNavigate } from 'react-router-dom';
import MyButton from '../UI/button/MyButton';

const LoginGoogle = () => {
  const navigate = useNavigate();
  const login = useGoogleLogin({
    onSuccess: async (tokenResponse) => {
      try {
        const response = await fetch('/api/auth/google', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({ token: tokenResponse.access_token }) // либо `tokenResponse.code` если используете authorization code flow
        });

        if (!response.ok) {
          throw new Error('Ошибка от сервера при авторизации');
        }

        const data = await response.json();
        console.log(' Успешная авторизация:', data);

        localStorage.setItem('token', data.access_token);

        // TODO: dispatch, redirect или иная логика после авторизации
      } catch (error) {
        console.error('Ошибка при отправке токена:', error);
      }
    },
    onError: () => {
      console.error(' Ошибка при входе через Google');
    },
    flow: 'implicit' // или 'auth-code' — зависит от backend-реализации
  });

  return (
    <div className="">
      <MyButton onClick={() => login()}>Войти с аккаунтом Google</MyButton>
      <MyButton onAbort={() => navigate('/')}>Назад</MyButton>
    </div>
  );
};

export default LoginGoogle;
