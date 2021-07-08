<script>
  import './main.css';

  import VotingCard from './VotingCard.svelte';

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
</script>

<main>
  <VotingCard title="Segue o relator?" {votes} />
</main>
