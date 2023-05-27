import { Body, Controller, Get, Post, Render, UnauthorizedException } from '@nestjs/common';
import { DataSource } from 'typeorm';
import { AppService } from './app.service';
import { faker } from '@faker-js/faker';
import { Rental } from './rentals/entities/rental.entity';
import { Car } from './cars/entities/car.entity';

@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService,
    private dataSource: DataSource,
  ) {}

  @Get()
  @Render('index')
  index() {
    return { message: 'Welcome to the homepage' };
  }

  @Post('seed')
  async generateTestData() {

    const cars = await this.dataSource.getRepository(Car).find();

    const rentals: Rental[] = [];
    for (let i = 0; i < 15; i++) {
      const rental = new Rental();
      rental.start_date = faker.date.recent(50);
      rental.end_date = faker.date.recent(10);
      rental.car = faker.helpers.arrayElement(cars);
      rentals.push(rental);
    }
    const rentalRepo = this.dataSource.getRepository(Rental);
    await rentalRepo.save(rentals);
  }

}
