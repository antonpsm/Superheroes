import {Injectable} from '@angular/core';
import {BehaviorSubject, Observable, of, Subject, timer} from "rxjs";
import {Router} from "@angular/router";
import {HeroInfo} from "../interfaces/hero-info";


@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private router: Router) {

  }

  public username: string = 'Userdd';
  // public userHistory: ;
  public userSelectedCards: any [] = [];
  public userSelectedCardsForBattle: any [] = [];
  public userResultsOfBattle: any [] = [];
  public num = 0;
  public userNameSub: Subject<any> = new Subject<any>();
  public userNameObs$: Observable<any> = this.userNameSub.asObservable();
  public userSessionSub = new Subject<any>();
  public userSessionObs$ = this.userSessionSub.asObservable();
  public testSubj = new BehaviorSubject<any>('');
  public testObs$ = this.testSubj.asObservable();


  public set setUserSession(user: any) {
    localStorage.setItem('session', JSON.stringify({...user, history: []}));
    localStorage.setItem('resultsOfBattles', JSON.stringify([]));
    // localStorage.setItem('sessionBattleCards', JSON.stringify({heroes: []}));
    localStorage.setItem('sessionPerks', JSON.stringify([5,5,5,5,5,5]));
    this.userNameSub.next(JSON.parse(localStorage.getItem('session') || '').username);
  }

  public setNewUser(user: string, userName: string) {
    localStorage.setItem(userName, user);
    localStorage.setItem('resultsOfBattles', JSON.stringify([]));

  }

  // НАСТРАИВАЮ НОВЫЕ ПАРАМЕТРЫ НИЖЕ. ПОСЛЕ НАСТРОЙКИ ВЕРНУТЬСЯ В ХЭДЭР ТС

  public logOutSaveUserDataInLocalStorage(data: string) {
    // const historyBattles = JSON.parse(localStorage.getItem('resultsOfBattles') || '');
    // const userData = JSON.parse(localStorage.getItem('session') || '');
    // const userPerks = JSON.parse(localStorage.getItem('sessionPerks') || 'empty profile');
    localStorage.removeItem('session');
    localStorage.removeItem('resultsOfBattles');
    localStorage.removeItem('sessionBattleCard');
    localStorage.removeItem('sessionPerks');
    this.userNameSub.next('');
    this.router.navigate(['/login']);
  }

  public selectAndAddHeroToSession(card: HeroInfo) {
    const currentSessionUser = JSON.parse(localStorage.getItem('session') || '');
    if (!currentSessionUser.history.some((el: HeroInfo) => el.id === card.id)) {
      this.userSelectedCards = [...this.userSelectedCards, card];
      localStorage.setItem('session', JSON.stringify({
        ...currentSessionUser, history: this.userSelectedCards
      }));
    }
  }

  // public setHeroForBattleInLocalStorage(card: HeroInfo) {    // РЕАЛАЗАЦИЯ С МАССИВОМ КАРТОЧЕК ПОД БОЙ
  //   const currentSessionUser = JSON.parse(localStorage.getItem('sessionBattleCards') || '');
  //   if (!currentSessionUser.heroes.some((el: HeroInfo) => el.id === card.id)) {
  //     this.userSelectedCardsForBattle = [...this.userSelectedCardsForBattle, card];
  //     localStorage.setItem('sessionBattleCards', JSON.stringify({
  //       ...currentSessionUser,
  //       heroes: this.userSelectedCardsForBattle
  //     }));
  //     console.log(localStorage.getItem('sessionBattleCards'), 'session-battle-cards');
  //   }
  // }

  public setHeroForBattleInLocalStorage(card: HeroInfo) {      // РЕАЛИЗАЦИЯ С ЗАТИРАНИЕМ КАРТОЧКИ (каждый раз новая картока)
      localStorage.setItem('sessionBattleCard', JSON.stringify(card));
      // console.log(localStorage.getItem('sessionBattleCard'), 'session-battle-cards');
  }


  // private randomStorageKey(): string {
  //   return `${Math.floor(Math.random() * 10000)}`;
  // }
  //
  // public setSelectedCardsToLocalStorage(): void {
  //   this.userSessionSub.next(JSON.parse(localStorage.getItem('session') || ''));
  //
  // }
  //
  // public getCurrentSessionFromLocalStorage(): Observable<any> {
  //   return this.userSessionObs$;
  // }


  public setResultOfBattle(
    hero: any[], enemyHero: any[], resultOgBattle: string
  ) {
    const objOfResultOfBattle = {
      hero: hero[0].name,
      heroId:hero[0].id,
      enemyHero: enemyHero[0].name,
      enemyHeroId: enemyHero[0].id,
      result: resultOgBattle
    };
    const previousBattlesFromLocalStorage = JSON.parse(
      localStorage.getItem('resultsOfBattles') || ''
    );
    // console.log(previousBattlesFromLocalStorage, "previousBattlesFromLocalStorage");
    localStorage.setItem('resultsOfBattles',JSON.stringify(
      [...previousBattlesFromLocalStorage, objOfResultOfBattle]
    ));
    // console.log(objOfResultOfBattle, 'objOfResultOfBattle');
  }
}
