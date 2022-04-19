<form id="registrationForm" action="serveur/scripts/enregistrerMembres.php" method="POST">
  <h2 id="authDrawerTitle">Enregistrez-Vous</h2>
  <ul>
    <li class="nameInputs">
      <div>
        <label for="firstNameInput">Prenom *</label>
        <input id="firstNameInput" type="text" name="prenom" placeholder="Prenom" required>
      </div>
      <div>
        <label for="lastNameInput">Nom *</label>
        <input id="lastNameInput" type="text" name="nom" placeholder="Nom" required>
      </div>
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


    <li class="optionalInfo">
      <h3>Infos optionelles. Pour usage statistique seulement.</h3>
      <div class="optionalInputs">
        <div>
          <label for="dobInput">Date de naissance</label>
          <input id="dobInput" type="date" name="datenaissance" placeholder="ddd">
        </div>
        <fieldset>
          <legend>Sexe</legend>
          <ul class="radioGroup">
            <li>
              <input id="maleRadioInput" type="radio" name="sexe" value="M">
              <label for="maleRadioInput">Male</label>
            </li>
            <li>
              <input id="femaleRadioInput" type="radio" name="sexe" value="F">
              <label for="femaleRadioInput">Femelle</label>
            </li>
            <li>
              <input id="noAnswerInput" type="radio" name="sexe" value="NA">
              <label for="noAnswerInput">Prefere ne pas repondre</label>
            </li>
          </ul>
        </fieldset>
      </div>
    </li>

  </ul>
  <div class="formButtons">
    <button type="submit">Enregistrer</button>
    <button class="switchAuthModeButton" type="button" onclick="displayAuthForm('loginForm')">Deja un compte? Connectez-vous!</button>
  </div>
</form>