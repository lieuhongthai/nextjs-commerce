import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { Projects } from './projects.model';
import { GetProjectRequestDTO } from './dto/get-project.dto';
import { UpdateProjectRequestDTO } from './dto/update-project.dto';
import { InjectModel } from '@nestjs/sequelize';
import { Order, WhereOptions } from 'sequelize';
import { Op } from 'sequelize';
import { ProjectsModel } from 'src/types/models/projects/type';
import { CreateProjectRequestDTO } from './dto/create-project.dto';

@Injectable()
export class ProjectsRepository {
  @InjectModel(Projects)
  private projectModel: typeof Projects;

  async findAll(dto: GetProjectRequestDTO): Promise<{ data: ProjectsModel[]; count: number }> {
    const { offset, limit, name, priorities } = dto;

    // * Prepare Filters
    const filters: WhereOptions<Projects> = {};

    if (name != null && name.trim() !== '') filters.name = { [Op.iLike]: `%${name}%` };
    if (priorities != null && priorities.length > 0) filters.priority = { [Op.in]: priorities };

    // * Prepare Order
    const order: Order = [['id', 'ASC']];

    // * Execute Query
    const result = await this.projectModel.findAndCountAll({
      where: filters as any,
      order: order,
      offset: offset,
      limit: limit,
    });

    return { data: result.rows.map((x) => x.dataValues), count: result.count };
  }

  async findOne(id: number): Promise<ProjectsModel> {
    const project = await this.projectModel.findOne({ where: { id: id } });
    if (project === null) throw new HttpException('Project not found', HttpStatus.NOT_FOUND);

    return project.dataValues;
  }

  async create(id: number, dto: CreateProjectRequestDTO): Promise<boolean> {
    // * Check Exist
    const project = await this.projectModel.findOne({ where: { code: dto.code } });
    if (project === null) throw new HttpException('Project with code existed', HttpStatus.CONFLICT);

    // * Execute Update
    try {
      await this.projectModel.create(dto);
      return true;
    } catch {
      return false;
    }
  }

  async update(id: number, dto: UpdateProjectRequestDTO): Promise<boolean> {
    // * Check Exist
    const project = await this.projectModel.findOne({ where: { id: id } });
    if (project === null) throw new HttpException('Project not found', HttpStatus.NOT_FOUND);

    // * Execute Update
    try {
      await project.update(dto);
      return true;
    } catch {
      return false;
    }
  }
}
