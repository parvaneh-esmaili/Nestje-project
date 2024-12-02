import { Injectable } from '@nestjs/common';

export class Note {
  title: string;
  description?: string;
}

@Injectable()
export class NoteService {
  private notes: Note[] = [];

  create(title: string): Note {
    const note: Note = { title, description: '' };
    this.notes.push(note);
    return note;
  }
}
