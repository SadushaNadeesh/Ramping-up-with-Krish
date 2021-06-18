import { Body, Controller, Delete, Get, HttpStatus, Param, Patch, Post } from '@nestjs/common';
import { Pet } from './pet.entity';
import { PetService } from './pet.service';

@Controller('api')
export class PetController {
    constructor(private readonly petService: PetService) { }

    @Get('pets')
    async showAllPets() {

        return await this.petService.showAll();
        
        // const pets = await this.petService.showAll();
        // return {
        //     statusCode: HttpStatus.OK,
        //     message: 'pets fetched successfully',
        //     pets
        // };
    }

    @Post('pet')
    async createPet(@Body() data: Pet) {
        return await this.petService.create(data);
    }

    @Get('pet/:id')
    async readPet(@Param('id') id: number) {
        return await this.petService.read(id);
    }


    @Patch('pet/:id')
    async updatePet(@Param('id') id: number, @Body() data: Partial<Pet>) {
        return await this.petService.update(id, data);
    }

    @Delete('pet/:id')
    async deletePet(@Param('id') id: number) {
        return await this.petService.destroy(id);
    }
}
