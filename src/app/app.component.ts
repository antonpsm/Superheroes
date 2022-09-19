import {AfterViewInit, Component, OnInit} from '@angular/core';
import {DataService} from "./services/data.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, AfterViewInit {
  public title = 'superheroes';
  public userSession = false;
  public bul = false;
  public userName: string = '';


  constructor(private dataService: DataService) {
  }

  ngAfterViewInit() {


  }

  ngOnInit() {
    this.dataService.userNameObs$.subscribe(data => this.userName = data);
    this.dataService.testObs$.subscribe(data => this.userSession = !!data);

  }


  public logOut(): void {
    this.dataService.logOutSaveUserDataInLocalStorage(this.userName);
  }

}
