import { ComponentStory, ComponentMeta } from '@storybook/react';
import { ClientUiShared } from './client-ui-shared';

export default {
  component: ClientUiShared,
  title: 'ClientUiShared',
} as ComponentMeta<typeof ClientUiShared>;

const Template: ComponentStory<typeof ClientUiShared> = (args) => (
  <ClientUiShared {...args} />
);

export const Primary = Template.bind({});
Primary.args = {};
