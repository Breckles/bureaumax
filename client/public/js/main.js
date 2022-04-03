const siteBackdropId = 'siteBackdrop';
let openSideDrawerId = null;

let displayedAuthFormId = 'loginForm';

const openSideDrawer = (id) => {
  const sideDrawer = document.getElementById(id);

  if (!!sideDrawer) {
    sideDrawer.classList.add('open');
    openSideDrawerId = id;
    document.getElementById(siteBackdropId).classList.add('visible');
  }
};

const closeSideDrawer = () => {
  if (openSideDrawerId !== null) {
    document.getElementById(openSideDrawerId).classList.remove('open');
    openSideDrawerId = null;
    document.getElementById(siteBackdropId).classList.remove('visible');
  }
};

const displayAuthForm = (id) => {
  const authForm = document.getElementById(id);

  if (!!authForm) {
    document.getElementById(displayedAuthFormId).classList.remove('active');
    authForm.classList.add('active');
    displayedAuthFormId = id;
  }
};

const validatePasswordMatch = () => {
  const pwInput = document.getElementById('registerPasswordInput');
  const confirmPWInput = document.getElementById('confirmPasswordInput');

  confirmPWInput.setCustomValidity('');
  console.log(pwInput.value);
  console.log(confirmPWInput.value);

  if (pwInput.value !== confirmPWInput.value) {
    confirmPWInput.setCustomValidity(
      'Les mots de passes doivent etre identiques.'
    );
  }
};

const logout = () => {
  fetch('serveur/scripts/deconnecter.php', { method: 'POST' });
};
