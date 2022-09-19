import { Component, OnInit } from '@angular/core';
import {DataService} from "../../../../services/data.service";
import {Router} from "@angular/router";

import {HeroInfo} from "../../../../interfaces/hero-info";

@Component({
  selector: 'app-heroes-list',
  templateUrl: './heroes-list.component.html',
  styleUrls: ['./heroes-list.component.scss']
})
export class HeroesListComponent implements OnInit {
  public heroes: any[] = [];
  public usersFlag!: boolean;
  public usersBattleFlag = false;
  constructor(private dataService: DataService, private router: Router) { }

  ngOnInit(): void {
    // this.dataService.testSubj.next(JSON.parse(localStorage.getItem('session') || '').username)

    this.heroes = JSON.parse(localStorage.getItem('session') || '') .history
    this.usersFlag = this.heroes.length === 0;
    this.dataService.testSubj.next({name: 123})
  }

  public navigateToHome() {
    this.router.navigate(['/home'])
  }

 public selectForBattle(card: HeroInfo): void {
    this.dataService.setHeroForBattleInLocalStorage(card)
  }

 public selectForBattleFlag(): void {
    this.usersBattleFlag = !this.usersBattleFlag
  }
}
