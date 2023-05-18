import { Story, Meta } from '@storybook/react';
import MonthSelector, { MonthSelectorProps } from '../components/Month_selector';
export default {
  title: 'MonthSelector',
  component: MonthSelector,
} as Meta;

const Template: Story<MonthSelectorProps> = (args) => <MonthSelector {...args} />;

export const Default = Template.bind({});
Default.args = {
  onSelect: (month: string) => {
    console.log(`Selected month: ${month}`);
  },
};
