<template>
  <div class="bg-gray-600 max-w-max p-6 flex flex-col rounded">
    <h1 class="font-bold text-2xl mb-4 text-gray-100">{{ title }}</h1>

    <div class="flex justify-center">
      <Booth
        v-if="state === 'open'"
        :options="options"
        @vote="$emit('vote', $event)"
      />
      <Result v-if="state === 'closed'" :votes="votes" />
    </div>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, PropType } from 'vue';

import { Vote } from '@/types/Vote';

import Booth from './Booth.vue';
import Result from './Result.vue';

export default defineComponent({
  name: 'VotingCard',
  components: {
    Booth,
    Result,
  },
  props: {
    votes: {
      type: Array as PropType<Vote[]>,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    state: {
      type: String,
      default: 'open',
    },
  },
  emits: ['vote'],
  setup(props) {
    const options = computed(() => props.votes.map(vote => vote.option));

    return {
      options,
    };
  },
});
</script>
