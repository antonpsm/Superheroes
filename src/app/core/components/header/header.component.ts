import {AfterViewInit, Component, Input, OnInit} from '@angular/core';
import {DataService} from "../../../services/data.service";
import {UserData} from "../../../interfaces/user-data";
import {Subject} from "rxjs";
import {Router} from "@angular/router";
import {core} from "@angular/compiler";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  public user: string = 'User';
  public userName!: string;
  @Input() userNameInput = 'user';

  constructor(private dataService: DataService, private router: Router) {

  }

  ngOnInit(): void {
    // this.userNameInput = this.dataService.getSessionUser;
    this.dataService.userNameObs$.subscribe(data => this.userName = data);
  }



  public navigateToUserProfile(): void {
    this.dataService.userSessionSub.next(JSON.parse(localStorage.getItem('session') || ''));
    this.router.navigate(['/user-profile']);
  }

 public navigateToBattlePage(): void {
    this.router.navigate(['/battle'])
  }
}
