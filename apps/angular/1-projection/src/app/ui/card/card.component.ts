import { NgTemplateOutlet } from '@angular/common';
import { Component, input, output, TemplateRef } from '@angular/core';

@Component({
  selector: 'app-card',
  template: `
    <div class="flex w-fit flex-col gap-3 rounded-md border-2 border-black p-4">
      <ng-content select=".card_image"></ng-content>
      <section>
        @for (item of list(); track item) {
          <ng-container
            *ngTemplateOutlet="
              template();
              context: { $implicit: item }
            "></ng-container>
        }
      </section>

      <button
        class="rounded-sm border border-blue-500 bg-blue-300 p-2"
        (click)="addNewItem()">
        Add
      </button>
    </div>
  `,
  imports: [NgTemplateOutlet],
})
export class CardComponent {
  readonly list = input<any[] | null>(null);
  readonly nameKey = input<string>('firstName');
  readonly template = input<TemplateRef<any> | null>(null);

  addNewItemEvent = output<void>();
  deleteEvent = output<number>();

  addNewItem() {
    this.addNewItemEvent.emit();
  }

  delete(id: number) {
    this.deleteEvent.emit(id);
  }
}
