import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ConviteService } from './convite.service';
import { CreateConviteDto } from './dto/create-convite.dto';
import { UpdateConviteDto } from './dto/update-convite.dto';
import { ApiOperation, ApiResponse, ApiTags, ApiCreatedResponse } from '@nestjs/swagger';
import { Convite } from './entities/convite.entity';

@ApiTags('convite')
@Controller('convite')
export class ConviteController {
  constructor(private readonly conviteService: ConviteService) {}

  @Post()
  @ApiOperation({ summary: 'Cria um novo convite' })
  @ApiCreatedResponse({ description: 'Convite criado com sucesso', type: Convite })
  async create(@Body() createConviteDto: CreateConviteDto): Promise<Convite> {
    return this.conviteService.create(createConviteDto);
  }

  @Get()
  @ApiOperation({ summary: 'Lista todos os convites' })
  @ApiResponse({ status: 200, description: 'Lista de convites retornada com sucesso', type: Convite, isArray: true })
  async findAll(): Promise<Convite[]> {
    return this.conviteService.findAll();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Busca um convite pelo ID' })
  @ApiResponse({ status: 200, description: 'Convite encontrado com sucesso', type: Convite })
  async findOne(@Param('id') id: string): Promise<Convite> {
    return this.conviteService.findOne(+id);
  }

  @Patch(':id')
  @ApiOperation({ summary: 'Atualiza um convite pelo ID' })
  @ApiResponse({ status: 200, description: 'Convite atualizado com sucesso', type: Convite })
  @Patch(':id')
  update(@Param('id') id: string, @Body() updateConviteDto: UpdateConviteDto){
    return this.conviteService.update(+id, updateConviteDto);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Exclui um convite pelo ID' })
  @ApiResponse({ status: 200, description: 'Convite excluído com sucesso' })
  async delete(@Param('id') id: string): Promise<void> {
    await this.conviteService.delete(+id);
  }
}
