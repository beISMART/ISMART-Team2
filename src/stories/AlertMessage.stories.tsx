import React from 'react';

import { Story, Meta } from '@storybook/react';
import Alert, { AlertProps } from '../components/AlertMessage';
export default {title: 'AlertMessages',component: Alert,argTypes:
 {variant: {control: {type: 'select',options: ['success', 'failure', 'warning'],},},},} as Meta;const Template: Story<AlertProps> = (args) => <Alert {...args} />;
 export const Success = Template.bind({});Success.args = {variant: 'success',children: 'Success Alert',};export const Failure = Template.bind({});
 Failure.args = {variant: 'failure',children: 'Failure Alert',};export const Warning = Template.bind({});
 Warning.args = {variant: 'warning',children: 'Warning Alert',};
