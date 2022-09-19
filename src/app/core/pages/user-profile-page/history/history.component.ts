import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.scss']
})
export class HistoryComponent implements OnInit {
  public resultsOfBattles: any[] = [];
  @Input() heroName!: string;
  @Input() heroId!: string;
  @Input() result!: string;
  @Input() enemyName!: string;
  @Input() enemyId!: string;
  public numFlag = 1;

  constructor() { }

  ngOnInit(): void {
     this.resultsOfBattles = [...this.resultsOfBattles, ...this.initResultsOfBattles()];
  }

  private initResultsOfBattles(): any[] {
    return JSON.parse(localStorage.getItem('resultsOfBattles') || '');
  }

 public sortByResult(): void {
    this.resultsOfBattles = [...this.resultsOfBattles].sort(
      (a:any, b:any) => {
        if (this.numFlag === 1) {
          if (a.result > b.result){
            return 1
          } else return -1
        } else {
          if (a.result > b.result){
            return -1
          } else return 1
        }
    })
  }
}
