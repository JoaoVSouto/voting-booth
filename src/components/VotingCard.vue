<template>
  <div class="bg-gray-600 max-w-max p-6 flex flex-col rounded">
    <h1 class="font-bold text-2xl mb-4 text-gray-100">{{ title }}</h1>

    <div class="flex justify-center">
      <Booth v-if="votingState === 'open'" @vote="handleVote" />
      <Result v-if="votingState === 'closed'" />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, watch } from 'vue';

import useVoting, { incrementCountOn } from '../store/voting';

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
    state: {
      type: String,
      default: 'open',
    },
  },
  setup(props) {
    const voting = useVoting();

    const votingState = ref<VotingStates>(props.state as VotingStates);

    const previousPropsState = ref(JSON.parse(JSON.stringify(props)));

    watch(props, (_, nextValue) => {
      if (previousPropsState.value.state !== nextValue.state) {
        votingState.value = props.state as VotingStates;
      }

      previousPropsState.value = JSON.parse(JSON.stringify(props));
    });

    function handleVote(option: string) {
      votingState.value = 'closed';
      incrementCountOn(option);
    }

    return {
      title: voting.title,
      votingState,
      handleVote,
    };
  },
});
</script>
