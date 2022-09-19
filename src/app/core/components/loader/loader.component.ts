import { Component, OnInit } from '@angular/core';
import {interval} from "rxjs";

@Component({
  selector: 'app-loader',
  templateUrl: './loader.component.html',
  styleUrls: ['./loader.component.scss']
})
export class LoaderComponent implements OnInit {
 public rotation = 0;

  constructor() { }

  ngOnInit(): void {
    this.rotateSpinner()
  }

  private rotateSpinner(): void{
    setInterval(() => {
      this.rotation ++
      if (this.rotation === 181) {
        this.rotation = 0
      }
    },10)
  }

}
