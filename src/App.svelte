<script>
  import './main.css';

  import { voting } from './store/voting';

  import VotingCard from './VotingCard.svelte';
  import Form from './Form.svelte';
</script>

<main>
  {#if $voting.isEditing}
    <Form />
  {:else}
    <VotingCard />
  {/if}
</main>
