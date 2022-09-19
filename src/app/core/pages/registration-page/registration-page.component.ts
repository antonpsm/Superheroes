import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {RegExpService} from "../../../services/reg-exp.service";
import {DataService} from "../../../services/data.service";
import {passwordValidator} from "../../../validators/registration-validator";
import {emailValidator} from "../../../validators/email-validator";
import {Router} from "@angular/router";

@Component({
  selector: 'app-registration-page',
  templateUrl: './registration-page.component.html',
  styleUrls: ['./registration-page.component.scss']
})
export class RegistrationPageComponent implements OnInit {

  public registrationGroup!: FormGroup;

  constructor(private fb: FormBuilder,
              private regExpService: RegExpService, private dataService: DataService,
              private router: Router) {
  }

  ngOnInit(): void {
    this.initializeControls();
  }

  public registration(): void {
    const payload = {
      email: this.registrationGroup.get('email')?.value,
      password: this.registrationGroup.get('password')?.value,
      username: this.registrationGroup.get('username')?.value,
      historyBattles: [],
      favoriteHeroes: [],
      perks: [5,5,5,5,5,5],
      dateOfLogin: ''
    };
    if (this.registrationGroup.valid) {
      const registeredUser = JSON.stringify(payload);
      this.dataService.setNewUser(registeredUser, this.registrationGroup.get('email')?.value,);
      this.router.navigate(['/login']);
    }
  }

  public initializeControls(): void {
    this.registrationGroup = this.fb.group({
      email: new FormControl('', [Validators.required,
        Validators.pattern(this.regExpService.EMAIL_PATTERN)]),

      password: new FormControl('', [Validators.required,
        Validators.pattern(this.regExpService.PASSWORD_PATTERN)]),

      passwordCheck: new FormControl('', [Validators.required]),
      username: new FormControl('', [Validators.required])
    }, {validators: [passwordValidator, emailValidator]});
  }

}

