import {FormGroup, ValidationErrors} from "@angular/forms";

export function emailValidator(group: FormGroup): ValidationErrors | null {
  const email = group.get('email')?.value;
  const emailCheck = localStorage.getItem(email)

  if (emailCheck === null) {
    return null
  }
  return {emailError: ('такой пользователь уже зарегистрирован')}
}
