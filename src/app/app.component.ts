import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template:
    '<voting-card title="Segue o relator?" [votes]="votes"></voting-card>',
})
export class AppComponent {
  votes = [
    {
      option: 'Sim',
      count: 8,
    },
    {
      option: 'Não',
      count: 12,
    },
  ];
}
