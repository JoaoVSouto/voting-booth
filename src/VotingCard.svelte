<script>
  import Booth from './Booth.svelte';
  import Result from './Result.svelte';

  export let title;
  export let votes;
  export let state = 'open';

  $: options = votes.map(vote => vote.option);

  function incrementCountOn(option) {
    votes = votes.map(vote => ({
      ...vote,
      count: vote.option === option ? vote.count + 1 : vote.count,
    }));
  }

  function handleVote(option) {
    state = 'closed';
    incrementCountOn(option);
  }
</script>

<div class="bg-gray-600 max-w-max p-6 flex flex-col rounded">
  <h1 class="font-bold text-2xl mb-4 text-gray-100">{title}</h1>

  <div class="flex justify-center">
    {#if state === 'open'}
      <Booth {options} onVote={handleVote} />
    {/if}

    {#if state === 'closed'}
      <Result {votes} />
    {/if}
  </div>
</div>
