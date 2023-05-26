import { Car } from "src/cars/entities/car.entity";
import { Column, Entity, JoinColumn, OneToOne, PrimaryGeneratedColumn } from "typeorm";


@Entity()
export class Rental {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    car_id: number;

    @Column()
    start_date: Date;

    @Column()
    end_date: Date;

    @OneToOne(() => Car)
    @JoinColumn()
    car: Car
}
