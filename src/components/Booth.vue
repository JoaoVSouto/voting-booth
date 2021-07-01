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
import { defineComponent, PropType } from 'vue';

export default defineComponent({
  name: 'Booth',
  props: {
    options: {
      type: Array as PropType<string[]>,
      required: true,
    },
  },
  emits: ['vote'],
});
</script>
