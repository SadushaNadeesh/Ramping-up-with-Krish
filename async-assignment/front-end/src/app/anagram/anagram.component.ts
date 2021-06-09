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

  constructor(private service: BackEndService) { }

  ngOnInit(): void {
    // this.checkAnagram("sam","mas");
  }
  checkAnagram(): void {

    const { text1, text2 } = this.form;

    this.service.checkAnagram(text1, text2)
      .subscribe(
        response => {
          console.log(response);
        },
        error => {
          console.log(error);
        });
  }

}
