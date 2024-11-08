import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { __Name__Controller } from "./controllers/__name__.controller";
import { __Name__Entity } from "./entities/__name__.entity";
import { __Name__Service } from "./services/__name__.service";

@Module({
  imports: [TypeOrmModule.forFeature([__Name__Entity])],
  controllers: [__Name__Controller],
  providers: [__Name__Service],
  exports: [__Name__Service],
})
export class __Name__Module {}
