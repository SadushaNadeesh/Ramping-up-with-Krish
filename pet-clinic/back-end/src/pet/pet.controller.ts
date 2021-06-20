import { Body, Controller, Delete, Get, HttpCode, HttpStatus, Param, Patch, Post } from '@nestjs/common';
import { Pet } from './pet.entity';
import { PetService } from './pet.service';

@Controller('api')
export class PetController {
    constructor(private readonly petService: PetService) { }

    @Get('pets')
    async showAllPets() {
        return await this.petService.showAll();
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
        const pets = await this.petService.destroy(id);

        return {
            statusCode: HttpStatus.NO_CONTENT,
            message: 'pets fetched successfully',
            pets
        };
    }
}
