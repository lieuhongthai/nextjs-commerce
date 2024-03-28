import { Body, Controller, Get, Inject, Param, Post, Put, Query } from '@nestjs/common';
import { GetProjectRequestDTO, GetProjectResponseDTO, GetProjectsResponseDTO } from './dto/get-project.dto';
import { ProjectsService } from './projects.service';
import { UpdateProjectRequestDTO } from './dto/update-project.dto';
import { ApiOkResponse } from '@nestjs/swagger';
import { CreateProjectRequestDTO } from './dto/create-project.dto';

@Controller('project')
// @Authorize(Roles.USER)
// @UseGuards(RolesGuard)
export class ProjectsController {
  @Inject(ProjectsService)
  private readonly projectsService: ProjectsService;

  @Get()
  @ApiOkResponse({ type: GetProjectsResponseDTO })
  async getAllProjects(@Query() dto: GetProjectRequestDTO): Promise<GetProjectsResponseDTO> {
    return await this.projectsService.findAll(dto);
  }

  @Get('/:id')
  async getProjectById(@Param('id') id: number): Promise<GetProjectResponseDTO> {
    return await this.projectsService.findById(id);
  }

  @Post('')
  async createProject(@Param('id') id: number, @Body() dto: CreateProjectRequestDTO): Promise<boolean> {
    return await this.projectsService.create(id, dto);
  }

  @Put('/:id')
  async updateProject(@Param('id') id: number, @Body() dto: UpdateProjectRequestDTO): Promise<boolean> {
    return await this.projectsService.update(id, dto);
  }
}
