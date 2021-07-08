<script>
  export let options;
  export let onVote;
</script>

{#each options as option, index}
  <button
    type="button"
    class={`transition-all bg-gray-800 hover:bg-gray-900 text-gray-200 rounded p-2 ${
      index > 0 ? 'ml-3' : ''
    }`}
    on:click={onVote(option)}
  >
    {option}
  </button>
{/each}
