<template>
  <div class="bg-gray-600 max-w-max p-6 flex flex-col rounded">
    <h1 class="font-bold text-2xl mb-4 text-gray-100">{{ title }}</h1>

    <div class="flex justify-center">
      <Booth
        v-if="votingState === 'open'"
        :options="options"
        @vote="handleVote"
      />
      <Result v-if="votingState === 'closed'" :votes="boothVotes" />
    </div>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, PropType, ref, watch } from 'vue';

import { Vote } from '@/types/Vote';

import Booth from './Booth.vue';
import Result from './Result.vue';

type VotingStates = 'open' | 'closed';

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
  setup(props) {
    const boothVotes = ref(props.votes);
    const options = computed(() => boothVotes.value.map(vote => vote.option));
    const votingState = ref<VotingStates>(props.state as VotingStates);

    const previousPropsState = ref(JSON.parse(JSON.stringify(props)));

    watch(props, (_, nextValue) => {
      if (previousPropsState.value.state !== nextValue.state) {
        votingState.value = props.state as VotingStates;
      }

      previousPropsState.value = JSON.parse(JSON.stringify(props));
    });

    function incrementCountOn(option: string) {
      const vote = boothVotes.value.find(vote => vote.option === option);

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
      votingState,
      options,
      handleVote,
      boothVotes,
    };
  },
});
</script>
