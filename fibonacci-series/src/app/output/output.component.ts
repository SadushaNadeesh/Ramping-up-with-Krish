import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-output',
  templateUrl: './output.component.html',
  styleUrls: ['./output.component.scss']
})
export class OutputComponent implements OnInit {

  @Input() inputNUmber: number = 0;
  @Input() sumOfFibonacci: number = 0;
  @Input() element: number = 0;
  
  constructor() { }

  ngOnInit(): void {
  }
  
}