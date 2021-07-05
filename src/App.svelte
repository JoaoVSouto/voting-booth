<script>
  import Result from './Result.svelte';

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
  <Result {votes} />
</main>

<style global lang="postcss">
  @tailwind base;
  @tailwind components;
  @tailwind utilities;
</style>
