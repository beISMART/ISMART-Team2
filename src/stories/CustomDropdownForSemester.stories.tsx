import { action } from '@storybook/addon-actions'
import CustomDropdown from '../components/CustomDropdownForSemester'

export default {
  title: 'CustomDropdownForSemester',
  component: CustomDropdown,
}

const options = [
  { label: 'Option 1', value: 'option-1' },
  { label: 'Option 2', value: 'option-2' },
  { label: 'Option 3', value: 'option-3' },
  { label: 'Option 4', value: 'option-4' },
]

export const Default = () => <CustomDropdown options={options} onSelect={action('onSelect')} />
