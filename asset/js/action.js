const passwordInput = document.getElementById('password');
const togglePasswordIcon = document.getElementById('togglePasswordIcon');
const togglePassword = document.querySelector('.toggle-password');

togglePassword.addEventListener('click', function() {
    const type = passwordInput.getAttribute('type') === 'password' ? 'text' : 'password';
    passwordInput.setAttribute('type', type);
    togglePasswordIcon.src = type === 'password' ? 'asset/image/invisible 1.png' : 'asset/image/visible.png'; // Thay đổi icon
    togglePasswordIcon.alt = type === 'password' ? 'Hiện mật khẩu' : 'Ẩn mật khẩu'; // Thay đổi alt text
});