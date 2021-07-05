<script>
  export let votes;

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
</script>

<ol>
  {#each parsedVotes as vote}
    <li>
      {vote.option} - {vote.count} votos ({vote.rate}%)
    </li>
  {/each}
</ol>
