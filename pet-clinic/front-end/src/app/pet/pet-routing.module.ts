import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {CreatePetComponent} from './create-pet/create-pet.component';
import {EditPetComponent} from './edit-pet/edit-pet.component';
import {PetsComponent} from './pets/pets.component';

const routes: Routes = [
  {path : 'create-pet', component: CreatePetComponent},
  {path : 'pet/:id', component: EditPetComponent},
  {path : 'pets', component: PetsComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PetRoutingModule { }
