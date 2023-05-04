import { Module } from '@nestjs/common';
import { CofeesController } from 'src/cofees/cofees.controller';
import { CofeesService } from 'src/cofees/cofees.service';

@Module({ controllers: [CofeesController], providers: [CofeesService] })
export class CoffeesModule {}
