import {Component, OnInit} from '@angular/core';
import {HeroesService} from "../../../../services/heroes.service";

@Component({
  selector: 'app-bonuses',
  templateUrl: './bonuses.component.html',
  styleUrls: ['./bonuses.component.scss']
})
export class BonusesComponent implements OnInit {

  public perksCounter: number[] = [];
  public heroOnBattlePage: any = {};
  public intelligenceController!: number;
  public strengthController = 0;
  public speedController = 0;
  public durabilityController = 0;
  public powerController = 0;
  public combatController = 0;
  private fakeJson: string = JSON.stringify('fake');


  constructor(private heroService: HeroesService) {
  }

  ngOnInit(): void {
    this.initHero();
    this.initPerks();
  }

  public intelligenceUp(): void {
    this.usePerkByIndexAndEditPowersOfHero(0);
  }

  public strengthUp(): void {
    this.usePerkByIndexAndEditPowersOfHero(1);
  }

  public speedUp(): void {
    this.usePerkByIndexAndEditPowersOfHero(2);
  }

  public durabilityUp(): void {
    this.usePerkByIndexAndEditPowersOfHero(3);
  }

  public powerUp(): void {
    this.usePerkByIndexAndEditPowersOfHero(4);
  }

  public combatUp(): void {
    this.usePerkByIndexAndEditPowersOfHero(5);
  }

  private initHero(): void {
    this.heroOnBattlePage = JSON.parse(
      localStorage.getItem('sessionBattleCard') || this.fakeJson
    );
  }

  private initPerks(): void {
    this.perksCounter = JSON.parse(
      localStorage.getItem('sessionPerks') || ''
    );
  }

  private usePerkByIndexAndEditPowersOfHero(idx: number): void {
    if (this.perksCounter[idx] > 0) {
      switch (idx) {
        case 0 :
          this.perksCounter[0]--;
          this.heroOnBattlePage.powerstats.intelligence =
            +this.heroOnBattlePage.powerstats.intelligence + 20;
          this.intelligenceController += 20
          break;
        case 1 :
          this.perksCounter[1]--;
          this.heroOnBattlePage.powerstats.strength =
            +this.heroOnBattlePage.powerstats.strength + 20;
          this.strengthController =
            this.strengthController + 20;
          break;
        case 2 :
          this.perksCounter[2]--;
          this.heroOnBattlePage.powerstats.speed =
            +this.heroOnBattlePage.powerstats.speed + 20;
          this.speedController =
            this.speedController + 20;
          break;
        case 3 :
          this.perksCounter[3]--;
          this.heroOnBattlePage.powerstats.durability =
            +this.heroOnBattlePage.powerstats.durability + 20;
          this.durabilityController =
            this.durabilityController + 20;
          break;
        case 4 :
          this.perksCounter[4]--;
          this.heroOnBattlePage.powerstats.power =
            +this.heroOnBattlePage.powerstats.power + 20;
          this.powerController =
            this.powerController + 20;
          break;
        case 5 :
          this.perksCounter[5]--;
          this.heroOnBattlePage.powerstats.combat =
            +this.heroOnBattlePage.powerstats.combat + 20;
          this.combatController =
            this.combatController + 20;
          break;
      }
    }

    // const hero = JSON.parse(localStorage.getItem('sessionBattleCard') || '');
    this.heroOnBattlePage = {
      ...this.heroOnBattlePage,
      intelligenceUp: 1,
      strengthUp: this.strengthController,
      speedUp: this.speedController,
      durabilityUp: this.durabilityController,
      powerUp: this.powerController,
      combatUp: this.combatController
    };
    localStorage.setItem('sessionBattleCard', JSON.stringify(this.heroOnBattlePage));
    localStorage.setItem('sessionPerks', JSON.stringify(this.perksCounter));
  }

}
