import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Pet } from 'src/app/model/pet';
import { PetService } from 'src/app/_services/pet.service';

@Component({
  selector: 'app-pets',
  templateUrl: './pets.component.html',
  styleUrls: ['./pets.component.scss']
})
export class PetsComponent implements OnInit {
  pets: any[] = [];

  constructor(private router: Router, private petService: PetService) { }

  ngOnInit(): void {
    this.loadAllPets();
  }

  loadAllPets(): void {
    this.petService.getAll()
      .subscribe(
        data => {
          this.pets = data;
          console.log(data);
        },
        error => {
          console.log(error);
        });
  }

  refreshList(): void {
    this.loadAllPets();
  }

  addNew() {
    this.router.navigateByUrl('/create-pet');
  }

  deletePet(id:any): void {
    this.petService.delete(id)
      .subscribe(
        response => {
          console.log(response);
          // this.router.navigate(['/pets']);
          this.loadAllPets();
        },
        error => {
          console.log(error);
        });
  }

}
