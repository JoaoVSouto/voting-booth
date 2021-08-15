import { Component } from '@angular/core';

import { VotingService } from './voting.service';

type OptionError = {
  index: number;
  error: string;
};

@Component({
  selector: 'booth-form',
  template: `
    <form
      class="bg-gray-600 flex flex-col max-w-max rounded p-6"
      (ngSubmit)="handleBoothConfiguration()"
    >
      <h1 class="font-bold text-2xl mb-4 text-gray-100">
        Configuração da cabine de votação
      </h1>

      <label for="title" class="text-gray-100 mb-1">Título</label>
      <input
        id="title"
        type="text"
        class="rounded px-2 py-1"
        name="title"
        [(ngModel)]="title"
      />
      <span *ngIf="titleError" class="text-red-400">{{ titleError }}</span>

      <label class="text-gray-100 mt-3 mb-1">Opções</label>
      <input
        type="text"
        class="rounded px-2 py-1 flex-1"
        placeholder="Opção 1"
        name="opcao_1"
        [(ngModel)]="options[0]"
      />
      <span *ngIf="firstOptionErrorInformation.hasError" class="text-red-400">{{
        firstOptionErrorInformation.message
      }}</span>
      <input
        type="text"
        class="rounded px-2 py-1 flex-1 mt-2"
        placeholder="Opção 2"
        name="opcao_2"
        [(ngModel)]="options[1]"
      />
      <span
        *ngIf="secondOptionErrorInformation.hasError"
        class="text-red-400"
        >{{ secondOptionErrorInformation.message }}</span
      >

      <input
        *ngFor="let option of dynamicOptions; index as i; trackBy: trackByFn"
        type="text"
        class="rounded px-2 py-1 flex-1 mt-2"
        [placeholder]="'Opção ' + (i + 3)"
        [name]="'opcao_' + (i + 3)"
        [(ngModel)]="options[i + 2]"
      />

      <div class="flex justify-end mt-2">
        <button
          type="button"
          class="transition-all bg-gray-800 hover:bg-gray-900 text-gray-200 rounded py-1 px-2"
          (click)="handleAddNewOption()"
        >
          Add+
        </button>
      </div>

      <hr class="mt-3" />

      <button
        type="submit"
        class="mt-3 transition-all bg-green-600 hover:bg-green-700 text-white rounded py-1 px-2"
      >
        Salvar
      </button>
    </form>
  `,
})
export class FormComponent {
  title = '';
  titleError = '';
  options = ['', ''];
  optionsErrors: OptionError[] = [];

  constructor(private votingService: VotingService) {}

  get dynamicOptions() {
    return this.options.slice(2);
  }

  get firstOptionErrorInformation() {
    const errorInformation = this.optionsErrors.find(
      (option) => option.index === 0
    );

    return {
      hasError: Boolean(errorInformation),
      message: errorInformation?.error,
    };
  }

  get secondOptionErrorInformation() {
    const errorInformation = this.optionsErrors.find(
      (option) => option.index === 1
    );

    return {
      hasError: Boolean(errorInformation),
      message: errorInformation?.error,
    };
  }

  private validateFields() {
    let hasError = false;
    this.titleError = '';
    this.optionsErrors = [];

    if (!this.title.trim()) {
      hasError = true;
      this.titleError = 'Campo obrigatório';
    } else if (this.title.trim().length < 4) {
      hasError = true;
      this.titleError = 'É necessário ao menos 4 caracteres';
    }

    this.options.slice(0, 2).forEach((option, index) => {
      if (!option.trim()) {
        hasError = true;
        this.optionsErrors.push({ index, error: 'Campo obrigatório' });
      }
    });

    return hasError;
  }

  handleBoothConfiguration() {
    if (this.validateFields()) {
      return;
    }

    this.votingService.setVotingData({
      title: this.title,
      votes: this.options.filter(Boolean).map((option) => ({
        option,
        count: 0,
      })),
    });
  }

  handleAddNewOption() {
    this.options.push('');
  }

  trackByFn(index: number) {
    return index;
  }
}
