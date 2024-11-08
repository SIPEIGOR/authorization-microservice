import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  Req,
} from "@nestjs/common";
import { Request } from "express";
import { __Name__Dto } from "template_module/dto/__name__.dto";
import { __Name__Entity } from "template_module/entities/__name__.entity";
import { __Name__Service } from "template_module/services/__name__.service";
import { parseQueryFilters } from "typeorm-dynamic-filters";

@Controller("__name__")
export class __Name__Controller {
  constructor(private readonly __name__Service: __Name__Service) {}

  @Get("all")
  async findWithFilter(@Req() req: Request): Promise<__Name__Entity[]> {
    const filter = parseQueryFilters(req.query);
    return await this.__name__Service.findByFilter(filter);
  }

  @Get("one/:id")
  async findOne(@Param("id") id: string): Promise<__Name__Entity> {
    return await this.__name__Service.findOne(id);
  }

  @Post("create")
  async create(@Req() req: Request): Promise<__Name__Entity> {
    return await this.__name__Service.create(req.body);
  }

  @Put("update/:id")
  async update(
    @Param("id") id: string,
    @Body() updateDto: __Name__Dto
  ): Promise<__Name__Entity> {
    return this.__name__Service.update(id, updateDto);
  }

  @Delete("delete/:id")
  async delete(@Param("id") id: string): Promise<void> {
    return this.__name__Service.delete(id);
  }
}
