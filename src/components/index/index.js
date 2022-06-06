import '@components/index/index.scss';

import '@components/input/input.js';
import '@components/checkbox/checkbox.js';
import '@components/button/button.js';
import '@components/footer/footer.js';

const linkSignIn = document.querySelector('.sign-in__link');
const linkSignUp = document.querySelector('.sign-up__link');

const overlay = document.querySelector('.auth__overlay');

linkSignUp.addEventListener('click', () => {
	overlay.classList.remove("auth__overlay--active");
});

linkSignIn.addEventListener('click', () => {
	overlay.classList.add("auth__overlay--active");
});
