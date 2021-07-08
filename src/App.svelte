<script>
  import './main.css';

  import Booth from './Booth.svelte';

  let votes = [
    {
      option: 'Sim',
      count: 8,
    },
    {
      option: 'Não',
      count: 12,
    },
  ];

  $: options = votes.map(vote => vote.option);

  function handleVote(option) {
    console.log(option);
  }
</script>

<main>
  <Booth {options} onVote={handleVote} />
</main>
