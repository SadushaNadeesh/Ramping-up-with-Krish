import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Pet } from './pet.entity';

@Injectable()
export class PetService {
    constructor(@InjectRepository(Pet) private readonly petRepo: Repository<Pet>) { }

    async showAll() {
        return await this.petRepo.find();
    }

    async create(data: Pet) {
        const pet = this.petRepo.create(data);
        await this.petRepo.save(data);
        return pet;
    }

    async read(id: number) {
        return await this.petRepo.findOne({ where: { id: id } });
    }

    async update(id: number, data: Partial<Pet>) {
        await this.petRepo.update({ id }, data);
        return await this.petRepo.findOne({ id });
    }

    async destroy(id: number) {
        await this.petRepo.delete({ id });
        return { deleted: true };
    }
}
