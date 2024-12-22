const signinForm = document.getElementById('signin-form');
const URL = 'http://localhost:3000/users';

signinForm.addEventListener('submit', async (event) => {
  event.preventDefault();

  const email = document.querySelector('.input-email').value;
  const password = document.querySelector('.input-password').value;

  try {
    console.log('Проверяем введенные данные:', { email, password });
    console.log('Запрашиваем данные с сервера...');
    
    const response = await fetch(URL, { method: 'GET' });

    if (!response.ok) {
      throw new Error(`Ошибка: ${response.status}`);
    }

    const users = await response.json();
    console.log('Полученные данные:', users);

    const user = users.find((u) => u.email === email && u.password === password);

    if (user) {
      console.log('Пользователь найден:', user);
      localStorage.setItem('loggedInUser', JSON.stringify(user));
      alert('Вход выполнен успешно!');
      window.location.href = './user.html';
    } else {
      alert('Неверный email или пароль. Попробуйте еще раз.');
    }
  } catch (error) {
    console.error('Ошибка входа:', error);
    alert('Не удалось войти. Проверьте консоль для получения дополнительных сведений.');
  }
});
