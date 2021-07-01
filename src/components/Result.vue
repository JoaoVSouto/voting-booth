<template>
  <ol class="list-decimal text-gray-200">
    <li v-for="vote in parsedVotes" :key="vote.option">
      {{ vote.option }} - {{ vote.count }} votos ({{ vote.rate }}%)
    </li>
  </ol>
</template>

<script lang="ts">
import { computed, defineComponent, PropType, ref } from 'vue';

import { Vote } from '@/types/Vote';

export default defineComponent({
  name: 'Result',
  props: {
    votes: {
      type: Array as PropType<Vote[]>,
      required: true,
    },
  },
  setup(props) {
    const votes = ref(props.votes);
    const totalVotes = computed(() =>
      votes.value.reduce((totalVotes, vote) => totalVotes + vote.count, 0)
    );

    const orderedVotes = computed(() =>
      [...votes.value].sort((a, b) => b.count - a.count)
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
