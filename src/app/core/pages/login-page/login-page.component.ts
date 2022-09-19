import {Component, OnInit,} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";
import {DataService} from "../../../services/data.service";
import {UserData} from "../../../interfaces/user-data";


@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent implements OnInit {

  public logInGroup!: FormGroup;
  public userFlag!: string;
  public welcomeMessage!: string;
  public sessionUser!: string;
  public fakeJson: string = JSON.stringify('fake');


  constructor(private fb: FormBuilder, private router: Router, private dataService: DataService,) {
  }

  ngOnInit(): void {
    this.initializeControls();
    // this.registrationGroup.valueChanges.subscribe(() => {
    //   console.log(this.registrationGroup, 'FORM UPDATED')
    // });
  }

  public login(): void {
    const registeredUser = JSON.parse
    (
      localStorage.getItem(this.logInGroup.get('email')?.value) || /* Поле 'email' в моём случае является ключом объекта в localStorage */
      this.fakeJson    /* тут я парсю ИЛИ фэйковый JSON для обхода ошибок */
    );
    const userEmail = this.logInGroup.get('email')?.value;
    const userPassword = this.logInGroup.get('password')?.value;
    if (this.logInGroup.valid) {
      if (userEmail === registeredUser['email'] &&
        userPassword === registeredUser['password']) {
        this.dataService.setUserSession = registeredUser;
        // console.log(registeredUser, 'registeredUser in login 1st init in login-page App');
        // this.dataService.userNameSub.next(registeredUser.username)
        this.welcomeStack(registeredUser['username']);

      }
      this.setUserFlag();
    }
  };

  public initializeControls(): void {
    this.logInGroup = this.fb.group({
      email: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required]),
    },);
  }

  private setUserFlag(): void {
    this.userFlag = 'ТАКОГО ЮЗЕРА НЕ СУЩЕСТВУЕТ!';
    setTimeout(() => {
      this.userFlag = '';
    }, 4000);
  }

  private welcomeStack(userName: string): void {
    this.welcomeMessage = `WELCOME, ${userName}!`;
    setTimeout(() => {
      this.router.navigate(['/home']);
      this.welcomeMessage = '';
    }, 3000);
  }

  // public showCurrent(): void{
  //   const userName = this.logInGroup.get('email')?.value;
  //
  //   console.log(localStorage.getItem(userName), 'СОВПАДНИЕ ЮЗЕРОВ');
  // }

}
