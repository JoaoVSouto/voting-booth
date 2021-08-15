<script>
  import { setVotingData } from './store/voting';

  let title = '';
  let titleError = '';

  let options = ['', ''];
  let optionsErrors = [];

  $: dynamicOptions = options.slice(2);

  function validateFields() {
    let hasError = false;
    titleError = '';
    optionsErrors = [];

    if (!title.trim()) {
      hasError = true;
      titleError = 'Campo obrigatório';
    } else if (title.trim().length < 4) {
      hasError = true;
      titleError = 'É necessário ao menos 4 caracteres';
    }

    options.slice(0, 2).forEach((option, index) => {
      if (!option.trim()) {
        hasError = true;
        optionsErrors.push({
          index,
          error: 'Campo obrigatório',
        });
      }
    });

    return hasError;
  }

  function handleBoothConfiguration() {
    if (validateFields()) {
      return;
    }

    setVotingData({
      title,
      votes: options.filter(Boolean).map(option => ({
        option,
        count: 0,
      })),
    });
  }

  function handleAddNewOption() {
    options = [...options, ''];
  }
</script>

<form
  class="bg-gray-600 flex flex-col max-w-max rounded p-6"
  on:submit|preventDefault={handleBoothConfiguration}
>
  <h1 class="font-bold text-2xl mb-4 text-gray-100">
    Configuração da cabine de votação
  </h1>

  <label for="title" class="text-gray-100 mb-1">Título</label>
  <input id="title" type="text" class="rounded px-2 py-1" bind:value={title} />
  {#if titleError}
    <span class="text-red-400">{titleError}</span>
  {/if}

  <label for="option" class="text-gray-100 mt-3 mb-1">Opções</label>
  <input
    id="option"
    type="text"
    class="rounded px-2 py-1 flex-1"
    placeholder="Opção 1"
    bind:value={options[0]}
  />
  {#if optionsErrors.some(option => option.index === 0)}
    <span class="text-red-400"
      >{optionsErrors.find(option => option.index === 0).error}</span
    >
  {/if}
  <input
    type="text"
    class="rounded px-2 py-1 flex-1 mt-2"
    placeholder="Opção 2"
    bind:value={options[1]}
  />
  {#if optionsErrors.some(option => option.index === 1)}
    <span class="text-red-400"
      >{optionsErrors.find(option => option.index === 1).error}</span
    >
  {/if}

  {#each dynamicOptions as _, index}
    <input
      type="text"
      class="rounded px-2 py-1 flex-1 mt-2"
      placeholder={`Opção ${index + 3}`}
      bind:value={options[index + 2]}
    />
  {/each}

  <div class="flex justify-end mt-2">
    <button
      type="button"
      class="transition-all bg-gray-800 hover:bg-gray-900 text-gray-200 rounded py-1 px-2"
      on:click={handleAddNewOption}
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
