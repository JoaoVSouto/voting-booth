import Result from '../components/Result.vue';

export default {
  title: 'Voting/Result',
  component: Result,
};

const Template = args => ({
  components: { Result },
  setup() {
    return { args };
  },
  template: '<Result v-bind="args" />',
});

export const FirstVote = Template.bind({});
FirstVote.storyName = 'Votação 1';
FirstVote.args = {
  votes: [
    {
      option: 'Sim',
      count: 8,
    },
    {
      option: 'Não',
      count: 12,
    },
  ],
};

export const SecondVote = Template.bind({});
SecondVote.storyName = 'Votação 2';
SecondVote.args = {
  votes: [
    {
      option: 'Sim',
      count: 8,
    },
    {
      option: 'Talvez',
      count: 6,
    },
    {
      option: 'Não',
      count: 3,
    },
  ],
};
