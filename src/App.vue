<template>
  <Form v-if="shouldFormAppear" />
  <VotingCard v-else />
</template>

<script lang="ts">
import { defineComponent, ref, watchEffect } from 'vue';

import useVoting from './store/voting';

import VotingCard from './components/VotingCard.vue';
import Form from './components/Form.vue';

export default defineComponent({
  name: 'App',
  components: {
    Form,
    VotingCard,
  },
  setup() {
    const voting = useVoting();

    const shouldFormAppear = ref(voting.isEditing);

    watchEffect(() => {
      shouldFormAppear.value = voting.isEditing;
    });

    return {
      shouldFormAppear,
    };
  },
});
</script>
