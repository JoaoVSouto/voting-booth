<script>
  import { onDestroy } from 'svelte';

  import { voting } from './store/voting';

  export let className = '';

  let votes;

  const unsubscribe = voting.subscribe(value => {
    votes = value.votes;
  });

  $: totalVotes = votes.reduce(
    (totalVotes, vote) => totalVotes + vote.count,
    0
  );

  $: parsedVotes = [...votes]
    .sort((a, b) => b.count - a.count)
    .map(vote => ({
      ...vote,
      rate: Math.round((vote.count * 100) / totalVotes),
    }));

  onDestroy(unsubscribe);
</script>

<ol class={`list-decimal text-gray-200 ${className}`}>
  {#each parsedVotes as vote}
    <li>
      {vote.option} - {vote.count} votos ({vote.rate}%)
    </li>
  {/each}
</ol>
