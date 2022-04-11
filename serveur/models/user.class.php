<?php
class User
{
  public function __construct(
    public string $first_name = '',
    public string $last_name = '',
    public string $email_name = '',
    public string $dob = '',
    public string $gender = '',
  ) {
  }
}
