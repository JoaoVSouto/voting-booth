<script>
  import { voting, incrementCountOn } from './store/voting';

  import Booth from './Booth.svelte';
  import Result from './Result.svelte';

  export let state = 'open';

  function handleVote(option) {
    state = 'closed';
    incrementCountOn(option);
  }
</script>

<div class="bg-gray-600 max-w-max p-6 flex flex-col rounded">
  <h1 class="font-bold text-2xl mb-4 text-gray-100">{$voting.title}</h1>

  <div class="flex justify-center">
    {#if state === 'open'}
      <Booth onVote={handleVote} />
    {/if}

    {#if state === 'closed'}
      <Result />
    {/if}
  </div>
</div>
