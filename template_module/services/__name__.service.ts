import { BadRequestException, Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { __Name__Dto } from "template_module/dto/__name__.dto";
import { __Name__Entity } from "template_module/entities/__name__.entity";
import { Repository } from "typeorm";
import { FilterBuilder, IFilterQuery } from "typeorm-dynamic-filters";

@Injectable()
export class __Name__Service {
  constructor(
    @InjectRepository(__Name__Entity)
    private readonly __name__Repository: Repository<__Name__Entity>
  ) {}

  async create(dto: __Name__Dto): Promise<__Name__Entity> {
    const entity = this.__name__Repository.create(dto);

    return this.__name__Repository.save(entity);
  }

  async update(id: string, dto: __Name__Dto): Promise<__Name__Entity> {
    const entity = await this.__name__Repository.findOne({ where: { id } });

    if (!entity) {
      throw new BadRequestException("__Name__ not found");
    }

    return this.__name__Repository.save({ ...entity, ...dto });
  }

  async delete(id: string): Promise<void> {
    const entity = await this.__name__Repository.findOne({ where: { id } });

    if (!entity) {
      throw new BadRequestException("__Name__ not found");
    }

    await this.__name__Repository.delete(id);
  }

  async findByFilter(filter: IFilterQuery): Promise<__Name__Entity[]> {
    const filterQueryBuilder = new FilterBuilder(
      this.__name__Repository,
      "alias"
    );
    const queryBuilder = filterQueryBuilder.build(filter);
    return queryBuilder.getMany();
  }

  async findOne(id: string): Promise<__Name__Entity> {
    const entity = await this.__name__Repository.findOne({ where: { id } });

    if (!entity) {
      throw new BadRequestException("__Name__ not found");
    }

    return entity;
  }
}
