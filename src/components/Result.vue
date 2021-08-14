<template>
  <ol class="list-decimal text-gray-200">
    <li v-for="vote in parsedVotes" :key="vote.option">
      {{ vote.option }} - {{ vote.count }} votos ({{ vote.rate }}%)
    </li>
  </ol>
</template>

<script lang="ts">
import { computed, defineComponent } from 'vue';

import useVoting from '../store/voting';

export default defineComponent({
  name: 'Result',
  setup() {
    const voting = useVoting();

    const totalVotes = computed(() =>
      voting.votes.reduce((totalVotes, vote) => totalVotes + vote.count, 0)
    );

    const orderedVotes = computed(() =>
      [...voting.votes].sort((a, b) => b.count - a.count)
    );
    const parsedVotes = computed(() =>
      orderedVotes.value.map(vote => ({
        ...vote,
        rate: Math.round((vote.count * 100) / totalVotes.value),
      }))
    );

    return {
      parsedVotes,
    };
  },
});
</script>
