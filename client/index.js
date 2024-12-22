const form = document.getElementById('form');
const URL = 'http://localhost:3000/users';

form.addEventListener('submit', async (event) => {
  event.preventDefault();

  const email = document.querySelector('.input-email').value;
  const password = document.querySelector('.input-password').value;
  const confirmPassword = document.querySelector('.input-confirm-password').value;

  if (password !== confirmPassword) {
    alert('Пароли не совпадают!');
    return;
  }

  const registrationDate = new Date().toISOString().split('T')[0];

  try {
    console.log('Регистрация пользователя:', { email, password, registrationDate });

    const response = await fetch(URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email,
        password,
        registrationDate,
      }),
    });

    if (!response.ok) {
      throw new Error(`Ошибка: ${response.status}`);
    }

    alert('Регистрация успешна! Перенаправляем на страницу входа...');
    window.location.href = 'signin.html';
  } catch (error) {
    console.error('Ошибка регистрации:', error);
    alert('Не удалось зарегистрироваться. Пожалуйста, попробуйте еще раз.');
  }
});
