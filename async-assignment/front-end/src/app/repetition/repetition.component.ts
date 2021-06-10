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
  received = false;
  output: any;

  constructor(private service: BackEndService) { }

  ngOnInit(): void {}
  
  checkRepetitions(): void {

    const { text } = this.form;

    this.service.checkRepetitions(text)
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
