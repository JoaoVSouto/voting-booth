<template>
  <Result :votes="votes" />
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';

import Result from './components/Result.vue';

export default defineComponent({
  name: 'App',
  components: {
    Result,
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

    return {
      votes,
    };
  },
});
</script>
