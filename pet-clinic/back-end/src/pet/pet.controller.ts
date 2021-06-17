import { Body, Controller, Delete, Get, HttpStatus, Param, Patch, Post } from '@nestjs/common';
import { Pet } from './pet.entity';
import { PetService } from './pet.service';

@Controller('api')
export class PetController {
    constructor(private readonly petService: PetService) { }

    @Get('pets')
    async showAllPets() {

        const pet = await this.petService.showAll();
        return {
            statusCode: HttpStatus.OK,
            message: 'pets fetched successfully',
            pet
        };
    }

    @Post('pet')
    async createPet(@Body() data: Pet) {
        const pet = await this.petService.create(data);
        return {
            statusCode: HttpStatus.OK,
            message: 'pet created successfully',
            pet
        };
    }

    @Get('pet/:id')
    async readPet(@Param('id') id: number) {

        const pet = await this.petService.read(id);
        return {
            statusCode: HttpStatus.OK,
            message: 'pet fetched successfully',
            pet
        };
    }


    @Patch('pet/:id')
    async updatePet(@Param('id') id: number, @Body() data: Partial<Pet>) {
        const pet = await this.petService.update(id, data);
        return {
            statusCode: HttpStatus.OK,
            message: 'pet updated successfully',
            pet
        };
    }

    @Delete('pet/:id')
    async deletePet(@Param('id') id: number) {
        const pet = await this.petService.destroy(id);
        return {
            statusCode: HttpStatus.OK,
            message: 'pet deleted successfully',
            pet
        };
    }
}
