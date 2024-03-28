import { Inject, Injectable } from '@nestjs/common';
import { ProjectsRepository } from './projects.repository';
import { GetProjectRequestDTO, GetProjectResponseDTO, GetProjectsResponseDTO } from './dto/get-project.dto';
import { UpdateProjectRequestDTO } from './dto/update-project.dto';
import { CreateProjectRequestDTO } from './dto/create-project.dto';

@Injectable()
export class ProjectsService {
  @Inject()
  private readonly projectRepo: ProjectsRepository;

  async findAll(dto: GetProjectRequestDTO): Promise<GetProjectsResponseDTO> {
    const projects = await this.projectRepo.findAll(dto);
    const projectsMapped = projects.data.map((x) => ({
      ...x,
      timeActual: 10,
      resourceHeld: 10,
    }));

    return { data: projectsMapped, count: projects.count };
  }

  async findById(id: number) {
    const project = await this.projectRepo.findOne(id);

    const projectMapped = {
      ...project,
      timeActual: 10,
      resourceHeld: 10,
    };
    return projectMapped;
  }

  async create(id: number, dto: CreateProjectRequestDTO) {
    return await this.projectRepo.create(id, dto);
  }

  async update(id: number, dto: UpdateProjectRequestDTO) {
    return await this.projectRepo.update(id, dto);
  }
}
