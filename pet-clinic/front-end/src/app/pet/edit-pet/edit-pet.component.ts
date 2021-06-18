import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PetService } from 'src/app/_services/pet.service';

@Component({
  selector: 'app-edit-pet',
  templateUrl: './edit-pet.component.html',
  styleUrls: ['./edit-pet.component.scss']
})
export class EditPetComponent implements OnInit {
  currentPet: any;
  message = '';

  constructor(
    private petService: PetService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    this.message = '';
    this.getPet(this.route.snapshot.paramMap.get('id'));
  }

  getPet(id: any): void {
    this.petService.get(id)
      .subscribe(
        data => {
          this.currentPet = data;
          console.log(data);
        },
        error => {
          console.log(error);
        });
  }

  updatePet(): void {
    this.petService.update(this.currentPet.id, this.currentPet)
      .subscribe(
        response => {
          console.log(response);
          this.message = 'The pet was updated successfully!';
        },
        error => {
          console.log(error);
        });
  }

}
