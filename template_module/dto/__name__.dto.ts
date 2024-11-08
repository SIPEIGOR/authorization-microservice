import { IsOptional } from 'class-validator';
import { __Name__Entity } from '../entities/__name__.entity';

export class __Name__Dto implements Partial<__Name__Entity> {
  @IsOptional()
  id: string;

  @IsOptional()
  name: string;
}
