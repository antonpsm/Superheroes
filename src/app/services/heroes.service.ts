import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable, Subject} from "rxjs";
import {PayloadAllHeroes} from "../interfaces/payload-all-heroes";

@Injectable({
  providedIn: 'root'
})

export class HeroesService {

public intelligenceSub$: Subject<any> = new Subject();
public strengthSub$: Subject<any> = new Subject();
public speedSub$: Subject<any> = new Subject();
public durabilitySub$: Subject<any> = new Subject();
public powerSub$: Subject<any> = new Subject();
public combatSub$: Subject<any> = new Subject();

  constructor(
    private httpClient: HttpClient
  ) {
  }


  public setHeroByName(name: string): Observable<PayloadAllHeroes> {
  return this.httpClient.get<PayloadAllHeroes>(`https://www.superheroapi.com/api.php/3275667589366615/search/${name}`);
  }

  public getHeroById(id: string): Observable<any> {
    return this.httpClient.get(`https://www.superheroapi.com/api.php/3275667589366615/${id}`)
  }
  public getHeroEnemyById(id: string): Observable<any> {
    return this.httpClient.get(`https://www.superheroapi.com/api.php/3275667589366615/${id}`)
  }




}
