import { Component, OnInit } from '@angular/core';
import {HeroesService} from "../../../services/heroes.service";
import {ActivatedRoute} from "@angular/router";
import {switchMap} from "rxjs";
import {DataService} from "../../../services/data.service";

@Component({
  selector: 'app-hero-info-page',
  templateUrl: './hero-info-page.component.html',
  styleUrls: ['./hero-info-page.component.scss']
})
export class HeroInfoPageComponent implements OnInit {

  public heroInfo: [] = [];
  public nameOfHero: string = '';
  public aliases: string = '';
  public alignment: string = '';
  public alterEgo: string = '';
  public firstAppearance: string = '';
  public fullName: string = '';
  public placeOfBirth: string = '';
  public publisher: string = '';
  public imageOfHero: any = '';

  constructor(private heroService: HeroesService,
              private activatedRoute: ActivatedRoute,
              private dataService: DataService
              ) { }

  ngOnInit(): void {
    // this.dataService.testSubj.next(JSON.parse(localStorage.getItem('session') || '').username)
    this.activatedRoute.params
      .pipe(
      switchMap((data) => this.heroService.getHeroById(data['id']))
      ).subscribe((data) => {
        this.heroInfo = data;
        this.nameOfHero = data.name;
        this.fullName = data.biography["full-name"];
        this.aliases = data.biography.aliases;
        this.placeOfBirth = data.biography["place-of-birth"];
        this.firstAppearance = data.biography["first-appearance"];
        this.publisher = data.biography.publisher;
        this.alignment = data.biography.alignment;
        this.imageOfHero = data.image.url;
        this.alterEgo = data.biography['alter-egos'];
    });
  }

}
