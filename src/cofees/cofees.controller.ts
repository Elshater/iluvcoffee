import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  HttpStatus,
  Param,
  Patch,
  Post,
  Query,
} from '@nestjs/common';
import { CofeesService } from './cofees.service';
import { CreateCoffeeDto } from 'src/coffees/dto/create-coffee.dto/create-coffee.dto';
import { UpdateCoffeeDto } from 'src/coffees/dto/update-coffee.dto/update-coffee.dto';

@Controller('cofees')
export class CofeesController {
  constructor(private readonly coffeeService: CofeesService) {}
  @Get()
  findAll(@Query() paginationQuery) {
    // const { limit, offset } = paginationQuery;
    return this.coffeeService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.coffeeService.findone(id);
  }

  @Post()
  @HttpCode(HttpStatus.GONE)
  create(@Body() createCofffeeDto: CreateCoffeeDto) {
    return this.coffeeService.create(createCofffeeDto);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateCoffeeDto:UpdateCoffeeDto) {
    return this.coffeeService.update(id, updateCoffeeDto);
  }
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.coffeeService.remove(id);
  }
}
