import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

  @Input() intelligence!: any;
  @Input() strength: string = '';
  @Input() speed: string = '';
  @Input() durability: string = '';
  @Input() power: string = '';
  @Input() combat: string = '';
  @Input() src: any;
  @Input() selectMode!: boolean;
  @Input() battleMode!: boolean;
  @Input() selectIsActive!: boolean;
  @Input() selectForBattleE!: boolean;
  @Input() heroName: string = 'DOLBOYOB';
  @Output() infoButton: EventEmitter<void> = new EventEmitter<void>();
  @Output() selectButton: EventEmitter<void> = new EventEmitter<void>();
  @Output() battleButton: EventEmitter<void> = new EventEmitter<void>();
  @Output() arrowLeftButton: EventEmitter<void> = new EventEmitter<void>();
  @Output() arrowRightButton: EventEmitter<void> = new EventEmitter<void>();


  constructor() {
  }

  ngOnInit(): void {
  }

  public infoButtonClick(): void {
    this.infoButton.emit();
  }

  public selectButtonClick(): void {
    this.selectButton.emit();
  }

  public battleButtonClick(): void {
    this.battleButton.emit();
  }

  public arrowLeftButtonClick(): void {
    this.arrowLeftButton.emit();
  }

  public arrowRightButtonClick(): void {
    this.arrowRightButton.emit();
  }
}
