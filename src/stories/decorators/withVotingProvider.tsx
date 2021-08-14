import { StoryFnReactReturnType } from '@storybook/react/dist/ts3.9/client/preview/types';

import { VotingProvider } from '../../contexts/VotingContext';

const center = (Story: () => StoryFnReactReturnType) => (
  <VotingProvider>
    <Story />
  </VotingProvider>
);

export { center as default };
