import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PetRoutingModule } from './pet-routing.module';
import { CreatePetComponent } from './create-pet/create-pet.component';
import { EditPetComponent } from './edit-pet/edit-pet.component';
import { PetsComponent } from './pets/pets.component';


@NgModule({
  declarations: [
    CreatePetComponent,
    EditPetComponent,
    PetsComponent
  ],
  imports: [
    CommonModule,
    PetRoutingModule
  ]
})
export class PetModule { }
