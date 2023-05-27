import { Car } from "src/cars/entities/car.entity";
import { Column, Entity, JoinColumn, ManyToOne, OneToOne, PrimaryGeneratedColumn } from "typeorm";


@Entity()
export class Rental {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    start_date: Date;

    @Column()
    end_date: Date;

    @ManyToOne(() => Car, (car) => car.rentals)
    car: Car;
}
