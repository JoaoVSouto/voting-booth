<template>
  <button
    v-for="(option, index) in options"
    :key="option"
    type="button"
    class="
      transition-all
      bg-gray-800
      hover:bg-gray-900
      text-gray-200
      rounded
      p-2
    "
    :class="index > 0 && 'ml-3'"
    @click="$emit('vote', option)"
  >
    {{ option }}
  </button>
</template>

<script lang="ts">
import { computed, defineComponent } from 'vue';

import useVoting from '../store/voting';

export default defineComponent({
  name: 'Booth',
  emits: ['vote'],
  setup() {
    const voting = useVoting();

    const options = computed(() => voting.votes.map(vote => vote.option));

    return {
      options,
    };
  },
});
</script>
