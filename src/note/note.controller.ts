import { Controller,Get, Post, Body} from'@nestjs/common';
import { NoteService } from './note.service';

@Controller('notes')
export class NoteController {
  constructor(private readonly noteService: NoteService) {}
  @Get()
  getRoot() {
    return { message: 'API!' };
  }

  @Post()
  create(@Body('title') title: string) {
    return this.noteService.create(title);
  }
}