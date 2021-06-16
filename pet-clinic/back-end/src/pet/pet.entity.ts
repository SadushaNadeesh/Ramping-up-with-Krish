import { BaseEntity, Column, Entity, JoinTable, ManyToMany, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity('pet')
export class Pet extends BaseEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column()
    type: string;

    @Column()
    breed: string;

    @Column()
    age: string;

    @Column()
    color: Date;

    @Column()
    sex: string;

    @Column()
    status: string;

}