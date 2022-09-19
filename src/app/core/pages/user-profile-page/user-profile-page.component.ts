import { Component, OnInit } from '@angular/core';
import {DataService} from "../../../services/data.service";

@Component({
  selector: 'app-user-profile-page',
  templateUrl: './user-profile-page.component.html',
  styleUrls: ['./user-profile-page.component.scss']
})
export class UserProfilePageComponent implements OnInit {

  constructor(private dataService: DataService) {
  }

  ngOnInit(): void {
    // this.dataService.testSubj.next(JSON.parse(localStorage.getItem('session') || '').username)
    // // this.dataService.setSelectedCardsToLocalStorage()
    // this.dataService.userSessionObs$.subscribe(data => {
    //   console.log(data, 'data hero-list (сейчас это текущая сессия)')
    // });

  }



}

