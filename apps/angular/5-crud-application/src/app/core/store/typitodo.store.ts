import { Injectable, signal } from '@angular/core';
import { Typicode } from './../models/Typicode';
import { TypicodeService } from './../services/Typicode.service';

@Injectable({
  providedIn: 'root',
})
export class TypitodoStore {
  public todos = signal<Typicode[]>([]);

  constructor(private todoService: TypicodeService) {
    this.getAll();
  }

  getAll(): void {
    this.todoService.getTypicodes().subscribe((todos: Typicode[]) => {
      this.todos.set(todos);
    });
  }

  update(todo: Typicode): void {
    this.todoService.updateTypicode(todo).subscribe(() => {
      this.todos.update((currentTodos) =>
        currentTodos.map((t) => (t.id === todo.id ? todo : t)),
      );
    });
  }

  delete(id: Typicode['id']): void {
    this.todoService.borrarTypicode(id).subscribe(() => {
      this.todos.update((currentTodos) =>
        currentTodos.filter((t) => t.id !== id),
      );
    });
  }
}
