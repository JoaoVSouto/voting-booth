import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: '<result [votes]="votes"></result>',
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
