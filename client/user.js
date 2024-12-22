document.addEventListener('DOMContentLoaded', () => {
    const user = JSON.parse(localStorage.getItem('loggedInUser'));
  
    if (!user) {
      alert('Вы не авторизованы!');
      window.location.href = 'signin.html';
      return;
    }
  
    document.getElementById('user-email').textContent = user.email;
    document.getElementById('user-registration-date').textContent = user.registrationDate;
  });
  