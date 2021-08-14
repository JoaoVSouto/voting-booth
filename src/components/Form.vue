<template>
  <form
    class="bg-gray-600 flex flex-col max-w-max rounded p-6"
    @submit.prevent="handleBoothConfiguration"
  >
    <h1 class="font-bold text-2xl mb-4 text-gray-100">
      Configuração da cabine de votação
    </h1>

    <label for="title" class="text-gray-100 mb-1">Título</label>
    <input
      id="title"
      type="text"
      class="rounded px-2 py-1"
      v-model.trim="title"
    />
    <span v-if="titleError" class="text-red-400">{{ titleError }}</span>

    <label class="text-gray-100 mt-3 mb-1">Opções</label>
    <input
      type="text"
      class="rounded px-2 py-1 flex-1"
      placeholder="Opção 1"
      v-model.trim="options[0]"
    />
    <span
      v-if="optionsErrors.some(option => option.index === 0)"
      class="text-red-400"
      >{{ optionsErrors.find(option => option.index === 0).error }}</span
    >
    <input
      type="text"
      class="rounded px-2 py-1 flex-1 mt-2"
      placeholder="Opção 2"
      v-model.trim="options[1]"
    />
    <span
      v-if="optionsErrors.some(option => option.index === 1)"
      class="text-red-400"
      >{{ optionsErrors.find(option => option.index === 1).error }}</span
    >
    <input
      v-for="(option, index) in dynamicOptions"
      :key="index"
      type="text"
      class="rounded px-2 py-1 flex-1 mt-2"
      :placeholder="`Opção ${index + 3}`"
      v-model.trim="options[index + 2]"
    />
    <div class="flex justify-end mt-2">
      <button
        type="button"
        class="
          transition-all
          bg-gray-800
          hover:bg-gray-900
          text-gray-200
          rounded
          py-1
          px-2
        "
        @click="handleAddNewOption"
      >
        Add+
      </button>
    </div>

    <hr class="mt-3" />

    <button
      type="submit"
      class="
        mt-3
        transition-all
        bg-green-600
        hover:bg-green-700
        text-white
        rounded
        py-1
        px-2
      "
    >
      Salvar
    </button>
  </form>
</template>

<script lang="ts">
import { computed, defineComponent, ref } from 'vue';

import { setVotingData } from '../store/voting';

type OptionError = {
  index: number;
  error: string;
};

export default defineComponent({
  name: 'Form',
  setup() {
    const title = ref('');
    const titleError = ref('');
    const options = ref<string[]>(['', '']);
    const optionsErrors = ref<OptionError[]>([]);

    const dynamicOptions = computed(() => options.value.slice(2));

    function validateFields() {
      let hasError = false;
      titleError.value = '';
      optionsErrors.value = [];

      if (!title.value.trim()) {
        hasError = true;
        titleError.value = 'Campo obrigatório';
      } else if (title.value.trim().length < 4) {
        hasError = true;
        titleError.value = 'É necessário ao menos 4 caracteres';
      }

      options.value.slice(0, 2).forEach((option, index) => {
        if (!option.trim()) {
          hasError = true;
          optionsErrors.value.push({
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
        title: title.value,
        votes: options.value.filter(Boolean).map(option => ({
          option,
          count: 0,
        })),
      });
    }

    function handleAddNewOption() {
      options.value.push('');
    }

    return {
      handleBoothConfiguration,
      handleAddNewOption,
      title,
      titleError,
      options,
      optionsErrors,
      dynamicOptions,
    };
  },
});
</script>
