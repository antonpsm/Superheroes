import {Component, OnDestroy, OnInit} from '@angular/core';
import {DataService} from "../../../services/data.service";
import {interval, Subject, takeWhile} from "rxjs";
import {HeroesService} from "../../../services/heroes.service";
import {Router} from "@angular/router";


@Component({
  selector: 'app-battle-page',
  templateUrl: './battle-page.component.html',
  styleUrls: ['./battle-page.component.scss']
})
export class BattlePageComponent implements OnInit, OnDestroy {

  public hero: any[] = [];
  public enemyHero: any[] = [];
  public enemyHeroFlag = false; // флаг на появление карты противика
  public stopSearchFlag = false;
  public findEnemyFlag = true;
  public findEnemyIsFinishedFlag = false;
  public startBattleFlag = false;
  public looseFlag = false;
  public transitionCounter: number = 34;
  public resultOfBattleText: string = '';
  private stopSearchSud$: Subject<any> = new Subject<any>();
  private transitionCounterStop = true;
  public intelligenceController!: number;
  public strengthController!: number;
  public speedController!: number;
  public durabilityController!: number;
  public powerController!: number;
  public combatController!: number;

  constructor(
    private dataService: DataService,
    private heroService: HeroesService,
    private router: Router,
  ) {
  }

  ngOnInit(): void {
    this.hero = [...this.hero, JSON.parse(localStorage.getItem(
      'sessionBattleCard') || '')
    ];
    this.looseFlag = false;
    this.deleteLooseHeroFromLocalStorage();
    this.initPowerstatsControllersFromSubscribe();

  }

  ngOnDestroy(): void {
    this.stopSearchSud$.complete();
    this.enemyHero = [];
    this.startBattleFlag = false;
  }

  public findEnemy(): void {
    this.stopSearchFlag = true;
    this.findEnemyFlag = false;
    this.resultOfBattleText = '';
    interval(50).pipe(
      takeWhile((val) => val <= 7)
    ).subscribe((val) => {
      this.transitionCounter = this.transitionCounter - val;
    });

    const stopTimeout: any = setTimeout(() => {
        this.stopSearchFlag = false;
      }, 3000,
      this.stopSearchSud$.subscribe(data => {
        data ? clearTimeout(stopTimeout) : null;
      }));

    const findTimeout: any = setTimeout(() => {
        this.getRandomEnemy();
        this.enemyHeroFlag = true;
        this.findEnemyIsFinishedFlag = true;
      }, 3000,
      this.stopSearchSud$.subscribe(data => {
        if (data) {
          this.findEnemyFlag = true;
          this.stopSearchFlag = false;
          clearTimeout(findTimeout);
        }
      }));
  }

  public stopSearch() {
    this.stopSearchSud$.next(1);
    this.transitionCounterStop = false;
    this.transitionCounter = 34;
  }

  public getRandomEnemy(): void {
    this.heroService.getHeroEnemyById(this.getRandomId())
      .subscribe((data) => {
        this.enemyHero = [...this.enemyHero, data];
      });
  }

  public getRandomId(): string {
    return Math.floor(Math.random() * 731).toString();
  }

  public startBattle(): void {
    this.startBattleFlag = true;
    this.findEnemyIsFinishedFlag = false;
    setTimeout(() => {
      this.startBattleFlag = false;
      if ((this.getSumOfPowerStats(this.hero) -
        this.getSumOfPowerStats(this.enemyHero)) >= 0) {
        this.looseFlag = false;
        this.resultOfBattleText = 'YOU WIN';
        this.dataService.setResultOfBattle(this.hero, this.enemyHero, 'Win');
      } else {
        this.resultOfBattleText = 'YOU LOOSE';
        this.looseFlag = true;
        this.deleteLooseHeroFromLocalStorage();
        this.dataService.setResultOfBattle(this.hero, this.enemyHero, 'Loose');

      }
      interval(50).pipe(
        takeWhile((val) => val <= 7)
      ).subscribe((val) => {
        this.transitionCounter = this.transitionCounter + val;
      });
      this.enemyHero = [];
      this.findEnemyFlag = !this.looseFlag;
    }, 3000);
  }

  private getSumOfPowerStats(hero: any): number {
    const result =
      +hero[0].powerstats.intelligence
      +
      +hero[0].powerstats.strength
      +
      +hero[0].powerstats.speed
      +
      +hero[0].powerstats.durability
      +
      +hero[0].powerstats.power
      +
      +hero[0].powerstats.combat;
    return result;
  } //CHANGED TO PRIVATE 18.09 !!
  public navigateToUserProfile(): void {
    this.router.navigate(['/user-profile']);
  }

  private deleteLooseHeroFromLocalStorage() {
    const looseHero = JSON.parse(
      localStorage.getItem('session') || ''
    );
    const newHistoryArrayOfHeroes = {
      ...looseHero, history: looseHero.history.filter((el: any) => {
        return el.id !== this.hero[0].id;
      })
    };
    localStorage.setItem(
      'session', JSON.stringify(newHistoryArrayOfHeroes));
  }

  // private initPowerstatsControllersFromSubscribe(): void {
  //   this.heroService.intelligenceSub$.subscribe(data => this.intelligenceController = data);
  //   this.heroService.strengthSub$.subscribe(data => this.strengthController = data);
  //   this.heroService.speedSub$.subscribe(data => this.speedController = data);
  //   this.heroService.durabilitySub$.subscribe(data => this.durabilityController = data);
  //   this.heroService.powerSub$.subscribe(data => this.powerController = data);
  //   this.heroService.combatSub$.subscribe(data => this.combatController = data);
  // }

  private initPowerstatsControllersFromSubscribe(): void {
    this.strengthController = JSON.parse(localStorage.getItem('sessionBattleCard') || '').strengthUp;
    this.speedController = JSON.parse(localStorage.getItem('sessionBattleCard') || '').speedUp;
    this.durabilityController = JSON.parse(localStorage.getItem('sessionBattleCard') || '').durabilityUp;
    this.powerController = JSON.parse(localStorage.getItem('sessionBattleCard') || '').powerUp;
    this.combatController = JSON.parse(localStorage.getItem('sessionBattleCard') || '').combatUp;
  }


}
