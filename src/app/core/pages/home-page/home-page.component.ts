import {Component, OnDestroy, OnInit} from '@angular/core';
import {DataService} from "../../../services/data.service";
import {HeroesService} from "../../../services/heroes.service";
import {PayloadAllHeroes} from "../../../interfaces/payload-all-heroes";
import {HeroInfo} from "../../../interfaces/hero-info";
import {FormControl} from "@angular/forms";
import {Router} from "@angular/router";

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit, OnDestroy {

  public heroes: any[] = [];
  public searchControl = new FormControl();
  public heroCounter!: number;
  public openAlphabetFlag = false;
  public alphabetLetters: string[] = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];



  constructor(private dataService: DataService,
              private heroesService: HeroesService,
              private router: Router,
  ) {
  }

  ngOnInit(): void {
    // this.heroesService.getAllHeroes().subscribe((data:PayloadAllHeroes) => {
    //   this.heroes = data.results
    // });
    // this.dataService.loadHeaderFlag.next(true)
    // this.dataService.testSubj.next(JSON.parse(localStorage.getItem('session') || '').username)
  }

  ngOnDestroy(): void {
    this.dataService.userSessionSub.complete()
  }

  // ngAfterViewInit(): void {
  //   this.dataService.userNameSub.complete();
  // }

  public search(): void {
    if (this.searchControl.value) {
      this.heroesService.setHeroByName(this.searchControl.value).subscribe((data: PayloadAllHeroes) => {
        this.heroes = data.results;
        this.heroCounter = this.heroes.length;
      });
    }
  }

  public searchHeroByLetter(letter: string): void {
    this.heroesService.setHeroByName(letter).subscribe((data: PayloadAllHeroes) => {
      this.heroes = data.results;
      this.heroCounter = this.heroes.length;
    });
  }

  public navigateToInfoPage(hero: HeroInfo): void {
    if (hero.id) {
      this.router.navigate(['/hero-info', hero.id]);
    }
  }

  public selectHero(card: HeroInfo) {
  this.dataService.selectAndAddHeroToSession(card)
  }
}
