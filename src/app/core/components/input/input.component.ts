import {Component, Input, OnInit} from '@angular/core';
import {FormControl} from "@angular/forms";

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss']
})
export class InputComponent implements OnInit {

  @Input() placeHolder!: string;
  @Input() inputType: string = 'text';
  @Input() textControl: FormControl = new FormControl();

  constructor() {
  }

  ngOnInit(): void {
  }

  // public initializeFormControl(): void {
  //   this.textControl = new FormControl();
  // }

}
