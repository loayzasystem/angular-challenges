import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { randText } from '@ngneat/falso';
import { Typicode } from './core/models/Typicode';
import { TypitodoStore } from './core/store/typitodo.store';
import { LoadingComponent } from './shared/component/loading/loading.component';

@Component({
  imports: [CommonModule, LoadingComponent],
  selector: 'app-root',
  template: `
    <div *ngFor="let todo of todoStore.todos()">
      {{ todo.title }}
      <button (click)="update(todo)">Update</button>
      <button (click)="todoStore.delete(todo.id)">Borrar</button>
    </div>
    <app-loading />
  `,
  styles: [],
})
export class AppComponent {
  todoStore = inject(TypitodoStore);

  update(todo: Typicode) {
    const randTypecode: Typicode = {
      id: todo.id,
      title: randText(),
      body: todo.body,
      userId: todo.userId,
    };

    this.todoStore.update(randTypecode);
  }
}
