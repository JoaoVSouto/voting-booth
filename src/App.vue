<template>
  <Booth :options="options" @selected="handleOptionSelected" />
</template>

<script lang="ts">
import { computed, defineComponent, ref } from 'vue';

import Booth from './components/Booth.vue';

export default defineComponent({
  name: 'App',
  components: {
    Booth,
  },
  setup() {
    const votes = ref([
      {
        option: 'Sim',
        count: 8,
      },
      {
        option: 'Não',
        count: 12,
      },
    ]);
    const options = computed(() => votes.value.map(vote => vote.option));

    function handleOptionSelected(option: string) {
      console.log(option);
    }

    return {
      votes,
      options,
      handleOptionSelected,
    };
  },
});
</script>
