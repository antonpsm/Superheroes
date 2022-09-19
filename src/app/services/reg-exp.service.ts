import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RegExpService {

  public PASSWORD_PATTERN = new RegExp("^(?=.*\\S)(?=.*[a-z])(?=.*[A-Z])(?=.*\\d.*\\d.*\\d)(?=.*[@$!%*?&#№<>()=+])[A-Za-z\\d@$!#№<>()=+%*?&]+$");
  public EMAIL_PATTERN = new RegExp("^(([^<>()[\\]\\\\.,;:\\s@\"]+(\\.[^<>()[\\]\\\\.,;:\\s@\"]+)*)|(\".+\"))@((\\[[0-9]{1,3}\\.[0-9]{1,3}\\.[0-9]{1,3}\\.[0-9]{1,3}\\])|(([a-zA-Z\\-0-9]+\\.)+[a-zA-Z]{2,}))$")

  constructor() { }
}
