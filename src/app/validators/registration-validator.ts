import {FormGroup, ValidationErrors} from "@angular/forms";

export function passwordValidator(group: FormGroup): ValidationErrors | null {
  const passwordValue = group.get('password')?.value;
  const passwordCheckValue = group.get('passwordCheck')?.value;
  const passwordDirty = group.get('passwordCheck')?.valid;
  const passwordCheckDirty = group.get('passwordCheck')?.valid;

  console.log(passwordDirty, 'passwordDirty');
  if (passwordDirty && passwordCheckDirty) {
    if (passwordValue === passwordCheckValue) {
      return null;
    }
    return {error: 'password not same'};
  }
  return null
}
