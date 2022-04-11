<form id="registrationForm" action="serveur/scripts/enregistrerMembres.php" method="POST">
  <h2 id="authDrawerTitle">Enregistrez-Vous</h2>
  <ul>
    <li>
      <label for="firstNameInput">Prenom *</label>
      <input id="firstNameInput" type="text" name="prenom" placeholder="Prenom" required>
    </li>
    <li>
      <label for="lastNameInput">Nom *</label>
      <input id="lastNameInput" type="text" name="nom" placeholder="Nom" required>
    </li>
    <li>
      <label for="registerEmailInput">Couriel *</label>
      <input id="registerEmailInput" type="email" name="courriel" placeholder="Couriel" required>
    </li>
    <li>
      <label for="registerPasswordInput">Mot de passe *</label>
      <input id="registerPasswordInput" type="password" name="pass" placeholder="Mot de passe" pattern="^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,10}$" required>
    </li>
    <li>
      <label for="confirmPasswordInput">Confirmer mot de passe *</label>
      <input id="confirmPasswordInput" type="password" onkeyup="validatePasswordMatch()" placeholder="Mot de passe" required>
    </li>
    <li>
      <label for="dobInput">Date de naissance (Optionel. Pour usage statistique seulement.)</label>
      <input id="dobInput" type="date" name="datenaissance" placeholder="ddd">
    </li>
    <li>
      <fieldset>
        <legend>Sexe (Optionel. Pour usage statistique seulement.)</legend>
        <ul class="radioGroup">
          <li>
            <label for="maleRadioInput">Male</label>
            <input id="maleRadioInput" type="radio" name="sexe" value="M">
          </li>
          <li>
            <label for="femaleRadioInput">Femelle</label>
            <input id="femaleRadioInput" type="radio" name="sexe" value="F">
          </li>
          <li>
            <label for="noAnswerInput">Prefere ne pas repondre</label>
            <input id="noAnswerInput" type="radio" name="sexe" value="NA">
          </li>
        </ul>
      </fieldset>
    </li>
  </ul>
  <div class="formButtons">
    <button type="submit">Enregistrer</button>
    <button class="switchAuthModeButton" type="button" onclick="displayAuthForm('loginForm')">Deja un compte? Connectez-vous!</button>
  </div>
</form>