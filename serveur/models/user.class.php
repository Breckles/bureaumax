<?php
class User
{
  public int $idm;
  public string $prenom;
  public string $nom;
  public string $courriel;
  public ?string $datenaissance;
  public ?string $sexe;
  public ?string $role;

  public function print()
  {
    echo
    "id: $this->idm
    first name: $this->prenom
    last name: $this->nom
    email: $this->courriel
    date of birth: $this->datenaissance
    gender: $this->sexe";
  }
}
