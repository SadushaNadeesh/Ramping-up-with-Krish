import { Component, OnInit } from '@angular/core';
import { BackEndService } from '../_services/back-end.service';

@Component({
  selector: 'app-largest-number',
  templateUrl: './largest-number.component.html',
  styleUrls: ['./largest-number.component.scss']
})
export class LargestNumberComponent implements OnInit {
  form: any = {
    text1: null,
    text2: null
  };
  received = false;
  output: any = '';

  constructor(private service: BackEndService) { }

  ngOnInit(): void {}
  
  checkLargestNumber(): void {

    const { text, element } = this.form;
    let array: number[] = text.split(",").map((number: any) => +number);
    console.log(array);
    this.service.checkLargestNumber(array, element)
      .subscribe(
        response => {
          console.log(response);
          this.received = true;
          this.output = response;
        },
        error => {
          console.log(error);
        });
  }

}
