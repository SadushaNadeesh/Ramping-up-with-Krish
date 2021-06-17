import { Component, OnInit } from '@angular/core';
import { PetService } from 'src/app/_services/pet.service';

@Component({
  selector: 'app-create-pet',
  templateUrl: './create-pet.component.html',
  styleUrls: ['./create-pet.component.scss']
})
export class CreatePetComponent implements OnInit {

  pet = {
    name: '',
    type: '',
    breed: '',
    age: '',
    color: '',
    gender: ''
  };
  submitted = false;
  status = 'AVAILABLE'
  cr_date: any = new Date();
  isLoggedIn = false;

  constructor(private petService: PetService) { }

  ngOnInit(): void {
  }

  addPet(): void {
    const data = {
      name: this.pet.name,
      type: this.pet.type,
      breed: this.pet.breed,
      age: this.pet.age,
      color: this.pet.color,
      gender: this.pet.gender,
      status: this.status

    };

    this.petService.create(data)
      .subscribe(
        response => {
          console.log(response);
          this.submitted = true;
        },
        error => {
          console.log(error);
        });
  }

  newPet(): void {
    this.submitted = false;
    this.pet = {
      name: '',
      type: '',
      breed: '',
      age: '',
      color: '',
      gender: ''
    };
  }

}
