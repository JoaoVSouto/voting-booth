import { Component } from '@angular/core';

import { VotingService } from './voting.service';

@Component({
  selector: 'app-root',
  template: `
    <ng-template [ngIf]="votingService.isEditing" [ngIfElse]="votingCard">
      <booth-form></booth-form>
    </ng-template>
    <ng-template #votingCard>
      <voting-card></voting-card>
    </ng-template>
  `,
})
export class AppComponent {
  constructor(public votingService: VotingService) {}
}
