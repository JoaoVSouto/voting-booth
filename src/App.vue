<template>
  <VotingCard
    :state="votingState"
    title="Segue o relator?"
    :votes="votes"
    @vote="handleVote"
  />
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
    const votingState = ref<'open' | 'closed'>('open');

    function incrementCountOn(option: string) {
      const vote = votes.value.find(vote => vote.option === option);

      if (!vote) {
        return;
      }

      vote.count += 1;
    }

    function handleVote(option: string) {
      votingState.value = 'closed';
      incrementCountOn(option);
    }

    return {
      votes,
      handleVote,
      votingState,
    };
  },
});
</script>
