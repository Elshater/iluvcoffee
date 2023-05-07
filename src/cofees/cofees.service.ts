import { HttpException, Injectable, NotFoundException } from '@nestjs/common';
import { coffee } from './entities/coffee.entity';

@Injectable()
export class CofeesService {
  private coffees: coffee[] = [
    {
      id: 1,
      name: 'Shipwrick Roast ',
      brand: 'buddy brew',
      flavors: ['chocolate', 'vinnella'],
    },
  ];
  findAll() {
    return this.coffees;
  }

  findone(id: string) {
    const coffee = this.coffees.find((item) => item.id === +id);
    if (!coffee) {
      throw new NotFoundException(`Coffees #${id} not found`);
    }
    return coffee;
  }
  create(createCoffeeDto: any) {
    this.coffees.push(createCoffeeDto);
    return createCoffeeDto;
  }

  update(id: string, updateCoffeeDto: any) {
    const existingCofee = this.findone(id);
    if (existingCofee) {
      //update existing
    }
  }
  remove(id: string) {
    const coffeeindex = this.coffees.findIndex((item) => item.id === +id);
    if (coffeeindex >= 0) {
      this.coffees.splice(coffeeindex, 1);
    }
  }
}
