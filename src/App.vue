<template>
  <VotingCard title="Segue o relator?" :votes="votes" />
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';

import VotingCard from './components/VotingCard.vue';

export default defineComponent({
  name: 'App',
  components: {
    VotingCard,
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
