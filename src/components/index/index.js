import '@components/index/index.scss';

import '@components/input/input.js';
import '@components/checkbox/checkbox.js';
import '@components/button/button.js';
import '@components/footer/footer.js';

const linkAuth = document.querySelectorAll('.auth__link a');

const sectionSignIn = document.querySelector('.sign-in');
const sectionSignUp = document.querySelector('.sign-up');

const overlay = document.querySelector('.auth__overlay');

Array.from(linkAuth).map(item => {
	item.addEventListener('click', () => {
		overlay.classList.toggle("auth__overlay--active");
		sectionSignIn.classList.toggle("sign-in--disabled");
		sectionSignUp.classList.toggle("sign-up--disabled");
	});
})
