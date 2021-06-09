import { Component, OnInit } from '@angular/core';
import { BackEndService } from '../_services/back-end.service';

@Component({
  selector: 'app-repetition',
  templateUrl: './repetition.component.html',
  styleUrls: ['./repetition.component.scss']
})
export class RepetitionComponent implements OnInit {

  form: any = {
    text: null
  };

  constructor(private service: BackEndService) { }

  ngOnInit(): void {
    // let text = "these days i am studying";
    // this.checkRepetitions(text)
  }
  checkRepetitions(): void {

    const { text } = this.form;

    this.service.checkRepetitions(text)
      .subscribe(
        response => {
          console.log(response);
        },
        error => {
          console.log(error);
        });
  }

}
