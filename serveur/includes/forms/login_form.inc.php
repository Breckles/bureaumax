<form id="loginForm" class="active" action="serveur/scripts/connexion.php" method="POST">
  <h2 id="authDrawerTitle">Connectez-Vous</h2>
  <ul>
    <li>
      <label for="loginEmailInput">Couriel</label>
      <input id="loginEmailInput" type="email" name="courrielc" placeholder="Couriel" required>
    </li>
    <li>
      <label for="loginPasswordInput">Mot de passe</label>
      <input id="loginPasswordInput" type="password" name="passc" placeholder="Mot de passe" required>
    </li>
  </ul>
  <div class="formButtons">
    <button type="submit">Connexion</button>
    <button class="switchAuthModeButton" type="button" onclick="displayAuthForm('registrationForm')">Pas de compte? Enregistrer-vous!</button>
  </div>
</form>