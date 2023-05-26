import { Column, Entity, PrimaryGeneratedColumn, Timestamp } from "typeorm";

@Entity('cars')
export class Car {

    @PrimaryGeneratedColumn()
    id: number

    @Column()
    license_plate_number: string;

    @Column()
    brand: string

    @Column()
    model: string

    @Column()
    daily_cost: number;

    @Column()
    created_at: string;

    @Column()
    updated_at: string;




}
