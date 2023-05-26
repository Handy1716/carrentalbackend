import { Body, Controller, Get, Post, Render, UnauthorizedException } from '@nestjs/common';
import { DataSource } from 'typeorm';
import { AppService } from './app.service';
import { faker } from '@faker-js/faker';
import { Rental } from './rentals/entities/rental.entity';

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

  @Post()
  @Render('seed')
  async generateTestData() {
    if (!process.env.ALLOW_GENERATING_DATA) {
      throw new UnauthorizedException();
    }

    faker.setLocale('hu');

    const rentals: Rental[] = [];
    for (let i = 0; i < 10; i++) {
      const rental = new Rental();
      rental.start_date = faker.date.recent(50);
      rental.end_date = faker.date.recent(10);
      rentals.push(rental);
    }
    const rentalRepo = this.dataSource.getRepository(Rental);
    await rentalRepo.save(rentals);

    const veletlenRental = faker.helpers.arrayElement(rentals);

  }

}
