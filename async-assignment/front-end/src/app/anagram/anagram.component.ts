import { Component, OnInit } from '@angular/core';
import { BackEndService } from '../_services/back-end.service';

@Component({
  selector: 'app-anagram',
  templateUrl: './anagram.component.html',
  styleUrls: ['./anagram.component.scss']
})
export class AnagramComponent implements OnInit {
  form: any = {
    text1: null,
    text2: null
  };
  received = false;
  words:any = '';
  output:any = '';

  constructor(private service: BackEndService) { }

  ngOnInit(): void {}

  checkAnagram(): void {

    const { text1, text2 } = this.form;
    this.words = text1 +" and "+text2;

    this.service.checkAnagram(text1, text2)
      .subscribe(
        response => {
          console.log(response);
          this.received = true;
          this.output = response.result;
        },
        error => {
          console.log(error);
        });
  }

}
