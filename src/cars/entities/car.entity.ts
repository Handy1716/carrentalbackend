import { Rental } from "src/rentals/entities/rental.entity";
import { Column, CreateDateColumn, Entity, OneToMany, PrimaryGeneratedColumn, Timestamp, UpdateDateColumn } from "typeorm";

@Entity('cars')
export class Car {

    @PrimaryGeneratedColumn()
    id: number;

    @Column({
        type: "varchar",
        length: 20,
    })
    license_plate_number: string;

    @Column()
    brand: string;

    @Column()
    model: string;

    @Column()
    daily_cost: number;

    @CreateDateColumn()
    created_at: Date;

    @UpdateDateColumn()
    updated_at: Date;
    
    @OneToMany(() => Rental, (rental) => rental.car)
    rentals: Rental;

}
