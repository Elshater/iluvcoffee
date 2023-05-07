import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CofeesController } from 'src/cofees/cofees.controller';
import { CofeesService } from 'src/cofees/cofees.service';
import { coffee } from 'src/cofees/entities/coffee.entity';

@Module({
  imports: [TypeOrmModule.forFeature([coffee])],
  controllers: [CofeesController],
  providers: [CofeesService],
})
export class CoffeesModule {}
